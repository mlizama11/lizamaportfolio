import { render } from '@react-email/components';
import { verifySolution } from 'altcha-lib';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import EmailMessage from '@/components/emails/EmailMessage';
import EmailNotification from '@/components/emails/EmailNotification';
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
      host: 'ssl0.ovh.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: 'mlizamaoliger@gmail.com',
      subject: `New message from ${email} at mlizama.eu portfolio.`,
      html: emailHtml,
      replyTo: email
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Thank you for contacting me!',
      html: notificationEmailHtml,
      replyTo: 'mlizamaoliger@gmail.com'
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
  }
}
