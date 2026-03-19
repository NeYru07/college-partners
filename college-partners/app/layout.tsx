import type { Metadata } from "next";
import "./globals.css";
import Header from './components/Header'
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Партнеры колледжа ТСПК",
  description: "Партнеры колледжа ТСПК",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`$ h-full antialiased`}
    >
      <body className="min-h-full flex flex-col w-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
