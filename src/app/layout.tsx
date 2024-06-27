import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Garza-Dev | Eduardo Garza",
  description: "Developed by Eduardo Garza",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Link to Google Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />  
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100..900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <div className='sticky top-0' style={{ zIndex: 10 }}>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
