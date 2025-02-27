import Page from "@/components/page-templates/page/page";

export type DynamicPageProps = {
  params: {
    slug: string[];
  };
};

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { slug } = await params;
  const fullSlug = slug.join("/");

  return <Page slug={fullSlug} />;
}
