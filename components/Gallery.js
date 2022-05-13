import { motion } from "framer-motion";

import styles from "@/styles/Admin.module.css";
import { API_URL } from "../config/index";

const Gallery = ({ setSelectedImg, album }) => {
  return (
    <div className={styles.imgGrid}>
      {album &&
        album.images.map((imgg) => (
          <motion.div
            className={styles.imgWrap}
            key={album._id}
            layout
            whileHover={{ opacity: 1 }}
            s
            onClick={() => setSelectedImg(`${API_URL}${imgg.url}`)}
          >
            <motion.img
              src={`${API_URL}${imgg.url}`}
              alt="gallery image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default Gallery;
