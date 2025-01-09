import mongoose, { Schema } from "mongoose";

export interface ITechnology {
    _id?: string;
    technologies?: string[]
  }

  export const technologySchema = new Schema<ITechnology>(
    {
        technologies: { type: [String], required:true },
      },
      { timestamps: true }
  )

  export const Technology = (mongoose.models.Technology ) || mongoose.model<ITechnology>("Technology", technologySchema);

  
  