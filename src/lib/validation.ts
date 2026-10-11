import { z } from 'zod';

export const checkoutFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian phone number'),
  street: z.string().min(5, 'Street address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  postalCode: z.string().regex(/^\d{6}$/, 'Invalid postal code'),
  country: z.string().default('India'),
});

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>;

export const cartItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().min(1, 'Quantity must be at least 1').max(999, 'Quantity too high'),
});

export const adminLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});
