import { render } from '@react-email/components';
import { verifySolution } from 'altcha-lib';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import EmailMessage from '@/components/emails/EmailMessage';
import EmailNotification from '@/components/emails/EmailNotification';
import { siteTitle } from '@/constants/site';
import { getEnv } from '@/lib/env';
import { createRateLimiter, getClientIp } from '@/lib/rateLimit';
import { contactFormSchema } from '@/lib/validationSchemas';
import { ContactFormData } from '@/types';

// Rate limiter: 5 requests per 15 minutes per IP
const emailRateLimiter = createRateLimiter(15 * 60 * 1000, 5);

export async function POST(req: Request) {
  try {
    const clientIp = getClientIp(req);
    const rateLimitResult = emailRateLimiter(clientIp);

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // Validate input against schema
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const errors = validationResult.error.issues
        .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
        .join('; ');
      return NextResponse.json(
        { error: `Validation error: ${errors}` },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, companyName, message, altcha } =
      validationResult.data;

    // Verify the Altcha Payload
    const env = getEnv();
    const isValid = await verifySolution(altcha, env.ALTCHA_HMAC_KEY);

    if (!isValid) {
      return NextResponse.json({ error: 'Invalid captcha' }, { status: 400 });
    }

    const emailHtml = await render(
      EmailMessage({
        firstName,
        lastName,
        companyName,
        email,
        message
      } as ContactFormData)
    );

    const notificationEmailHtml = await render(
      EmailNotification({
        firstName,
        lastName
      } as ContactFormData)
    );

    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: Number(env.EMAIL_PORT),
      secure: true,
      auth: {
        user: env.AUTH_EMAIL,
        pass: env.PASSWORD
      }
    });

    await transporter.sendMail({
      from: env.AUTH_EMAIL,
      to: env.REPLY_EMAIL,
      subject: `New message from ${email} at ${siteTitle}.`,
      html: emailHtml,
      replyTo: email
    });

    await transporter.sendMail({
      from: env.AUTH_EMAIL,
      to: email,
      subject: 'Thank you for contacting me!',
      html: notificationEmailHtml,
      replyTo: env.REPLY_EMAIL
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
