import { TypeComponentFooter } from "@/lib/types";

import styles from "./footer.module.css";

type FooterProps = {
  data: TypeComponentFooter;
};

export default function MainFooter({ data }: FooterProps) {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContents}>{data.footerName}</div>
    </div>
  );
}
