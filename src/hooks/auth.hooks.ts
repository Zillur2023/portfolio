import { loginUser, signupUser } from "@/services/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

// import { loginUser, registerUser } from "../services/AuthService";

export const useUserSignup = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await signupUser(userData),
    onSuccess: () => {
      toast.success("User registration successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUserLogin = () => {
  const queryClient = useQueryClient();


  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => {
       toast.loading("loading")
       return await loginUser(userData)
    },
    
    onSuccess: (data) => {
      console.log("auth hooks data", data)
      toast.dismiss()
      // toast.success("User login successful.");
      toast.success(data.message);
      if (data?.success) {
        toast.success(data.message );
        // queryClient.invalidateQueries({ queryKey: ["GET_PROJECTS"] });
      } else {
        toast.error(data.message );
      }
    },
    onError: (error) => {
      toast.dismiss()
      toast.error(error.message);
    },
  });
};
