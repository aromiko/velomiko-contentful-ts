import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from "contentful";

export interface TypeComponentHeaderFields {
  headerName: EntryFieldTypes.Symbol;
}

export type TypeComponentHeaderSkeleton = EntrySkeletonType<
  TypeComponentHeaderFields,
  "componentHeader"
>;
export type TypeComponentHeader<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeComponentHeaderSkeleton, Modifiers, Locales>;
export type TypeComponentHeaderWithoutLinkResolutionResponse =
  TypeComponentHeader<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentHeaderWithoutUnresolvableLinksResponse =
  TypeComponentHeader<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentHeaderWithAllLocalesResponse<
  Locales extends LocaleCode = LocaleCode
> = TypeComponentHeader<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentHeaderWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode
> = TypeComponentHeader<
  "WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES",
  Locales
>;
export type TypeComponentHeaderWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode
> = TypeComponentHeader<
  "WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES",
  Locales
>;
