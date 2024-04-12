import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful';

export interface TypeBlogPostFields {
  title: EntryFieldTypes.Symbol;
  metaDescription?: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  content?: EntryFieldTypes.Text;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  'blogPost'
>;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;

export function isTypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>
): entry is TypeBlogPost<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === 'blogPost';
}
