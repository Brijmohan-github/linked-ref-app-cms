import { NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";
import CompanyService from "@/lib/CompanyService";  
export async function POST(req) { 
  try {
    // Read JSON body
   // Read JSON body
    const body = await req.json(); 
    console.log("Headers:", Object.fromEntries(req.headers.entries()));
    console.log("Request Body:", body);

    // Authenticate user
    const { user, response } = await authenticateRequest(req);
    console.log("user - linkedinId:", user?.linkedinId);
  
  
  
     const responseService = await CompanyService.createCompany(body,user) || null;
      console.log('%c🤪 ~ file: route.js:20 : ', 'color: #09eb74', responseService);
  
    // if (responseService) {
    //   return responseService;
    // }

    return NextResponse.json({
      status: 200,
      message: "success",
     //user,
      //request: body,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        status: 400,
        message: "Invalid request body",
        error: error.message,
      },
      { status: 400 }
    );
  }
}