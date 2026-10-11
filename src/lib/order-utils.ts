export function generateOrderNumber(): string {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(5, '0');
  return `ORD-${date}-${random}`;
}

export function formatPrice(priceInPaise: number): string {
  return `₹${(priceInPaise / 100).toFixed(2)}`;
}

export function calculateDiscount(originalInPaise: number, currentInPaise: number): number {
  if (!originalInPaise || originalInPaise <= currentInPaise) return 0;
  return Math.round(((originalInPaise - currentInPaise) / originalInPaise) * 100);
}
