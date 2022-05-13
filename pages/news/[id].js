import Image from "next/image";
import { useRouter } from "next/router";

import { AiOutlineLike, AiTwotoneLike, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { Col, Container, Row } from "react-bootstrap";
import ImageHeader from "@/components/ImageHeader";
import Layout from "@/components/Layout";

import styles from "@/styles/News.module.css";
import { API_URL } from "@/config/index";

const index = () => {
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    // <Layout title="News">
    //   <ImageHeader mtitle="News" title={`${singleNews.title}`} />
    //   <Container className="my-5">
    //     <Row style={{ padding: 0, margin: 0 }}>
    //       <Col md={8}>
    //         <p>
    //           {new Date(singleNews.createdAt).toLocaleDateString(
    //             "en-US",
    //             options
    //           )}{" "}
    //           / {singleNews.title}
    //         </p>
    //         <h4>By {singleNews.author}</h4>
    //         <div className={styles.newsDetails}>
    //           <div>
    //             <Image
    //               src={`${singleNews.image}`}
    //               height="400"
    //               width="700"
    //               alt="Img"
    //             />
    //           </div>
    //           <div className={styles.newsDesc}>
    //             <h3 className={styles.newsTitle}>{singleNews.title}</h3>
    //             <p>{singleNews.description}</p>
    //           </div>
    //         </div>
    //         <div className={styles.engage}>
    //           <span>
    //             <AiTwotoneLike className={styles.likeIcon} /> 1.3k likes
    //           </span>
    //           <span className={styles.socialMedia}>
    //             <BsFacebook />
    //             <AiOutlineTwitter />
    //             <BiLink />
    //           </span>
    //         </div>
    //       </Col>
    //       <Col md={4}>
    //         <div style={{ marginTop: "100px" }}>
    //           <h3>Recent News</h3>
    //           <div className={styles.latestContentContainer}>
    //             <div className={styles.latestContainer}>
    //               <div className={styles.latestNews}>
    //                 <div>
    //                   <Image
    //                     src="/images/image10.jpg"
    //                     height="100"
    //                     width="150"
    //                     alt="Img"
    //                   />
    //                 </div>
    //                 <div className={styles.latestNewsDesc}>
    //                   <span>This is News Title</span>
    //                   <p>By Admin</p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className={styles.latestContainer}>
    //               <div className={styles.latestNews}>
    //                 <div>
    //                   <Image
    //                     src="/images/image10.jpg"
    //                     height="100"
    //                     width="150"
    //                     alt="Img"
    //                   />
    //                 </div>
    //                 <div className={styles.latestNewsDesc}>
    //                   <span>This is News Title</span>
    //                   <p>By Admin</p>
    //                 </div>
    //               </div>
    //             </div>

    //             <div className={styles.latestContainer}>
    //               <div className={styles.latestNews}>
    //                 <div>
    //                   <Image
    //                     src="/images/image10.jpg"
    //                     height="100"
    //                     width="150"
    //                     alt="Img"
    //                   />
    //                 </div>
    //                 <div className={styles.latestNewsDesc}>
    //                   <span>This is News Title </span>
    //                   <p>By Admin</p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className={styles.latestContainer}>
    //               <div className={styles.latestNews}>
    //                 <div>
    //                   <Image
    //                     src="/images/image10.jpg"
    //                     height="100"
    //                     width="150"
    //                     alt="Img"
    //                   />
    //                 </div>
    //                 <div className={styles.latestNewsDesc}>
    //                   <span>This is News Title </span>
    //                   <p>By Admin</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </Layout>
    <h1>Single News</h1>
  );
};

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/api/news`);
//   const news = await res.json();

//   const paths = news.map((n) => ({
//     params: { id: n._id },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(`${API_URL}/api/news/${params.id}`);
//   const singleNews = await res.json();

//   return { props: { singleNews } };
// }

export default index;
