import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  BLOCKS,
  Block,
  INLINES,
  Inline,
  Document as RichTextDocument
} from '@contentful/rich-text-types';
import Image from 'next/image';

import { NextLink } from '@/components/NextLink';

type RichTextProps = {
  document: RichTextDocument | null;
};

function RichText({ document }: RichTextProps) {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
        const { file, title, description } = node.data.target.fields;
        const isVideo = file.contentType?.includes('video');
        const baseUrl = isVideo
          ? 'https://videos.ctfassets.net'
          : 'https://images.ctfassets.net';
        const imageUrl = new URL(file.url, baseUrl);

        return (
          <figure className="m-2 w-fit nth-of-type-[1]:float-left nth-of-type-[1]:w-2xs nth-of-type-[2]:w-3/5 nth-of-type-[3]:float-right nth-of-type-[3]:w-1/3 nth-of-type-[4]:w-2/3 max-[700px]:nth-of-type-[1]:float-none max-[700px]:nth-of-type-[3]:float-none max-[700px]:nth-of-type-[3]:w-2/3">
            {isVideo ? (
              <video src={imageUrl.toString()} controls className="rounded" />
            ) : (
              <Image
                src={imageUrl.toString()}
                width={file.details.image.width}
                height={file.details.image.height}
                alt={title || 'Embedded Asset'}
                className="rounded"
                loading="eager"
              />
            )}
            {description && (
              <figcaption className="my-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                {description}
              </figcaption>
            )}
          </figure>
        );
      },

      [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => {
        return <p className="mb-4 leading-6">{children}</p>;
      },
      [BLOCKS.HEADING_4]: (node: Block | Inline, children: React.ReactNode) => {
        return <h4 className="mb-4">{children}</h4>;
      },
      [BLOCKS.QUOTE]: (node: Block | Inline, children: React.ReactNode) => {
        return (
          <blockquote className="mb-4 border-l-4 border-gray-300 bg-gray-100 p-4 dark:border-gray-500 dark:bg-gray-800 [&>p:first-child]:m-0">
            {children}
          </blockquote>
        );
      },
      [INLINES.HYPERLINK]: (
        node: Block | Inline,
        children: React.ReactNode
      ) => {
        const url: string = node.data.uri;

        return (
          <NextLink
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-green-700 hover:text-blue-800 dark:text-green-500 dark:hover:text-blue-400"
          >
            {children}
          </NextLink>
        );
      }
    }
  };
  if (!document) {
    return null;
  }

  return <>{documentToReactComponents(document, options)}</>;
}

export default RichText;
