'use client'
import { Toaster } from "sonner";
import UserProvider from "./UserProvider";

export default function Provider({ children}:{ children: React.ReactNode } ) {
    // 2. Wrap NextUIProvider at the root of your app
    return (
        <UserProvider>
            <Toaster position="top-center" richColors />
            {children}
        </UserProvider>
    );
  }