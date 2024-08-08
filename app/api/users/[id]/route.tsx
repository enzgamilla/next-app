import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Laurence" });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  //Validate the request body
  const body = await request.json();
  const validation = schema.safeParse(body);
  //If invalidated, return 404
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({});
}
