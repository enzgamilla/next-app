// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { default } from 'next-auth/middleware'
import middleware from "next-auth/middleware";

// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

export default middleware;

// See "Matching Paths" below to learn more
export const config = {
  //*: zero or more
  //+: one or more
  //?: zero or one
  matcher: [
    "/dashboard/:path*",
    "/users/:path*",
    "/admin/:path*",
    "/products/:path*",
  ],
};
