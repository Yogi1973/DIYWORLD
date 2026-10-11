import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getProductsByCategory } from "@/data/products";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((item) => item.slug === params.slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(params.slug);

  return (
    <div className="category-page">
      <section className="page-hero">
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </section>

      {products.length === 0 ? (
        <div className="empty-state">
          <h2>No products available in this category yet.</h2>
          <p>Check back soon for new DIY essentials.</p>
        </div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
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
      )}
    </div>
  );
}