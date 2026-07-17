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

const siteUrl = "https://simon-dev348.github.io";
const siteTitle = "Simon Githuo — Portfolio";
const siteDescription =
  "Full stack developer and ICT support specialist delivering web app solutions and technical support.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png", // or "/favicon.ico"
    shortcut: "/favicon.png", // or "/favicon.ico"
    apple: "/apple-touch-icon.png", // optional for iOS
  },
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