// import {connect} from "@/dbConfig/dbConfig";
// import { NextRequest, NextResponse } from "next/server";
// import jwt from "jsonwebtoken";
// import { User } from "@/models/user";

import { connect } from "@/dbConfig/dbConfig";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import config from "@/config";
import bcrypt from "bcrypt"


connect()

export async function POST(request: NextRequest){
    try {

        const reqBody = await request.json()
        const {email, password} = reqBody;
        // console.log(reqBody);

        //check if user exists
        const user = await User.findOne({email})
        console.log({user})
        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }
        // console.log("user exists");
        
        
        //check if password is correct
        // const validPassword = password === user.password
        // const validPassword = await bcrypt.compare(password, user.password)
        // const validPassword = await User.isPasswordMatched(password, user.password)
        const validPassword = await User.isPasswordMatched(password, user.password)

        // console.log({validPassword})
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }
      
        // console.log(user);
        
        // create token data
        const jwtPayload = {
            // id: user._id,
            // username: user.username,
            // email: user.email
            id: user._id,
            email: user.email,
        }
        //create token
        // const token = await jwt.sign(tokenData, process.env.NEXT_JWT_TOKEN_SECRET!, {expiresIn: "1d"})
        const accessToken = await jwt.sign(jwtPayload, config.jwt_access_secret!, {expiresIn: config.jwt_access_expires_in})
        const refreshToken = await jwt.sign(jwtPayload, config.jwt_refresh_secret!, {expiresIn: config.jwt_refresh_expires_in})

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })

        const secureCookie = config.NODE_ENV === "production";
        response.cookies.set("accessToken", accessToken, {
            httpOnly: true,
            secure: secureCookie,
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60, // 1 hour
          });
      
          response.cookies.set("refreshToken", refreshToken, {
            httpOnly: true,
            secure: secureCookie,
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 7 days
          });
        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}