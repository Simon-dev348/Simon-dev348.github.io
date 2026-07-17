import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Simon Githuo — Portfolio",
  description: "Full stack developer and ICT support specialist delivering web app solutions and technical support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
