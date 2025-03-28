import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))

    // Get query parameters
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const searchTerm = searchParams.get('search') || ''
    const statusFilter = searchParams.get('status') || 'todos'
    const tipoFilter = searchParams.get('tipo') || 'todos'
    const sortField = searchParams.get('sortField') || 'data'
    const sortDirection = searchParams.get('sortDirection') || 'desc'

    // Generate mock data
    const allBillings = Array.from({ length: 156 }, (_, index) => ({
      id: index + 1,
      transacao: `TRX-${String(index + 1).padStart(3, '0')}`,
      cliente: `Cliente ${index + 1}`,
      valor: Math.random() * 5000 + 100,
      tipo: ["pix", "boleto", "cartao"][Math.floor(Math.random() * 3)],
      data: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: index < 156 ? "pago" : index < 179 ? "pendente" : "cancelado",
      email: `cliente${index + 1}@email.com`,
      telefone: `(11) ${String(Math.floor(Math.random() * 90000 + 10000))}-${String(Math.floor(Math.random() * 9000 + 1000))}`,
      vencimento: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    }))

    // Apply filters
    const filteredBillings = allBillings.filter(b => 
      (statusFilter === "todos" || b.status === statusFilter) &&
      (tipoFilter === "todos" || b.tipo === tipoFilter) &&
      (searchTerm === "" || 
        b.transacao.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.email.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    // Apply sorting
    filteredBillings.sort((a, b) => {
      if (sortField === "valor") {
        return sortDirection === "asc" ? a.valor - b.valor : b.valor - a.valor;
      } else {
        const aValue = a[sortField]?.toString() || '';
        const bValue = b[sortField]?.toString() || '';
        return sortDirection === "asc" 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
    })

    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedBillings = filteredBillings.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredBillings.length / limit);

    // Calculate metrics
    const metrics = {
      totalPago: allBillings.filter(b => b.status === "pago").length,
      totalPendente: allBillings.filter(b => b.status === "pendente").length,
      totalCancelado: allBillings.filter(b => b.status === "cancelado").length,
      valorRecebido: allBillings
        .filter(b => b.status === "pago")
        .reduce((sum, b) => sum + b.valor, 0),
      cobrancasHoje: allBillings.filter(b => 
        b.status === "pago" && 
        b.data === new Date().toISOString().split('T')[0]
      ).length
    }

    return NextResponse.json({
      billings: paginatedBillings,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems: filteredBillings.length,
        itemsPerPage: limit
      },
      metrics
    })
  } catch (error) {
    console.error('Error in billings API:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 