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

// Add request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

class AuthService {
  private static instance: AuthService;
  private token: string | null = null;

  private constructor() {
    // Try to get token from localStorage on initialization
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('token');
    }
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async login(data: LoginData): Promise<LoginResponse> {
    try {
      const response = await api.post('/auth/login', data);
      const { access_token, user } = response.data;
      
      // Store token and user data
      this.setToken(access_token);
      localStorage.setItem('user', JSON.stringify(user));
      
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async register(data: {
    email: string;
    password: string;
    name: string;
    type: 'BUYER' | 'SELLER';
  }): Promise<LoginResponse> {
    try {
      const response = await api.post('/auth/register', data);
      const { access_token, user } = response.data;
      
      // Store token and user data
      this.setToken(access_token);
      localStorage.setItem('user', JSON.stringify(user));
      
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getUserProfile(): Promise<User> {
    try {
      const response = await api.get<User>('/users/profile');
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public logout(): void {
    this.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }

  public getToken(): string | null {
    return this.token;
  }

  public setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  public getUser(): any | null {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : null;
    }
    return null;
  }

  public isAuthenticated(): boolean {
    return !!this.token;
  }

  private handleError(error: any): Error {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || 'An error occurred';
      return new Error(message);
    }
    return error;
  }
}

export default AuthService.getInstance(); 