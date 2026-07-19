import { NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth"; 
    import SwapService from "@/lib/SwapService";
export const dynamic = "force-dynamic";

export async function POST(req) {
  const body = await req.json();
  console.log("request body:", body);

  if(body && !body.swapTo){
    return NextResponse.json({
      status: 400,
      message: "swapTo is required",
    });
  }

   const { user, response, linkedinId, token } = await authenticateRequest(req);

  if (response) {
    return response;
  }


    let responseService = await SwapService.createSwap(
      body,
      user?.linkedinId,
    );

  
    let data = await SwapService.getSwapByCreatedById(user?.linkedinId);
 


  return NextResponse.json({
    status: 200,
    message: "success",
    "user-linkedinId": user?.linkedinId,
    datacount: responseService.length || 0,
    currentRecord: responseService,
    userdata:data
  });
}
