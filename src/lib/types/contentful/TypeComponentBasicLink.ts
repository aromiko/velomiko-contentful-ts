import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentBasicLinkFields {
    basicLinkName: EntryFieldTypes.Symbol;
    linkText?: EntryFieldTypes.Symbol;
    linkUrl?: EntryFieldTypes.Symbol;
    linkIsExternal: EntryFieldTypes.Boolean;
    linkIsButton: EntryFieldTypes.Boolean;
}

export type TypeComponentBasicLinkSkeleton = EntrySkeletonType<TypeComponentBasicLinkFields, "componentBasicLink">;
export type TypeComponentBasicLink<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentBasicLinkSkeleton, Modifiers, Locales>;
export type TypeComponentBasicLinkWithoutLinkResolutionResponse = TypeComponentBasicLink<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentBasicLinkWithoutUnresolvableLinksResponse = TypeComponentBasicLink<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentBasicLinkWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentBasicLink<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentBasicLinkWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentBasicLink<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentBasicLinkWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentBasicLink<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
