import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AdminLayout from "@/components/AdminLayout";
import AdminTitle from "@/components/AdminTitle";

import styles from "@/styles/Admin.module.css";
import { Container } from "react-bootstrap";
import Gallery from "@/components/Gallery";
import Modal from "@/components/Modal";

import { motion } from "framer-motion";
import { API_URL } from "@/config/index";
import Loader from "@/components/Loader";

export default function SingleAlbumPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <AdminLayout>
      {/* <Container className="container">
        <AdminTitle
          title={album.name}
          variant="dark"
          btnName="Go Back"
          href="/admin/albums"
        />
        <div className={styles.adminContent}>
          <Gallery setSelectedImg={setSelectedImg} album={album} />
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </div>
      </Container> */}

      <h1>Admin Album</h1>
    </AdminLayout>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/api/albums`);
//   const albums = await res.json();

//   const paths = albums.map((a) => ({
//     params: { id: a._id },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(`${API_URL}/api/albums/${params.id}`);
//   const album = await res.json();

//   return { props: { album } };
// }

// SingleAlbumPage.auth = true;
