"use client";

import { Button } from "@/components/ui/button";
import { TypeComponentBasicLink } from "@/lib/types";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderNavProps = {
  navLinks: TypeComponentBasicLink[];
};

function HeaderNav({ navLinks }: HeaderNavProps) {
  // Properly destructuring props
  const pathname = usePathname(); // Get the current route

  return (
    <nav className="flex gap-4">
      {navLinks.map((linkItem) => {
        const isActive = pathname === linkItem.basicLinkUrl;
        return (
          <Button
            key={linkItem.basicLinkName}
            variant="link"
            asChild
            className={clsx(
              "text-foreground font-semibold",
              isActive && "bg-primary text-primary-foreground" // Active class
            )}
          >
            <Link href={linkItem.basicLinkUrl || "/"}>
              {linkItem.basicLinkText}
            </Link>
          </Button>
        );
      })}
    </nav>
  );
}

export default HeaderNav;
