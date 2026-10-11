import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET || JWT_SECRET.length < 32) {
  throw new Error('JWT_SECRET environment variable must be at least 32 characters');
}

export interface AdminPayload {
  adminId: string;
  email: string;
  iat: number;
  exp: number;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function createToken(adminId: string, email: string): string {
  return jwt.sign(
    { adminId, email },
    JWT_SECRET!,
    { expiresIn: '7d' }
  );
}

export function verifyToken(token: string): AdminPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET!) as AdminPayload;
  } catch {
    return null;
  }
}
