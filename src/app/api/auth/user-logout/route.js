import { expireUserCookie } from "@/security/auth/auth-utils";
import { NextResponse } from "next/server";

export async function GET(){
  try {
    const res = (NextResponse.json({ message: 'Logout was successful' }, { status: 200 }))
    return expireUserCookie(res);
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred while exiting' }, { status: 500 });
  }
}