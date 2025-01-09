import {
  TypeComponentFooterWithoutLinkResolutionResponse,
  TypeComponentHeaderWithoutLinkResolutionResponse
} from "@/lib/types/contentful";

export type TypeComponentData = {
  componentHeader?: TypeComponentHeaderWithoutLinkResolutionResponse["fields"];
  componentFooter?: TypeComponentFooterWithoutLinkResolutionResponse["fields"];
};
