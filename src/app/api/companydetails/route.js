    import { NextResponse } from "next/server";
    import { authenticateRequest } from "@/lib/auth";
    import CompanyService from "@/lib/CompanyService";
    import CompanyCreatedService from "@/lib/CompanyCreatedService";
    import User from "@/app/api/models/User";

    export const dynamic = "force-dynamic";

    export async function GET(req) {
    const { user, response, linkedinId, accessToken } =
        await authenticateRequest(req);
    const companyid = req.nextUrl.searchParams.get("companyid");

    console.log("authenticateRequest return ...", companyid, linkedinId);

    if (response) {
        return response;
    }

    let company = null;
    const company_users = [];
    const company_users_rs = [];

    if (companyid) {
        company = await CompanyService.getCompanyById(companyid);

        if (company) {
        const company_users_rs =
            await CompanyCreatedService.getCompanyByCompanyId(companyid);

        if (company_users_rs?.length > 0) {
            for (const companyUser of company_users_rs) {
            if (companyUser?.createdBy) {
                const userData = await User.findOne({
                linkedinId: companyUser.createdBy,
                },"_id linkedinId  name email profilePicture country  bio city company industry  linkedinUrl  state ");
                if (userData) {
                company_users.push(userData);
                }
            }
            }
        }
        }
    }

    return NextResponse.json({
        status: 200,
        message: "success",
        data: {
        company,
        company_users_rs,
        company_users,
        },
    });
    }
