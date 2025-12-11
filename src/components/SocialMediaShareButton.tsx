'use client';

import { usePathname } from 'next/navigation';
import { FiShare2 } from 'react-icons/fi';
import {
  BlueskyIcon,
  BlueskyShareButton,
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share';

import { siteDescription, siteTitle, siteUrl } from '@/constants/site';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger
} from './ui/drawer';

export default function SocialMediaShareButton() {
  const pathname = usePathname();
  const url = `${siteUrl}${pathname}`;
  const sharingDefaultTitle = `Thanks for sharing ${siteTitle}`;
  return (
    <Drawer>
      <DrawerTrigger aria-label="Share button">
        <FiShare2 size={15} />
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerTitle>Thanks for sharing!</DrawerTitle>
          <DrawerDescription className="sr-only">
            Buttons to share this content on social media platforms
          </DrawerDescription>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <EmailShareButton
              url={url}
              subject={sharingDefaultTitle}
              separator=" | "
              body={siteDescription}
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
            <FacebookShareButton url={url}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <WhatsappShareButton url={url} title={sharingDefaultTitle}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton url={url}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <BlueskyShareButton url={url}>
              <BlueskyIcon size={32} round />
            </BlueskyShareButton>
            <TelegramShareButton url={url} title={sharingDefaultTitle}>
              <TelegramIcon size={32} round />
            </TelegramShareButton>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}
