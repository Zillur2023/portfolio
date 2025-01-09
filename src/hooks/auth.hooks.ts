import { useUser } from "@/lib/UserProvider";
import { loginUser, signupUser } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";


export const useUserSignup = () => {

  return useMutation<any, Error, FormData,any>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await signupUser(userData),
    onMutate: () => {
      const toastId = toast.loading("Createing user...");
      return { toastId };
    },
    onSuccess: (data, _, context) => {
      const { toastId  } = context || {};
     
      if (data?.success) {
        toast.success(data.message, { id: toastId } )
      } 
    },
    onError: (error, _, context) => {
      const { toastId } = context || {};
      toast.error(error.message, { id: toastId } )

    },
  });
};

export const useUserLogin = () => {
  const { setIsLoading } = useUser()

  return useMutation<any, Error, FieldValues,any>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) =>  await loginUser(userData),
    onMutate: () => {
      const toastId = toast.loading("Logging you in, please wait...");
      return { toastId };
    },
    onSuccess: (data, _, context) => {
      const { toastId  } = context || {};

      if (data?.success) {
        toast.success(data.message, { id: toastId } )
      } 
    },
    onError: (error, _, context) => {

      const { toastId } = context || {};
      toast.error(error.message, { id: toastId } )

    },   
  });
};
