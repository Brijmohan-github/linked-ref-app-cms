import { NextResponse } from "next/server";
import UserService from "@/lib/UserService";  
import { sendDeletionEmail } from "@/utils/mail";
import crypto from "crypto";
 
const token = crypto.randomBytes(32).toString("hex");
export const dynamic = "force-dynamic";
Math.random()
const tokenHash = crypto
  .createHash("sha256")
  .update(token)
  .digest("hex");
  
export async function POST(req) {
  const body = await req.json();
  console.log("request body:", body);
  const { email } = body;
  console.log("authenticateRequest email ...", email);
  // Find user
  const user = await UserService.getUserByEmail(email);

  // // ALWAYS return the same response
  // // whether user exists or not.

  if (!user) {

     return NextResponse.json({
      status: 200,
      message: "If an account exists for this email, deletion instructions have been sent!"
    });

 
  }

  const token = crypto.randomBytes(32).toString("hex");

  // const tokenHash = crypto
  //   .createHash("sha256")
  //   .update(token)
  //   .digest("hex");

  await UserService.updateUserByEmail(user.email, {
    tokenHash,
    expiresAt: new Date(Date.now() + 30 * 60 * 1000),
    used: false,
  });

  await sendDeletionEmail(email, token);

  return NextResponse.json({
    message:
      "If an account exists for this email, deletion instructions have been sent.",
  });
};