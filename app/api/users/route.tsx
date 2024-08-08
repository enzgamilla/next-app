import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.issues[0].message, {
      status: 400,
    });
  const getUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (getUser)
    return NextResponse.json(
      {
        error: "The email address has been already used by other user",
      },
      { status: 400 }
    );

  const postNewUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(postNewUser, { status: 201 });
}
