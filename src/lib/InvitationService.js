import Invitation from "@/app/api/models/Invitation";
import connectDB from "@/lib/dbConnect";

class InvitationService {
  async createInvitation(invitationData, linkedinId) {
    await connectDB();
    try {
      const invitation = await Invitation.create({ ...invitationData, referredBy: linkedinId});
      return invitation;
    } catch (error) {
      console.error("Create Invitation Error:", error);
      throw error;
    }
  }

  async getInvitationById(invitationId) {
    await connectDB();
    return await Invitation.findById(invitationId);
  }


  async getInvitationsByCreatedById(linkedinId) {
    await connectDB();
    return await Invitation.find({ referredBy: linkedinId }, "phone referredBy");
  }


  async updateInvitation(invitationId, updateData) {
    await connectDB();
    return await Invitation.findByIdAndUpdate(invitationId, updateData, {
      new: true,
    });
  }

  async deleteInvitation(invitationId) {
    await connectDB();
    return await Invitation.findByIdAndDelete(invitationId);
  }
}
const invitationService = new InvitationService();

export default invitationService;
