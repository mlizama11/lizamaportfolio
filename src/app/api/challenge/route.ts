import { createChallenge } from 'altcha-lib';
import { NextResponse } from 'next/server';

import { getEnv } from '@/lib/env';
import { createRateLimiter, getClientIp } from '@/lib/rateLimit';

// Rate limiter: 20 requests per 5 minutes per IP (more lenient than send-email)
const challengeRateLimiter = createRateLimiter(5 * 60 * 1000, 20);

export async function GET(req: Request) {
  try {
    const clientIp = getClientIp(req);
    const rateLimitResult = challengeRateLimiter(clientIp);

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const env = getEnv();
    const challenge = await createChallenge({
      hmacKey: env.ALTCHA_HMAC_KEY,
      maxnumber: 50000
    });

    return NextResponse.json(challenge);
  } catch (error) {
    console.error('Error generating challenge:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
