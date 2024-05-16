import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Inknut_Antiqua, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ 
  variable: '--font-nunito',
  subsets: ["latin"]
});
const inknut = Inknut_Antiqua({
  weight:'400',
  subsets: ['devanagari'],
  variable: '--font-inknut-antiqua'
});

export const metadata: Metadata = {
  title: "WEHack",
  description: "WEHack 24-25 Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${inknut.variable}`}>{children}</body>
    </html>
  );
}
