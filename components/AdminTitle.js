import Link from "next/link";

import { Button } from "react-bootstrap";
import styles from "@/styles/AdminTitle.module.css";

const AdminTitle = ({ title, btnName, href }) => {
  return (
    <>
      <div className={styles.mainTitle}>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
        <div>
          <Link href={`${href}`}>
            <Button>{btnName}</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminTitle;
