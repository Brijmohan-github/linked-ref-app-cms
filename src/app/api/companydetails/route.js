import { NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";
import CompanyService from "@/lib/CompanyService";
import PostService from "@/lib/PostService";

export const dynamic = "force-dynamic";

export async function GET(req) {
  const { user, response, linkedinId, accessToken } = await authenticateRequest(req);
  const companyid = req.nextUrl.searchParams.get("companyid");

  console.log("authenticateRequest return ...", companyid, linkedinId);

  if (response) {
    return response;
  }

  let company = null;
  let jobs = [];

  if (companyid) {
    company = await CompanyService.getCompanyById(companyid);

    if (company) {
      jobs = await PostService.getPostsByCompanyId(companyid, company.createdBy);
    }
  }

  return NextResponse.json({
    status: 200,
    message: "success",
    data: {
      company,
      jobs,
    },
  });
}
