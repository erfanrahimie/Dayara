import { NODE_ENV } from '@/config/config';
import { PrismaClient } from '@prisma/client';

// Reference the global object
const globalForPrisma = global;

/**
 * Check if prisma client already exists on global
 * If yes, use that instance
 * Otherwise, create a new instance
 */
const prisma = globalForPrisma.prisma || new PrismaClient();

// Export prisma client instance
export default prisma;

/**
 * In development environment,
 * Set prisma client instance on global
 * So that it is reused and not created on every request
 */
if (NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
