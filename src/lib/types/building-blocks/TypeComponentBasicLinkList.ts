import { TypeComponentBasicLink } from "@/lib/types";

export interface TypeComponentBasicLinkList {
  basicLinkListName: string;
  basicLinkListHeading?: string;
  basicLinkListGroupCollection?: { items: TypeComponentBasicLink[] };
}
