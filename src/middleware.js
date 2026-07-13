import { NextResponse } from 'next/server';

export async function middleware(request) {
  const token = request.cookies.get('admin_token')?.value;

  // If trying to access login page while already logged in
  if (request.nextUrl.pathname.startsWith('/login') && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login'],
};
