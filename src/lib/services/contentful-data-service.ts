import GraphQLService from "@/lib/services/graphql-service";
import { TypePageData } from "@/lib/types";
import { DocumentNode } from "graphql";

const isPreview = process.env.CONTENTFUL_API_MODE === "preview" ? true : false;

// Provides ways to fetch data on Contentful GraphQL API dynamically
export const ContentfulDataService = {
  // Fetch data by Query only
  async fetchDataByQuery(query: DocumentNode) {
    try {
      const data = await GraphQLService.request(query, { isPreview });
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          `[ContentfulDataService]: An error occurred while executing fetch on fetchDataByQuery(query) \n${error.stack}`
        );
      } else {
        throw new Error(
          `[ContentfulDataService]: An unknown error occurred while executing fetch on fetchDataByQuery(query)`
        );
      }
    }
  },

  // Fetch data by ID
  async fetchDataById(query: DocumentNode, id: string) {
    try {
      const data = await GraphQLService.request(query, { id, isPreview });
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          `[ContentfulDataService]: An error occurred while executing fetch on fetchDataById(query, id) \n${error.stack}`
        );
      } else {
        throw new Error(
          `[ContentfulDataService]: An unknown error occurred while executing fetch on fetchDataById(query, id)`
        );
      }
    }
  },

  // Fetch data by Slug
  async fetchDataBySlug(
    query: DocumentNode,
    slug: string
  ): Promise<TypePageData> {
    try {
      const data = await GraphQLService.request<TypePageData>(query, {
        slug,
        isPreview
      });
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          `[ContentfulDataService]: An error occurred while executing fetch on fetchDataBySlug(query, slug) \n${error.stack}`
        );
      } else {
        throw new Error(
          `[ContentfulDataService]: An unknown error occurred while executing fetch on fetchDataBySlug(query, slug)`
        );
      }
    }
  }
};
