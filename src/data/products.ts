export type Category = {
  name: string;
  slug: string;
  icon: string;
  description: string;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  stock: number;
  featured: boolean;
  trending: boolean;
  image: string;
  shortDescription: string;
  description: string;
  features: string[];
};

export const categories: Category[] = [
  { name: "Tools", slug: "tools", icon: "🧰", description: "Everyday essentials for repairs and upgrades." },
  { name: "Home Improvement", slug: "home-improvement", icon: "🏠", description: "Smart fixes for home spaces and interiors." },
  { name: "Electricals", slug: "electricals", icon: "💡", description: "Lighting, wiring, and home energy upgrades." },
  { name: "Storage", slug: "storage", icon: "📦", description: "Organize rooms, workshops, and garages." },
  { name: "Paint & Finish", slug: "paint-finish", icon: "🎨", description: "Decor, protection, and personal finishes." },
  { name: "Garden", slug: "garden", icon: "🌿", description: "Outdoor care and small-space gardening." },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Multi-Tool Repair Kit",
    slug: "multi-tool-repair-kit",
    category: "Tools",
    price: 1299,
    originalPrice: 1799,
    discount: 28,
    rating: 4.8,
    stock: 42,
    featured: true,
    trending: true,
    image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d4e8?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Compact repair toolkit for household fixes and quick maintenance.",
    description: "Built for routine home repairs, this compact toolkit has all essential hand tools to handle quick fixes across the home, office, and workshop.",
    features: ["18 included tools", "Metal alloy body", "Compact organizer case", "Ergonomic grip"],
  },
  {
    id: 2,
    name: "Smart LED Work Light",
    slug: "smart-led-work-light",
    category: "Electricals",
    price: 2499,
    originalPrice: 3299,
    discount: 24,
    rating: 4.7,
    stock: 18,
    featured: true,
    trending: true,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Portable LED work light for workshops, garages, and home projects.",
    description: "Adjustable brightness and a durable, lightweight frame make this LED work light one of the easiest ways to brighten workspaces or repair zones.",
    features: ["360° adjustable head", "Rechargeable battery", "Water-resistant finish", "3 brightness modes"],
  },
  {
    id: 3,
    name: "Wall Organizer Rack",
    slug: "wall-organizer-rack",
    category: "Storage",
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    rating: 4.9,
    stock: 30,
    featured: true,
    trending: false,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Modular wall system for tools, accessories, and small household items.",
    description: "Keep work zones tidy with this functional wall organizer that improves access, saves floor space, and makes tool storage easier.",
    features: ["Heavy-duty hooks", "Wall mountable", "Rust-resistant coating", "Easy installation"],
  },
  {
    id: 4,
    name: "Premium Paint Brush Set",
    slug: "premium-paint-brush-set",
    category: "Paint & Finish",
    price: 1499,
    originalPrice: 2199,
    discount: 32,
    rating: 4.6,
    stock: 22,
    featured: true,
    trending: true,
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Professional brush set for walls, furniture, and accent work.",
    description: "This premium set gives smooth finishes for painting projects across furniture, walls, and home enhancements.",
    features: ["4 brush sizes", "Synthetic blend bristles", "Scratch-resistant handles", "Easy clean-up"],
  },
  {
    id: 5,
    name: "Cordless Drill Driver",
    slug: "cordless-drill-driver",
    category: "Tools",
    price: 4999,
    originalPrice: 6299,
    discount: 21,
    rating: 4.9,
    stock: 14,
    featured: false,
    trending: true,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Powerful yet compact drilling solution for home and workshop uses.",
    description: "A go-to power tool for drilling, driving, and general home updates that require strong everyday performance.",
    features: ["18V battery", "Variable speed", "Keyless chuck", "Built-in LED"],
  },
  {
    id: 6,
    name: "Smart Door Lock",
    slug: "smart-door-lock",
    category: "Home Improvement",
    price: 6999,
    originalPrice: 8999,
    discount: 22,
    rating: 4.8,
    stock: 9,
    featured: false,
    trending: true,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Modern keyless door security for residential entry points.",
    description: "Secure your home with a smart lock designed for convenience, installation simplicity, and daily household protection.",
    features: ["Fingerprint unlock", "App support", "Low-battery alerts", "Anti-theft design"],
  },
  {
    id: 7,
    name: "Mini Garden Tool Kit",
    slug: "mini-garden-tool-kit",
    category: "Garden",
    price: 1799,
    originalPrice: 2399,
    discount: 25,
    rating: 4.5,
    stock: 26,
    featured: false,
    trending: false,
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Compact growing kit for balconies, patios, and small green spaces.",
    description: "A lightweight gardening set designed for small-space planting and simple upkeep in apartments and urban homes.",
    features: ["6-piece set", "Ergonomic handles", "Rust-resistant steel", "Ideal for small gardens"],
  },
  {
    id: 8,
    name: "USB Rechargeable Lamp",
    slug: "usb-rechargeable-lamp",
    category: "Electricals",
    price: 1399,
    originalPrice: 1899,
    discount: 26,
    rating: 4.7,
    stock: 33,
    featured: false,
    trending: false,
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Portable rechargeable lamp for study corners, shelves, and reading spots.",
    description: "A flexible lighting solution that works well for desk areas, hallways, and bedroom corners with a clean, modern look.",
    features: ["USB recharge", "Adjustable neck", "Warm white glow", "Long battery life"],
  },
];

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);

export const getProductsByCategory = (slug: string) =>
  products.filter((product) => {
    const category = categories.find((item) => item.slug === slug);
    return category ? product.category === category.name : false;
  });