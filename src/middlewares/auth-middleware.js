// Imports
import { isAuthRoutes, isGuestRoutes } from '@/middlewares/routes';
import { validateToken } from '@/security/auth/auth-utils';
import { ROOT_ROUTES } from '@/constants/routes/root';
import { AUTH_ROUTES } from '@/constants/routes/auth';
import { USER_TOKEN } from '@/config/config';
import { NextResponse } from 'next/server';

// Auth middleware function 
export async function authRoutesMiddleware(request) {
  const { url, nextUrl, cookies } = request; // Extract request properties 
  const token = cookies.get(USER_TOKEN); // Get token from cookies
  const userId = await validateToken(token); // Validate token 
  const pathname = nextUrl.pathname; // Get pathname

  // Redirect to login if token invalid
  if (isAuthRoutes(pathname)) {
    if (!token || userId) return NextResponse.redirect(new URL(AUTH_ROUTES.login, url));
  }

  // Redirect to dashboard if already logged in
  if (isGuestRoutes(pathname)) {
    if (token) return NextResponse.redirect(new URL(ROOT_ROUTES.dashboard.index, url));
  }
}