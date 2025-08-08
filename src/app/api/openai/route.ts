import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({ error: 'OpenAI functionality is temporarily disabled.' }, { status: 503 })
} 