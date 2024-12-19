import { TypePageWithoutLinkResolutionResponse } from "@/lib/types/contentful/TypePage";

export type TypePageData = {
  pageCollection?: {
    items: TypePageWithoutLinkResolutionResponse["fields"][];
  };
};
