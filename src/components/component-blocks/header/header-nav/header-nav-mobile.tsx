"use client";

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
import clsx from "clsx";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./header-nav-mobile.module.css";

type HeaderNavMobileProps = {
  navLinks: TypeComponentBasicLink[];
};

function HeaderNavMobile({ navLinks }: HeaderNavMobileProps) {
  const date = new Date();
  const year = date.getFullYear();
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger aria-label="Open sheet navigation">
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className={styles.sheetHeader}>
          <SheetTitle className={styles.sheetTitle}>
            <ThemeToggle />
            <SheetClose>
              <Button variant="link" className={styles.sheetTitleLink} asChild>
                <Link href="/">velomiko</Link>
              </Button>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>

        <nav className={styles.mainContainer}>
          <ul className={styles.links}>
            {navLinks.map((linkItem) => {
              const isActive = pathname === linkItem.basicLinkUrl;

              return (
                <li key={linkItem.basicLinkName}>
                  <Button
                    variant="link"
                    asChild
                    className="w-full text-foreground"
                  >
                    <Link
                      href={linkItem.basicLinkUrl || "/"}
                      className={clsx(
                        "font-semibold",
                        isActive && "bg-primary text-primary-foreground" // Active class
                      )}
                    >
                      {linkItem.basicLinkText}
                    </Link>
                  </Button>
                </li>
              );
            })}
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
