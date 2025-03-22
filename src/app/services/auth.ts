import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface User {
  id: number;
  email: string;
  name: string;
  type: 'BUYER' | 'SELLER';
  phone?: string;
  status: 'ACTIVE' | 'INACTIVE';
}

export interface LoginResponse {
  access_token: string;
  user: {
    id: number;
    email: string;
    name: string;
    type: 'BUYER' | 'SELLER';
  };
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  type: 'BUYER' | 'SELLER';
}

// Create axios instance with default config
export const api = axios.create({
  baseURL: API_URL,
});

class AuthService {
  private static instance: AuthService;

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async login(data: any): Promise<any> {
    return Promise.resolve({
      access_token: 'mock-token',
      user: {
        id: 1,
        email: 'demo@debita.ai',
        name: 'Usuário Demo',
        type: 'SELLER'
      }
    });
  }

  public async register(data: any): Promise<any> {
    return Promise.resolve({
      access_token: 'mock-token',
      user: {
        id: 1,
        email: data.email,
        name: data.name,
        type: data.type
      }
    });
  }

  public async getUserProfile(): Promise<User> {
    return Promise.resolve({
      id: 1,
      email: 'demo@debita.ai',
      name: 'Usuário Demo',
      type: 'SELLER',
      status: 'ACTIVE'
    });
  }

  public logout(): void {
    window.location.href = '/login';
  }

  public getToken(): string | null {
    return 'mock-token';
  }

  public setToken(token: string): void {
    // Do nothing
  }

  public getUser(): any {
    return {
      id: 1,
      email: 'demo@debita.ai',
      name: 'Usuário Demo',
      type: 'SELLER'
    };
  }

  public isAuthenticated(): boolean {
    return true;
  }
}

export default AuthService.getInstance(); 