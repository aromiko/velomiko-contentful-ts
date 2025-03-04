import HeaderMenuLink from "@/components/component-blocks/header/header-nav-mobile/header-nav-menu-link";
import ThemeToggle from "@/components/theme/theme-toggle";
import { headerNavMenuVariants } from "@/lib/configurations/component-header-variants";
import { TypeComponentBasicLinkList } from "@/lib/types";
import { motion } from "framer-motion";

type HeaderNavMenuProps = {
  links: TypeComponentBasicLinkList | undefined;
  isOpen: boolean;
};

const HeaderNavMenu = ({ links, isOpen }: HeaderNavMenuProps) => {
  return (
    <motion.ul
      variants={headerNavMenuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-background border-b border-border shadow-sm left-0 right-0 top-full origin-top flex flex-col gap-4 lg:hidden"
    >
      {links?.basicLinkListGroupCollection?.items &&
        links.basicLinkListGroupCollection?.items.map((linkItem) => (
          <HeaderMenuLink key={linkItem.basicLinkName} linkData={linkItem} />
        ))}
      <li className="flex justify-end">
        <ThemeToggle />
      </li>
    </motion.ul>
  );
};

export default HeaderNavMenu;
