import AdminHeader from "@/components/AdminHeader";
import AdminSidebar from "./AdminSidebar";
import styles from "@/styles/AdminLayout.module.css";

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminHeader />
      <>
        <AdminSidebar />
        <div
          className={styles.adminContainer}
          style={{ marginLeft: "240px" }}
          //   style={
          //     sidebarToggle ? { marginLeft: "65px" } : { marginLeft: "240px" }
          //   }
        >
          {children}
        </div>
      </>
    </>
  );
}
