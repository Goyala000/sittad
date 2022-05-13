import ImageHeader from "@/components/ImageHeader";
import Layout from "@/components/Layout";

import styles from "@/styles/Gallery.module.css";

const index = () => {
  return (
    <Layout title="About">
      <ImageHeader mtitle="About Us" />
      <div className={styles.title}>About Us</div>
      <div>
        <h1>(Religious and Historical spots</h1>
      </div>
    </Layout>
  );
};

export default index;
