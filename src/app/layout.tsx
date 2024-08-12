import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import type { Metadata } from "next";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Ensino Fleury",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
