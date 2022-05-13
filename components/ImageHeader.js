import Link from "next/link";

import styles from "@/styles/ImageHeader.module.css";

const ImageHeader = ({ mtitle, title }) => {
  return (
    <div className={styles.imageContainerHeader}>
      <div className={styles.imageTitle}>
        <h2>{mtitle}</h2>
        <div className={styles.imageSubTitle}>
          <span>
            <ul className={styles.imageContentMenus}>
              <Link href="/">
                <li>Home</li>
              </Link>

              <li>{">"}</li>

              {title ? (
                <Link href={`/${mtitle.toLowerCase()}`}>
                  <li className={styles.optionalActiveImgHeader}>{mtitle}</li>
                </Link>
              ) : (
                <li className={styles.activeImgHeader}>{mtitle}</li>
              )}

              {title && (
                <>
                  <li>{">"}</li>
                  <li className={styles.activeImgHeader}>{title}</li>
                </>
              )}
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageHeader;
