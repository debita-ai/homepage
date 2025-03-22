import axios from 'axios';
import { api } from './auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: 'ACTIVE' | 'INACTIVE';
  createdAt: string;
  type: 'BUYER';
}

export interface CreateClientData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

class ClientsService {
  private static instance: ClientsService;

  private constructor() {}

  public static getInstance(): ClientsService {
    if (!ClientsService.instance) {
      ClientsService.instance = new ClientsService();
    }
    return ClientsService.instance;
  }

  public async getClients(params: {
    skip?: number;
    take?: number;
    search?: string;
  }): Promise<{ clients: Client[]; total: number }> {
    try {
      const response = await api.get('/buyers', { params });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getClientById(id: number): Promise<Client> {
    try {
      const response = await api.get(`/buyers/${id}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async createClient(data: CreateClientData): Promise<Client> {
    try {
      const response = await api.post('/buyers', data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async updateClient(id: number, data: Partial<Client>): Promise<Client> {
    try {
      const response = await api.put(`/buyers/${id}`, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async deleteClient(id: number): Promise<void> {
    try {
      await api.delete(`/buyers/${id}`);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): Error {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || 'An error occurred';
      return new Error(message);
    }
    return error;
  }
}

export default ClientsService.getInstance(); 