import { SectionComponents } from "@/lib/configurations/section-component";

export type TypeSectionComponents =
  (typeof SectionComponents)[keyof typeof SectionComponents][number];
