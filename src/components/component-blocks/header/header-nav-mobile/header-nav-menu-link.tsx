"use client";

import { headerNavMenuLinkVariants } from "@/lib/configurations/component-header-variants";
import { TypeComponentBasicLink } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderMenuLinkProps = {
  linkData: TypeComponentBasicLink;
};

const HeaderNavMenuLink = ({ linkData }: HeaderMenuLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === linkData.basicLinkUrl;

  return (
    <motion.li variants={headerNavMenuLinkVariants}>
      <Link
        href={linkData.basicLinkUrl || "/"}
        className="overflow-hidden font-medium text-lg flex items-start gap-2"
      >
        <span
          className={cn("flex items-center w-full justify-center p-2", {
            "bg-primary": isActive
          })}
        >
          {linkData.basicLinkText}
        </span>
      </Link>
    </motion.li>
  );
};

export default HeaderNavMenuLink;
