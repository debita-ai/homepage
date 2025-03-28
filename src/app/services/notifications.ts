import axios from 'axios';
import authService from './auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface Notification {
  id: number;
  type: 'CHARGE_PAID' | 'CHARGE_EXPIRED' | 'WITHDRAWAL_COMPLETED' | 'NEW_CLIENT' | 'SYSTEM';
  title: string;
  message: string;
  read: boolean;
  data?: any;
  createdAt: string;
}

class NotificationsService {
  private static instance: NotificationsService;
  private socket: WebSocket | null = null;
  private messageHandlers: ((data: any) => void)[] = [];

  private constructor() {}

  public static getInstance(): NotificationsService {
    if (!NotificationsService.instance) {
      NotificationsService.instance = new NotificationsService();
    }
    return NotificationsService.instance;
  }

  private getAuthHeaders() {
    return {
      Authorization: `Bearer ${authService.getToken()}`,
    };
  }

  public async getNotifications(params: {
    skip?: number;
    take?: number;
    read?: boolean;
  }): Promise<{ notifications: Notification[]; total: number }> {
    try {
      const response = await axios.get(`${API_URL}/notifications`, {
        headers: this.getAuthHeaders(),
        params,
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async markAsRead(id: number): Promise<void> {
    try {
      await axios.put(`${API_URL}/notifications/${id}/read`, null, {
        headers: this.getAuthHeaders(),
      });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async markAllAsRead(): Promise<void> {
    try {
      await axios.put(`${API_URL}/notifications/read-all`, null, {
        headers: this.getAuthHeaders(),
      });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async deleteNotification(id: number): Promise<void> {
    try {
      await axios.delete(`${API_URL}/notifications/${id}`, {
        headers: this.getAuthHeaders(),
      });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async getUnreadCount(): Promise<number> {
    try {
      const response = await axios.get(`${API_URL}/notifications/unread-count`, {
        headers: this.getAuthHeaders(),
      });
      return response.data.count;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public connectWebSocket(): void {
    const token = authService.getToken();
    if (!token) return;

    const wsUrl = process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:3000';
    this.socket = new WebSocket(`${wsUrl}/notifications?token=${token}`);

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.messageHandlers.forEach((handler) => handler(data));
    };

    this.socket.onclose = () => {
      setTimeout(() => this.connectWebSocket(), 5000);
    };
  }

  public onMessage(handler: (data: any) => void): () => void {
    this.messageHandlers.push(handler);
    return () => {
      this.messageHandlers = this.messageHandlers.filter((h) => h !== handler);
    };
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
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

export default NotificationsService.getInstance(); 