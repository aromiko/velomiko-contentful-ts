import { TypeComponentFooter } from "@/lib/types/contentful";

import styles from "./footer.module.css";

type FooterProps = {
  data: TypeComponentFooter<"WITHOUT_UNRESOLVABLE_LINKS", string>["fields"];
};

export default function Footer({ data }: FooterProps) {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContents}>{data.footerName}</div>
    </div>
  );
}
