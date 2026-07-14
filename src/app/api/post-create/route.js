import { NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";
import PostService from "@/lib/PostService";
export const dynamic = "force-dynamic";

export async function POST(req) {
  const body = await req.json();
  console.log("request body:", body);

  // if(body && !body.title){
  //   return NextResponse.json({
  //     status: 400,
  //     message: "Post title is required",
  //   });
  // }

  const { user, response, linkedinId, token } = await authenticateRequest(req);

  if (response) {
    return response;
  }

  if (user) {
    let responseService = await PostService.createPost(
      body,
      user?.linkedinId,
    );
  }

  if(body && body.forAll){
    const responseService = await PostService.getPosts();
     return NextResponse.json({
      status: 200,
      message: "success", 
      datacount: responseService.length,
      data: responseService, 
    });


  }else {
    const responseService = await PostService.getPostByCreatedById(
      user?.linkedinId,
    );

     return NextResponse.json({
      status: 200,
      message: "success",
      "user-linkedinId": user?.linkedinId,
      datacount: responseService.length,
      data: responseService,
    });
  }

 
}
