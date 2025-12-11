'use client';

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

import { SocialMediaShareProps } from '@/types';

export function SocialMediaShareBlog({
  url,
  siteDescription,
  sharingDefaultTitle
}: SocialMediaShareProps) {
  return (
    <div className="flex flex-wrap gap-8">
      <EmailShareButton
        url={url}
        subject={sharingDefaultTitle}
        separator=" |"
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
  );
}
