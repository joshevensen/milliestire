import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Millie Stire",
  description: "1928 to 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full min-h-vh px-8 pb-8 bg-cyan-50 text-2xl">
        {children}
      </body>
    </html>
  );
}
