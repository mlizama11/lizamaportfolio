import { Document as RichTextDocument } from '@contentful/rich-text-types';
import { Entry } from 'contentful';

import { ContentImage, parseContentfulContentImage } from './contentImage';
import contentfulClient from './contentfulClient';
import { TypeBlogPostSkeleton } from './types';

type BlogPostEntry = Entry<TypeBlogPostSkeleton, undefined, string>;

// Our simplified version of a BlogPost.
// We don't need all the data that Contentful gives us.
export interface BlogPost extends BlogPostMeta {
  title: string;
  description: string;
  slug: string;
  date: string;
  body: RichTextDocument | null;
  image: ContentImage | null;
  images?: RichTextDocument;
}

export interface BlogPostMeta {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// A function to transform a Contentful blog post
// into our own BlogPost object.
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

// A function to fetch all blog posts.
// Optionally uses the Contentful content preview.
interface FetchBlogPostsOptions {
  preview: boolean;
}
export async function fetchBlogPosts({
  preview
}: FetchBlogPostsOptions): Promise<BlogPost[]> {
  const contentful = contentfulClient({ preview });

  const blogPostsResult = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: 'blogPost',
    include: 2
  });

  return blogPostsResult.items.map(
    (blogPostEntry) => parseContentfulBlogPost(blogPostEntry) as BlogPost
  );
}

// A function to fetch a single blog post by its slug.
// Optionally uses the Contentful content preview.
interface FetchBlogPostOptions {
  slug: string;
  preview: boolean;
}
export async function fetchBlogPost({
  slug,
  preview
}: FetchBlogPostOptions): Promise<BlogPost | null> {
  const contentful = contentfulClient({ preview });

  const blogPostsResult = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: 'blogPost',
    'fields.slug': slug,
    include: 2
  });

  return parseContentfulBlogPost(blogPostsResult.items[0]);
}
