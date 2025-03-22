import axios from 'axios';
import authService from './auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface DashboardSummary {
  totalOrders: number;
  pendingOrders: number;
  completedOrders: number;
  canceledOrders: number;
  totalAmount: number;
}

export interface Transaction {
  id: number;
  amount: number;
  status: string;
  createdAt: string;
}

export interface DashboardData {
  summary: DashboardSummary;
  recentTransactions: Transaction[];
}

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

class DashboardService {
  private static instance: DashboardService;

  private constructor() {}

  public static getInstance(): DashboardService {
    if (!DashboardService.instance) {
      DashboardService.instance = new DashboardService();
    }
    return DashboardService.instance;
  }

  private getAuthHeaders() {
    return {
      Authorization: `Bearer ${authService.getToken()}`,
    };
  }

  public async getDashboardData(): Promise<DashboardData> {
    try {
      const response = await axios.get<DashboardData>(`${API_URL}/dashboard`, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getChargesSummary(): Promise<ChargesSummary> {
    try {
      const response = await axios.get<ChargesSummary>(`${API_URL}/dashboard-analytics/charges`, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getCustomersSummary(): Promise<CustomersSummary> {
    try {
      const response = await axios.get<CustomersSummary>(`${API_URL}/dashboard-analytics/customers`, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getRevenueSummary(): Promise<RevenueSummary> {
    try {
      const response = await axios.get<RevenueSummary>(`${API_URL}/dashboard-analytics/revenue`, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getRevenueChartData(): Promise<RevenueChartData[]> {
    try {
      const response = await axios.get<RevenueChartData[]>(`${API_URL}/dashboard-analytics/revenue/chart`, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getLatestCharges(): Promise<LatestCharge[]> {
    try {
      const response = await axios.get<LatestCharge[]>(`${API_URL}/dashboard-analytics/latest-charges`, {
        headers: this.getAuthHeaders(),
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

export default DashboardService.getInstance(); 