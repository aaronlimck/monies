import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./lib/routes";

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const token = await getToken({ req });
  const isLoggedIn = !!token;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute || isPublicRoute) {
    return null; // allow API routes to be accessed without authentication
  }

  if (!isLoggedIn && !isPublicRoute && !isAuthRoute) {
    const encodedCallbackUrl = encodeURIComponent(nextUrl.pathname);
    const redirectUrl = new URL(
      `/login?callbackUrl=${encodedCallbackUrl}`,
      nextUrl,
    );
    return Response.redirect(redirectUrl);
  }

  if (isAuthRoute && isLoggedIn) {
    // Redirect to default page if user is already logged in and accessing /login or /register
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  }

  if (!isLoggedIn && !isAuthRoute) {
    // Redirect to login if user is not logged in
    return Response.redirect(new URL("/login", nextUrl));
  }

  return null;
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
