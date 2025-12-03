import { BlogPostsListProps } from '@/types';

import { BlogPostsListCard } from './BlogPostsListCard';

export function BlogPostsList({ blogPosts }: BlogPostsListProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid gap-8 md:grid-cols-2">
        {blogPosts.map((singlePost) => {
          if (!singlePost.image) return null;
          const { src, alt, width, height } = singlePost.image;
          return (
            <BlogPostsListCard
              key={singlePost.id}
              singlePost={singlePost}
              image={{ src, alt, width, height }}
            />
          );
        })}
      </div>
    </div>
  );
}
