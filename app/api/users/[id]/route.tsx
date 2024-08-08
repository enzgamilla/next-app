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

  const getUser = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!getUser)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const getUser = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!getUser)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  await prisma.user.delete({
    where: {
      id: parseInt(id),
    },
  });

  return NextResponse.json({});
}
