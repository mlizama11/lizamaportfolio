import { BlogPostsListProps } from '@/types';

import { BlogPostCard } from './BlogPostCard';

export function BlogPostCards({ blogPosts }: BlogPostsListProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid gap-8 md:grid-cols-2">
        {blogPosts
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((singlePost) => {
            if (!singlePost.image) return null;
            const { src, alt, width, height } = singlePost.image;
            return (
              <BlogPostCard
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
