import { NextResponse } from "next/server";
import prisma from "@/db/client";
import bcrypt from "bcryptjs";

/**
 * Registers a new user
*/
export async function POST(request) {
  try {
    const {username, fullName, email, password} = await request.json();
    const userCount = await prisma.user.count({ where: { OR: [{ username }, { email } ]} })
    if (userCount) {
      return NextResponse.json({ message: "Username or email is already taken" }, { status: 400 })
    }
    await prisma.user.create({
      data: {
        username,
        fullName,
        email,
        password: await bcrypt.hash(password, 10),
      }
    })
    return NextResponse.json({ message: "User registered" }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: "Error creating user account" }, { status: 500 })
  }
}