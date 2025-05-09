import { NextRequest,NextResponse } from "next/server";

export function milldeware(request: NextRequest){
    console.log("Middleware is running");
    const user = true;

    if (!user) {
        return NextResponse.redirect(new URL('/login', request.url));
    }       
    return NextResponse.next();
}

export const config = {
    matcher: ["/app/:path*"],
};