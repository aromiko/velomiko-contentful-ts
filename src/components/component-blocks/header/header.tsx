import BasicMedia from "@/components/building-blocks/basic-media/basic-media";
import ThemeToggle from "@/components/theme/theme-toggle";
import { TypeComponentHeader } from "@/lib/types";

import styles from "./header.module.css";

type HeaderProps = {
  data: TypeComponentHeader;
};

export default function Header({ data }: HeaderProps) {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContents}>
        {data.headerLogo && <BasicMedia data={data.headerLogo} />}
        <ThemeToggle />
      </div>
    </div>
  );
}
