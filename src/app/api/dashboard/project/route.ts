import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { User } from "@/models/user";
import { Project } from "@/models/project";
import fs from 'fs/promises';

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

    // if (image instanceof File && image.name) {

    //   if (projectId) {
    //     const project = await Project.findById( projectId).select("image -_id")
    //     console.log({project})
    //     if (project?.image) {
    //       await fs.unlink(`./public${project.image}`)
    //     }
    //  } 
    //   const imageName = await getValidImageExtension(image.name);
    //   const byteData = await image.arrayBuffer();
    //   const buffer = Buffer.from(byteData);
    //   imageUrl = `./public/project/${imageName}`;
    //   imagePath = `/project/${imageName}`;
    //   await writeFile(imageUrl, buffer);
     

     

    // }

    let result;
    if (projectId) {
      // Update project if ID is provided
      result = await Project.findByIdAndUpdate(
        projectId,
        { 
          ...projectData, 
          // ...(imageUrl && { image: imagePath }), 
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

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get("id"); // Extract projectId from query params

    if (!projectId) {
      return NextResponse.json(
        { message: "Project ID is required" },
        { status: 400 }
      );
    }

    // Find the project to retrieve the image path
    const project = await Project.findById(projectId).select("image");

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    // Delete the associated image file if it exists
    if (project.image) {
      const imagePath = `./public${project.image}`;
      try {
        await fs.unlink(imagePath); // Delete the file
        console.log(`Deleted image file at: ${imagePath}`);
      } catch (error) {
        console.error(`Error deleting image file at: ${imagePath}`, error);
        // Continue even if the image file couldn't be deleted
      }
    }

    // Delete the project document
    await Project.findByIdAndDelete(projectId);

    return NextResponse.json({
      message: "Project deleted successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

