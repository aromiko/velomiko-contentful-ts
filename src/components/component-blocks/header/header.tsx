import { TypeComponentHeaderWithoutLinkResolutionResponse } from "@/lib/types/contentful/TypeComponentHeader";

type HeaderProps = {
  data: TypeComponentHeaderWithoutLinkResolutionResponse["fields"];
};

export default function Header({ data }: HeaderProps) {
  return <div>{data.headerName}</div>;
}
