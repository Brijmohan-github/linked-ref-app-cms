import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    // Authentication
    linkedinId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    provider: {
      type: String,
      default: "linkedin",
    },

    // Profile
    name: {
      type: String,
      required: true,
    },

    givenName: String,
    accessToken: String,
    familyName: String,

    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      sparse: true,
    },

    emailVerified: {
      type: Boolean,
      default: false,
    },

    profilePicture: String,

    // Locale
    country: String,

    language: String,

    // Referral App Fields
    referralCode: {
      type: String,
      unique: true,
      index: true,
    },

    referredBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    referralCount: {
      type: Number,
      default: 0,
    },

    // App Status
    isProfileCompleted: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
    industry: {
      type: String,
      default: "",
    },

    job: {
      type: String,
      default: "",
    },

    company: {
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

    linkedinUrl: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },

    lastLoginAt: Date,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);