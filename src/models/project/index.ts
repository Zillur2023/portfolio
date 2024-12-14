import mongoose, { Schema } from "mongoose";

export interface IProject {
    _id?: string;
    title: string;
    description: string;
    tecnologies?: string[]
    image?: string;
    githubLink:string;
    liveLink:string;
    createdAt?: Date;
    updatedAt?: Date;
  }

  export const projectSchema = new Schema<IProject>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true,},
        tecnologies: { type: [String], required:true },
        image: { type: String  },
        githubLink: { type: String, required:true },
        liveLink: { type: String, required:true },
      },
      { timestamps: true }
  )

  export const Project = (mongoose.models.Project ) || mongoose.model<IProject>("Project", projectSchema);

  
  