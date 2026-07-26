import mongoose from "mongoose";
import CompanyCreated from "@/app/api/models/CompanyCreated";
import connectDB from "@/lib/dbConnect";

class CompanyCreatedService {
  async getCompanyByCompanyId(companyId) {
    await connectDB();

    const normalizedCompanyId = mongoose.Types.ObjectId.isValid(companyId)
      ? new mongoose.Types.ObjectId(companyId)
      : companyId;

    return await CompanyCreated.find({
      companyId: normalizedCompanyId,
    }).sort({ _id: -1 });
  }

   async getCompanyByUserId(createdBy) {
    await connectDB();

    // const normalizedCompanyId = mongoose.Types.ObjectId.isValid(createdBy)
    //   ? new mongoose.Types.ObjectId(createdBy)
    //   : createdBy;

    return await CompanyCreated.find({
      createdBy: createdBy,
    }).sort({ _id: -1 });
  }

}

const companyCreatedService = new CompanyCreatedService();

export default companyCreatedService;
