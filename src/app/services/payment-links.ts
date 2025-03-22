import axios from 'axios';
import { api } from './auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface PaymentLink {
  id: number;
  title: string;
  description: string;
  amount: number;
  status: 'ACTIVE' | 'INACTIVE';
  expiresAt: string;
  url: string;
  createdAt: string;
  paymentMethods: ('PIX' | 'BOLETO' | 'CREDIT_CARD')[];
}

export interface CreatePaymentLinkData {
  title: string;
  description: string;
  amount: number;
  expiresAt: string;
  paymentMethods: ('PIX' | 'BOLETO' | 'CREDIT_CARD')[];
}

class PaymentLinksService {
  private static instance: PaymentLinksService;

  private constructor() {}

  public static getInstance(): PaymentLinksService {
    if (!PaymentLinksService.instance) {
      PaymentLinksService.instance = new PaymentLinksService();
    }
    return PaymentLinksService.instance;
  }

  public async getPaymentLinks(params: {
    skip?: number;
    take?: number;
    search?: string;
  }): Promise<{ links: PaymentLink[]; total: number }> {
    try {
      const response = await api.get('/payment-links', { params });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getPaymentLinkById(id: number): Promise<PaymentLink> {
    try {
      const response = await api.get(`/payment-links/${id}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async createPaymentLink(data: CreatePaymentLinkData): Promise<PaymentLink> {
    try {
      const response = await api.post('/payment-links', data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async updatePaymentLink(id: number, data: Partial<PaymentLink>): Promise<PaymentLink> {
    try {
      const response = await api.put(`/payment-links/${id}`, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async deletePaymentLink(id: number): Promise<void> {
    try {
      await api.delete(`/payment-links/${id}`);
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

export default PaymentLinksService.getInstance(); 