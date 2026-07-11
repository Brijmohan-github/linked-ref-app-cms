import { NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";
import InvitationService from "@/lib/InvitationService";
export const dynamic = "force-dynamic";

export async function POST(req) {
  const body = await req.json();
  body.phone = body.phone.trim();
  console.log("request body:", body);

  if(body && !body.phone){
    return NextResponse.json({
      status: 400,
      message: "10 digit Phone number is required",
    });
  }

  const { user, response, linkedinId, token } = await authenticateRequest(req);

  if (response) {
    return response;
  }

  if (user) {
    let responseService = await InvitationService.createInvitation(
      body,
      user?.linkedinId,
    );
  }
  const responseService = await InvitationService.getInvitationsByCreatedById(
    user?.linkedinId,
  );
  return NextResponse.json({
    status: 200,
    message: "success",
    "user-linkedinId": user?.linkedinId,
    data: responseService,
  });
}
