import axios from 'axios';
import authService from './auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface UserSettings {
  id: number;
  userId: number;
  notificationsEnabled: boolean;
  emailNotificationsEnabled: boolean;
  language: string;
  timezone: string;
  currency: string;
  theme: 'light' | 'dark' | 'system';
  pixSettings: {
    autoGenerateQRCode: boolean;
    defaultExpirationHours: number;
  };
  chargeSettings: {
    defaultDueDays: number;
    defaultPaymentMethods: ('PIX' | 'BOLETO' | 'CREDIT_CARD')[];
    automaticReminders: boolean;
  };
}

export interface UpdateSettingsData {
  notificationsEnabled?: boolean;
  emailNotificationsEnabled?: boolean;
  language?: string;
  timezone?: string;
  currency?: string;
  theme?: 'light' | 'dark' | 'system';
  pixSettings?: {
    autoGenerateQRCode?: boolean;
    defaultExpirationHours?: number;
  };
  chargeSettings?: {
    defaultDueDays?: number;
    defaultPaymentMethods?: ('PIX' | 'BOLETO' | 'CREDIT_CARD')[];
    automaticReminders?: boolean;
  };
}

class SettingsService {
  private static instance: SettingsService;

  private constructor() {}

  public static getInstance(): SettingsService {
    if (!SettingsService.instance) {
      SettingsService.instance = new SettingsService();
    }
    return SettingsService.instance;
  }

  private getAuthHeaders() {
    return {
      Authorization: `Bearer ${authService.getToken()}`,
    };
  }

  public async getSettings(): Promise<UserSettings> {
    try {
      const response = await axios.get(`${API_URL}/settings`, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async updateSettings(data: UpdateSettingsData): Promise<UserSettings> {
    try {
      const response = await axios.put(`${API_URL}/settings`, data, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getAvailableLanguages(): Promise<{ code: string; name: string }[]> {
    try {
      const response = await axios.get(`${API_URL}/settings/languages`, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getAvailableTimezones(): Promise<{ code: string; name: string }[]> {
    try {
      const response = await axios.get(`${API_URL}/settings/timezones`, {
        headers: this.getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getAvailableCurrencies(): Promise<{ code: string; name: string; symbol: string }[]> {
    try {
      const response = await axios.get(`${API_URL}/settings/currencies`, {
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

export default SettingsService.getInstance(); 