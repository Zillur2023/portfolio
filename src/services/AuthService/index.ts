"use server"
import { jwtDecode } from "jwt-decode";


import { cookies } from "next/headers";

export const getUser = async () => {
    const accessToken = cookies().get("accessToken")?.value;
  
    console.log("get accessToken from cookies ", accessToken);
  
    let decodedToken = null;
  
    if (accessToken) {
      decodedToken = await jwtDecode(accessToken);
    }
  
    return decodedToken;
  };

  export const logout = async () => {
    cookies().delete("accessToken");
    cookies().delete("refreshToken");
  };