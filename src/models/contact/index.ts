import mongoose, { Schema } from "mongoose";


export interface IContact {
    _id?: string;
    name: string;
    email: string;
    message: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

  export const contactSchema = new Schema<IContact>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true,},
        message: { type: String, required: true  },
      },
      { timestamps: true }
  )

  export const Contact = (mongoose.models.Contact ) || mongoose.model<IContact>("Contact", contactSchema);
  