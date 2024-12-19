import { TypeComponentHeaderWithoutLinkResolutionResponse } from "@/lib/types/contentful";

type HeaderProps = {
  data: TypeComponentHeaderWithoutLinkResolutionResponse["fields"];
};

export default function Header({ data }: HeaderProps) {
  return <div>{data.headerName}</div>;
}
