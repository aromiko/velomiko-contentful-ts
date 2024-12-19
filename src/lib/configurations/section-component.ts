import { ComponentRegistry } from "@/lib/configurations/component-registry";

// Specify here the components allowed to be rendered per section
export const SectionComponents = {
  Header: [ComponentRegistry.Header],
  Main: [ComponentRegistry.Hero],
  Footer: [ComponentRegistry.Footer]
};
