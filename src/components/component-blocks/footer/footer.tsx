import { TypeComponentFooterWithoutLinkResolutionResponse } from "@/lib/types/contentful";

type FooterProps = {
  data: TypeComponentFooterWithoutLinkResolutionResponse["fields"];
};

export default function Footer({ data }: FooterProps) {
  return <div>{data.footerName}</div>;
}
