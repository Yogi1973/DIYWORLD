import Link from "next/link";
import { categories, products } from "@/data/products";

const featuredProducts = products.filter((product) => product.featured).slice(0, 4);
const trendingProducts = products.filter((product) => product.trending).slice(0, 4);

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Built for smart DIY homes</p>
          <h1>DIY essentials for every project, room, and repair.</h1>
          <p>
            Shop quality tools, smart home upgrades, home improvement supplies, and
            creative essentials delivered across India.
          </p>

          <div className="hero-cta">
            <Link href="/products" className="btn btn-primary btn-small">
              Shop now
            </Link>
            <Link href="/categories/tools" className="btn btn-secondary btn-small">
              Explore categories
            </Link>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <h2>Browse by category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <Link href={`/categories/${category.slug}`} key={category.slug} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2>Featured products</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.discount > 0 && <span className="product-badge">{product.discount}% OFF</span>}
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <Link href={`/products/${product.slug}`} className="product-title">
                  {product.name}
                </Link>
                <div className="product-price">
                  <span className="current">₹{product.price}</span>
                  {product.originalPrice > 0 && <span className="original">₹{product.originalPrice}</span>}
                </div>
                <div className="product-stock">
                  {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                </div>
                <div className="product-actions">
                  <Link href={`/products/${product.slug}`} className="btn btn-secondary btn-small">
                    View
                  </Link>
                  <button type="button" className="btn btn-primary btn-small">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2>Trending now</h2>
        <div className="products-grid">
          {trendingProducts.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.discount > 0 && <span className="product-badge">{product.discount}% OFF</span>}
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <Link href={`/products/${product.slug}`} className="product-title">
                  {product.name}
                </Link>
                <div className="product-price">
                  <span className="current">₹{product.price}</span>
                  {product.originalPrice > 0 && <span className="original">₹{product.originalPrice}</span>}
                </div>
                <div className="product-actions">
                  <Link href={`/products/${product.slug}`} className="btn btn-secondary btn-small">
                    Details
                  </Link>
                  <button type="button" className="btn btn-primary btn-small">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}