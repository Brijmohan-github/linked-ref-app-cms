import mongoose, { Schema } from "mongoose"; 

const CompanyCreatedSchema = new Schema({
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  createdBy: {
    type: String,
    default: "admin",
    required: true,
  },
});

export default mongoose.models.CompanyCreated ||
  mongoose.model("CompanyCreated", CompanyCreatedSchema);
