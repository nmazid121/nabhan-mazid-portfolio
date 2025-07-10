import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nabhan Mazid - Portfolio",
  description: "Personal portfolio of Nabhan Mazid - founder, researcher, and builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
