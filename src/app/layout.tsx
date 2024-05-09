import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Home from "./Home/Home";
import styles from "../styles/main.module.scss";
export const metadata: Metadata = {
  title: "ByteBits",
  description:
    "ByteBits is a software development company that specializes in web development, mobile development, and cloud services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={styles.html} lang="en">
      <body>
        <Navbar />
        <Home />
      </body>
    </html>
  );
}
