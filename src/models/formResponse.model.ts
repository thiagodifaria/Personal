import mongoose, { Schema, Document } from "mongoose";

export interface IFormResponse extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const FormResponseSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.FormResponse ||
  mongoose.model<IFormResponse>("FormResponse", FormResponseSchema);
