import { TypeComponentHeader } from "@/lib/types/contentful";

import styles from "./header.module.css";

type HeaderProps = {
  data: TypeComponentHeader<"WITHOUT_UNRESOLVABLE_LINKS", string>["fields"];
};

export default function Header({ data }: HeaderProps) {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContents}>{data.headerName}</div>
    </div>
  );
}
