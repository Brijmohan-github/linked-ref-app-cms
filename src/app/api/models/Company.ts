import mongoose, { Schema } from "mongoose";

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  isActive: {
    type: Boolean,
    default: true,
  },
   displayName: String,  

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
    createdBy: {
    type: String,
    default: "admin",
  },
});

export default mongoose.models.Company ||
  mongoose.model("Company", CompanySchema);
