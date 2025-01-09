import { componentQueryMapping } from "@/lib/configurations/component-query-mapping";
import { ContentfulDataService } from "@/lib/services/contentful-data-service";
import { TypeComponentData } from "@/lib/types/data/TypeComponentData";
import { print as graphQLPrint } from "graphql";

export const ComponentBlocksFacade = {
  // Get component data by specifying its contentType and ID. Dynamic query mapping is handled here.
  async getComponentDataById(contentType: string, id: string) {
    try {
      // Fetch actual data by sending the determined component query and its ID as parameters
      const data = (await ContentfulDataService.fetchDataById(
        componentQueryMapping[contentType],
        id
      )) as TypeComponentData;

      // GraphQL API response data to return depends on the contentType
      const contentKey = contentType as keyof TypeComponentData;
      return data[contentKey] || null;

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
