import {
  TypeComponentBasicLinkList,
  TypeComponentBasicMedia
} from "@/lib/types";

export interface TypeComponentHero {
  heroName: string;
  heroTitle: string;
  heroBody: string;
  heroImage: TypeComponentBasicMedia;
  heroCta: TypeComponentBasicLinkList;
}
