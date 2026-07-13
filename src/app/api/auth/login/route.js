import { SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword || !process.env.JWT_SECRET) {
        console.error("Missing environment variables for authentication");
        return NextResponse.json({ success: false, message: 'Server configuration error' }, { status: 500 });
    }

    if (email === adminEmail && password === adminPassword) {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const alg = 'HS256';
      
      const jwt = await new SignJWT({ role: 'admin' })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(secret);

      const cookieStore = await cookies();
      cookieStore.set('admin_token', jwt, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
