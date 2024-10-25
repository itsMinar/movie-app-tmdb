import { NextResponse } from 'next/server';

export function middleware(req) {
  const isAuthRoute = req.nextUrl.pathname === '/watchlist';
  const isLoginRoute = req.nextUrl.pathname === '/login';

  const isAuthenticated = req.cookies.has('auth');

  // login user can not access the login route
  if (isAuthenticated && isLoginRoute) {
    const homeUrl = new URL('/', req.url);
    return NextResponse.redirect(homeUrl);
  }

  // redirect to login route if user is not logged in
  if (isAuthRoute && !isAuthenticated) {
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// protected routes
export const config = {
  matcher: ['/watchlist', '/login'],
};
