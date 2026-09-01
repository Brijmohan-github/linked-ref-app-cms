import { NextRequest, NextResponse } from "next/server";
import UserService from "@/lib/UserService";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    //console.log("request body:", body); 

    const { token } = body;

    //console.log("authenticateRequest token:", token);

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Deletion token is required.",
        },
        { status: 400 },
      );
    }

    const deletionRequest = await UserService.getDeleteRequestByToken(token);
   //console.log("deletionRequest:", deletionRequest);
    if (!deletionRequest) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired deletion link.",
        },
        { status: 400 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your ReferralHub account has been deleted.",
    });
  } catch (error) {
    console.error("Account deletion error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to process account deletion.",
      },
      { status: 500 },
    );
  }
}
