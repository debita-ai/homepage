import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth endpoints
export const auth = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (data: { email: string; password: string; name: string; type: 'BUYER' | 'SELLER' }) => {
    const response = await api.post('/auth/register', data);
    return response.data;
  },
};

// User endpoints
export const user = {
  getProfile: async () => {
    const response = await api.get('/users/profile');
    return response.data;
  },
  updateProfile: async (data: { name: string; phone: string }) => {
    const response = await api.put('/users/profile', data);
    return response.data;
  },
  getDashboardData: async () => {
    const response = await api.get('/dashboard');
    return response.data;
  },
};

// Buyers endpoints
export const buyers = {
  list: async (params?: { skip?: number; take?: number; search?: string }) => {
    const response = await api.get('/buyers', { params });
    return response.data;
  },
  create: async (data: { name: string; email: string; phone: string; password: string }) => {
    const response = await api.post('/buyers', data);
    return response.data;
  },
  getDetails: async (id: number) => {
    const response = await api.get(`/buyers/${id}`);
    return response.data;
  },
  update: async (id: number, data: { name: string; email: string; phone: string; status: 'ACTIVE' | 'INACTIVE' }) => {
    const response = await api.put(`/buyers/${id}`, data);
    return response.data;
  },
  delete: async (id: number) => {
    const response = await api.delete(`/buyers/${id}`);
    return response.data;
  },
};

// Sellers endpoints
export const sellers = {
  list: async (params?: { skip?: number; take?: number; search?: string }) => {
    const response = await api.get('/sellers', { params });
    return response.data;
  },
  create: async (data: { name: string; email: string; phone: string; password: string; companyName: string; cnpj: string }) => {
    const response = await api.post('/sellers', data);
    return response.data;
  },
  getDetails: async (id: number) => {
    const response = await api.get(`/sellers/${id}`);
    return response.data;
  },
  update: async (id: number, data: { name: string; email: string; phone: string; companyName: string; cnpj: string; status: 'ACTIVE' | 'INACTIVE' }) => {
    const response = await api.put(`/sellers/${id}`, data);
    return response.data;
  },
  delete: async (id: number) => {
    const response = await api.delete(`/sellers/${id}`);
    return response.data;
  },
};

// Orders endpoints
export const orders = {
  list: async (params?: { skip?: number; take?: number; status?: string; search?: string }) => {
    const response = await api.get('/orders', { params });
    return response.data;
  },
  create: async (data: { amount: number; buyerId: number; sellerId: number; paymentMethod: 'PIX' | 'BOLETO' | 'CREDIT_CARD'; status: 'PENDING' }) => {
    const response = await api.post('/orders', data);
    return response.data;
  },
  getDetails: async (id: number) => {
    const response = await api.get(`/orders/${id}`);
    return response.data;
  },
  updateStatus: async (id: number, status: 'COMPLETED' | 'CANCELLED') => {
    const response = await api.put(`/orders/${id}/status`, { status });
    return response.data;
  },
  delete: async (id: number) => {
    const response = await api.delete(`/orders/${id}`);
    return response.data;
  },
};

// Invoices endpoints
export const invoices = {
  list: async (params?: { skip?: number; take?: number; status?: string; search?: string }) => {
    const response = await api.get('/invoices', { params });
    return response.data;
  },
  create: async (data: { invoiceNumber: string; type: 'PURCHASE' | 'SALE' | 'SERVICE' | 'RENTAL'; status: 'DRAFT'; totalAmount: number; dueDate: string; buyerId: number; sellerId: number }) => {
    const response = await api.post('/invoices', data);
    return response.data;
  },
  getDetails: async (id: number) => {
    const response = await api.get(`/invoices/${id}`);
    return response.data;
  },
  update: async (id: number, data: { invoiceNumber: string; type: 'PURCHASE' | 'SALE' | 'SERVICE' | 'RENTAL'; status: 'DRAFT' | 'PENDING' | 'PAID' | 'CANCELLED'; totalAmount: number; dueDate: string }) => {
    const response = await api.put(`/invoices/${id}`, data);
    return response.data;
  },
  delete: async (id: number) => {
    const response = await api.delete(`/invoices/${id}`);
    return response.data;
  },
};

// Dashboard Analytics endpoints
export const dashboardAnalytics = {
  getChargesSummary: async () => {
    const response = await api.get('/dashboard-analytics/charges');
    return response.data;
  },
  getCustomersSummary: async () => {
    const response = await api.get('/dashboard-analytics/customers');
    return response.data;
  },
  getRevenueSummary: async () => {
    const response = await api.get('/dashboard-analytics/revenue');
    return response.data;
  },
  getRevenueChartData: async () => {
    const response = await api.get('/dashboard-analytics/revenue/chart');
    return response.data;
  },
  getLatestCharges: async () => {
    const response = await api.get('/dashboard-analytics/latest-charges');
    return response.data;
  },
};

export default api; 