import { TypeComponentFooter } from "@/lib/types/contentful";

type FooterProps = {
  data: TypeComponentFooter<"WITHOUT_UNRESOLVABLE_LINKS", string>["fields"];
};

export default function Footer({ data }: FooterProps) {
  return <div>{data.footerName}</div>;
}
