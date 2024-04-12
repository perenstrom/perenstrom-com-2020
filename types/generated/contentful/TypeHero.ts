import type { TypeCategorySkeleton } from './TypeCategory';
import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful';

export interface TypeHeroFields {
  heading: EntryFieldTypes.Symbol;
  image?: EntryFieldTypes.Object;
  category?: EntryFieldTypes.EntryLink<TypeCategorySkeleton>;
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, 'hero'>;
export type TypeHero<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeHeroSkeleton, Modifiers, Locales>;

export function isTypeHero<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>
): entry is TypeHero<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === 'hero';
}
