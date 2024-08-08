import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
  const getAllProduct = await prisma.product.findMany();
  return NextResponse.json(getAllProduct);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.message, { status: 400 });

  const createProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(createProduct, { status: 201 });
}
