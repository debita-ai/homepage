import axios from 'axios';
import authService from './auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface PixCharge {
  id: number;
  amount: number;
  description: string;
  status: 'PENDING' | 'PAID' | 'EXPIRED' | 'CANCELLED';
  expiresAt: string;
  createdAt: string;
  paidAt?: string;
  qrCode: {
    image: string;
    text: string;
  };
  buyer: {
    name: string;
    email: string;
  };
}

export interface CreatePixChargeData {
  amount: number;
  description: string;
  expiresAt: string;
  buyerId?: number;
}

class PixService {
  private static instance: PixService;

  private constructor() {}

  public static getInstance(): PixService {
    if (!PixService.instance) {
      PixService.instance = new PixService();
    }
    return PixService.instance;
  }

  private getAuthHeaders() {
    return {
      Authorization: `Bearer ${authService.getToken()}`,
    };
  }

  public async getPixCharges(params: {
    skip?: number;
    take?: number;
    status?: string;
    search?: string;
  }): Promise<{ charges: PixCharge[]; total: number }> {
    try {
      const response = await axios.get(`${API_URL}/pix/charges`, {
        headers: this.getAuthHeaders(),
        params,
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getPixChargeById(id: number): Promise<PixCharge> {
    try {
      const response = await axios.get(`${API_URL}/pix/charges/${id}`, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async createPixCharge(data: CreatePixChargeData): Promise<PixCharge> {
    try {
      const response = await axios.post(`${API_URL}/pix/charges`, data, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async cancelPixCharge(id: number): Promise<void> {
    try {
      await axios.post(`${API_URL}/pix/charges/${id}/cancel`, null, {
        headers: this.getAuthHeaders(),
      });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getPixChargeQRCode(id: number): Promise<{ image: string; text: string }> {
    try {
      const response = await axios.get(`${API_URL}/pix/charges/${id}/qrcode`, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getPixWebhookUrl(): Promise<string> {
    try {
      const response = await axios.get(`${API_URL}/pix/webhook-url`, {
        headers: this.getAuthHeaders(),
      });
      return response.data.url;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async updatePixWebhookUrl(url: string): Promise<void> {
    try {
      await axios.put(`${API_URL}/pix/webhook-url`, { url }, {
        headers: this.getAuthHeaders(),
      });
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

export default PixService.getInstance(); 