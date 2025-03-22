import api from "./api";

interface CreateChargeData {
  clientId: string;
  amount: number;
  description: string;
  dueDate: string;
  paymentMethod: "pix" | "boleto" | "link";
}

interface Charge {
  id: string;
  clientId: string;
  amount: number;
  description: string;
  dueDate: string;
  paymentMethod: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  qrCode?: string;
  boletoUrl?: string;
  paymentLink?: string;
}

const chargesService = {
  async createCharge(data: CreateChargeData): Promise<Charge> {
    const response = await api.post("/charges", data);
    return response.data;
  },

  async getCharges(params?: { take?: number; skip?: number }): Promise<{ charges: Charge[]; total: number }> {
    const response = await api.get("/charges", { params });
    return response.data;
  },

  async getCharge(id: string): Promise<Charge> {
    const response = await api.get(`/charges/${id}`);
    return response.data;
  },

  async updateCharge(id: string, data: Partial<CreateChargeData>): Promise<Charge> {
    const response = await api.patch(`/charges/${id}`, data);
    return response.data;
  },

  async deleteCharge(id: string): Promise<void> {
    await api.delete(`/charges/${id}`);
  },
};

export default chargesService; 