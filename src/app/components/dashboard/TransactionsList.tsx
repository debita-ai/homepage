"use client";

import { formatCurrency } from "@/app/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, Clock, X } from "lucide-react";

interface Transaction {
  id: string;
  customer: {
    name: string;
    email: string;
  };
  amount: number;
  status: "paid" | "pending" | "failed";
  createdAt: string;
  paymentMethod: "pix" | "boleto" | "credit_card";
}

interface TransactionsListProps {
  transactions: Transaction[];
  loading?: boolean;
}

const getStatusIcon = (status: Transaction["status"]) => {
  switch (status) {
    case "paid":
      return <Check className="h-4 w-4 text-green-500" />;
    case "pending":
      return <Clock className="h-4 w-4 text-yellow-500" />;
    case "failed":
      return <X className="h-4 w-4 text-red-500" />;
  }
};

const getStatusText = (status: Transaction["status"]) => {
  switch (status) {
    case "paid":
      return "Pago";
    case "pending":
      return "Pendente";
    case "failed":
      return "Falhou";
  }
};

const getStatusColor = (status: Transaction["status"]) => {
  switch (status) {
    case "paid":
      return "bg-green-50 text-green-700";
    case "pending":
      return "bg-yellow-50 text-yellow-700";
    case "failed":
      return "bg-red-50 text-red-700";
  }
};

const getPaymentMethodText = (method: Transaction["paymentMethod"]) => {
  switch (method) {
    case "pix":
      return "PIX";
    case "boleto":
      return "Boleto";
    case "credit_card":
      return "Cartão de Crédito";
  }
};

export default function TransactionsList({ transactions, loading = false }: TransactionsListProps) {
  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[80px]" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!transactions.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Nenhuma transação encontrada</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="bg-white p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">{transaction.customer.name}</h3>
              <p className="text-sm text-gray-500">{transaction.customer.email}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">{formatCurrency(transaction.amount)}</p>
              <p className="text-sm text-gray-500">{getPaymentMethodText(transaction.paymentMethod)}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {new Date(transaction.createdAt).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
            <div className={`px-2.5 py-0.5 rounded-full text-xs font-medium flex items-center gap-1.5 ${getStatusColor(transaction.status)}`}>
              {getStatusIcon(transaction.status)}
              {getStatusText(transaction.status)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 