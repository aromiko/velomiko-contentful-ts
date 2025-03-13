import { ComponentRegistryForQuery } from "@/lib/configurations/component-registry";
import QUERY_FOOTER_BY_ID from "@/queries/component-blocks/graphql/footer.gql";
import QUERY_HEADER_BY_ID from "@/queries/component-blocks/graphql/header.gql";
import QUERY_HERO_BY_ID from "@/queries/component-blocks/graphql/hero.gql";

export const componentQueryMapping = {
  [ComponentRegistryForQuery.Footer]: QUERY_FOOTER_BY_ID,
  [ComponentRegistryForQuery.Header]: QUERY_HEADER_BY_ID,
  [ComponentRegistryForQuery.Hero]: QUERY_HERO_BY_ID
};
