import { TypeComponentBasicLinkList } from "@/lib/types";

export interface TypeComponentHeader {
  headerName: string;
  headerLogo?: {
    url: string;
    width: number;
    height: number;
  };
  headerLinks?: TypeComponentBasicLinkList;
}
