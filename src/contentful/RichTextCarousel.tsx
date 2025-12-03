'use client';

import {
  BLOCKS,
  Document as RichTextDocument
} from '@contentful/rich-text-types';
import Image from 'next/image';

import { Card, CardContent, CardHeader } from '@/components/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

type RichTextProps = {
  document: RichTextDocument | null;
};

export function RichTextCarousel({ document }: RichTextProps) {
  if (!document) {
    return null;
  }

  const images: { url: string; title: string; description: string }[] = [];

  document.content.forEach((node) => {
    if (node.nodeType === BLOCKS.EMBEDDED_ASSET) {
      const { file, title, description } = node.data.target.fields;
      const baseUrl = file.contentType?.includes('video')
        ? 'https://videos.ctfassets.net'
        : 'https://images.ctfassets.net';
      const imageUrl = new URL(file.url, baseUrl);

      images.push({
        url: imageUrl.toString(),
        title: title || 'Embedded Asset',
        description: description || ''
      });
    }
  });

  if (images.length === 0) {
    return null;
  }

  return (
    <Carousel
      className="w-full max-w-xs rounded-lg sm:max-w-sm md:max-w-md lg:max-w-lg"
      orientation="horizontal"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem className="rounded-lg" key={index}>
            <div>
              <Card className="flex h-full flex-col border-0">
                <CardHeader className="flex-1 overflow-hidden rounded-lg">
                  <figure className="aspect-auto h-full w-full">
                    <Image
                      src={image.url}
                      alt={image.title}
                      width={800}
                      height={600}
                      className="h-full w-full rounded-lg object-cover"
                      loading="eager"
                    />
                  </figure>
                </CardHeader>
                <CardContent className="shrink-0">
                  <div className="min-h-12 px-2 pb-6 text-center text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                    {image.description}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex w-full items-center justify-center">
        <CarouselPrevious className="max-[700px]:relative min-[700px]:top-50" />
        <CarouselNext className="max-[700px]:relative min-[700px]:top-50" />
      </div>
    </Carousel>
  );
}
