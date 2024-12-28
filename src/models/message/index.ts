import mongoose, { Schema } from "mongoose";


export interface IMessage {
    _id?: string;
    name: string;
    email: string;
    message: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

  export const messageSchema = new Schema<IMessage>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true,},
        message: { type: String  },
      },
      { timestamps: true }
  )

  export const Message = (mongoose.models.Project ) || mongoose.model<IMessage>("Project", messageSchema);
  