import Image from "next/image";
import { Button, Container } from "react-bootstrap";
import ImageCarousel from "@/components/ImageCarousel";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "@/styles/Home.module.css";

const index = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  return (
    <>
      <ImageCarousel />
      <Container>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>
              It&apos;s not how much we give but how much love we put into
              giving
            </h2>
            <p>
              It is a long established fact that a reader will distracted by the
              readable content of a page when looking at its layout. fact that a
              reader will be content It is a long established It is a long
              established fact that a reader It is a long established fact that
              a reader will distracted by the readable content of a page when
              looking at its layout.
            </p>
            <Button size="lg">More</Button>
          </div>
          <div className={styles.aboutImage}>
            <Image
              src="/images/image5.jpeg"
              height="460"
              width="420"
              alt="image"
            />
          </div>
        </div>

        {/* Mission Content */}
        <div className={styles.missionContent}>
          <div>
            <h3>Our Mission</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo awesome creative
            </p>
          </div>
          <div>
            <h3>Our Vision</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo awesome creative
            </p>
          </div>
          <div>
            <h3>Where we are</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo awesome creative
            </p>
          </div>
        </div>
      </Container>

      <div className={styles.backgroundSurface}>
        <div className={styles.backgroundContainer}>
          <Container>
            <div className={styles.saying}>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo awesome
                creative
              </h4>
              <p>Nameee - Ceo</p>
            </div>

            {/* Some Projects */}
            <div className={styles.projectContent}>
              <h2>Our Some Projects ....</h2>
              <div className={styles.singleProject}>
                <div>
                  <Image
                    src="/images/image5.jpeg"
                    height="450"
                    width="350"
                    alt="image"
                  />
                </div>
                <div>
                  <Image
                    src="/images/image5.jpeg"
                    height="450"
                    width="350"
                    alt="image"
                  />
                </div>
                <div>
                  <Image
                    src="/images/image5.jpeg"
                    height="450"
                    width="350"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Container>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <Image
              src="/images/image5.jpeg"
              height="460"
              width="420"
              alt="image"
            />
          </div>
          <div className={styles.aboutText}>
            <h2>
              It&apos;s not how much we give but how much love we put into
              giving
            </h2>
            <p>
              It is a long established fact that a reader will distracted by the
              readable content of a page when looking at its layout. fact that a
              reader will be content It is a long established It is a long
              established fact that a reader It is a long established fact that
              a reader will distracted by the readable content of a page when
              looking at its layout.
            </p>
            <Button size="lg">More</Button>
          </div>
        </div>

        {/* News Carousel */}
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          controlsStrategy="alternate"
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={2000}
          animationDuration={2000}
          animationType="fadeout"
          disableButtonsControls
          infinite
        >
          <div className={styles.carouselContainer}>
            <div>
              <Image
                src="/images/image5.jpeg"
                height="400"
                width="350"
                alt="random"
              />
            </div>

            <div className={styles.carouselContent}>
              <p>1st March, 2022</p>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do
              </p>
              <h5>By: Admin</h5>
            </div>
          </div>
          <div className={styles.carouselContainer}>
            <div>
              <Image
                src="/images/image5.jpeg"
                height="400"
                width="350"
                alt="random"
              />
            </div>

            <div className={styles.carouselContent}>
              <p>1st March, 2022</p>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do
              </p>
              <h5>By: Admin</h5>
            </div>
          </div>
          <div className={styles.carouselContainer}>
            <div>
              <Image
                src="/images/image5.jpeg"
                height="400"
                width="350"
                alt="random"
              />
            </div>

            <div className={styles.carouselContent}>
              <p>1st March, 2022</p>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do
              </p>
              <h5>By: Admin</h5>
            </div>
          </div>
          <div className={styles.carouselContainer}>
            <div>
              <Image
                src="/images/image5.jpeg"
                height="400"
                width="350"
                alt="random"
              />
            </div>

            <div className={styles.carouselContent}>
              <p>1st March, 2022</p>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do
              </p>
              <h5>By: Admin</h5>
            </div>
          </div>
          <div className={styles.carouselContainer}>
            <div>
              <Image
                src="/images/image5.jpeg"
                height="400"
                width="350"
                alt="random"
              />
            </div>

            <div className={styles.carouselContent}>
              <p>1st March, 2022</p>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do
              </p>
              <h5>By: Admin</h5>
            </div>
          </div>
        </AliceCarousel>
      </Container>
    </>
  );
};

export default index;
