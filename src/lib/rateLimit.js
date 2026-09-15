import { LRUCache } from 'lru-cache';

const tokenCache = new LRUCache({
  max: 500, // Maximum 500 unique IPs
  ttl: 60 * 1000, // 1 minute
});

export function checkRateLimit(ip, limit) {
  const count = tokenCache.get(ip) || 0;
  
  if (count >= limit) {
    return false; // Rate limited
  }
  
  tokenCache.set(ip, count + 1);
  return true; // OK
}
