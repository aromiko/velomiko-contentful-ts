import { componentMapping } from "@/lib/configurations/component-registry";
import { TypeComponentData, TypePageContentItem } from "@/lib/types";
import { toLowerStartChar } from "@/lib/utils/string-extensions";
import { ComponentBlocksFacade } from "@/queries/component-blocks/component-blocks-facade";

type ComponentRendererProps = {
  content: TypePageContentItem;
};

export default async function ComponentRenderer({
  content
}: ComponentRendererProps) {
  try {
    // Determine the component to render based on the __typename mapping
    const Component = componentMapping[
      content.__typename
    ] as React.ComponentType<TypeComponentData>;

    // GraphQL API returns Pascal-cased contentTypes. However, in order to use this value for another GraphQL API call, convert first character
    // to lowercase to adhere to its component contentType as parameter for querying. For coherence, use defined ComponentRegistry __typeNames.
    // NOTE: It might be safer to convert only the start char instead of blindly converting the contentType value to camelCase.
    const contentType = toLowerStartChar(content.__typename);

    // Fetch the component data from Contentful by its contentType and ID
    const data = await ComponentBlocksFacade.getComponentDataById(
      contentType,
      content.sys.id
    );

    // This server-side higher-order component below hydrates the mapped Component with GraphQL fetched data
    return <Component data={data} />;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        `[ComponentRenderer]: An error occurred while adaptively rendering component from contentType ${content.__typename} \n${error.stack}`
      );
    } else {
      throw new Error(
        `[ComponentRenderer]: An error occurred while adaptively rendering component from contentType ${content.__typename}`
      );
    }
  }
}
