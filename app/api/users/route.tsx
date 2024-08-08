import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.issues[0].message, {
      status: 400,
    });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
