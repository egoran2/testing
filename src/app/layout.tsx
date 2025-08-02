import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EU Residency Pro - Your Path to European Residency",
  description: "Expert guidance for Russian-speaking IT professionals seeking European residency permits. Fast, reliable, and legally compliant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
