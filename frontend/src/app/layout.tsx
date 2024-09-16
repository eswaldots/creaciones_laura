import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"],
  display: "swap"
 });

export const metadata: Metadata = {
  title: "Creaciones Laura",
  description: "Creaciones Laura, tortas de todo tipo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' max-w-[100vw] overflow-x-hidden'}>
      <Header/>
      {children}
      <ToastContainer />

      </body>
    </html>
  );
}
