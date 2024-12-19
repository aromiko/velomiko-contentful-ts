// Filter components based on the content entry's "__typename" to prepare for SectionRenderer component assembly process under a section
import { PageContentItem } from "../types/data/TypePageData";

// Filtering is done from the graphQL response property calle "pageContentsCollection" (values coming from the "Page Contents" entry field)
export const filterComponentsForAssembly = (
  contents: PageContentItem[],
  typeNames: readonly string[]
) =>
  contents.filter((contentEntry: PageContentItem) =>
    typeNames.includes(contentEntry.contentTypeId)
  );
