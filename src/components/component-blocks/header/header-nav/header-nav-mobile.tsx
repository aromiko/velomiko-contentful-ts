import ThemeToggle from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { TypeComponentBasicLink } from "@/lib/types";
import { Menu } from "lucide-react";
import Link from "next/link";

import styles from "./header-nav-mobile.module.css";

type HeaderNavMobileProps = {
  navLinks: TypeComponentBasicLink[];
};

function HeaderNavMobile({ navLinks }: HeaderNavMobileProps) {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Sheet>
      <SheetTrigger aria-label="Open sheet navigation">
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className={styles.sheetHeader}>
          <SheetTitle className={styles.sheetTitle}>
            <ThemeToggle />
            <SheetClose asChild>
              <Button
                variant="link"
                className="font-extrabold text-2xl text-foreground outline-foreground"
                asChild
              >
                <Link href="/">miko aro</Link>
              </Button>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>

        <nav className={styles.mainContainer}>
          <ul className={styles.links}>
            {navLinks.map((linkItem) => (
              <li key={linkItem.basicLinkName}>
                <SheetClose>
                  <Button variant="link" asChild>
                    <Link
                      href={linkItem.basicLinkUrl || "/"}
                      className={styles.link}
                    >
                      {linkItem.basicLinkText}
                    </Link>
                  </Button>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
        <SheetFooter className="mt-auto">
          <div>
            <Button variant="link" asChild>
              <a href="mailto:contact@miko-aro.com">contact@velo-miko.com</a>
            </Button>
            <span>{`© ${year}`}</span>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default HeaderNavMobile;
