import Swap from "@/app/api/models/Swap";
import connectDB from "@/lib/dbConnect";

class SwapService {
  async createSwap(postData, linkedinId) {
    await connectDB();
    try {
      const swap = await Swap.create({ ...postData, swapBy: linkedinId });
      return swap;
    } catch (error) {
      console.error("Create Post Error:", error);
      throw error;
    }
  }

  // async getSwap() {
  //   await connectDB();
  //   return await Swap.find().sort({ _id: -1 });
  // }

  //   async getSwapById(swapId) {
  //   await connectDB();
  //   return await Swap.findById(swapId).sort({ _id: -1 });
  // }


  async getSwapByCreatedById(linkedinId) {
    await connectDB();
    return await Swap.find({ swapBy: linkedinId })
    .sort({ _id: -1 });
  }
 
}
const swapService = new SwapService();

export default swapService;
