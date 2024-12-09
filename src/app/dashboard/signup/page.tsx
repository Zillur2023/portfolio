'use client'
import React, { useState } from 'react'
// import { Label } from "./ui/Label";
import { Label } from "../../../components/ui/Label";
import { Input } from "../../../components/ui/Input";
import { cn } from "@/lib/utils";
import { toast } from 'sonner';
import axios from "axios"
import { useRouter } from 'next/navigation';
import { FileUpload } from '@/components/ui/FileUpload';


const SignupPage = () => {
  const router = useRouter()
  const [userData, setUserData] = useState({ name: '', email: '', password: ''});
  const [files, setFiles] = useState<File[]>([]);



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
  
    // console.log(files);
    
  };
  
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("e.prevntDefault", userData)
    // Handle form submission logic (e.g., send data to backend)
    const formData = new FormData()
    formData.append("userData", JSON.stringify(userData))
    formData.append("image", files?.[0])
    // formData.append("image", proImage)

    const toastId = toast.loading("loading...")

    try {
      const res = await axios.post("/api/dashboard/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      // const res = await axios.post("/api/dashboard/signup", userData)
      console.log("signuppage result",res)
    
      if (res?.data?.success) {
        toast.success(res?.data?.message, {id: toastId})
        router.push("/dashboard/login")
      } 
    } catch (error) {
      
    }
  }; 

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
    <h2 className="font-bold text-xl text-center text-neutral-800 dark:text-neutral-200">
      Email me
    </h2>
    <p className="text-neutral-600 text-sm  max-w-sm mt-2 dark:text-neutral-300">
    If you'd like to work with me, let's discuss, and feel free to message me!
    </p>

    <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" type="text" name="name" value={userData.name} required
              onChange={handleInputChange}  />
        </LabelInputContainer>
       
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email </Label>
        <Input id="email" placeholder="Enter your email" type="email" name="email" value={userData.email} required
              onChange={handleInputChange}/>
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="password">Passsword </Label>
        <Input id="password" placeholder="Enter your password" type="text" name="password" value={userData.password} required
              onChange={handleInputChange}/>
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="image">Image </Label>
        <FileUpload onChange={handleFileUpload} />
      </LabelInputContainer>
            <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        Send &rarr;
        <BottomGradient />
      </button>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

  
    </form>
  </div>
  )
}

export default SignupPage

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};