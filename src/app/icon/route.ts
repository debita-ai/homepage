import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  return NextResponse.redirect('/icon/favicon-96x96.png', {
    status: 301,
  })
} 