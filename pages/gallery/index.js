import { useEffect } from "react";
import Link from "next/link";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ImageHeader from "@/components/ImageHeader";
import Layout from "@/components/Layout";

import styles from "@/styles/Gallery.module.css";
import { API_URL } from "@/config/index";

import { GoCalendar } from "react-icons/go";

const index = () => {
  return (
    // <Layout title="Gallery">
    //   <ImageHeader mtitle="Gallery" />

    //   <Container>
    //     <div className={styles.title}>Gallery</div>
    //     <>
    //       <Row className="g-4 p-4 m-4">
    //         {albums.length === 0 && <h1>Empty</h1>}
    //         {albums &&
    //           albums.map((album) => (
    //             <Col lg={4} xl={4} md={6} key={album._id}>
    //               <Card style={{ height: "80%" }}>
    //                 <Card.Img
    //                   style={{ height: "100%" }}
    //                   variant="top"
    //                   src={album.images[0].url}
    //                   alt="random"
    //                 />

    //                 <Card.Body style={{ padding: "13px" }}>
    //                   <h4>{album.name}</h4>
    //                   <p style={{ margin: 0, paddingBottom: "9px" }}>
    //                     <GoCalendar /> 25th August, 2022
    //                   </p>
    //                   <Card.Text>
    //                     <Link href={`/gallery/single/${album._id}`}>
    //                       <Button>View All</Button>
    //                     </Link>
    //                   </Card.Text>
    //                 </Card.Body>
    //               </Card>
    //             </Col>
    //           ))}
    //       </Row>
    //     </>
    //   </Container>
    // </Layout>
    <h2>Albums</h2>
  );
};

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/api/albums`);
//   const albums = await res.json();

//   return {
//     props: { albums },
//     revalidate: 1,
//   };
// }

export default index;
