import { NextResponse } from 'next/server';
import { z } from 'zod';
import { checkRateLimit } from '../../../lib/rateLimit';

// Validate that ID contains letters, numbers, hyphens, and underscores (typical Google Drive ID)
const idSchema = z.string().min(10).regex(/^[a-zA-Z0-9_-]+$/);

/**
 * @param {Request} request 
 */
export async function GET(request) {
  // Rate limiting (60 requests per minute per IP)
  const forwardedFor = request.headers.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : (request.headers.get('x-real-ip') || 'unknown');
  const isAllowed = checkRateLimit(ip, 60);

  if (!isAllowed) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }

  const { searchParams } = new URL(request.url);
  const rawId = searchParams.get('id');

  const validationResult = idSchema.safeParse(rawId);
  if (!validationResult.success) {
    return new NextResponse('Invalid or Missing Video ID', { status: 400 });
  }
  const id = validationResult.data;

  const secret = searchParams.get('secret');
  if (process.env.DRIVE_PROXY_SECRET && secret !== process.env.DRIVE_PROXY_SECRET) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const driveUrl = `https://drive.google.com/uc?export=download&id=${id}`;

  try {
    const controller = new AbortController();
    // 10 second timeout for the request connection
    const timeoutId = setTimeout(() => controller.abort(), 10000); 

    const response = await fetch(driveUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Google Drive returned ${response.status}`);
    }

    const contentType = response.headers.get('Content-Type') || '';
    if (!contentType.startsWith('video/')) {
      return new NextResponse('Invalid content type. Only video is allowed.', { status: 400 });
    }

    // Optional: Pass content-length if available and enforce max size (e.g. 50MB limit = 50 * 1024 * 1024 bytes)
    const contentLength = response.headers.get('Content-Length');
    if (contentLength && parseInt(contentLength, 10) > 52428800) {
      return new NextResponse('Video file is too large (max 50MB).', { status: 413 });
    }

    // Pass along the video stream and headers
    const headers = new Headers();
    headers.set('Content-Type', contentType || 'video/mp4');
    headers.set('Cache-Control', 'public, max-age=86400'); // Cache for 1 day
    
    // Optional: Pass content-length if available
    if (contentLength) {
      headers.set('Content-Length', contentLength);
    }

    return new NextResponse(response.body, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Video Proxy Error:', error);
    return new NextResponse('Error streaming video', { status: 500 });
  }
}
