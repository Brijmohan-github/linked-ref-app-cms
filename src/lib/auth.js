import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/app/api/models/User";

export async function authenticateRequest(req) {
  //console.log("Authenticating request...",req );
  const authHeader = req.headers.get("Authorization");
  const bearerToken = authHeader?.split(" ")[1];
  console.log('%c🤪 ~ file: auth.js:8 : bearerToken', 'color: #9bbd84' , bearerToken);

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
    console.log('%c🤪 ~ file: auth.js:22 : userRecord', 'color: #09eb74' , userRecord);
    if (userRecord) {
      return { user: userRecord, response: null };
    }

    return {
      user: null,
      response: NextResponse.json(
        { status: 401, message: "Unauthorized activity detected, please login again! ", data: [] },
         { status: 401 }
      ),
    };


  } catch (error) {
    //console.error("Authentication check failed:", error);
    return {
      user: null,
      response: NextResponse.json(
        { status: 500, message: "Authentication check failed, please login again! ", data: [] },
        { status: 500 }
      ),
    };
  }
}
