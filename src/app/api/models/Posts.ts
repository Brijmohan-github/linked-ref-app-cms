import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    default: "",
  },

  city: {
    type: String,
    default: "",
  },

  state: {
    type: String,
    default: "",
  },
   country: {
    type: String,
    default: "India",
  },
    isActive: {
    type: Boolean,
    default: true,
  },
 
    createdBy: {
    type: String,
    default: "admin",
  },    
}, { timestamps: true });

export default mongoose.models.Posts ||
  mongoose.model("Posts", PostSchema);
