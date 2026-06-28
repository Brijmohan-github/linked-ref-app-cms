    import axios from "axios";
    import { NextResponse } from "next/server";
    import jwt from "jsonwebtoken";
    import UserService from "@/lib/UserService";
    // var lsinkedinScraper = require("linkedin-scraper");

    // const userService = new UserService();


    export async function GET(req: Request) {
    
        const { searchParams } = new URL(req.url);
        const code = searchParams.get("code");

        console.log("🚀 Brij  ~  GET ~  code:", code);


        if (!code) {
            return NextResponse.json(
            { error: "Missing code" },
            { status: 400 }
            );
        }

        try {
            const params = new URLSearchParams();
            params.append(
            "grant_type",
            "authorization_code"
            );
            params.append("code", code);
            params.append(
            "client_id",
            process.env.LINKEDIN_CLIENT_ID!
            );
            params.append(
            "client_secret",
            process.env.LINKEDIN_CLIENT_SECRET!
            );
            params.append(
            "redirect_uri",
            process.env.LINKEDIN_REDIRECT_URI!
            );

            const tokenResponse =
            await axios.post(
                "https://www.linkedin.com/oauth/v2/accessToken",
                params,
                {
                headers: {
                    "Content-Type":
                    "application/x-www-form-urlencoded",
                },
                }
            );
            const accessToken = tokenResponse.data.access_token;
            console.log("at line no 52",accessToken);

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
                }
            );

            //  const userResponseMyInfo = await axios.get(
            //     "https://api.linkedin.com/v2/people/me",
            //     {
            //     headers: {
            //         Authorization: `Bearer ${accessToken}`,
            //     },
            //     }
            // );

            // console.log("at line no 60", userResponseMyInfo.data);
            const getresponse = await UserService.createOrUpdateLinkedinUser(
              userResponse.data, accessToken
            );

            const user = userResponse.data;
            console.log("LinkedIn user payload:", user);
            console.log("Saved user:", getresponse);

            // const jwt =  process.env.JWT_SECRET! + '@@' + user.name + '@@' + user.sub;

            // return NextResponse.redirect(
            // `linkedrefapp://linkedin?token=${jwt}`
            // );

            const payload = {
                sub: user.sub,          // LinkedIn user id
                name: user.name,
                email: user.email,
            };

            // Create JWT valid for 7 days
            const token = jwt.sign(
                payload,
                process.env.JWT_SECRET!,
                {
                    expiresIn: "7d",
                }
            );


             // console.error("At line no 112",encodeURIComponent(JSON.stringify(user)));

            //&userdata=${encodeURIComponent(JSON.stringify(user))}
            return NextResponse.redirect(
                 `linkedrefapp://linkedin?token=${encodeURIComponent(token)}`
            );


        } catch (error: any) {
            console.error("At line no 94",error.response?.data);

            return NextResponse.json(
            {
                error:
                error.response?.data || error.message,
            },
            { status: 500 }
            );
        }
    }