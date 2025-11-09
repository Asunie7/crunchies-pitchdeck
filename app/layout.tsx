import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Crunchies — Hot Chicken redefined in Munich",
  description:
    "Crunchies ist Münchens erstes authentisches Nashville Hot Chicken Konzept. Modernes Streetfood mit Qualität, Leidenschaft und Brand Power. Erfahre mehr in unserem Pitchdeck.",
  keywords: [
    "Crunchies",
    "Hot Chicken",
    "Nashville Style",
    "Munich Streetfood",
    "Gastronomie Konzept",
    "Pitchdeck",
  ],
  authors: [{ name: "Crunchies Team" }],
  openGraph: {
    title: "Crunchies — Hot Chicken redefined in Munich",
    description:
      "Authentisches Nashville Hot Chicken. Born in Munich, inspired by Nashville.",
    url: "https://crunchies-pitchdeck.vercel.app",
    siteName: "Crunchies Pitchdeck",
    images: [
      {
        url: "/images/crunchies-burger-hero.png",
        width: 1200,
        height: 630,
        alt: "Crunchies Hot Chicken Sandwich",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crunchies — Hot Chicken redefined",
    description:
      "Soft Opening Performance & Konzept. Das Crunchies Pitchdeck – born in Munich.",
    images: ["/images/crunchies-burger-hero.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
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
        {children}
      </body>
    </html>
  );
}
