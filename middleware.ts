// middleware.ts (root directory)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// The matcher is now defined here, not in next.config.ts
export const config = {
  matcher: ['/app/:path*'],  // Protect /app and all its subpaths
};

export function middleware(request: NextRequest) {
  console.log('✅ Middleware is running:', request.nextUrl.pathname);

  const isLoggedIn = false;  // Simulating that the user is not logged in

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}
