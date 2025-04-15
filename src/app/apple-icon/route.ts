import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  return NextResponse.redirect('/icon/apple-icon-180x180.png', {
    status: 301,
  })
} 