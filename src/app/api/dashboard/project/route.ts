import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { User } from "@/models/user";
import { Project } from "@/models/project";

connect();

// Function to get valid image extension
const getValidImageExtension = async (fileName: string) => {
  const validExtensions = [".jpeg", ".jpg", ".png", ".webp", ".avif"];
  const ext = fileName.substring(fileName.lastIndexOf(".")).toLowerCase();
  if (validExtensions.includes(ext)) {
    return fileName;
  }
  return fileName.replace(ext, ".jpeg"); // Default to .jpeg if invalid
};

export async function GET(request: Request) {
    try {
      const { searchParams } = new URL(request.url);
      const projectId = searchParams.get("id"); // Extract projectId from query params
  
      let result;
      if (result) {
        // Fetch specific project by ID
        result = await Project.findById(projectId);
        if (!result) {
          return NextResponse.json({ message: "Project not found" }, { status: 404 });
        }
      } else {
        // Fetch all projects if no ID is provided
        result = await Project.find();
      }
  
      return NextResponse.json({
        success: true,
        data:result,
      });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const projectData = JSON.parse(formData.get("projectData") as string);
    console.log({projectData})
    const image = formData.get("image") as File;
    const projectId = projectData?._id; // Optional ID for updating
    let imageUrl: string | undefined;
    let imagePath: string | undefined;

    if (image instanceof File && image.name) {
      const imageName = await getValidImageExtension(image.name);
      const byteData = await image.arrayBuffer();
      const buffer = Buffer.from(byteData);
      imageUrl = `./public/project/${imageName}`;
      imagePath = `/project/${imageName}`;
      await writeFile(imageUrl, buffer);
    }

    let result;
    if (projectId) {
      // Update project if ID is provided
      result = await Project.findByIdAndUpdate(
        projectId,
        { 
          ...projectData, 
          ...(imageUrl && { image: imagePath }), 
          // image: imagePath ? imagePath : undefined, 
         },
        { new: true } // Return the updated document
      );
    } else {
      // Create new project
      result = await Project.create({
        ...projectData,
        // image: imagePath,
        // ...(imageUrl && { image: imagePath }),
      });
    }

    return NextResponse.json({
      message: projectId ? "Project updated successfully" : "Project created successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
