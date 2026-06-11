import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dharmaseervi.com"),
  title: "Dharma Seervi — Full-Stack Developer",
  description:
    "Full-stack developer in Bengaluru. Creator of Invo Billing, a live GST invoicing SaaS. Go, PostgreSQL, SwiftUI, React Native, Next.js — shipped to production.",
  icons: { icon: "/icons/dharma.jpeg" },
  openGraph: {
    title: "Dharma Seervi — Full-Stack Developer",
    description:
      "I build software that businesses actually run on. Live SaaS, real client work, hardware-to-backend systems.",
    url: "https://www.dharmaseervi.com",
    siteName: "Dharma Seervi",
    type: "website",
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(!t){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
