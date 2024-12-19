import { SectionComponents } from "@/lib/configurations/section-component";
import { filterComponentsForAssembly } from "@/lib/utils/component-filter";
import { PageTemplatesFacade } from "@/queries/page-templates/page-templates-facade";
import { notFound } from "next/navigation";

type PageProps = {
  slug: string;
};

export default async function Page({ slug }: PageProps) {
  const page = await PageTemplatesFacade.getPageBySlug(slug);
  console.log(page);
  console.log(page.pageContentsCollection.items);

  if (!page || slug == "404") return notFound();

  const headerComponents = filterComponentsForAssembly(
    page.pageContentsCollection.items,
    SectionComponents.Header
  );

  return <div>{page.pageName}</div>;
}
