import { TypeComponentBasicLinkList, TypeComponentMedia } from "@/lib/types";

export interface TypeComponentHeader {
  headerName: string;
  headerLogo?: TypeComponentMedia;
  headerLinks?: TypeComponentBasicLinkList;
}
