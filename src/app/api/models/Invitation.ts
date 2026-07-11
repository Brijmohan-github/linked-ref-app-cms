import mongoose, { Schema } from "mongoose";

const InvitationSchema = new Schema({
  phone: {
    type: Number,
    required: true,
  }, 
  referredBy: {
    type: String,
    default: "",
  },
});

export default mongoose.models.Invitation ||
  mongoose.model("Invitation", InvitationSchema );
