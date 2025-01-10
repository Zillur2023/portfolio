'use client'
import React, { Suspense, useEffect } from 'react'
import { BottomGradient, Label, LabelInputContainer } from "../../../components/form/Label";
import { Input } from "../../../components/form/Input";
import { useRouter, useSearchParams } from 'next/navigation';
import { useUser } from '@/lib/UserProvider';
import Form from '@/components/form/Form';
import { zodResolver } from '@hookform/resolvers/zod';
import loginValidationSchema from '@/schemas/login.schema';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useUserLogin } from '@/hooks/auth.hooks';

const LoginPage = () => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  console.log({redirect})
  const router = useRouter()
  const { setIsLoading } = useUser()
  const { mutate: loginUser,  isPending, isSuccess } = useUserLogin()
  
  const handleSubmit: SubmitHandler<FieldValues> = async(userdata) => {
   loginUser(userdata)
  }; 
  
  useEffect(() => {
    if (!isPending && isSuccess) {
      setIsLoading(true)
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/dashboard");
      }
    }
  }, [isPending, isSuccess , router, setIsLoading, redirect]);
  
    return (
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-center text-neutral-800 dark:text-neutral-200">
        Login
      </h2>
      {/* <p className="text-neutral-600 text-sm  max-w-sm mt-2 dark:text-neutral-300">
      If you'd like to work with me, let's discuss, and feel free to message me!
      </p> */}
  
         
     <Form
     resolver={zodResolver(loginValidationSchema)}
     onSubmit={handleSubmit}
     >
     <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email </Label>
          <Input id="email" placeholder="Enter your email" type="email" name="email" 
                />
        </LabelInputContainer>
        <LabelInputContainer>
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Enter your password" type="text" name="password" 
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
  
    
    </div>
    )
  }
  
  // export default LoginPage

  const SuspendedLoginPage = () => (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPage />
    </Suspense>
  );
  
  export default SuspendedLoginPage;
  