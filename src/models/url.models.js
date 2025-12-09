import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema(
  {
    originalUrl: {
      type: String,
      required: true,
      trim: true,
    },
    shortCode: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

export const Url = mongoose.model("Url", urlSchema);
