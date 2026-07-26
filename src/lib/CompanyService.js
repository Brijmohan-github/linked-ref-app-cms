import Company from "@/app/api/models/Company";
import CompanyCreated from "@/app/api/models/CompanyCreated";
import connectDB from "@/lib/dbConnect";

class CompanyService {
  async createCompany(companyData, linkedinId) {
    await connectDB();
    try {
      const company = await Company.create({ ...companyData, createdBy: linkedinId || "admin" });
      return company;
    } catch (error) {
      console.error("Create Company Error:", error);
      throw error;
    }
  }

  async getCompanyByName(name) {
    await connectDB();
    try {
      const normalizedName = (name || "").trim();
      return await Company.findOne({
        name: { $regex: `^${normalizedName}$`, $options: "i" },
      });
    } catch (error) {
      console.error("Get Company By Name Error:", error);
      throw error;
    }
  }

  async getCompanyByUser(companyId, userId) {
    await connectDB();
    try {
      return await CompanyCreated.findOne({ companyId, createdBy: userId });
    } catch (error) {
      console.error("Get Company By User Error:", error);
      throw error;
    }
  }

  async createCompanyByUser(companyId, userId) {
    await connectDB();
    try {
      const existingCompanyLink = await CompanyCreated.findOne({ companyId, createdBy: userId });
      if (existingCompanyLink) {
        return existingCompanyLink;
      }

      return await CompanyCreated.create({ companyId, createdBy: userId });
    } catch (error) {
      console.error("Create Company By User Error:", error);
      throw error;
    }
  }

  async getCompanyById(companyId) {
    await connectDB();
    return await Company.findById(companyId);
  }


  async getCompanyByCreatedById(linkedinId,datatype) {
    await connectDB();
    if(datatype && datatype == 'public')
          return await Company.find().sort({ _id: -1 });
    else 
      return await Company.find({ createdBy: linkedinId }, "_id name isActive country createdBy");
  }


  async updateCompany(companyId, updateData) {
    await connectDB();
    return await Company.findByIdAndUpdate(companyId, updateData, {
      new: true,
    });
  }

  async deleteCompany(companyId) {
    await connectDB();
    return await Company.findByIdAndDelete(companyId);
  }
}
const companyService = new CompanyService();

export default companyService;
