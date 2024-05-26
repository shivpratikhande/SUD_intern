import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import video from "../public/1.mp4"


import { cn } from "@/lib/utils"
import Nav from "@/components/Nav";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable)}>
        {/*         <Nav />
 */}
        <div className=" hidden  lg:block">
          {children}
        </div>

        <div className=" block lg:hidden items-center text-center">
          <img src="/2.gif" alt="Example GIF" />
          <h1 className=" text-center mx-auto text-xl font-bold ">Currently available only for desktop mode</h1>

        </div>


      </body>
    </html>
  );
}
