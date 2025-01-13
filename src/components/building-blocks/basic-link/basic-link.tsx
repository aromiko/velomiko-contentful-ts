import { TypeComponentBasicLink } from "@/lib/types";

type BasicLinkProps = {
  data: TypeComponentBasicLink;
};

export default function BasicLink({ data }: BasicLinkProps) {
  return <div>{data.basicLinkName}</div>;
}
