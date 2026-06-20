import User from "@/app/api/models/User";
// import { connectDB } from "@/lib/mongodb";
import connectDB from "@/lib/mongodb";

class UserService {
  async createUser(userData) {
    await connectDB();
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      console.error("Create User Error:", error);
      throw error;
    }
  }

  async getUserById(userId) {
    await connectDB();
    return await User.findById(userId);
  }

  async getUserByLinkedinId(linkedinId) {
    await connectDB();
    return await User.findOne({
      linkedinId,
    });
  }

  async getUserByEmail(email) {
    await connectDB();
    return await User.findOne({
      email,
    });
  }

  async updateUser(userId, updateData) {
    await connectDB();
    return await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });
  }

  async updateByLinkedinId(linkedinId, updateData) {
    await connectDB();
    return await User.findOneAndUpdate({ linkedinId }, updateData, {
      new: true,
    });
  }

  async deleteUser(userId) {
    await connectDB();
    return await User.findByIdAndDelete(userId);
  }

  async getAllUsers(page = 1, limit = 20) {
    await connectDB();
    const skip = (page - 1) * limit;
    const users = await User.find().skip(skip).limit(limit).sort({
      createdAt: -1,
    });
    const total = await User.countDocuments();
    return {
      users,
      total,
      page,
      limit,
    };
  }

  async createOrUpdateLinkedinUser(linkedinProfile) {
    await connectDB();
    const existingUser = await User.findOne({
      linkedinId: linkedinProfile.sub,
    });

    if (existingUser) {
      existingUser.name = linkedinProfile.name;
      existingUser.givenName = linkedinProfile.given_name;
      existingUser.familyName = linkedinProfile.family_name;
      existingUser.email = linkedinProfile.email;
      existingUser.emailVerified = linkedinProfile.email_verified;
      existingUser.profilePicture = linkedinProfile.picture;
      existingUser.country = linkedinProfile.locale?.country;
      existingUser.language = linkedinProfile.locale?.language;
      existingUser.lastLoginAt = new Date();
      await existingUser.save();
      return existingUser;
    }

    const referralCode = this.generateReferralCode(linkedinProfile.given_name);

    const newUser = await User.create({
      linkedinId: linkedinProfile.sub,
      name: linkedinProfile.name,
      // givenName: linkedinProfile.given_name,
      // familyName: linkedinProfile.family_name,
      email: linkedinProfile.email,
      // emailVerified: linkedinProfile.email_verified,
      profilePicture: linkedinProfile.picture,
      // country: linkedinProfile.locale?.country,
      // language: linkedinProfile.locale?.language,
      // referralCode,
      lastLoginAt: new Date(),
    });

    console.log("New user created:", newUser);
    return newUser;
  }

  generateReferralCode(firstName = "USER") {
    const prefix = firstName.replace(/\s/g, "").substring(0, 4).toUpperCase();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}${random}`;
  }
}

const userService = new UserService();

export default userService;
