"use server"
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    // if (data.success) {
    //   cookies().set("accessToken", data?.data?.accessToken);
    //   cookies().set("refreshToken", data?.data?.refreshToken);
    // }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};


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