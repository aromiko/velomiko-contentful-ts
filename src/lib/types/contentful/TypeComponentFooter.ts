import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from "contentful";

export interface TypeComponentFooterFields {
  footerName?: EntryFieldTypes.Symbol;
}

export type TypeComponentFooterSkeleton = EntrySkeletonType<
  TypeComponentFooterFields,
  "componentFooter"
>;
export type TypeComponentFooter<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeComponentFooterSkeleton, Modifiers, Locales>;
export type TypeComponentFooterWithoutLinkResolutionResponse =
  TypeComponentFooter<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentFooterWithoutUnresolvableLinksResponse =
  TypeComponentFooter<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentFooterWithAllLocalesResponse<
  Locales extends LocaleCode = LocaleCode
> = TypeComponentFooter<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentFooterWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode
> = TypeComponentFooter<
  "WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES",
  Locales
>;
export type TypeComponentFooterWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode
> = TypeComponentFooter<
  "WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES",
  Locales
>;
