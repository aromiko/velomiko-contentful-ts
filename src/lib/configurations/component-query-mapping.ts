import { ComponentRegistryForQuery } from "@/lib/configurations/component-registry";
import QUERY_FOOTER_BY_ID from "@/queries/component-blocks/graphql/footer.gql";
import QUERY_HEADER_BY_ID from "@/queries/component-blocks/graphql/header.gql";

export const componentQueryMapping = {
  [ComponentRegistryForQuery.Header]: QUERY_HEADER_BY_ID,
  [ComponentRegistryForQuery.Footer]: QUERY_FOOTER_BY_ID
};
