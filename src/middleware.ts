import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  });

  const isLoggedIn = !!token;
  const { pathname } = req.nextUrl;

  const isLoginPage = pathname === "/login";
  const isAdminRoute = pathname.startsWith("/admin");
  const isUsersRoute = pathname.startsWith("/admin/users");
  const role = token?.role as string | undefined;

  // 2. LOGIC REDIRECT
  if (isLoggedIn && isLoginPage) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  if (isAdminRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isUsersRoute && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  const response = NextResponse.next();
  response.headers.set("x-middleware-cache", "no-cache");
  return response;
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
