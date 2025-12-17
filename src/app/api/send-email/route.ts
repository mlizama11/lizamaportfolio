import { render } from '@react-email/components';
import { verifySolution } from 'altcha-lib';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import EmailMessage from '@/components/emails/EmailMessage';
import EmailNotification from '@/components/emails/EmailNotification';
import { siteTitle } from '@/constants/site';
import { ContactFormData } from '@/types';

export async function POST(req: Request) {
  try {
    const body: ContactFormData = await req.json();
    const { firstName, lastName, email, companyName, message, altcha } = body;

    // 1. Verify the Altcha Payload
    if (!altcha) {
      return NextResponse.json(
        { error: 'Altcha verification missing' },
        { status: 400 }
      );
    }

    const isValid = await verifySolution(altcha, process.env.ALTCHA_HMAC_KEY!);

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
      host: process.env.SMTP_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.AUTH_EMAIL,
      to: process.env.REPLY_EMAIL,
      subject: `New message from ${email} at ${siteTitle}.`,
      html: emailHtml,
      replyTo: email
    });

    await transporter.sendMail({
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: 'Thank you for contacting me!',
      html: notificationEmailHtml,
      replyTo: process.env.REPLY_EMAIL
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
  }
}
