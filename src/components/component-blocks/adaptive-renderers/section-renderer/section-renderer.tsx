import ComponentRenderer from "@/components/component-blocks/adaptive-renderers/component-renderer/component-renderer";
import { PageContentItem } from "@/lib/types/page-templates/TypePageData";
import React from "react";

type SectionRendererProps = {
  components: PageContentItem[];
  section?: React.ElementType;
  otherProps?: Record<string, unknown>;
};

// Assembles components within a specified semantic parent element (e.g. <header>, <main>, <footer>, etc.)
export default function SectionRenderer({
  components,
  section,
  otherProps = {}
}: SectionRendererProps) {
  try {
    if (!components?.length) return null;

    // Sets the parent container element or otherwise <div>
    const Section = section || "div";

    return (
      // Renders specific Component dynamically based on contents, with respect to the containing section
      <Section {...otherProps}>
        {components.map((content) => (
          <ComponentRenderer key={content.sys.id} content={content} />
        ))}
      </Section>
    );
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        `[SectionRenderer]: An error occurred while adaptively rendering section ${section} \n${error.stack}`
      );
    } else {
      throw new Error(
        `[SectionRenderer]: An error occurred while adaptively rendering section ${section}`
      );
    }
  }
}
