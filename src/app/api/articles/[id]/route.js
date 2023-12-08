import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {title, description, body, image, author} = await request.json();
  // await connectMongoDB();
  // await Article.findByIdAndUpdate(id, {title, description, body, image, author});
  return NextResponse.json({ message: "Article updated" }, { status: 200 });
}

