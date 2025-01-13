import ComponentRenderer from "@/components/component-blocks/adaptive-renderers/component-renderer/component-renderer";
import { TypeComponentData, TypePageContentItem } from "@/lib/types";
import React from "react";

type SectionRendererProps = {
  components: TypePageContentItem[];
  section?: React.ElementType;
  dataProps?: Record<string, TypeComponentData>;
  otherProps?: Record<string, unknown>;
};

// Assembles components within a specified semantic parent element (e.g. <header>, <main>, <footer>, etc.)
export default function SectionRenderer({
  components,
  section,
  dataProps = {},
  otherProps = {}
}: SectionRendererProps) {
  try {
    if (!components?.length) return null;

    // Sets the parent container element or otherwise <div>
    const Section = section || "div";

    return (
      // Renders specific Component dynamically based on contents, with respect to the containing section
      <Section {...dataProps} {...otherProps}>
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
