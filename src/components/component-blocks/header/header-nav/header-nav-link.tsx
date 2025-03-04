"use client";

import { TypeComponentBasicLink } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderNavLinkProps = {
  linkData: TypeComponentBasicLink;
};

const HeaderNavLink = ({ linkData }: HeaderNavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === linkData.basicLinkUrl;

  return (
    <Link
      href={linkData.basicLinkUrl || "/"}
      className={cn(
        "hidden lg:block h-[40px] overflow-hidden font-medium rounded hover:bg-gray-100 transition-colors",
        { "bg-primary": isActive }
      )}
    >
      <motion.div whileHover={{ y: -40 }}>
        <span className="flex items-center h-[40px] px-4 text-foreground">
          {linkData.basicLinkText}
        </span>
        <span
          className={cn("flex items-center h-[40px] px-4 text-primary", {
            "text-foreground": isActive
          })}
        >
          {linkData.basicLinkText}
        </span>
      </motion.div>
    </Link>
  );
};

export default HeaderNavLink;
