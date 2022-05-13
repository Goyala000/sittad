import { useState, useEffect } from "react";
import Link from "next/link";

import { getSession } from "next-auth/react";
import { toast } from "react-toastify";
import { Container, ListGroup, Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

import AdminLayout from "@/components/AdminLayout";
import AdminTitle from "@/components/AdminTitle";
import styles from "@/styles/Admin.module.css";
import Loader from "@/components/Loader";
import { API_URL } from "@/config/index";

export default function CarouselPage() {
  const [allCarousel, setAllCarousel] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [carouselDeleted, setCarouselDeleted] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/api/carousel`)
      .then((res) => res.json())
      .then((data) => {
        setAllCarousel(data);
        setIsLoading(false);
      });
  }, [carouselDeleted]);

  const deleteCarouselHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      setCarouselDeleted(true);
      const res = await fetch(`${API_URL}/api/carousel/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        toast.error("Something went wrong. Try Again later.");
        setCarouselDeleted(false);
      } else {
        toast.success("Carousel Deleted Successfully");
        setCarouselDeleted(false);
      }
    }
  };

  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <AdminLayout>
      <Container className="container">
        <AdminTitle
          title="Added Carousel"
          btnName="Add New"
          href="carousel/add"
        />
        <div className={styles.adminContent}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {allCarousel && allCarousel.length === 0 ? (
                <div className={styles.noContent}>
                  <div>No any Carousels.</div>
                  <div>
                    <Link href="/admin/carousel/add">
                      <Button>Add Some</Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <ListGroup numbered>
                  {allCarousel &&
                    allCarousel.map((carousel) => (
                      <ListGroup.Item
                        className="d-flex justify-content-between align-items-center"
                        key={carousel._id}
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">
                            <h5 style={{ margin: 0 }}>{carousel.title}</h5>
                          </div>
                          <p style={{ margin: 0 }}>
                            Created At:{" "}
                            {new Date(carousel.createdAt).toLocaleDateString(
                              "en-US",
                              options
                            )}
                          </p>
                        </div>
                        <div>
                          <AiFillDelete
                            fontSize="25px"
                            onClick={() => deleteCarouselHandler(carousel._id)}
                          />
                        </div>
                      </ListGroup.Item>
                    ))}
                </ListGroup>
              )}
            </>
          )}
        </div>
      </Container>
    </AdminLayout>
  );
}

CarouselPage.auth = true;
