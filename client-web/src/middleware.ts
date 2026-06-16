import type { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest): NextResponse | void {
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|videos).*)']
};