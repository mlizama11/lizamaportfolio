import { Document as RichTextDocument } from '@contentful/rich-text-types';
import { Entry } from 'contentful';

import { ContentImage, parseContentfulContentImage } from './contentImage';
import contentfulClient from './contentfulClient';
import { TypeBlogPostSkeleton } from './types';

type BlogPostEntry = Entry<TypeBlogPostSkeleton, undefined, string>;

export type BlogPost = BlogPostMeta & {
  title: string;
  description: string;
  slug: string;
  date: string;
  body: RichTextDocument | null;
  image: ContentImage | null;
  images?: RichTextDocument;
};

export type BlogPostMeta = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export function parseContentfulBlogPost(
  blogPostEntry?: BlogPostEntry
): BlogPost | null {
  if (!blogPostEntry) {
    return null;
  }

  return {
    id: blogPostEntry.sys.id,
    createdAt: blogPostEntry.sys.createdAt,
    updatedAt: blogPostEntry.sys.updatedAt,
    title: blogPostEntry.fields.title || '',
    description: blogPostEntry.fields.description || '',
    slug: blogPostEntry.fields.slug || '',
    date: blogPostEntry.fields.date || '',
    body: blogPostEntry.fields.body || null,
    image: parseContentfulContentImage(blogPostEntry.fields.image),
    images: blogPostEntry.fields.images || undefined
  };
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const contentful = contentfulClient();

  const blogPostsResult = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: 'blogPost',
    include: 2
  });

  return blogPostsResult.items.map(
    (blogPostEntry) => parseContentfulBlogPost(blogPostEntry) as BlogPost
  );
}

type FetchBlogPostOptions = {
  slug: string;
};
export async function fetchBlogPost({
  slug
}: FetchBlogPostOptions): Promise<BlogPost | null> {
  const contentful = contentfulClient();

  const blogPostsResult = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: 'blogPost',
    'fields.slug': slug,
    include: 2
  });

  return parseContentfulBlogPost(blogPostsResult.items[0]);
}
