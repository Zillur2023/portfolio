'use server'
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers"
import axiosInstance from "./AxiosInstance";
import { getNewAccessToken } from "@/services/auth";

axiosInstance.interceptors.request.use(
     function (config) {
       const cookieStore = cookies();
       const accessToken = cookieStore.get("accessToken")?.value;
      
       console.log("axiosInstance.interceptors.request.use( accessToken", accessToken)
   
       if (accessToken) {
         config.headers.Authorization = accessToken;
       }
       console.log("COnfig",config)
   
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
       console.log("const config = error.config;", config)
       console.log("congit error send refRESHtoken", error)
   
       if (error?.response?.status === 401 && !config?.sent) {
         config.sent = true;
         const res = await getNewAccessToken();
         const accessToken = res.data.accessToken;
   
         config.headers["Authorization"] = accessToken;
     //     cookies().set("accessToken", accessToken);
   
         return axiosInstance(config);
       } else {
         return Promise.reject(error);
       }
     }
   );
   



export const getAccessToken = () => {
     const accessToken = cookies().get('accessToken')?.value;
     console.log({accessToken})
     return accessToken;
   };
   
   console.log(' getAccessToken() Access Token:', {accessToken: getAccessToken()});


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