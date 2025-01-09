import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // const accessToken = cookies().get("accessToken")?.value
    // const accessToken1 = cookies()
    const accessToken2 = cookies().get("accessToken")?.value
 
   
}

// Apply middleware only to API routes
export const config = {
    matcher: "/:path*",
};