import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Tailwind,
  Text
} from '@react-email/components';

import { ContactFormData } from '@/types';

export default function EmailNotification({
  firstName,
  lastName
}: ContactFormData) {
  return (
    <Html>
      <Head />
      <Preview>Thank you 🎉</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto px-2 font-sans">
          <Container className="mx-auto my-10 max-w-[400px] rounded-md border border-solid border-gray-200 bg-white p-8 shadow-lg">
            <Img
              src="https://res.cloudinary.com/dtejbwori/image/upload/v1765357604/android-chrome-512x512_ay41vs.png"
              alt="Logo"
              width={100}
              height={100}
              className="mx-auto my-0"
            />
            <Heading className="font-montserrat mx-0 my-0 mb-6 p-0 text-center text-[26px] font-bold text-black">
              Thank you for reaching out
            </Heading>
            <Hr className="my-4 border-t border-gray-200" />
            <Text className="mb-4 text-center text-[15px] leading-6 text-gray-700">
              Dear {firstName} {lastName},
            </Text>
            <Text className="mb-4 text-center text-[15px] leading-6 text-gray-700">
              Thank you for your message. I appreciate you taking the time to
              get in touch. I will review your message and respond as soon as
              possible.
            </Text>
            <Text className="mb-6 text-center text-[15px] leading-6 text-gray-700">
              Best regards,
              <br />
              <span className="font-semibold">Mauricio Lizama</span>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

EmailNotification.PreviewProps = {
  email: 'alanturing@example.com',
  firstName: 'Alan',
  lastName: 'Turing',
  message: 'Este es el contenido del mensaje de prueba.'
};
