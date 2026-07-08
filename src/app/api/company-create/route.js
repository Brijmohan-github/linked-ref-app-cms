import { NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";
import CompanyService from "@/lib/CompanyService";  
export async function POST(req) { 
  try {

   // console.log("create company request DATA:", req);


    // Read JSON body
   // Read JSON body
    const body = await req.json(); 
    // console.log("Headers:", Object.fromEntries(req.headers.entries()));
    // console.log("Request Body:", body);

    // Authenticate user
    const { user, response , token, linkedId} = await authenticateRequest(req);
     console.log("user - data :", linkedId, user);
  
  
  
     const responseService = await CompanyService.createCompany(body,user.linkedinId) || null;
     console.log('%c🤪 ~ file: route.js:23 responseService: ',  responseService);
  

 
     const responseServiceCompanies = await CompanyService.getCompanyByCreatedById(user.linkedinId);
    console.log('%c🤪 ~ file: route.js:31 responseServiceCompanies: ',  responseServiceCompanies);

    return NextResponse.json({
     // token: token,
      status: 200,
      message: "success",
      "linkedin-Id": linkedId,
      "linkedin-Id-user": user.linkedinId,
      //addedRecord:responseService,
      companies: responseServiceCompanies,
      //request: body,
     //user: user,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        status: 400,
        message: "Invalid request body create company",
        error: error.message,
      },
      { status: 400 }
    );
  }
}