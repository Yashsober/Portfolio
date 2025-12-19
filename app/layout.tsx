// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const departureMono = localFont({
  src: "./fonts/DepartureMono-Regular.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yash Drabhlani",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/nes.css@latest/css/nes.min.css"
        />
      </head>
      <body className={departureMono.className}>
       

        <div className="page-wrapper">{children}</div>
      </body>
    </html>
  );
}
