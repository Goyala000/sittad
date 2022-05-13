import { useState, useEffect } from "react";

import { API_URL } from "../config/index";
import { Image, Carousel } from "react-bootstrap";
import styles from "@/styles/ImageCarousel.module.css";

const ImageCarousel = () => {
  const [loadedCarousel, setLoadedCarousel] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/api/carousel`)
      .then((res) => res.json())
      .then((data) => {
        setLoadedCarousel(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <Carousel fade>
          <Carousel.Item
            className={styles.carouselItemContainer}
            interval={3300}
          >
            <Image
              className={styles.carouselStyler}
              src="/images/image1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>Welcome To Heartland Academy</h2>
            </Carousel.Caption>
          </Carousel.Item>
          {loadedCarousel &&
            loadedCarousel.map((c) => (
              <Carousel.Item
                className={styles.carouselItemContainer}
                interval={3300}
                key={c._id}
              >
                <Image
                  className={styles.carouselStyler}
                  src={c.image}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h2>{c.title}</h2>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      )}
    </>
  );
};

export default ImageCarousel;
