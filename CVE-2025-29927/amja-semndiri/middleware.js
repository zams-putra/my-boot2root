import { NextResponse } from "next/server";
export function middleware(request) {
  const isAuth = false;
  if (request.nextUrl.pathname.startsWith("/api")) {
    if (!isAuth) {
      return NextResponse.json(
        { error: "Forbidden", message: "No you are not." },
        {
          status: 403,
        }
      );
    }
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/api/:path*"],
};
