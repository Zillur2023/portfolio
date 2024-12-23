'use client'
import { Toaster } from "sonner";
import UserProvider from "./UserProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function Provider({ children}:{ children: React.ReactNode } ) {
    // 2. Wrap NextUIProvider at the root of your app
    return (
        <QueryClientProvider client={queryClient}>
        <UserProvider>
            <Toaster position="top-center" richColors />
            {children}
        </UserProvider>
        </QueryClientProvider>
    );
  }