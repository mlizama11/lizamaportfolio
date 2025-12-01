import { NextLink } from '@/components/NextLink';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import {
  Block,
  BLOCKS,
  Inline,
  INLINES,
  Document as RichTextDocument
} from '@contentful/rich-text-types';
import Image from 'next/image';

type RichTextProps = {
  document: RichTextDocument | null;
  imageOptions?: {
    width: number;
    height: number;
    alt?: string;
  };
};

function RichText({ document }: RichTextProps) {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
        const { file, title, description } = node.data.target.fields;
        const imageUrl = new URL(file.url, 'https://images.ctfassets.net');

        return (
          <figure className="w-fit nth-of-type-[1]:float-left nth-of-type-[1]:w-2xs m-2 nth-of-type-[2]:w-3/5 nth-of-type-[3]:float-right nth-of-type-[3]:w-1/3 max-[700px]:nth-of-type-[1]:float-none max-[700px]:nth-of-type-[3]:float-none max-[700px]:nth-of-type-[3]:w-2/3 nth-of-type-[4]:w-2/3">
            <Image
              src={imageUrl.toString()}
              width={file.details.image.width}
              height={file.details.image.height}
              alt={title || 'Embedded Asset'}
              className="rounded"
              loading="eager"
            />
            {description && (
              <figcaption className="text-xs text-gray-500 dark:text-gray-400 my-2 leading-5">
                {description}
              </figcaption>
            )}
          </figure>
        );
      },

      [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => {
        return <p className="mb-4 leading-6">{children}</p>;
      },
      [BLOCKS.QUOTE]: (node: Block | Inline, children: React.ReactNode) => {
        return (
          <blockquote className="p-4 mb-4 bg-gray-100 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800 [&>p:first-child]:m-0">
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
            className="text-green-700 dark:text-green-500 hover:text-blue-800 dark:hover:text-blue-400 font-bold"
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
