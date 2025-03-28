import axios from 'axios';
import authService from './auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface ChargesSummary {
  expected: number;
  issued: number;
  received: number;
}

export interface CustomersSummary {
  onTime: number;
  delinquent: number;
  newThisMonth: number;
}

export interface RevenueSummary {
  expected: number;
  confirmed: number;
  received: number;
}

export interface RevenueChartData {
  month: string;
  expected: number;
  confirmed: number;
  received: number;
}

export interface LatestCharge {
  id: number;
  invoiceNumber: string;
  type: string;
  status: string;
  totalAmount: number;
  createdAt: string;
  buyer: {
    name: string;
    email: string;
  };
}

class StatisticsService {
  private static instance: StatisticsService;

  private constructor() {}

  public static getInstance(): StatisticsService {
    if (!StatisticsService.instance) {
      StatisticsService.instance = new StatisticsService();
    }
    return StatisticsService.instance;
  }

  private getAuthHeaders() {
    return {
      Authorization: `Bearer ${authService.getToken()}`,
    };
  }

  public async getChargesSummary(): Promise<ChargesSummary> {
    try {
      const response = await axios.get(`${API_URL}/dashboard-analytics/charges`, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getCustomersSummary(): Promise<CustomersSummary> {
    try {
      const response = await axios.get(`${API_URL}/dashboard-analytics/customers`, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getRevenueSummary(): Promise<RevenueSummary> {
    try {
      const response = await axios.get(`${API_URL}/dashboard-analytics/revenue`, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getRevenueChartData(): Promise<RevenueChartData[]> {
    try {
      const response = await axios.get(`${API_URL}/dashboard-analytics/revenue/chart`, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getLatestCharges(): Promise<LatestCharge[]> {
    try {
      const response = await axios.get(`${API_URL}/dashboard-analytics/latest-charges`, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getChargesByStatus(period: 'day' | 'week' | 'month' | 'year'): Promise<{
    labels: string[];
    data: {
      status: string;
      values: number[];
    }[];
  }> {
    try {
      const response = await axios.get(`${API_URL}/dashboard-analytics/charges-by-status`, {
        headers: this.getAuthHeaders(),
        params: { period },
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getRevenueByPaymentMethod(period: 'day' | 'week' | 'month' | 'year'): Promise<{
    labels: string[];
    data: {
      method: string;
      values: number[];
    }[];
  }> {
    try {
      const response = await axios.get(`${API_URL}/dashboard-analytics/revenue-by-payment-method`, {
        headers: this.getAuthHeaders(),
        params: { period },
      });
      return response.data;
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

export default StatisticsService.getInstance(); 