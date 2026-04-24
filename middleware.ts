import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const runtime = 'edge'; // 必须加上这一行

export function middleware(request: NextRequest) {
  return NextResponse.next();
}
