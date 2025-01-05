// "use server"
import axiosInstance from "@/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";



export const signupUser = async (userData: FormData) => {
  try {
    const { data } = await axiosInstance.post("/dashboard/signup", userData);

    return data;
  } catch (error: any) {
    
    throw new Error(error?.message)
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/dashboard/login", userData);

  console.log("Login data", data)


    return data;
  } catch (error: any) {
    console.log("login error", error)
    throw new Error(error?.response?.data?.message || error?.message)
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

export const getNewAccessToken = async () => {
  try {
    // const { data } = await axiosInstance.post("/dashboard/refreshToken")
     await axiosInstance.post("/dashboard/refreshToken")

  } catch (error) {
    console.log("getNewAccessToken error", error)
  }
}
// console.log("getNewAccessToken()--getNewAccessToken()",getNewAccessToken())




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



