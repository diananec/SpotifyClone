import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  //Token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname, origin } = req.nextUrl;

  //Allow the requests if the following is true...
  //1) the token exists
  if (pathname.includes("/api/auth") || token) return NextResponse.next();

  //Redirect them to login if they dont have token AND are requesting a protected route
  if (!token && pathname !== "/login") {
    const url = require.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.rewrite(url);
  }
}
