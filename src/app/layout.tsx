import type { Metadata } from "next";
import "./globals.css";
import { Providers } from '@/store/provider'

export const metadata: Metadata = {
  title: "Gro8-Admin",
  description: "Gro8-Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
