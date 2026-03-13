export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/((?!login|register|reset-password|api|_next|favicon.ico).*)",
  ],
};