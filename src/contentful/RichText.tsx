import { NextLink } from '@/components/NextLink';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import {
  BLOCKS,
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
      // type any is used because the node type from Contentful is complex and not strictly typed here
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { file, title } = node.data.target.fields;
        const imageUrl = new URL(file.url, 'https://images.ctfassets.net');

        return (
          <figure className="w-fit odd:float-left odd:w-2xs mr-4 mb-2 even:float-none even:w-3/5 max-[700px]:odd:float-none">
            <Image
              src={imageUrl.toString()}
              width={file.details.image.width}
              height={file.details.image.height}
              alt={title || 'Embedded Asset'}
              className="rounded"
              loading="eager"
            />
          </figure>
        );
      },

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
        return <p className="mb-4 leading-6">{children}</p>;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => {
        return (
          <blockquote className="p-4 mb-4 bg-gray-100 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800 [&>p:first-child]:m-0">
            {children}
          </blockquote>
        );
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
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
