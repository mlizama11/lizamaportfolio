import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful';

export interface TypeBlogPostFields {
  title?: EntryFieldTypes.Text;
  slug?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Text;
  date?: EntryFieldTypes.Date;
  body?: EntryFieldTypes.RichText;
  image?: EntryFieldTypes.AssetLink;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  'blogPost'
>;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;
