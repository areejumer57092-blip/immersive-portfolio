import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

import Navbar from "@/components/Navbar";
import GlobalCanvas from "@/components/GlobalCanvas";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit"
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk" 
});

export const metadata: Metadata = {
  title: "Creative Developer | Portfolio",
  description: "An immersive 3D portfolio showcasing premium web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <body>
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          <GlobalCanvas />
          <main>
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
