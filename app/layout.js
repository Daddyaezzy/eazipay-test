import Navbar from "@/components/Navbar";
import "./globals.css";

import { Inter } from "next/font/google";

import Head from "next/head";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eazipay",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;600&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section>
        <body className="section">
          <Navbar />
          {children}
          <Footer />
        </body>
      </section>
    </html>
  );
}
