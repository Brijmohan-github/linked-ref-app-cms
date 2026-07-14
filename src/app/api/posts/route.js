import { NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";
import PostService from "@/lib/PostService";
export const dynamic = "force-dynamic";

export async function GET(req) {
  const { user, response, linkedinId, token } = await authenticateRequest(req);
  
  if (response) {
    return response;
  }

  const posts = await PostService.getPosts();

  return NextResponse.json({
    status: 200,
    message: "success",
    data: posts,
  });
}
