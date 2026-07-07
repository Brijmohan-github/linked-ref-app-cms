import Company from "@/app/api/models/Company";
import connectDB from "@/lib/dbConnect";

class CompanyService {
  async createCompany(companyData, user) {
    await connectDB();
    try {
      const company = await Company.create({ ...companyData, createdBy: user?.linkedinId || "admin" });
      return company;
    } catch (error) {
      console.error("Create Company Error:", error);
      throw error;
    }
  }

  async getCompanyById(companyId) {
    await connectDB();
    return await Company.findById(companyId);
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
