'use server'
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers"
import axiosInstance from "./AxiosInstance";


 

const isTokenExpired = (token: string) => {
   const { exp } = jwtDecode<{ exp: number }>(token);
   return Date.now() >= exp * 1000; // Convert to milliseconds
 };

axiosInstance.interceptors.request.use(
   async function (config) {
     const cookieStore = cookies();
     const accessToken = cookieStore.get("accessToken")?.value;
     const refreshToken = cookieStore.get("refreshToken")?.value;
 

     if(accessToken) {
      config.headers["Authorization"] = accessToken
     }
    
      if (accessToken && isTokenExpired(accessToken)) {
    
         // config.headers.Authorization = refreshToken;
         config.headers["Authorization"] = refreshToken
      }
      


 
     return config;
   },
   function (error) {
     return Promise.reject(error);
   }
 );
 
//  axiosInstance.interceptors.response.use(
//    function (response) {
//      return response;
//    },
//    async function (error) {
//      const config = error.config;

 
//    //   if (error?.response?.status === 401 && !config?.sent) {
//      if (error) {
//       //  config.sent = true;
//        const res = await getNewAccessToken();
//        const accessToken = res;

 
//        config.headers["Authorization"] = accessToken;
//        cookies().set("accessToken", accessToken);
 
//        return axiosInstance(config);
//      } else {
//        return Promise.reject(error);
//      }
//    }
//  );



// export const getAccessToken = () => {
//      const accessToken = cookies().get('accessToken')?.value;
//      return accessToken;
//    };
   



export const getUser = async() => {
   const accessToken = await cookies().get("accessToken")?.value
//    const accessToken = getAccessToken()
   let decodedToken = null;
   if(accessToken) {

        decodedToken = await jwtDecode(accessToken as string);
   }
   
    return decodedToken
}

export const logout = () => {
     cookies().delete("accessToken");
     cookies().delete("refreshToken");
   };