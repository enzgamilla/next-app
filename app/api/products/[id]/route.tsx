import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const getProduct = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!getProduct)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json(getProduct);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  //Validate the request body
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.message, { status: 400 });

  const getProduct = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!getProduct)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  const updateProduct = await prisma.product.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: body.name,
      price: body.price,
    },
  });

  //If invalidated, return 404

  return NextResponse.json(updateProduct);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const getProduct = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!getProduct)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  await prisma.product.delete({
    where: {
      id: parseInt(id),
    },
  });
  return NextResponse.json({});
}
