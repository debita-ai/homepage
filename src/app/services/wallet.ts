import axios from 'axios';
import authService from './auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface BankAccount {
  id: number;
  bankName: string;
  accountType: 'CHECKING' | 'SAVINGS';
  accountNumber: string;
  accountDigit: string;
  branchNumber: string;
  branchDigit: string;
  status: 'ACTIVE' | 'INACTIVE';
  isDefault: boolean;
}

export interface Transaction {
  id: number;
  type: 'CREDIT' | 'DEBIT';
  amount: number;
  description: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  createdAt: string;
}

export interface CreateBankAccountData {
  bankName: string;
  accountType: 'CHECKING' | 'SAVINGS';
  accountNumber: string;
  accountDigit: string;
  branchNumber: string;
  branchDigit: string;
}

class WalletService {
  private static instance: WalletService;

  private constructor() {}

  public static getInstance(): WalletService {
    if (!WalletService.instance) {
      WalletService.instance = new WalletService();
    }
    return WalletService.instance;
  }

  private getAuthHeaders() {
    return {
      Authorization: `Bearer ${authService.getToken()}`,
    };
  }

  public async getBalance(): Promise<number> {
    try {
      const response = await axios.get(`${API_URL}/wallet/balance`, {
        headers: this.getAuthHeaders(),
      });
      return response.data.balance;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getTransactions(params: {
    skip?: number;
    take?: number;
    type?: 'CREDIT' | 'DEBIT';
  }): Promise<{ transactions: Transaction[]; total: number }> {
    try {
      const response = await axios.get(`${API_URL}/wallet/transactions`, {
        headers: this.getAuthHeaders(),
        params,
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getBankAccounts(): Promise<BankAccount[]> {
    try {
      const response = await axios.get(`${API_URL}/wallet/bank-accounts`, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async addBankAccount(data: CreateBankAccountData): Promise<BankAccount> {
    try {
      const response = await axios.post(`${API_URL}/wallet/bank-accounts`, data, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async updateBankAccount(id: number, data: Partial<BankAccount>): Promise<BankAccount> {
    try {
      const response = await axios.put(`${API_URL}/wallet/bank-accounts/${id}`, data, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async deleteBankAccount(id: number): Promise<void> {
    try {
      await axios.delete(`${API_URL}/wallet/bank-accounts/${id}`, {
        headers: this.getAuthHeaders(),
      });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async requestWithdrawal(data: {
    amount: number;
    bankAccountId: number;
  }): Promise<void> {
    try {
      await axios.post(`${API_URL}/wallet/withdraw`, data, {
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

export default WalletService.getInstance(); 