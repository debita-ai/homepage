import { NextResponse } from 'next/server'

export async function GET() {
  const mockProducts = [
    {
      id: 1,
      nome: "Software de Gestão Empresarial Premium",
      descricao: "Sistema completo para gestão de empresas",
      preco: 12999.99,
      categoria: "Software",
      status: "ativo",
      estoque: 150,
      vendas: 45,
      dataCriacao: "15/03/2024"
    },
    {
      id: 2,
      nome: "Consultoria de Transformação Digital",
      descricao: "Serviço de consultoria para digitalização",
      preco: 25000.00,
      categoria: "Serviço",
      status: "ativo",
      estoque: 0,
      vendas: 28,
      dataCriacao: "10/03/2024"
    },
    {
      id: 3,
      nome: "Treinamento Corporativo Avançado",
      descricao: "Programa completo de treinamento",
      preco: 8500.00,
      categoria: "Treinamento",
      status: "ativo",
      estoque: 200,
      vendas: 75,
      dataCriacao: "20/03/2024"
    },
    {
      id: 4,
      nome: "Sistema de BI Enterprise",
      descricao: "Plataforma de Business Intelligence",
      preco: 18999.99,
      categoria: "Software",
      status: "ativo",
      estoque: 80,
      vendas: 32,
      dataCriacao: "12/03/2024"
    },
    {
      id: 5,
      nome: "Serviço de Manutenção Premium",
      descricao: "Manutenção preventiva e corretiva",
      preco: 4500.00,
      categoria: "Serviço",
      status: "ativo",
      estoque: 0,
      vendas: 120,
      dataCriacao: "08/03/2024"
    },
    {
      id: 6,
      nome: "Certificação Profissional",
      descricao: "Programa de certificação técnica",
      preco: 6500.00,
      categoria: "Certificação",
      status: "ativo",
      estoque: 100,
      vendas: 45,
      dataCriacao: "18/03/2024"
    },
    {
      id: 7,
      nome: "Sistema de CRM Enterprise",
      descricao: "Gestão de relacionamento com clientes",
      preco: 15999.99,
      categoria: "Software",
      status: "ativo",
      estoque: 60,
      vendas: 38,
      dataCriacao: "14/03/2024"
    },
    {
      id: 8,
      nome: "Consultoria de Segurança",
      descricao: "Auditoria e implementação de segurança",
      preco: 22000.00,
      categoria: "Serviço",
      status: "ativo",
      estoque: 0,
      vendas: 25,
      dataCriacao: "16/03/2024"
    },
    {
      id: 9,
      nome: "Treinamento de Liderança",
      descricao: "Programa de desenvolvimento de líderes",
      preco: 12000.00,
      categoria: "Treinamento",
      status: "ativo",
      estoque: 150,
      vendas: 55,
      dataCriacao: "22/03/2024"
    },
    {
      id: 10,
      nome: "Sistema de ERP Completo",
      descricao: "Gestão integrada de recursos",
      preco: 29999.99,
      categoria: "Software",
      status: "ativo",
      estoque: 40,
      vendas: 18,
      dataCriacao: "11/03/2024"
    },
    {
      id: 11,
      nome: "Serviço de Suporte 24/7",
      descricao: "Suporte técnico contínuo",
      preco: 3500.00,
      categoria: "Serviço",
      status: "ativo",
      estoque: 0,
      vendas: 95,
      dataCriacao: "09/03/2024"
    },
    {
      id: 12,
      nome: "Certificação Avançada",
      descricao: "Certificação técnica avançada",
      preco: 8500.00,
      categoria: "Certificação",
      status: "ativo",
      estoque: 80,
      vendas: 30,
      dataCriacao: "19/03/2024"
    },
    {
      id: 13,
      nome: "Sistema de E-commerce Enterprise",
      descricao: "Plataforma completa de e-commerce",
      preco: 24999.99,
      categoria: "Software",
      status: "ativo",
      estoque: 30,
      vendas: 22,
      dataCriacao: "13/03/2024"
    },
    {
      id: 14,
      nome: "Consultoria de Inovação",
      descricao: "Consultoria para inovação empresarial",
      preco: 28000.00,
      categoria: "Serviço",
      status: "ativo",
      estoque: 0,
      vendas: 15,
      dataCriacao: "17/03/2024"
    },
    {
      id: 15,
      nome: "Treinamento de Vendas",
      descricao: "Programa de técnicas de vendas",
      preco: 9500.00,
      categoria: "Treinamento",
      status: "ativo",
      estoque: 120,
      vendas: 65,
      dataCriacao: "21/03/2024"
    }
  ]

  return NextResponse.json(mockProducts)
} 