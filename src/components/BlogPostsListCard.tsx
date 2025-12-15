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
    <Card className="min-w-80" key={id}>
      <CardHeader>
        <Image
          alt={alt}
          src={src}
          className="h-full w-full object-cover object-top"
          width={width}
          height={height}
        />
      </CardHeader>
      <CardContent>
        <div>
          <div className="flex flex-col gap-3">
            <h4>{title}</h4>
            <div className="flex flex-col items-start gap-1">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Published on {formattedDate}
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
