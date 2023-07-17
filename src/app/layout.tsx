import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";
// eslint-disable-next-line import/extensions, import/no-unresolved
import Layout from "@/components/layouts/Layout";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RMS",
  description: "RMS Website",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
