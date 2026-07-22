import { NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";
import PostService from "@/lib/PostService";
export const dynamic = "force-dynamic";

export async function GET(req) {
  const { user, response, linkedinId, accessToken } = await authenticateRequest(req);
  const datatype = req.nextUrl.searchParams.get("datatype");
  console.log("authenticateRequest return ...", datatype, linkedinId);

  if (response) {
    return response;
  }

  const posts = await PostService.getPosts(linkedinId, datatype);

  return NextResponse.json({
    status: 200,
    message: "success",
    data: posts,
  });
}
