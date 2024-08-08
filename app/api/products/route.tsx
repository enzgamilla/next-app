import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Milk", price: 2.5 },
    { id: 2, name: "Bread", price: 5.5 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name && !body.price)
    return NextResponse.json(
      { error: "Name and Price should not be empty" },
      { status: 400 }
    );
  if (!body.name)
    return NextResponse.json(
      { error: "Name should not be empty" },
      { status: 400 }
    );
  if (!body.price)
    return NextResponse.json(
      { error: "Price should not be empty" },
      { status: 400 }
    );

  return NextResponse.json(
    { id: 1, name: body.name, price: body.price },
    { status: 201 }
  );
}
