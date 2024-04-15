import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emilie East",
  description: "Personal portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <div className="wrapper bg-blue-300 w-1/2 absolute right-0"></div>
          <div className="wrapper bg-orange-200 w-1/2 absolute left-0"></div>
          <nav className="w-screen bg-slate-200 fixed top-0">
            <ul className="flex justify-center p-4">
              <li className="p-4">
                <Link href="/">Hem</Link>
              </li>
              <li className="p-4">
                <Link href="/about">Om</Link>
              </li>
              <li className="p-4">
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li className="p-4">
                <Link href="/guestbook">Gästbok</Link>
              </li>
            </ul>
          </nav>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
