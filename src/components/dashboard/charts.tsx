"use client";

import React from 'react';
import { 
  AreaChart as RechartsAreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const AreaChart = ({ data }) => {
  // Função para formatar valores monetários
  const formatCurrency = (value: { toLocaleString: (arg0: string, arg1: { minimumFractionDigits: number; maximumFractionDigits: number; }) => any; }) => {
    return `R$ ${value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  // Encontrar o valor máximo para ajustar o domínio do gráfico
  const maxValue = Math.max(
    ...data.map((item: { previsto: number; confirmado: number; recebido: number; }) => Math.max(item.previsto, item.confirmado, item.recebido))
  );
  
  // Arredondar para o próximo múltiplo de 5000 para melhor legibilidade
  const yAxisMax = Math.ceil(maxValue / 5000) * 5000;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsAreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPrevisto" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="colorConfirmado" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="colorRecebido" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
        <XAxis 
          dataKey="month" 
          tick={{ fontSize: 12, fill: '#6b7280' }}
          axisLine={{ stroke: '#e5e7eb' }}
          tickLine={false}
        />
        <YAxis 
          tickFormatter={(value: number) => `R$ ${value / 1000}k`}
          domain={[0, yAxisMax]}
          tick={{ fontSize: 12, fill: '#6b7280' }}
          axisLine={{ stroke: '#e5e7eb' }}
          tickLine={false}
        />
        <Tooltip 
          formatter={(value: any) => formatCurrency(value)}
          labelFormatter={(label: any) => `Mês: ${label}`}
          contentStyle={{ 
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            padding: '10px',
            border: 'none'
          }}
        />
        <Area 
          type="monotone" 
          dataKey="previsto" 
          stroke="#3b82f6" 
          fillOpacity={1} 
          fill="url(#colorPrevisto)" 
          strokeWidth={2}
        />
        <Area 
          type="monotone" 
          dataKey="confirmado" 
          stroke="#f59e0b" 
          fillOpacity={1} 
          fill="url(#colorConfirmado)" 
          strokeWidth={2}
        />
        <Area 
          type="monotone" 
          dataKey="recebido" 
          stroke="#22c55e" 
          fillOpacity={1} 
          fill="url(#colorRecebido)" 
          strokeWidth={2}
        />
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChart;