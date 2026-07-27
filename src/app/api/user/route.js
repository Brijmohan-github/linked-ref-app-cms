import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import User from "@/app/api/models/User";
import { authenticateRequest } from "@/lib/auth";

export const dynamic = "force-dynamic";
export async function GET(req, res) {
 //console.log("Authenticating request...USER : ",req );
  const { user, response } = await authenticateRequest(req);
  const userid = req.nextUrl.searchParams.get("id");

  // if (response) {
  //   return response;
  // }

  await dbConnect();
  const modelVal = await User;

  try {
    const findRecord = await modelVal.find({_id:userid});
    if (findRecord) {
      return NextResponse.json({
        status: 200,
        message: "success",
        userid: userid,
        data: findRecord,
      });
    } else {
      return NextResponse.json({
        status: 500,
        message: "Post not found!!",
        userid: userid,
        data: findRecord,
      });
    }
  } catch (e) {
    return NextResponse.json({
      status: 500,
      message: "Error while fetching post",
      userid: userid,
      data: [],
    });
  }
}