import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Nav} from "@/components/Nav";
import Session from "@/components/Session";
import AuthWrapper from "@/components/AuthWrapper";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r  from-blue-100 via-purple-100 to-pink-100">

        <Session>

          <Nav />

          <AuthWrapper>
            <main >
              {children}
            </main>
          </AuthWrapper>

          <ToastContainer position="bottom-center" autoClose={3000} />

        </Session>

      </body>
    </html>
  );
}