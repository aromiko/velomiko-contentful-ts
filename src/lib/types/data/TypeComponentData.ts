import {
  TypeComponentFooter,
  TypeComponentHeader
} from "@/lib/types/contentful";

export type TypeComponentData = {
  componentHeader?: TypeComponentHeader<
    "WITHOUT_UNRESOLVABLE_LINKS",
    string
  >["fields"];
  componentFooter?: TypeComponentFooter<
    "WITHOUT_UNRESOLVABLE_LINKS",
    string
  >["fields"];
};
