// Imports
import { ROOT_ROUTES } from '@/constants/routes/root';
import { API_ROUTES } from '@/constants/routes/api';
import { AUTH_ROUTES } from '@/constants/routes/auth';

// Auth routes that require authentication
const authRoutes = [
  ROOT_ROUTES.dashboard.index
];

// Check if pathname starts with any route in authRoutes
export const isAuthRoutes = (pathname) => authRoutes.some((route) => pathname.startsWith(route));

// Guest routes that don't require authentication
const guestRoutes = [
  AUTH_ROUTES.login,
  AUTH_ROUTES.register,
];

// Check if pathname starts with any route in guestRoutes
export const isGuestRoutes = (pathname) => guestRoutes.some((route) => pathname.startsWith(route));

// API routes that require authentication
const authApiRoutes = [
  API_ROUTES.auth.updateUser,
  API_ROUTES.auth.infoUser
];

// Constants and helper functions to check pathname
export const isAuthApiRoutes = (pathname) => authApiRoutes.some((route) => pathname.startsWith(route));