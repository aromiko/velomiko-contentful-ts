import Footer from "@/components/component-blocks/footer/footer";
import Header from "@/components/component-blocks/header/header";
import Hero from "@/components/component-blocks/hero/hero";
import { toLowerStartChar } from "@/lib/utils/string-extensions";

export const ComponentRegistry = {
  // Building Blocks
  BasicLink: "ComponentBasicLink",
  BasicLinkList: "ComponentBasicLinkList",
  BasicMedia: "ComponentBasicMedia",

  // Component Blocks
  Footer: "ComponentFooter",
  Header: "ComponentHeader",
  Hero: "ComponentHero"
};

export const componentMapping = {
  [ComponentRegistry.Footer]: Footer,
  [ComponentRegistry.Header]: Header,
  [ComponentRegistry.Hero]: Hero
};

export const ComponentRegistryForQuery = Object.fromEntries(
  Object.entries(ComponentRegistry).map(([key, value]) => [
    key, // Keep the key as it is
    // GraphQL API returns Pascal-cased contentTypes. However, in order to use this value for another GraphQL API call, convert first character
    // to lowercase to adhere to its component contentType as parameter for querying. For coherence, use defined ComponentRegistry __typeNames.
    // NOTE: It might be safer to convert only the start char instead of blindly converting the contentType value to camelCase.
    toLowerStartChar(value)
  ])
);
