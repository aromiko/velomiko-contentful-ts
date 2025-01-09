import { TypeComponentHeaderWithoutLinkResolutionResponse } from "@/lib/types/contentful";

type HeaderProps = {
  data: TypeComponentHeaderWithoutLinkResolutionResponse["fields"];
};

export default function Header({ data }: HeaderProps) {
  return <div className="text-lg">{data.headerName}</div>;
}
