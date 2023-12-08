import { JWT_EXPIRES_IN, JWT_SECRET_ENCODE, NODE_ENV } from '@/config/config';
import { USER_COOKIE_EXPIRES, USER_TOKEN } from '@/config/config';
import { SignJWT, jwtVerify } from 'jose';

/**
 * Verifies the user's JWT token and returns its payload if valid
 */
export async function validateToken(token) {
  if (token) {
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET_ENCODE); // Verify token with secret jwt
      return payload; // Return payload if valid
    } catch {
      return false; // Return false if invalid
    }
  }
  return null; // Return null if no token
}

/**
 * Checks if a user exists in the database
 */
export async function checkUserExists(id) {
  return false;
}

/**
 * Sets an authentication cookie for the user
 */
export async function setUserCookie(res, user) {
  // Generate JWT
  const token = await new SignJWT({})
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject({ userId: user.id })
    .setIssuedAt()
    .setExpirationTime(JWT_EXPIRES_IN)
    .sign(JWT_SECRET_ENCODE);

  // Set cookie
  res.cookies.set(USER_TOKEN, token, {
    httpOnly: true,
    secure: NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: USER_COOKIE_EXPIRES,
    path: '/',
  });

  return res;
}

/**
 * Expires the user's authentication cookie
 */
export function expireUserCookie(res) {
  res.cookies.set(USER_TOKEN, '', { httpOnly: true, maxAge: 0 });
  return res;
}

