import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

import { siteUrl } from '@/constants/site';
import { ContactFormData } from '@/types';

function EmailMessage({
  firstName,
  lastName,
  companyName,
  email,
  message,
}: ContactFormData) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje email recibido 🎉</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded-lg border border-solid border-[#eaeaea] bg-white p-[32px] shadow-lg">
            <Heading className="font-montserrat mx-0 my-0 mb-6 p-0 text-center text-[26px] font-bold text-black">
              Nuevo mensaje recibido
            </Heading>
            <Hr className="my-4 border-t border-[#eaeaea]" />
            <Text className="mb-2 text-[15px] leading-[24px] text-gray-700">
              <span>Mensaje de</span>{' '}
              <strong>
                {firstName} {lastName} {companyName ? `| ${companyName}` : ''}
              </strong>
            </Text>
            <Text className="mb-2 text-[15px] leading-[24px] text-gray-700">
              <span>Email:</span>{' '}
              <strong>
                <Link
                  href={`mailto:${email}`}
                  className="text-blue-500 underline"
                >
                  {email}
                </Link>
              </strong>
            </Text>
            <Hr className="my-6 border-t border-[#eaeaea]" />
            <Text className="text-md h-auto p-4 text-black">{message}</Text>
            <Hr className="my-6 border-t border-[#eaeaea]" />
            <Text className="text-md text-center text-gray-500">
              Este mensaje fue enviado desde{' '}
              <Link
                href={siteUrl}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteUrl}
              </Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

EmailMessage.PreviewProps = {
  email: 'alanturing@example.com',
  firstName: 'Alan',
  lastName: 'Turing',
  message:
    'Cualquier cosa que quieras decir aquí puede ir en este mensaje. mas información sobre el mensaje',
};

export { EmailMessage };
