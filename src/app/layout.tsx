import Header from "@/components/Header/Header";
import Navbar from "@/features/Navbar/Navbar";
import type { Metadata } from "next";

import "./globals.scss";

export const metadata: Metadata = {
  title: "ByteBits",
  description:
    "ByteBits is a software development company that specializes in web development, mobile development, and cloud services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
