import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";
import ImageHeader from "@/components/ImageHeader";
import Layout from "@/components/Layout";

import styles from "@/styles/News.module.css";
import { API_URL } from "@/config/index";
import fetchNews from "fetch";

export default function NewsPage() {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    // <Layout title="News">
    //   <ImageHeader mtitle="News" />

    //   <Container>
    //     <div className={styles.title}>Latest News</div>

    //     <Row xs={1} md={2} className="g-4 container my-5 mx-2">
    //       {news.map((n) => (
    //         <Col key={n._id}>
    //           <Card>
    //             <Card.Img variant="top" src={`${n.image}`} />
    //             <Card.Body>
    //               <p>
    //                 {new Date(n.createdAt).toLocaleDateString("en-US", options)}
    //               </p>
    //               <Link href={`/news/${n._id}`}>
    //                 <Card.Title>{n.title}</Card.Title>
    //               </Link>
    //               <Card.Text>
    //                 {" "}
    //                 {n.description && n.description.substring(0, 299)}.......
    //               </Card.Text>
    //             </Card.Body>
    //           </Card>
    //         </Col>
    //       ))}
    //     </Row>
    //   </Container>
    // </Layout>
    <h2>News</h2>
  );
}

// export async function getServerSideProps() {
//   // const res = await fetch(`/api/news`);
//   // const news = await res.json();

//   const data = await fetchNews();
//   const news = await data.json();

//   if (!news) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//         // statusCode: 301
//       },
//     };
//   }

//   return {
//     props: { news },
//   };
// }
