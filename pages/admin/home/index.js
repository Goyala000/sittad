import { getSession } from "next-auth/react";

import { Container } from "react-bootstrap";

import { API_URL } from "@/config/index";
import AdminChart from "@/components/AdminChart";
import AdminLayout from "@/components/AdminLayout";
import styles from "@/styles/Admin.module.css";

const index = ({ news, events, albums, carousels }) => {
  return (
    <AdminLayout>
      <Container>
        <div className={styles.allDetailsContainer}>
          <div className={styles.detailCard}>
            <h2>Unique Visitos</h2>
            <h3>10</h3>
          </div>
          <div className={styles.detailCard}>
            <h2>Total News</h2>
            <h3>{news.length}</h3>
          </div>
          <div className={styles.detailCard}>
            <h2>Total Events</h2>
            <h4>{events.length}</h4>
          </div>
          <div className={styles.detailCard}>
            <h2>Total Albums</h2>
            <h4>{albums.length}</h4>
          </div>
          <div className={styles.detailCard}>
            <h2>Total Carousels</h2>
            <h4>{carousels.length}</h4>
          </div>
        </div>

        {/* Graph */}
        <div className={styles.chartContainer}>
          <AdminChart />
        </div>
      </Container>
    </AdminLayout>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  const newsRes = await fetch(`${API_URL}/api/news`);
  const news = await newsRes.json();

  const eventsRes = await fetch(`${API_URL}/api/events/upcoming`);
  const events = await eventsRes.json();

  const albumsRes = await fetch(`${API_URL}/api/albums`);
  const albums = await albumsRes.json();

  const carouselsRes = await fetch(`${API_URL}/api/carousel`);
  const carousels = await carouselsRes.json();

  if (!session) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session, news, events, albums, carousels },
  };
}

export default index;
