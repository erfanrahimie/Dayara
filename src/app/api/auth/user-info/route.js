import { validateToken } from '@/security/auth/auth-utils';
import { USER_TOKEN } from '@/config/config';
import { NextResponse } from 'next/server';
import { cookies } from "next/headers";
import prisma from '@/db/client';

export async function GET() {
  const token = cookies().get(USER_TOKEN);
  
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  try {
    const decoded = await validateToken(token.value);
    const user = await prisma.user.findUnique({where: { id: decoded.sub.userId }})
    if (!user){
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return new Response(JSON.stringify({ user }), { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong' }, { status: 400 });
  }
}