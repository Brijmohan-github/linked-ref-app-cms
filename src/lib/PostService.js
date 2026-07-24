import Posts from "@/app/api/models/Posts";
import connectDB from "@/lib/dbConnect";

class PostService {
  async createPost(postData, linkedinId) {
    await connectDB();
    try {
      const posts = await Posts.create({ ...postData, createdBy: linkedinId || "admin" });
      return posts;
    } catch (error) {
      console.error("Create Post Error:", error);
      throw error;
    }
  }

  async getPosts(linkedinId,datatype) {
    await connectDB();
    if(datatype && datatype == 'public')
      return await Posts.find().sort({ _id: -1 });
    else 
      return await Posts.find({ createdBy: linkedinId }, "title description createdBy").sort({ _id: -1 });
  }

  async getPostById(postId) {
    await connectDB();
    return await Posts.findById(postId);
  }


  async getPostByCreatedById(linkedinId) {
    await connectDB();
    return await Posts.find({ createdBy: linkedinId }, "title description createdBy").sort({ _id: -1 });
  }

  async getPostsByCompanyId(companyId, createdBy) {
    await connectDB();

    const query = {
      $or: [
        { companyId: companyId },
        { company: companyId },
      ],
    };

    if (createdBy) {
      query.createdBy = createdBy;
    }

    return await Posts.find(query, "title description createdBy companyId company industry city state country").sort({ _id: -1 });
  }


  async updatePost(postId, updateData) {
    await connectDB();
    return await Posts.findByIdAndUpdate(postId, updateData, {
      new: true,
    });
  }

  async deletePost(postId) {
    await connectDB();
    return await Posts.findByIdAndDelete(postId);
  }
}
const postService = new PostService();

export default postService;
