import { NextResponse } from 'next/server';
import { GoogleAuth } from 'google-auth-library';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'document', 'phone', 'sellerType'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { message: `Campo ${field} é obrigatório` },
          { status: 400 }
        );
      }
    }

    // Geração do ID Token (IAM)
    const apiAudience = process.env.INTERNAL_API_AUDIENCE || 'https://api.debita.ai';
    const auth = new GoogleAuth();
    const client = await auth.getIdTokenClient(apiAudience);
    const headers = await client.getRequestHeaders();
    const idToken = headers.get('Authorization'); // Vai retornar: Bearer <ID_TOKEN>

    if (!idToken) {
      return NextResponse.json(
        { message: 'Erro ao obter token de autenticação' },
        { status: 500 }
      );
    }

    // Geração do token interno (JWT)
    const internalJwt = jwt.sign(
      {
        sub: body.email,
        email: body.email,
        type: 'signup',
      },
      process.env.INTERNAL_JWT_SECRET!,
      {
        expiresIn: '15m',
        issuer: 'bff.debita.ai',
      }
    );

    // Make request to actual API
    const response = await fetch(apiAudience + '/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': idToken, // Esse é o ID token IAM
        'X-Internal-Token': `Bearer ${internalJwt}`, // Esse é o token que VOCÊ valida na API
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || 'Erro ao criar conta' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
