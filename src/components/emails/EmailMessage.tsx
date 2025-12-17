import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Tailwind,
  Text
} from '@react-email/components';

import { siteUrl } from '@/constants/site';
import { ContactFormData } from '@/types';

export default function EmailMessage({
  firstName,
  lastName,
  companyName,
  email,
  message
}: ContactFormData) {
  return (
    <Html>
      <Head />
      <Preview>New message received 🎉</Preview>
      <Tailwind>
        <Body className="px-2 font-sans">
          <Container className="my-10 max-w-sm rounded border border-gray-200 bg-white p-6 shadow-lg">
            <Img
              src="https://res.cloudinary.com/dtejbwori/image/upload/v1765357604/android-chrome-512x512_ay41vs.png"
              alt="Logo"
              width={100}
              height={100}
              className="mx-auto my-0"
            />
            <Heading className="mx-0 my-0 mb-6 p-0 text-center text-2xl font-bold text-black">
              New message received
            </Heading>
            <Hr className="my-4 border-t border-gray-300" />

            <Text className="mb-2 text-sm leading-6 text-gray-700">
              <span>Message from</span>{' '}
              <strong>
                {firstName} {lastName} {companyName ? `| ${companyName}` : ''}
              </strong>
            </Text>
            <Text className="mb-2 text-sm leading-6 text-gray-700">
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
            <Hr className="my-4 border-t border-gray-300" />
            <Text className="h-auto text-sm text-black">{message}</Text>
            <Hr className="my-4 border-t border-gray-300" />
            <Text className="text-sm text-gray-500">
              This message was sent from{' '}
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
  companyName: 'Acme',
  message: 'This is a sample message to demonstrate the email layout.'
};
