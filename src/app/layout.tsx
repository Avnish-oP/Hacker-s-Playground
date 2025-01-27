import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import FooterSection from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hacker's Playground",
  description: "A playground for hackers ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="">
          <NavBar />
        </div>
        <CustomCursor />
        {children}
        <div>
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
