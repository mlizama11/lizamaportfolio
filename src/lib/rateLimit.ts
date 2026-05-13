// Simple in-memory rate limiting for serverless environments
// For production, consider Redis-backed rate limiting
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function createRateLimiter(windowMs: number, maxRequests: number) {
  return (identifier: string): { allowed: boolean; remaining: number } => {
    const now = Date.now();
    const existing = rateLimitStore.get(identifier);

    if (!existing || now > existing.resetTime) {
      rateLimitStore.set(identifier, { count: 1, resetTime: now + windowMs });
      return { allowed: true, remaining: maxRequests - 1 };
    }

    if (existing.count >= maxRequests) {
      return { allowed: false, remaining: 0 };
    }

    existing.count++;
    return { allowed: true, remaining: maxRequests - existing.count };
  };
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  // Fallback for development
  return request.headers.get('cf-connecting-ip') || 'unknown';
}
