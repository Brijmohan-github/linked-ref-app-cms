import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/app/api/models/User";
import UserService from "@/lib/UserService";  
export async function authenticateRequest(req) {
  // console.log("Authenticating request...",req );
 const authHeader = req.headers.get("Authorization");
  const bearerToken = authHeader?.split(" ")[1];
  console.log('%c🤪 ~ file: auth.js:8 : bearerToken', bearerToken);

  if (!bearerToken) {
    return {
      user: null,
      token: null,    
      response: NextResponse.json(
        { status: 401, message: "Unauthorized: No token provided", data: [] },
        { status: 401 }
      ),
    };
  }

  try {
    await dbConnect();
    const userRecord = await User.findOne({
        accessToken: bearerToken,
    });
    console.log('%c🤪 ~ file: auth.js:25 : linkedinId -', userRecord?.user?.linkedinId);

    if (userRecord) {
      return { user: userRecord, token: bearerToken, response: null, linkedId: userRecord?.user?.linkedinId };
    }

    return {
      user: null,
      linkedId: null,
      response: NextResponse.json(
        { status: 401, message: "Unauthorized activity detected", data: [] },
        { status: 401 }
      ),
    };
  } catch (error) {
    console.error("Authentication check failed:", error);
    return {
      user: null,
      linkedId: null,
      response: NextResponse.json(
        { status: 500, message: "Unauthorized activity detected", data: [] },
        { status: 500 }
      ),
    };
  }
}
