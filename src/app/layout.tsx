import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load your local fonts
const manRope = localFont({
  src: "./fonts/manrope.ttf", // Manrope font file
  variable: "--font-manrope",
  weight: "100 900",
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Geist Sans font file
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff", // Geist Mono font file
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inter = localFont({
  src: "./fonts/Inter.ttf", // Ensure you have the correct Inter font file
  variable: "--font-inter",
  weight: "100 900",
});

const bebasNeue = localFont({
  src: "./fonts/BebasNeue-Regular.ttf", // Make sure this path is correct
  variable: "--font-bebas-neue",
});

// Metadata for the page
export const metadata: Metadata = {
  title: "Portfolio - Assigment",
  description: "Created portfolio website using figma",
};

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Fonts can be included here if needed */}
      </head>
      <body
        className={`${manRope.variable} ${geistSans.variable} ${geistMono.variable} ${inter.variable} ${bebasNeue.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
