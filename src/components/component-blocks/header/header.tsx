import ThemeToggle from "@/components/theme/theme-toggle";
import { TypeComponentHeader } from "@/lib/types";
import Image from "next/image";

import styles from "./header.module.css";

type HeaderProps = {
  data: TypeComponentHeader;
};

export default function Header({ data }: HeaderProps) {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContents}>
        {data.headerLogo && (
          <Image
            src={data.headerLogo?.url}
            width={100}
            height={70}
            alt={data.headerLogo?.description || ""}
          />
        )}

        <ThemeToggle />
      </div>
    </div>
  );
}
