import { loginUser, signupUser } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

// import { loginUser, registerUser } from "../services/AuthService";

export const useUserSignup = () => {
  return useMutation<any, Error, FieldValues>({
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
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      toast.success("User login successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
