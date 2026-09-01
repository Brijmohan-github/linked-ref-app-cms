import { NextRequest, NextResponse } from "next/server";
import UserService from "@/lib/UserService";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("request body:", body);

    // return NextResponse.json(
    //   {
    //     success: body,
    //     message:
    //       "Unable to process account deletion.",
    //   },
    //   { status: 500 }
    // );

      const { token } = body;

      console.log("authenticateRequest token:", token);

      if (!token) {
        return NextResponse.json(
          {
            success: false,
            message: "Deletion token is required.",
          },
          { status: 400 }
        );
      }

      // IMPORTANT:
      // token is NOT the user's email.
      // You need to validate the token and get the user
      // associated with it.

      const deletionRequest =
        await UserService.getDeleteRequestByToken(token);
      console.log("deletionRequest:", deletionRequest);
      if (!deletionRequest) {
        return NextResponse.json(
          {
            success: false,
            message: "Invalid or expired deletion link.",
          },
          { status: 400 }
        );
      }

      // Get the user from the deletion request
      // const user = await UserService.getUserById(
      //   deletionRequest.userId
      // );

      // // if (!user) {
      // //   return NextResponse.json(
      // //     {
      // //       success: false,
      // //       message: "Account not found.",
      // //     },
      // //     { status: 404 }
      // //   );
      // // }

      // // Delete user/account data here
      // await UserService.deleteUser(user._id);

      // // Mark token as used
      // await UserService.markDeleteRequestUsed(
      //   deletionRequest._id
      // );

      return NextResponse.json({
        success: true,
        message: "Your ReferralHub account has been deleted.",
      });

    } catch (error) {
      console.error(
        "Account deletion error:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to process account deletion.",
        },
        { status: 500 }
      );
    }
}