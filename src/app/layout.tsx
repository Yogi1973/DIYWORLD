import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIY World",
  description: "DIY products delivered across India.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <a href="/" className="brand">DIY World</a>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <p>© DIY World</p>
        </footer>
      </body>
    </html>
  );
}
