import { NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";
import CompanyService from "@/lib/CompanyService";

export const dynamic = "force-dynamic";

export async function POST(req) {
  const body = await req.json();

  console.log("request body:", body);

  if (body && !body.name) {
    return NextResponse.json({
      status: 400,
      message: "Company name is required",
    });
  }

  const { user, response } = await authenticateRequest(req);

  if (response) {
    return response;
  }

  const companyName = (body.name || "").trim();
  let existingCompany = await CompanyService.getCompanyByName(companyName);
  let createdCompany = null;
  let companyCreatedRecord = null;

  if (!existingCompany && user?.linkedinId) {
    createdCompany = await CompanyService.createCompany(
      { ...body, name: companyName },
      user.linkedinId,
    );
    existingCompany = createdCompany;
  }

  if (existingCompany && user?.linkedinId) {
    const companyId = existingCompany._id || existingCompany.id;
    const existingCompanyLink = await CompanyService.getCompanyByUser(companyId, user.linkedinId);

    if (!existingCompanyLink) {
      companyCreatedRecord = await CompanyService.createCompanyByUser(companyId, user.linkedinId);
    }
  }

  const userData = await CompanyService.getCompanyByCreatedById(user?.linkedinId);

  return NextResponse.json({
    status: 200,
    message: "success",
    companyExists: !!existingCompany,
    companyCreatedRecordExists: !!companyCreatedRecord || !!(existingCompany && user?.linkedinId && await CompanyService.getCompanyByUser(existingCompany._id || existingCompany.id, user.linkedinId)),
    datacount: userData.length,
    userlinkedinId: user?.linkedinId,
    data: userData,
    createdCompany,
    existingCompany,
  });
}
