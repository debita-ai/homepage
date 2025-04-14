import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))

    const body = await request.json()
    
    // Validate required fields
    if (!body.cliente || !body.valor || !body.tipo || !body.dataVencimento) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Generate a mock response
    const newBilling = {
      id: Math.floor(Math.random() * 1000) + 1, // Generate a random ID
      ...body,
      status: "Pendente",
      dataPagamento: null,
      numeroParcela: body.numeroParcela || 1,
      totalParcelas: body.totalParcelas || 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // In a real application, you would save this to a database
    console.log('New billing created:', newBilling)

    return NextResponse.json(newBilling, { status: 201 })
  } catch (error) {
    console.error('Error creating billing:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 