import { NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";

export const dynamic = 'force-dynamic';

export async function GET(req) {
  const { user, response } = await authenticateRequest(req);

  if (response) {
    return response;
  }

  return NextResponse.json({ status: 200, message: "success", data: user });
}
