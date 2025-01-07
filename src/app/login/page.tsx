'use client'
import React from 'react'
// import { Label } from "./ui/Label";
import { BottomGradient, Label, LabelInputContainer } from "../../components/form/Label";
import { Input } from "../../components/form/Input";
import { useRouter } from 'next/navigation';
import { useUser } from '@/lib/UserProvider';
import Form from '@/components/form/Form';
import { zodResolver } from '@hookform/resolvers/zod';
import loginValidationSchema from '@/schemas/login.schema';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useUserLogin } from '@/hooks/auth.hooks';

const LoginPage = () => {
  const router = useRouter()
  const {setIsLoading: userLoading} = useUser()
  const { mutate: loginUser } = useUserLogin()
    
    const handleSubmit: SubmitHandler<FieldValues> = async(userdata) => {
      loginUser(userdata)
      // e.preventDefault();
      // console.log("e.prevntDefault", userdata)
    //  try {
    //   const res = await axios.post("/api/dashboard/login", userdata)
    //   console.log({res})
    //   if(res?.data?.success) {
    //     userLoading(true);
    //      toast.success(res?.data?.message, {id: toastId});
    //     // router.push("/dashboard");
    //   }
    //  } catch (error :any) {
    //   console.log({error})
    //   toast.error(error?.response?.data?.error, {id: toastId})
    //  }
      // Handle form submission logic (e.g., send data to backend)
    }; 
  
    return (
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-center text-neutral-800 dark:text-neutral-200">
        Login
      </h2>
      {/* <p className="text-neutral-600 text-sm  max-w-sm mt-2 dark:text-neutral-300">
      If you'd like to work with me, let's discuss, and feel free to message me!
      </p> */}
  
      {/* <form className="my-8" onSubmit={handleSubmit}> */}
         
     <Form
     resolver={zodResolver(loginValidationSchema)}
     onSubmit={handleSubmit}
     >
     <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email </Label>
          <Input id="email" placeholder="Enter your email" type="email" name="email" 
                // onChange={handleInputChange}
                />
        </LabelInputContainer>
        <LabelInputContainer>
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Enter your password" type="text" name="password" 
                // onChange={handleInputChange} 
                 />
          </LabelInputContainer>
              <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Login &rarr;
          <BottomGradient />
        </button>
  
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
     </Form>
  
    
      {/* </form> */}
    </div>
    )
  }
  
  export default LoginPage
  