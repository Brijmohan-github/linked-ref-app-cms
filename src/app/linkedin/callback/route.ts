import axios from "axios";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import UserService from "@/lib/UserService";
// var lsinkedinScraper = require("linkedin-scraper");

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  console.log("🚀 Brij  ~  line no11 ~  code:", code);

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  try {
    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("client_id", process.env.LINKEDIN_CLIENT_ID!);
    params.append("client_secret", process.env.LINKEDIN_CLIENT_SECRET!);
    params.append("redirect_uri", process.env.LINKEDIN_REDIRECT_URI!);
    console.log("🚀 Brij  ~  line24   ~  params to linkedin :", params.toString());

    const tokenResponse = await axios.post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );
    const accessToken = tokenResponse.data.access_token;
    console.log("🚀 Brij  ~  line36 ~  accessToken:", accessToken);

    // linkedinScraper("https://www.linkedin.com/in/brijmohan-k-10304b418/",
    //     function (linkedinObject: any) {
    //     console.log(linkedinObject);
    //     }
    // );

    const userResponse = await axios.get(
      "https://api.linkedin.com/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    //  const userResponseMyInfo = await axios.get(
    //     "https://api.linkedin.com/v2/people/me",
    //     {
    //     headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //     },
    //     }
    // );

    console.log("🚀 Brij  ~  line62 ~  userResponse.data:", userResponse.data);
    const getresponse = await UserService.createOrUpdateLinkedinUser(
      userResponse.data,
      accessToken,
    );

    const user = userResponse.data;
    console.log("LinkedIn user payload:", user);
    console.log("Saved user:", getresponse);

    // const jwt =  process.env.JWT_SECRET! + '@@' + user.name + '@@' + user.sub;

    const payload = {
      sub: user.sub, // LinkedIn user id
      name: user.name,
      email: user.email,
    };

    // Create JWT valid for 7 days
    // const token = jwt.sign(payload, process.env.JWT_SECRET!, {
    //   expiresIn: "7d",
    // });

    const userAgent = req.headers.get("user-agent") || "";

    let device = "unknown";

    if (/android/i.test(userAgent)) {
      device = "android";
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      device = "ios";
    } else if (/windows/i.test(userAgent)) {
      device = "windows";
    } else if (/macintosh/i.test(userAgent)) {
      device = "macos";
    }
    console.log("🚀 Brij  ~  line98 ~  device:", device);

    if (device === "android" || device === "ios" || device === "macintosh") {
      console.log("🚀 Brij  ~  line101 ~  device: mobile ");

      return NextResponse.redirect(
        `refhubapp://linkedin?token=${accessToken}&userdata=${encodeURIComponent(JSON.stringify(user))}`,
      );
    } else {
      console.log("🚀 Brij  ~  line107 ~  device:web ");

      return NextResponse.redirect(
        process.env.APP_URL +
          "/auth?token=" +
          accessToken +
          "&userdata=" +
          encodeURIComponent(JSON.stringify(user)),
      );
    }
  } catch (error: any) {
    console.error("🚀 Brij  ~  line118 ~   At line no 135 ", error.response?.data);

    return NextResponse.json(
      {
        error: error.response?.data || error.message,
      },
      { status: 500 },
    );
  }
}
