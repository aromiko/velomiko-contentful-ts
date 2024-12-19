import { ComponentRegistryForQuery } from "@/lib/configurations/component-registry";
import { ContentfulDataService } from "@/lib/services/contentful-data-service";
import QUERY_HEADER_BY_ID from "@/queries/component-blocks/graphql/header.gql";
import { print as graphQLPrint } from "graphql";

// Use the computed property syntax to map the component contentTypes to its query
const componentQueryMapping = {
  [ComponentRegistryForQuery.Header]: QUERY_HEADER_BY_ID
};

export const ComponentBlocksFacade = {
  // Get component data by specifying its contentType and ID. Dynamic query mapping is handled here.
  async getComponentDataById(contentType: string, id: string) {
    try {
      // Fetch actual data by sending the determined component query and its ID as parameters
      const data = await ContentfulDataService.fetchDataById(
        componentQueryMapping[contentType],
        id
      );

      // GraphQL API response data to return depends on the contentType
      return data[contentType] || null;

      // Otherwise, if there's no matching data according to its contentType, throw an error
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error(
          `[ComponentBlocksFacade]: An error occurred while executing fetch on getComponentDataById(${id}, ${graphQLPrint(componentQueryMapping[contentType])}, ${contentType})
        \n${error.stack}`
        );
      } else {
        throw new Error(
          `[ComponentBlocksFacade]: An error occurred while executing fetch on getComponentDataById(${id}, ${graphQLPrint(componentQueryMapping[contentType])}, ${contentType})`
        );
      }
    }
  }
};
