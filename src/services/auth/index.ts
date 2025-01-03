// "use server"
import axiosInstance from "@/lib/AxiosInstance";
import axios from "axios";
import { FieldValues } from "react-hook-form";



export const signupUser = async (userData: FormData) => {
  try {
    const { data } = await axiosInstance.post("/dashboard/signup", userData);

    return data;
  } catch (error: any) {
    
    return error
  }
};

export const loginUser = async (userData: { email: string; password: string }) => {
  try {
    // const { data } = await axios.post("http://localhost:3000/api/dashboard/login", userData, {withCredentials:true});
    const { data } = await axiosInstance.post("/dashboard/login", userData);
  //   const response = await fetch('http://localhost:3000/api/dashboard/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(userData),
  //     credentials: 'include', // Include cookies in requestss
  // });

  // const data = await response.json()


    return data;
  } catch (error: any) {
    console.log("login error", error)
    return error
  }
};

// export const logout = () => {
//   cookies().delete("accessToken");
//   cookies().delete("refreshToken");
// };

// export const getCurrentUser = async () => {
// export const getUser = async (request: NextRequest) => {
//   const accessToken = request.cookies.get("accessToken")?.value || ""
//   console.log(" Server-client side accessToken 1", accessToken)
//   console.log(" Server-client side accessToken 2")

//   // let decodedToken = null;
//   // const zillur = await jwtDecode(accessToken);
//   // console.log({zillur})

//   // if (accessToken) {
//   //   decodedToken = await jwtDecode(accessToken);

//   //   return {
//   //     _id: decodedToken._id,
//   //     name: decodedToken.name,
//   //     email: decodedToken.email,
//   //     role: decodedToken.role,
//   //     image: decodedToken.image,
//   //   };
//   // }

//   // return decodedToken;
// };



// export const getNewAccessToken = async () => {
//   try {
//     const refreshToken = cookies().get("refreshToken")?.value;

//     const res = await axiosInstance({
//       url: "/auth/refresh-token",
//       method: "POST",
//       withCredentials: true,
//       headers: {
//         cookie: `refreshToken=${refreshToken}`,
//       },
//     });

//     return res.data;
//   } catch (error) {
//     throw new Error("Failed to get new access token");
//   }
// };



// import { cookies } from "next/headers";

// export const getUser = async () => {
//     const accessToken = cookies().get("accessToken")?.value;
  
//     console.log("get accessToken from cookies ", accessToken);
  
//     let decodedToken = null;
  
//     if (accessToken) {
//       decodedToken = await jwtDecode(accessToken);
//     }
  
//     return decodedToken;
//   };

//   export const logout = async () => {
//     cookies().delete("accessToken");
//     cookies().delete("refreshToken");
//   };