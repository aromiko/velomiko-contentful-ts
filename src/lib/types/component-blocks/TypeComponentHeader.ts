import {
  TypeComponentBasicLinkList,
  TypeComponentBasicMedia
} from "@/lib/types";

export interface TypeComponentHeader {
  headerName: string;
  headerLogo?: TypeComponentBasicMedia;
  headerLinks?: TypeComponentBasicLinkList;
}
