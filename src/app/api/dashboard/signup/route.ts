

import { connect } from "@/dbConfig/dbConfig";
import {  NextRequest, NextResponse } from "next/server";
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

export async function POST(request: NextRequest){
  try {
      // const reqBody = await request.json()
      // const {username, email, password} = reqBody
      const formData = await request.formData()
      const userData = JSON.parse(formData.get("userData") as string);
      const image = formData.get("image");
        //  const userId = userData?._id; 
          let imageUrl: string | undefined;
          let imagePath: string | undefined;
      
          if (image instanceof File && image.name) {
      
          //   if (userId) {
          //     const user = await User.findById( userId).select("image -_id")
          //     if (user?.image) {
          //       await fs.unlink(`./public${user.image}`)
          //     }
          //  } 
            const imageName = await getValidImageExtension(image.name);
            const byteData = await image.arrayBuffer();
            const buffer = Buffer.from(byteData);
            imageUrl = `./public/user/${imageName}`;
            imagePath = `/user/${imageName}`;
            await writeFile(imageUrl, buffer);
      
      
          }
      // const imageName = await getValidImageExtension(image.name);

      // const byteDate = await image.arrayBuffer()
      // const buffer = Buffer.from(byteDate)
      // const path = `./public/my-image/${imageName}`
      // await writeFile(path, buffer)
      // //check if user already exists
      const user = await User.findOne({email: userData.email})

      if(user){
          return NextResponse.json({error: "User already exists"}, {status: 400})
      }

    

    // const result = await User.create({...userData, image:imagePath})
    const result = await User.create({...userData, ...(imageUrl && { image: imagePath })})
    // const result = await User.create(userData)


      return NextResponse.json({
          message: "User created successfully",
          success: true,
          result
      })

  } catch (error: any) {
      return NextResponse.json({error: error.message}, {status: 500})

  }
}
