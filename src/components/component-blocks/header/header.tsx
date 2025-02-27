import BasicMedia from "@/components/building-blocks/basic-media/basic-media";
import HeaderNav from "@/components/component-blocks/header/header-nav/header-nav";
import HeaderNavMobile from "@/components/component-blocks/header/header-nav/header-nav-mobile";
import ThemeToggle from "@/components/theme/theme-toggle";
import { TypeComponentHeader } from "@/lib/types";

// Ensure clsx is installed for easier class management

import styles from "./header.module.css";

type HeaderProps = {
  data: TypeComponentHeader;
};

export default function Header({ data }: HeaderProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contents}>
        {data.headerLogo && (
          <div className={styles.logoWrapper}>
            <BasicMedia data={data.headerLogo} />
          </div>
        )}
        {data.headerLinks?.basicLinkListGroupCollection?.items && (
          <div className={styles.navContainer}>
            <HeaderNav
              navLinks={data.headerLinks.basicLinkListGroupCollection.items}
            />
            <ThemeToggle />
          </div>
        )}

        <div className={styles.mobileNavContainer}>
          {data.headerLinks?.basicLinkListGroupCollection?.items && (
            <HeaderNavMobile
              navLinks={data.headerLinks.basicLinkListGroupCollection.items}
            />
          )}
        </div>
      </div>
    </div>
  );
}
