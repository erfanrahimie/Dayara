import { setUserCookie } from '@/security/auth/auth-utils';
import { NextResponse } from 'next/server';
import prisma from "@/db/client";
import bcrypt from 'bcryptjs';

export async function POST(request) {
  const { username, password } = await request.json();

  try {
    const user = await prisma.user.findUnique({where: {username}})

    if (!user) {
      return NextResponse.json(JSON.stringify({error: 'User not found'}), {status: 404});
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (!passwordsMatch) {
      return NextResponse.json(JSON.stringify({error: 'Incorrect password'}), {status: 401});
    }

    const res = NextResponse.json({ message: 'Authenticated!' }, { status: 200 })
    return setUserCookie(res, user)

  } catch (error) {
    return NextResponse.json({ message: 'An error occurred while logging in' }, { status: 400 });
  }
}
