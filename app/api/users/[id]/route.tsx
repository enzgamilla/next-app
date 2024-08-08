import { NextRequest, NextResponse, userAgent } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const body = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!body)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json(body);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  //Validate the request body
  const body = await request.json();
  const validation = schema.safeParse(body);
  //If invalidated, return 404
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  return NextResponse.json({});
}
