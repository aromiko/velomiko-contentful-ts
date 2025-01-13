import {
  TypeComponentData,
  TypeComponentRegistryLowerCased
} from "@/lib/types";
import { EntrySkeletonType } from "contentful";

export interface TypePageContentItem extends EntrySkeletonType {
  __typename: TypeComponentRegistryLowerCased;
  sys: {
    id: string;
  };
  fields: Record<string, TypeComponentData>;
}

export interface TypePageData {
  pageCollection: {
    items: {
      pageName: string;
      pageSlug?: string;
      pageContentsCollection: {
        items: TypePageContentItem[];
      };
    }[];
  };
}
