import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
