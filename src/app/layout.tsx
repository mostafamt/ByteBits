import Navbar from "@/features/Navbar/Navbar";
import type { Metadata } from "next";

import styles from "./main.module.scss";

import Home from "./page";

export const metadata: Metadata = {
  title: "ByteBits",
  description:
    "ByteBits is a software development company that specializes in web development, mobile development, and cloud services.",
};

export default function RootLayout() {
  return (
    <html className={styles.html} lang="en">
      <body>
        <Navbar />
        <Home />
      </body>
    </html>
  );
}
