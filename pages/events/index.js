import Layout from "@/components/Layout";
import ImageHeader from "../../components/ImageHeader";

import styles from "@/styles/Event.module.css";
import { Card, Container } from "react-bootstrap";
import { API_URL } from "@/config/index";

export default function EventPage({ events }) {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    // <Layout title="Events">
    //   <ImageHeader mtitle="Events" />
    //   <div className={styles.title}>Upcoming Events</div>

    //   <Container>
    //     {events.map((event) => (
    //       <Card className="my-4" key={event._id}>
    //         <Card.Body>
    //           <h4>
    //             {new Date(event.date).toLocaleDateString("en-US", options)}
    //           </h4>
    //           <h5>{event.title}</h5>
    //           <p>{event.description}</p>
    //         </Card.Body>
    //       </Card>
    //     ))}
    //   </Container>
    // </Layout>
    <h1>Events</h1>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/api/events/upcoming`);
//   const events = await res.json();

//   return {
//     props: { events },
//     revalidate: 1,
//   };
// }
