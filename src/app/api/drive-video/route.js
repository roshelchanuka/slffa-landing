import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return new NextResponse('Missing Video ID', { status: 400 });
  }

  const driveUrl = `https://drive.google.com/uc?export=download&id=${id}`;

  try {
    const response = await fetch(driveUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
    });

    if (!response.ok) {
      throw new Error(`Google Drive returned ${response.status}`);
    }

    // Pass along the video stream and headers
    const headers = new Headers();
    headers.set('Content-Type', response.headers.get('Content-Type') || 'video/mp4');
    headers.set('Cache-Control', 'public, max-age=86400'); // Cache for 1 day
    
    // Optional: Pass content-length if available
    const contentLength = response.headers.get('Content-Length');
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
