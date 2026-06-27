import { NextResponse } from "next/server";
import dbConnect from "@/app/api/models/dbConnect";
import User from "@/app/api/models/User";

export async function authenticateRequest(req) {
  const authHeader = req.headers.get("Authorization");
  const bearerToken = authHeader?.split(" ")[1];

  if (!bearerToken) {
    return {
      user: null,
      response: NextResponse.json(
        { status: 401, message: "Unauthorized: No token provided", data: [] },
        { status: 401 }
      ),
    };
  }

  try {
    await dbConnect();
    const userRecord = await User.findOne({ accessToken: bearerToken });

    if (userRecord) {
      return { user: userRecord, response: null };
    }

    return {
      user: null,
      response: NextResponse.json(
        { status: 401, message: "Unauthorized activity detected", data: [] },
        { status: 401 }
      ),
    };
  } catch (error) {
    console.error("Authentication check failed:", error);
    return {
      user: null,
      response: NextResponse.json(
        { status: 500, message: "Unauthorized activity detected", data: [] },
        { status: 500 }
      ),
    };
  }
}
