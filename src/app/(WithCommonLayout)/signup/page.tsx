'use client'
import React, { useState } from 'react'
// import { Label } from "./ui/Label";
import { BottomGradient, Label, LabelInputContainer } from "../../../components/form/Label";
import { Input } from "../../../components/form/Input";
import { FileUpload } from '@/components/ui/FileUpload';
import { useUserSignup } from '@/hooks/auth.hooks';
import Form from '@/components/form/Form';
import { zodResolver } from '@hookform/resolvers/zod';
import signupValidationSchema from '@/schemas/signup.schema';
import { SubmitHandler } from 'react-hook-form';


const SignupPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const { mutate: handleUserSignup } = useUserSignup()

  
  
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
  
    
  };
  
    const handleSubmit: SubmitHandler<FormData> = async(data) => {
  
    const formData = new FormData()
    formData.append("userData", JSON.stringify(data))
    formData.append("image", files?.[0])
    // formData.append("image", proImage)

    handleUserSignup(formData)

  
  }; 

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
    <h2 className="font-bold my-3 text-xl text-center text-neutral-800 dark:text-neutral-200">
      Signup
    </h2>

    {/* <form className="my-8" onSubmit={handleSubmit}> */}
    <Form
    resolver={zodResolver(signupValidationSchema)}
    onSubmit={handleSubmit}
    
    >
    {/* <LabelInputContainer>
          <Label htmlFor="image">Image</Label>
          <Input id="image" placeholder="Enter your image" type="text" name="image" 
              // onChange={handleInputChange}  
              />
        </LabelInputContainer> */}
        <LabelInputContainer className="mb-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" type="text" name="name" 
              // onChange={handleInputChange}  
              />
        </LabelInputContainer>
       
      <LabelInputContainer className="mb-2">
        <Label htmlFor="email">Email </Label>
        <Input id="email" placeholder="Enter your email" type="email" name="email" 
              // onChange={handleInputChange}
              />
      </LabelInputContainer>
      <LabelInputContainer className="mb-2">
        <Label htmlFor="password">Passsword </Label>
        <Input id="password" placeholder="Enter your password" type="text" name="password" 
              // onChange={handleInputChange}
              />
      </LabelInputContainer>
       <LabelInputContainer className="mb-4">
        <Label htmlFor="image">Image </Label>
        <FileUpload onChange={handleFileUpload} />
      </LabelInputContainer> 
            <button 
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        Signup &rarr;
        <BottomGradient />
      </button>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
    </Form>

  
    {/* </form> */}
  </div>
  )
}

export default SignupPage

