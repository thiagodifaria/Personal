
import type { NextRequest, NextResponse } from 'next/server';

// Basic middleware structure, can be expanded if other logic is needed.
export function middleware(request: NextRequest): NextResponse | void {
  // No i18n routing logic needed for this simple approach.
  // If other middleware tasks are required, they can be added here.
  // For now, it just lets the request pass through.
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|videos).*)']
};
