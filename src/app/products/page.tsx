"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { categories, products } from "@/data/products";

type SortType = "featured" | "price-low" | "price-high" | "rating";

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState<SortType>("featured");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesQuery =
        !normalizedQuery ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery) ||
        product.shortDescription.toLowerCase().includes(normalizedQuery);

      const matchesCategory =
        selectedCategory === "all" || product.category === categories.find((cat) => cat.slug === selectedCategory)?.name;

      return matchesQuery && matchesCategory;
    });

    switch (sortBy) {
      case "price-low":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "rating":
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case "featured":
      default:
        return [...filtered].sort((a, b) => Number(b.featured) - Number(a.featured));
    }
  }, [query, selectedCategory, sortBy]);

  return (
    <div className="catalog-page">
      <section className="page-hero">
        <h1>Our Products</h1>
        <p>Shop quality DIY tools and home improvement essentials</p>
      </section>

      <div className="catalog-controls">
        <div className="search-bar">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
          />
        </div>

        <div className="filter-row">
          <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
            <option value="all">All categories</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>

          <select value={sortBy} onChange={(event) => setSortBy(event.target.value as SortType)}>
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="results-meta">
        <span>{filteredProducts.length} products found</span>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="empty-state">
          <h2>No products matched your search.</h2>
          <p>Try a different keyword or category.</p>
          <Link href="/products" className="btn btn-primary">
            Reset filters
          </Link>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
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
                <p className="product-short-description">{product.shortDescription}</p>
                <div className="product-price">
                  <span className="current">₹{product.price}</span>
                  {product.originalPrice > 0 && <span className="original">₹{product.originalPrice}</span>}
                </div>
                <div className="product-stock">
                  {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
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