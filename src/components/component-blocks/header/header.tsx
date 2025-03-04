import HeaderNavFlip from "@/components/component-blocks/header/header-nav/header-nav-flip";
import { TypeComponentHeader } from "@/lib/types";

type HeaderProps = {
  data: TypeComponentHeader;
};

const MainHeader = ({ data }: HeaderProps) => {
  return <HeaderNavFlip data={data} />;
};

export default MainHeader;
