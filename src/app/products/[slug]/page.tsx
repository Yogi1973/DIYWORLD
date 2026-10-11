import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="product-detail-page">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span> / </span>
        <Link href="/products">Products</Link>
        <span> / </span>
        <span>{product.name}</span>
      </div>

      <div className="product-detail-layout">
        <div className="product-gallery">
          <img src={product.image} alt={product.name} className="detail-image" />
        </div>

        <div className="product-summary">
          <p className="product-category-badge">{product.category}</p>
          <h1>{product.name}</h1>
          <div className="rating-row">
            <span>⭐ {product.rating}</span>
            <span>{product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}</span>
          </div>

          <div className="product-price detail-price">
            <span className="current">₹{product.price}</span>
            {product.originalPrice > 0 && <span className="original">₹{product.originalPrice}</span>}
            {product.discount > 0 && <span className="discount">{product.discount}% off</span>}
          </div>

          <p className="product-description">{product.description}</p>

          <div className="detail-actions">
            <div className="quantity-selector" aria-label="Quantity selector">
              <button type="button">−</button>
              <span>1</span>
              <button type="button">+</button>
            </div>
            <button type="button" className="btn btn-primary">
              Add to cart
            </button>
          </div>

          <div className="detail-features">
            <h3>Highlights</h3>
            <ul>
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-section">
          <h2>Related products</h2>
          <div className="products-grid">
            {relatedProducts.map((item) => (
              <article key={item.id} className="product-card">
                <div className="product-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="product-info">
                  <span className="product-category">{item.category}</span>
                  <Link href={`/products/${item.slug}`} className="product-title">
                    {item.name}
                  </Link>
                  <div className="product-price">
                    <span className="current">₹{item.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}