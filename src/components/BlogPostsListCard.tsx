import Image from 'next/image';

import { formatDate } from '@/lib/dateFormat';
import { BlogPost, SimpleImage } from '@/types';

import { Card, CardContent, CardHeader } from './Card';
import { NextLink } from './NextLink';

export function BlogPostsListCard({
  singlePost,
  image
}: {
  singlePost: BlogPost;
  image: SimpleImage;
}) {
  const { id, updatedAt, title, description, date, slug } = singlePost;
  const { src, alt, width, height } = image;
  const formattedDate = formatDate(date);
  const formattedUpdatedAt = formatDate(updatedAt);

  return (
    <Card key={id}>
      <CardHeader className="h-50">
        <Image
          alt={alt}
          src={src}
          className="h-full w-full object-cover"
          width={width}
          height={height}
        />
      </CardHeader>
      <CardContent>
        <div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold dark:text-white dark:hover:text-blue-400">
              {title}
            </h4>
            <div className="flex items-center gap-1 max-[700px]:flex-col max-[700px]:items-start">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {formattedDate}
              </span>
              <span className="mx-2 text-[12px] text-gray-500 max-[700px]:hidden">
                |
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Updated on {formattedUpdatedAt}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <NextLink href={`/blog/${slug}`} variant="secondary">
            Read More
          </NextLink>
        </div>
      </CardContent>
    </Card>
  );
}
