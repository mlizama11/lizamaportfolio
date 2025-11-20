'use server';

import { render } from '@react-email/components';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { EmailMessage } from '@/components/emails/EmailMessage';

import { ContactFormData } from '@/types';

export async function sendEmail(formData: ContactFormData) {
  const firstName = formData.firstName;
  const lastName = formData.lastName;
  const companyName = formData.companyName;
  const email = formData.email;
  const message = formData.message;

  return NextResponse.json({ message: 'Form submitted successfully!' });

  const emailHtml = await render(
    EmailMessage({
      firstName,
      lastName,
      companyName,
      email,
      message,
    })
  );

  const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: 'mlizamaoliger@gmail.com',
      subject: `New message from ${email} at mlizama.eu portfolio.`,
      html: emailHtml,
      replyTo: email,
    });
    return {
      success: true,
      message: 'Mensaje enviado correctamente. ¡Gracias por contactarnos!',
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message:
        'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    };
  }
}
