import { NextResponse } from "next/server"
import axios from "axios"
import { withAuth, type NextRequestWithAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    if (!request.nextauth.token) {
      return NextResponse.rewrite(new URL("/auth_pages/newsroom", request.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|cache|images|auth_pages|about|contact|denied|faq|subscription|termsAndConditions).*)",
  ],
}
