import { isAuthApiRoutes, isAuthRoutes, isGuestRoutes } from '@/middlewares/routes';
import { apiRoutesMiddleware } from '@/middlewares/api-middleware';
import { authRoutesMiddleware } from '@/middlewares/auth-middleware';

// Main middleware function
export async function middleware(request) {
  const pathname = request.nextUrl.pathname; // Get request pathname

  // Redirect to auth middleware if pathname matches auth routes
  if (isAuthRoutes(pathname) || isGuestRoutes(pathname)) return await authRoutesMiddleware(request);

  // Redirect to API middleware if pathname matches API routes
  if (isAuthApiRoutes(pathname)) return await apiRoutesMiddleware(request);
}

// Export config
export const config = {
  matcher: '/:path*',
};