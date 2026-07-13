export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return new Response('Missing id', { status: 400 });
  }

  try {
    const googleDriveUrl = `https://drive.google.com/uc?export=download&id=${id}`;
    
    // Pass along the Range header if it exists for video streaming support
    const fetchHeaders = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    };
    if (request.headers.has('range')) {
      fetchHeaders['Range'] = request.headers.get('range');
    }

    const response = await fetch(googleDriveUrl, {
      headers: fetchHeaders
    });

    if (!response.ok) {
      throw new Error(`Google Drive API responded with ${response.status}`);
    }

    let contentType = response.headers.get('content-type');
    const disposition = response.headers.get('content-disposition');
    
    // If Google Drive returns generic octet-stream, try to infer video type from filename
    if (contentType === 'application/octet-stream' && disposition) {
      const lowerDisp = disposition.toLowerCase();
      if (lowerDisp.includes('.mp4') || lowerDisp.includes('.mov')) {
        contentType = 'video/mp4';
      } else if (lowerDisp.includes('.webm')) {
        contentType = 'video/webm';
      }
    }
    
    // Set up response headers to support streaming/seeking
    const responseHeaders = new Headers();
    responseHeaders.set('Content-Type', contentType || 'application/octet-stream');
    responseHeaders.set('Cache-Control', 'public, max-age=86400, immutable');
    
    // Pass through relevant streaming headers
    if (response.headers.has('content-length')) {
      responseHeaders.set('Content-Length', response.headers.get('content-length'));
    }
    if (response.headers.has('accept-ranges')) {
      responseHeaders.set('Accept-Ranges', response.headers.get('accept-ranges'));
    }
    if (response.headers.has('content-range')) {
      responseHeaders.set('Content-Range', response.headers.get('content-range'));
    }

    return new Response(response.body, {
      status: response.status,
      headers: responseHeaders
    });
  } catch (error) {
    console.error('Image proxy error:', error);
    return new Response('Failed to fetch image', { status: 500 });
  }
}
