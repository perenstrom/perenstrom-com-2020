import type { TypeCategorySkeleton } from './TypeCategory';
import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful';

export interface TypeImageFields {
  name?: EntryFieldTypes.Symbol;
  altText?: EntryFieldTypes.Symbol;
  category?: EntryFieldTypes.EntryLink<TypeCategorySkeleton>;
  image?: EntryFieldTypes.Object;
  thumbnail: EntryFieldTypes.Object;
}

export type TypeImageSkeleton = EntrySkeletonType<TypeImageFields, 'image'>;
export type TypeImage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeImageSkeleton, Modifiers, Locales>;

export function isTypeImage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>
): entry is TypeImage<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === 'image';
}
