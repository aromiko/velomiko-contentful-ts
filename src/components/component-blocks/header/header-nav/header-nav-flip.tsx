"use client";

import HeaderNavMenu from "@/components/component-blocks/header/header-nav-mobile/header-nav-menu";
import HeaderNav from "@/components/component-blocks/header/header-nav/header-nav";
import { TypeComponentHeader } from "@/lib/types";
import { useState } from "react";

type HeaderProps = {
  data: TypeComponentHeader;
};

const HeaderNavFlip = ({ data }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-background border-b border-border shadow-sm">
      <nav className="lg:container p-4 flex items-center justify-between relative">
        <HeaderNav setIsOpen={setIsOpen} data={data} />
        <HeaderNavMenu isOpen={isOpen} links={data.headerLinks} />
      </nav>
    </div>
  );
};

export default HeaderNavFlip;
