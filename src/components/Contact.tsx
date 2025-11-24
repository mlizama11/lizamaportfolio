import { ContactForm } from './ContactForm';
import { ContactSideInfos } from './ContactSideInfos';

export default function Contact() {
  return (
    <div className="flex w-full flex-row gap-x-20 gap-y-8 max-[700px]:flex-wrap">
      <ContactSideInfos />
      <ContactForm />
    </div>
  );
}
