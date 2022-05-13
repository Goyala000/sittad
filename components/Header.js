import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Nav, Navbar } from "react-bootstrap";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import styles from "@/styles/Header.module.css";
import Logo from "../public/Logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <div className={styles.topNav}>
        <div className={styles.details}>
          {" "}
          <span style={{ marginRight: "20px" }}>
            <FaPhone /> 9999999999 | 9999999999
          </span>
          <span>
            <IoMdMail /> info@sittadsamaj.com.np
          </span>
        </div>
        <div className={styles.socialMedia}>
          {" "}
          <BsFacebook />
          <BsTwitter />
          <FaViber />
          <FiInstagram />
        </div>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        className={
          scrolled ? `${styles.navbar} ${styles.scrolled}` : `${styles.navbar}`
        }
      >
        <Navbar.Brand className={styles.navTitle}>
          <Link href="/">
            <Image src={Logo} alt="Sittad Samaj" width="70px" height="80px" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" passHref>
              <Nav.Link className={router.pathname == "/" && "selectedNav"}>
                Home
              </Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link
                className={router.pathname == "/about" && "selectedNav"}
              >
                About
              </Nav.Link>
            </Link>
            <Link href="/news" passHref>
              <Nav.Link
                className={
                  (router.pathname == "/news" ||
                    router.pathname == `/news/[id]`) &&
                  "selectedNav"
                }
              >
                News
              </Nav.Link>
            </Link>
            <Link href="/events" passHref>
              <Nav.Link
                className={router.pathname == "/events" && "selectedNav"}
              >
                Events
              </Nav.Link>
            </Link>
            <Link href="/gallery" passHref>
              <Nav.Link
                className={router.pathname == "/gallery" && "selectedNav"}
              >
                Gallery
              </Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link
                className={router.pathname == "/contact" && "selectedNav"}
              >
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
