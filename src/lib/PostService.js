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

  async getPostById(postId) {
    await connectDB();
    return await Posts.findById(postId);
  }


  async getPostByCreatedById(linkedinId) {
    await connectDB();
    return await Posts.find({ createdBy: linkedinId }, "title description createdBy");
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
