import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { AiFillHome } from "react-icons/ai";
import { MdViewCarousel } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { BsFillCalendarMonthFill, BsImages } from "react-icons/bs";

import styles from "@/styles/AdminSidebar.module.css";

const AdminSidebar = () => {
  const router = useRouter();

  return (
    <div
      className={styles.sidenav}
      style={{ width: "240px" }}
      //   style={sidebarToggle ? { width: "65px" } : { width: "240px" }}
    >
      <div className={styles.sideMenu}>
        <div
          className={styles.LogoDisplay}
          //   className={
          //     sidebarToggle ? `${styles.LogoDisplayAlt}` : `${styles.LogoDisplay}`
          //   }
        >
          <Image
            src="/images/image5.jpeg"
            height="100"
            width="100"
            alt="Logo"
          />
        </div>
        <ul>
          <Link href="/admin/home">
            <li
              className={
                router.pathname == "/admin/home" ? "activeSideNav" : ""
              }
            >
              <span>
                <AiFillHome />
              </span>
              <span>Home</span>
            </li>
          </Link>

          <Link href="/admin/carousel">
            <li
              className={
                (router.pathname === "/admin/carousel" ||
                  router.pathname === "/admin/carousel/add") &&
                "activeSideNav"
              }
            >
              <span>
                <MdViewCarousel />
              </span>
              <span>Carousel</span>
            </li>
          </Link>

          <Link href="/admin/news">
            <li
              className={
                (router.pathname === "/admin/news" ||
                  router.pathname === "/admin/news/add") &&
                "activeSideNav"
              }
            >
              <span>
                <IoNewspaper />
              </span>
              <span>News</span>
            </li>
          </Link>

          <Link href="/admin/events">
            <li
              className={
                (router.pathname === "/admin/events" ||
                  router.pathname === "/admin/events/add") &&
                "activeSideNav"
              }
            >
              <span>
                <BsFillCalendarMonthFill />
              </span>
              <span>Events</span>
            </li>
          </Link>

          <Link href="/admin/albums">
            <li
              className={
                (router.pathname === "/admin/albums" ||
                  router.pathname === "/admin/albums/add" ||
                  router.pathname === "/admin/albums/single/[id]") &&
                "activeSideNav"
              }
            >
              <span>
                <BsImages />
              </span>
              <span>Albums</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
