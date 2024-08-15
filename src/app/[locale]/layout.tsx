import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Footer from "@/components/Footer/Footer";

import "./globals.scss";

export const metadata: Metadata = {
  title: "ByteBits",
  description:
    "ByteBits is a software development company that specializes in web development, mobile development, and cloud services.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
