import mongoose, { Schema } from "mongoose";

const SwapSchema = new Schema(
  {
    // Authentication
    swapBy: {
      type: String,
      required: true,
    },
    swapTo: {
      type: String,
      required: true,
    },
    isLeft: {
      type: Boolean,
      default: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isAccepted: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Swap || mongoose.model("Swap", SwapSchema);
