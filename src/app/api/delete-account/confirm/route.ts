 
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        {
          message: "Invalid deletion token.",
        },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${process.env.DELETE_ACCOUNT_API_URL}/api/delete-account/confirm`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${process.env.DELETE_ACCOUNT_API_TOKEN}`,
        },

        body: JSON.stringify({
          token,
        }),

        cache: "no-store",
      }
    );

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return NextResponse.json(
        {
          message:
            data?.message ||
            "The deletion link is invalid or expired.",
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your ReferralHub account has been deleted.",
    });

  } catch (error) {
    console.error("Account deletion confirmation error:", error);

    return NextResponse.json(
      {
        message:
          "Unable to complete account deletion. Please try again later.",
      },
      { status: 500 }
    );
  }
} 