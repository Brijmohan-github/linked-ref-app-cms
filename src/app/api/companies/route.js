import { NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";
import CompanyService from "@/lib/CompanyService";

export const dynamic = "force-dynamic";

export async function GET(req) {
  const { user, response, linkedinId, token } = await authenticateRequest(req);

  if (response) {
    return response;
  }
  const responseService = await CompanyService.getCompanyByCreatedById(
    user?.linkedinId,
  );
 
  return NextResponse.json({
    status: 200,
    message: "success",
    "user-linkedinId": user?.linkedinId,
    data: responseService,
  });
}
