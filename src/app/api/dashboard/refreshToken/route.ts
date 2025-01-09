import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "@/config";
import { cookies } from "next/headers";



export async function POST(request: NextRequest){

    
    try {
      const refreshToken = await request.json()
  
    
        const { email , iat } = jwt.verify(
          refreshToken as string,
          config.jwt_refresh_secret as string
        ) as JwtPayload

        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({message: "User does not exist"}, {status: 400})
        }

        if (
            user.passwordChangedAt &&
            User.isJWTIssuedBeforePasswordChanged(user.passwordChangedAt, iat as number)
          ) {
            return NextResponse.json({message: "You are not authorized !"}, {status: 400})
          }
              
        const jwtPayload = {
            id: user._id,
            name: user.name,
            email: user.email,
        }
        //create token
        // const token = await jwt.sign(tokenData, process.env.NEXT_JWT_TOKEN_SECRET!, {expiresIn: "1d"})
        const accessToken =  jwt.sign(jwtPayload, config.jwt_access_secret!, {expiresIn: Number(config.jwt_access_expires_in) || 900})
        // const accessToken =  jwt.sign({name:"zillur"}, config.jwt_access_secret!, {expiresIn: Number(config.jwt_access_expires_in) || 900})

        const response = NextResponse.json({
            success: true,
            message: "refreshToken set successfully",
        })

        const secureCookie = config.NODE_ENV === "production";
        // response.cookies.set("accessToken", accessToken, {
        //     httpOnly: true,
        //     secure: secureCookie,
        //     sameSite: "strict",
        //     // secure: true,
        //     // sameSite: true,
        //     path: "/",
        //     // maxAge: Number(config.jwt_access_expires_in) || 900, // 1 hour
        //   });
      
      
        // return response;
        return accessToken;

    } catch (error: any) {
        return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
    }
}