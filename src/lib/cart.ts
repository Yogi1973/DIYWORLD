export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  lastUpdated: number;
}

const CART_KEY = 'diyworld_cart';

export function getCart(): CartState {
  if (typeof window === 'undefined') return { items: [], lastUpdated: 0 };

  try {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : { items: [], lastUpdated: 0 };
  } catch {
    return { items: [], lastUpdated: 0 };
  }
}

export function setCart(cart: CartState): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {
    console.error('Failed to save cart');
  }
}

export function addToCart(productId: string, quantity: number): CartState {
  const cart = getCart();
  const existingItem = cart.items.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  cart.lastUpdated = Date.now();
  setCart(cart);
  return cart;
}

export function removeFromCart(productId: string): CartState {
  const cart = getCart();
  cart.items = cart.items.filter((item) => item.productId !== productId);
  cart.lastUpdated = Date.now();
  setCart(cart);
  return cart;
}

export function updateCartItem(productId: string, quantity: number): CartState {
  const cart = getCart();
  const item = cart.items.find((item) => item.productId === productId);

  if (item) {
    if (quantity > 0) {
      item.quantity = quantity;
    } else {
      cart.items = cart.items.filter((item) => item.productId !== productId);
    }
  }

  cart.lastUpdated = Date.now();
  setCart(cart);
  return cart;
}

export function clearCart(): CartState {
  const cart: CartState = { items: [], lastUpdated: Date.now() };
  setCart(cart);
  return cart;
}
