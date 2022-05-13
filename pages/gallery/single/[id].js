import { useRouter } from "next/router";
import { useState } from "react";

import ImageHeader from "@/components/ImageHeader";
import Layout from "@/components/Layout";
import Gallery from "@/components/Gallery";
import Modal from "@/components/Modal";
import { Button, Container } from "react-bootstrap";

import styles from "@/styles/Gallery.module.css";
import { API_URL } from "@/config/index";

export default function AlbumPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    // <Layout title="Gallery">
    //   <ImageHeader mtitle="Gallery" title={album.name} />
    //   <Container className="container">
    //     <div className={styles.singleGalleryContainer}>
    //       <p>25th August, 2024 / {album.name}</p>
    //       <Gallery setSelectedImg={setSelectedImg} album={album} />
    //       {selectedImg && (
    //         <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    //       )}
    //     </div>
    //   </Container>
    // </Layout>
    <h1>Single Album</h1>
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
