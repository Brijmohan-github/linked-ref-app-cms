import { NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";
import PostService from "@/lib/PostService";
import UserService from "@/lib/UserService";

export const dynamic = "force-dynamic";

export async function GET(req) {
  const { user, response, linkedinId, accessToken } = await authenticateRequest(req);
  const datatype = req.nextUrl.searchParams.get("datatype");
  const postid = req.nextUrl.searchParams.get("postid");
  console.log("authenticateRequest return ...", datatype, linkedinId);

  if (response) {
    return response;
  }

  let data = [];

  if (postid) {
    const post = await PostService.getPostById(postid);
    if (post) {
      const createdByDetails = await getCreatedByDetails(post.createdBy);
      data = {
        ...post.toObject(),
        createdByDetails,
      };
    }
  } else {
    const posts = await PostService.getPosts(linkedinId, datatype);
    data = await Promise.all(
      posts.map(async (post) => {
        const createdByDetails = await getCreatedByDetails(post.createdBy);
        return {
          ...post.toObject(),
          createdByDetails,
        };
      })
    );
  }

  return NextResponse.json({
    status: 200,
    message: "success",
    data,
  });
}

async function getCreatedByDetails(createdBy) {
  if (!createdBy) {
    return null;
  }

  const user = await UserService.getUserByLinkedinId(createdBy);

  if (!user) {
    return null;
  }

  return {
    linkedinId: user.linkedinId,
    name: user.name,
    email: user.email,
    profilePicture: user.profilePicture,
    company: user.company,
    job: user.job,
    city: user.city,
    bio: user.bio,
    linkedinUrl: user.linkedinUrl,
  };
}
