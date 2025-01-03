'use server'
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers"


export const getUser = async() => {
   const accessToken = await cookies().get("accessToken")?.value
   let decodedToken;
   if(accessToken) {

        decodedToken = await jwtDecode(accessToken as string);
   }
    console.log({decodedToken})
    console.log("{accessToken} lib acccc", accessToken)
    console.log("{accessToken} lib acccc i am zillur rahman" , )
    return decodedToken
}

export const logout = () => {
     cookies().delete("accessToken");
     cookies().delete("refreshToken");
   };