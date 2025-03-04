import BasicMedia from "@/components/building-blocks/basic-media/basic-media";
import { HeaderNavHamburgerMenu } from "@/components/component-blocks/header/header-nav-mobile/header-nav-hamburger-menu";
import HeaderNavLink from "@/components/component-blocks/header/header-nav/header-nav-link";
import ThemeToggle from "@/components/theme/theme-toggle";
import { TypeComponentHeader } from "@/lib/types";
import { Dispatch, SetStateAction } from "react";

const HeaderNav = ({
  data,
  setIsOpen
}: {
  data: TypeComponentHeader;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center gap-6 justify-between w-full">
      {data.headerLogo && (
        <div className="invert-theme">
          <BasicMedia data={data.headerLogo} />
        </div>
      )}

      <div className="flex items-center gap-6">
        {data.headerLinks?.basicLinkListGroupCollection?.items && (
          <ul className="flex gap-6">
            {data.headerLinks?.basicLinkListGroupCollection?.items.map(
              (linkItem) => (
                <li key={linkItem.basicLinkName}>
                  <HeaderNavLink linkData={linkItem} />
                </li>
              )
            )}
          </ul>
        )}

        <div className="hidden lg:block">
          <ThemeToggle />
        </div>
      </div>

      <div className="block lg:hidden text-foreground text-2xl">
        <HeaderNavHamburgerMenu
          onHamburgerClick={() => setIsOpen((pv) => !pv)}
        />
      </div>
    </div>
  );
};

export default HeaderNav;
