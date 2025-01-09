import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentBasicLinkSkeleton } from "./TypeComponentBasicLink";

export interface TypeComponentBasicLinkListFields {
    basicLinkListName: EntryFieldTypes.Symbol;
    linkListHeading?: EntryFieldTypes.Symbol;
    linkListGroup?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeComponentBasicLinkSkeleton>>;
}

export type TypeComponentBasicLinkListSkeleton = EntrySkeletonType<TypeComponentBasicLinkListFields, "componentBasicLinkList">;
export type TypeComponentBasicLinkList<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentBasicLinkListSkeleton, Modifiers, Locales>;
export type TypeComponentBasicLinkListWithoutLinkResolutionResponse = TypeComponentBasicLinkList<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentBasicLinkListWithoutUnresolvableLinksResponse = TypeComponentBasicLinkList<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentBasicLinkListWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentBasicLinkList<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentBasicLinkListWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentBasicLinkList<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentBasicLinkListWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentBasicLinkList<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
