import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarMenu from "./components/home/navbar";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dharmaseervi - Fullstack Developer",
  description: "dharmaseervi - Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link rel="icon" href="icons/dharma.jpeg" sizes="any" />
        <Providers>
          <NavbarMenu />
          {children}
        </Providers>
      </body>
    </html>
  );
}
