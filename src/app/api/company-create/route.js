import { NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";
import CompanyService from "@/lib/CompanyService";
export const dynamic = "force-dynamic";

export async function POST(req) {
  const body = await req.json();

  console.log("request body:", body);

  if(body && !body.name){
    return NextResponse.json({
      status: 400,
      message: "Company name is required",
    });
  }

  const { user, response, linkedinId, token } = await authenticateRequest(req);

  if (response) {
    return response;
  }

  if (user) {
    let responseService = await CompanyService.createCompany(
      body,
      user?.linkedinId,
    );
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
