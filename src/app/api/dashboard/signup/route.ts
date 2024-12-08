

import { connect } from "@/dbConfig/dbConfig";
import {  NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { User } from "@/models/user";

connect()

// Function to get valid image extension
const  getValidImageExtension = async(fileName:string) => {
  const validExtensions = ['.jpeg', '.jpg', '.png', '.webp', '.avif'];
  const ext = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();
  if (validExtensions.includes(ext)) {
    return fileName;
  }
  return fileName.replace(ext, '.jpeg'); // Default to .jpeg if invalid
}

export async function POST(request){
  try {
      // const reqBody = await request.json()
      // const {username, email, password} = reqBody
      const formData = await request.formData()
      const userData = JSON.parse(formData.get("userData"));
      const image = formData.get("image");
      // console.log({image})
      const imageName = await getValidImageExtension(image.name);

      const byteDate = await image.arrayBuffer()
      const buffer = Buffer.from(byteDate)
      const path = `./public/my-image/${imageName}`
      await writeFile(path, buffer)
      //check if user already exists
      const user = await User.findOne({email: userData.email})

      if(user){
          return NextResponse.json({error: "User already exists"}, {status: 400})
      }

    

    const savedUser = await User.create({...userData,image:imageName})
    // const savedUser = await User.create(userData)

    console.log({savedUser})

      return NextResponse.json({
          message: "User created successfully",
          success: true,
          // savedUser
      })

  } catch (error: any) {
      return NextResponse.json({error: error.message}, {status: 500})

  }
}
