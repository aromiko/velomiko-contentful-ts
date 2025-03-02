import Page from "@/components/page-templates/page/page";

export type DynamicPageProps = {
  params: Promise<{
    slug?: string[]; // Make it optional to handle cases where it's undefined
  }>;
};

export default async function DynamicPage({ params }: DynamicPageProps) {
  const resolvedParams = await params; // ✅ Await the params object
  const slugArray = resolvedParams.slug ?? []; // Ensure it's an array
  const fullSlug = slugArray.join("/");

  return <Page slug={fullSlug} />;
}
