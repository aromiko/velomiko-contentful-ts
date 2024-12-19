// Filter components based on the content entry's "__typename" to prepare for SectionRenderer component assembly process under a section
import { PageContentItem } from "@/lib/types/data/TypePageData";

export const filterComponentsForAssembly = (
  contents: PageContentItem[],
  typeNames: string[]
) =>
  contents.filter((contentEntry) =>
    typeNames.includes(contentEntry.__typename)
  );
