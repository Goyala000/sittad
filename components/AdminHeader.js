import { useRouter } from "next/router";

import { signOut } from "next-auth/react";
import { FiMenu } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
import { AiOutlineReload } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import styles from "../styles/AdminHeader.module.css";

const AdminHeader = () => {
  const router = useRouter();

  const sideBarChanger = (e) => {
    console.log("sdfsdf");
  };

  return (
    <>
      <div className={styles.navbar}>
        <div onClick={sideBarChanger} className={styles.navIcon}>
          {/* {sidebarToggle ? (
            <ImCross fontSize={"30px"} />
          ) : (
            <FiMenu fontSize={"40px"} />
          )} */}
          <FiMenu fontSize={"40px"} />
        </div>

        <div className={styles.headerContent}>
          <AiOutlineReload fontSize={"20px"} className={styles.rotate} />
          <div className={styles.userDetails}>
            <FaUserCircle fontSize={"30px"} />
            <span>Admin</span>
          </div>

          <CgLogOut onClick={() => signOut()} fontSize={"40px"} />
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
