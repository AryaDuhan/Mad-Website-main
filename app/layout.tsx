import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

// Local fonts with proper configurations
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata configuration
export const metadata: Metadata = {
  title: "Kalakriti - The Fine Arts Society of DTU",
  description: "A Website all about DTU's home of eccentric artists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link
          rel="icon"
          href="/img/Madhurima-Favicon.png"
          type="image/png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

