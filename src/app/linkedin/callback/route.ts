    import axios from "axios";
    import { NextResponse } from "next/server";

    export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const code = searchParams.get("code");

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

        const accessToken =
        tokenResponse.data.access_token;

        const userResponse =
        await axios.get(
            "https://api.linkedin.com/v2/userinfo",
            {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            }
        );

        const user = userResponse.data;

        console.log(user);

        const jwt =  process.env.JWT_SECRET! + '@@' + user.name + '@@' + user.sub;

        return NextResponse.redirect(
        `linkedrefapp://linkedin?token=${jwt}`
        );
    } catch (error: any) {
        console.error(error.response?.data);

        return NextResponse.json(
        {
            error:
            error.response?.data || error.message,
        },
        { status: 500 }
        );
    }
    }