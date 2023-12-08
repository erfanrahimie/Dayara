import { NextResponse } from "next/server";

export async function POST(request) {
  const {title, description, body, image, author} = await request.json();
  // await connectMongoDB();
  // await Article.create({title, description, body, image, author});
  return NextResponse.json({ message: "Article created" }, { status: 201 })
}

export async function GET() {
  // await connectMongoDB();
  // const articles = await Article.find();
  return NextResponse.json({ articles  })
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  // await connectMongoDB();
  // await Article.findByIdAndDelete(id);
  return NextResponse.json({ message: "Article deleted" }, { status: 201 })
}