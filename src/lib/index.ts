'use server'
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers"
import axiosInstance from "./AxiosInstance";
import { getNewAccessToken } from "@/services/auth";
import envConfig from "@/config";
import jwt, { JwtPayload } from "jsonwebtoken";


// console.log("getNewAccessToken()",getNewAccessToken())



axiosInstance.interceptors.request.use(
   function (config) {
     const cookieStore = cookies();
     const accessToken = cookieStore.get("accessToken")?.value;
 
     if (accessToken) {
       config.headers.Authorization = accessToken;
     }
 
     return config;
   },
   function (error) {
     return Promise.reject(error);
   }
 );
 
 axiosInstance.interceptors.response.use(
   function (response) {
     return response;
   },
   async function (error) {
     const config = error.config;
 
     if (error?.response?.status === 401 && !config?.sent) {
       config.sent = true;
       const res = await getNewAccessToken();
      //  const accessToken = res.data.accessToken;

      console.log("const res = await getNewAccessToken();", res)
 
      //  config.headers["Authorization"] = accessToken;
      //  cookies().set("accessToken", accessToken);
 
       return axiosInstance(config);
     } else {
       return Promise.reject(error);
     }
   }
 );



// export const getAccessToken = () => {
//      const accessToken = cookies().get('accessToken')?.value;
//      console.log({accessToken})
//      return accessToken;
//    };
   
//    console.log(' getAccessToken() Access Token:', {accessToken: getAccessToken()});


export const getUser = async() => {
   const accessToken = await cookies().get("accessToken")?.value
//    const accessToken = getAccessToken()
//    console.log("getUser accessToken", accessToken)
   let decodedToken;
   if(accessToken) {

        decodedToken = await jwtDecode(accessToken as string);
   }
   
    return decodedToken
}

export const logout = () => {
     cookies().delete("accessToken");
     cookies().delete("refreshToken");
   };