// Filter components based on the content entry's "__typename" to prepare for SectionRenderer component assembly process under a section
import {
  TypeComponentRegistryLowerCased,
  TypePageContentItem
} from "@/lib/types";

export const filterComponentsForAssembly = (
  contents: TypePageContentItem[],
  typeNames: TypeComponentRegistryLowerCased[]
) =>
  contents.filter((contentEntry) =>
    typeNames.includes(contentEntry.__typename)
  );
