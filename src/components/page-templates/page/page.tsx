import SectionRenderer from "@/components/component-blocks/adaptive-renderers/section-renderer/section-renderer";
import { SectionComponents } from "@/lib/configurations/section-component";
import { filterComponentsForAssembly } from "@/lib/utils/component-filter";
import { PageTemplatesFacade } from "@/queries/page-templates/page-templates-facade";
import { notFound } from "next/navigation";

type PageProps = {
  slug: string;
};

export default async function Page({ slug }: PageProps) {
  const page = await PageTemplatesFacade.getPageBySlug(slug);

  if (!page || slug == "404") return notFound();

  const headerComponents = filterComponentsForAssembly(
    page.pageContentsCollection.items,
    SectionComponents.Header
  );

  const mainComponents = filterComponentsForAssembly(
    page.pageContentsCollection.items,
    SectionComponents.Main
  );

  const footerComponents = filterComponentsForAssembly(
    page.pageContentsCollection.items,
    SectionComponents.Footer
  );

  return (
    <>
      <SectionRenderer components={headerComponents} section="header" />

      <SectionRenderer components={mainComponents} section={"main"} />

      <SectionRenderer components={footerComponents} section={"footer"} />
    </>
  );
}
