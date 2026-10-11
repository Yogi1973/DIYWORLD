import crypto from 'crypto';

export interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export function verifyRazorpaySignature(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  const secret = process.env.RAZORPAY_SECRET_KEY;
  if (!secret) {
    console.warn('RAZORPAY_SECRET_KEY not configured');
    return false;
  }

  const body = orderId + '|' + paymentId;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');

  return expectedSignature === signature;
}

export async function createRazorpayOrder(
  amountInPaise: number,
  orderId: string
): Promise<{ id: string } | null> {
  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_SECRET_KEY;

  if (!keyId || !keySecret) {
    console.warn('Razorpay credentials not configured');
    return null;
  }

  try {
    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amountInPaise,
        currency: 'INR',
        receipt: orderId,
        notes: {
          orderId,
        },
      }),
    });

    if (!response.ok) {
      console.error('Razorpay API error:', response.statusText);
      return null;
    }

    const data = await response.json();
    return { id: data.id };
  } catch (error) {
    console.error('Razorpay order creation failed:', error);
    return null;
  }
}
