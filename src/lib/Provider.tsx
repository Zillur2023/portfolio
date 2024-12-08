import { Toaster } from "sonner";

export default function Provider({ children}:{ children: React.ReactNode } ) {
    // 2. Wrap NextUIProvider at the root of your app
    return (
        <div>
            <Toaster position="top-center" richColors />
            {children}
        </div>
    );
  }