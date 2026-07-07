import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import User from "@/app/api/models/User";
import { authenticateRequest } from "@/lib/auth";

export const dynamic = 'force-dynamic';
export async function POST(req, res) {
    const { user, response } = await authenticateRequest(req);
  
    // if (response) {
    //   return response;
    // }

  await dbConnect();
  const modelVal = await User 

  try{
    const findRecord= await modelVal.find({})
    if(findRecord){
      return NextResponse.json({status:200,message:"success",data:findRecord});
    }else{
      return NextResponse.json({status:500,message:"Post not found!!",data:findRecord});
    }
  }catch(e){
    return NextResponse.json({status:500,message:"Error while fetching post",data:[]});
  }

}
