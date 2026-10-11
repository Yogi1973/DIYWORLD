import Link from "next/link";

export const metadata = {
  title: "DIY World | Home Improvement & DIY Essentials",
  description: "Shop DIY products, tools, home improvement essentials, and creative supplies in India.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="header-content">
            <Link href="/" className="brand" aria-label="DIY World home">
              DIY World
            </Link>

            <nav className="nav-links" aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/categories/tools">Categories</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/track-order">Track order</Link>
              <Link href="/cart" className="cart-icon" aria-label="Shopping cart">
                Cart <span className="cart-count">3</span>
              </Link>
            </nav>
          </div>
        </header>

        <main className="container main-content">{children}</main>

        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>DIY World</h3>
              <ul>
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/track-order">Track order</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Shop</h3>
              <ul>
                <li><Link href="/products">All products</Link></li>
                <li><Link href="/categories/tools">Tools</Link></li>
                <li><Link href="/categories/home-improvement">Home improvement</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Support</h3>
              <ul>
                <li><Link href="/shipping-policy">Shipping policy</Link></li>
                <li><Link href="/return-refund-policy">Returns & refunds</Link></li>
                <li><Link href="/privacy-policy">Privacy policy</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Legal</h3>
              <ul>
                <li><Link href="/terms">Terms</Link></li>
                <li><Link href="/privacy-policy">Privacy</Link></li>
                <li><Link href="/contact">Help center</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">© 2026 DIY World. Built for customers across India.</div>
        </footer>
      </body>
    </html>
  );
}
