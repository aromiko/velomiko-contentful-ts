import { EntrySkeletonType } from "contentful";

export interface PageContentItem extends EntrySkeletonType {
  __typename: string;
  sys: {
    id: string;
  };
  fields: Record<string, unknown>;
}

export interface TypePageData {
  pageCollection: {
    items: {
      pageName: string;
      pageSlug?: string;
      pageContentsCollection: {
        items: PageContentItem[];
      };
    }[];
  };
}
