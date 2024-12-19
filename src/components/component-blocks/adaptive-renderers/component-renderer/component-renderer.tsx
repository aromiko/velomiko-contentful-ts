import Footer from "@/components/component-blocks/footer/footer";
import Header from "@/components/component-blocks/header/header";
import { ComponentRegistry } from "@/lib/configurations/component-registry";
import {
  TypeComponentFooterWithoutLinkResolutionResponse,
  TypeComponentHeaderWithoutLinkResolutionResponse
} from "@/lib/types/contentful";
import { PageContentItem } from "@/lib/types/data/TypePageData";
import { toLowerStartChar } from "@/lib/utils/string-extensions";
import { ComponentBlocksFacade } from "@/queries/component-blocks/component-blocks-facade";

type ComponentRendererProps = {
  content: PageContentItem;
};

export default async function ComponentRenderer({
  content
}: ComponentRendererProps) {
  try {
    // Specify here only the components that will need to be directly hydrated with Contentful data
    // Based on the mapped component __typename, <Component> will render the actual React Component
    const componentMapping: Record<
      string,
      React.ComponentType<{
        data:
          | TypeComponentHeaderWithoutLinkResolutionResponse["fields"]
          | TypeComponentFooterWithoutLinkResolutionResponse["fields"];
      }>
    > = {
      [ComponentRegistry.Header]: Header,
      [ComponentRegistry.Footer]: Footer
    };

    // Determine the component to render based on the __typename mapping
    const Component = componentMapping[content.__typename];

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
