import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Milk", price: 2.5 });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  //Validate the request body
  const body = await request.json();

  //If invalidated, return 404
  if (!body.name && !body.price)
    return NextResponse.json(
      { error: "Name and Price of product cannot be empty" },
      { status: 400 }
    );
  if (!body.name)
    return NextResponse.json(
      { error: "Name of product cannot be empty" },
      { status: 400 }
    );
  if (!body.price)
    return NextResponse.json(
      { error: "Price of product cannot be empty" },
      { status: 400 }
    );
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name, price: body.price });
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({});
}
