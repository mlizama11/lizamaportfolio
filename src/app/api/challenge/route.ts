import { createChallenge } from 'altcha-lib';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const challenge = await createChallenge({
      hmacKey: process.env.ALTCHA_HMAC_KEY!,
      maxnumber: 50000,
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
