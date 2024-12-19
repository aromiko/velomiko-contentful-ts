import { PageTemplatesFacade } from "@/queries/page-templates/page-templates-facade";
import { notFound } from "next/navigation";

type PageProps = {
  slug: string;
};

export default async function Page({ slug }: PageProps) {
  const page = await PageTemplatesFacade.getPageBySlug(slug);
  console.log(page);

  if (!page || slug == "404") return notFound();

  return <div>{page.name}</div>;
}
