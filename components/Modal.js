import { motion } from "framer-motion";

import styles from "@/styles/Modal.module.css";

const Modal = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("Modal_backdrop__4Nscy")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className={styles.backdrop}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
