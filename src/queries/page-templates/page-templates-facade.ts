import { ContentfulDataService } from "@/lib/services/contentful-data-service";
import { print as graphQLPrint } from "graphql";

// Contentful GraphQL Queries

import QUERY_PAGE_BY_SLUG from "./graphql/page.gql";

export const PageTemplatesFacade = {
  // Get Page Contentful data by slug
  async getPageBySlug(slug: string) {
    try {
      const data = await ContentfulDataService.fetchDataBySlug(
        QUERY_PAGE_BY_SLUG,
        slug
      );

      return data?.pageCollection?.items[0] || null;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          `[PageTemplatesFacade]: An error occurred while executing fetch on getPageBySlug(${slug})\n${graphQLPrint(QUERY_PAGE_BY_SLUG)} \n${error.stack}`
        );
      } else {
        throw new Error(
          `[PageTemplatesFacade]: An error occurred while executing fetch on getPageBySlug(slug)`
        );
      }
    }
  }
};
