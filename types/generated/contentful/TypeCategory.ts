import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful';

export interface TypeCategoryFields {
  name: EntryFieldTypes.Symbol;
}

export type TypeCategorySkeleton = EntrySkeletonType<
  TypeCategoryFields,
  'category'
>;
export type TypeCategory<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeCategorySkeleton, Modifiers, Locales>;

export function isTypeCategory<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>
): entry is TypeCategory<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === 'category';
}
