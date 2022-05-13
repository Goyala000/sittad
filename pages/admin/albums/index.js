import Link from "next/link";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";

import { Card, Col, Container, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

import AdminLayout from "@/components/AdminLayout";
import AdminTitle from "@/components/AdminTitle";
import styles from "@/styles/Admin.module.css";
import { API_URL } from "@/config/index";
import Loader from "@/components/Loader";

export default function AlbumsPage() {
  const [allAlbums, setAllAlbums] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [albumDeleted, setAlbumDeleted] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/api/albums`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllAlbums(data);
        setIsLoading(false);
      });
  }, [albumDeleted]);

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const deleteAlbumHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      setAlbumDeleted(true);
      const res = await fetch(`${API_URL}/api/albums/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        toast.error("Something went wrong. Try Again later.");
        setAlbumDeleted(false);
      } else {
        toast.success("Album Deleted Successfully");
        setAlbumDeleted(false);
      }
    }
  };

  return (
    <AdminLayout>
      <Container className="container">
        <AdminTitle
          title="Added Albums"
          variant="dark"
          btnName="Add New"
          href="albums/add"
        />
        <div className={styles.adminContent}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {allAlbums && allAlbums.length === 0 && <h2>NO ALBUM</h2>}
              <Row xs={1} md={2} className="g-4 container">
                {allAlbums &&
                  allAlbums.map((album) => (
                    <Col key={album._id}>
                      <Card>
                        <Card.Img variant="top" src={"/images/image1.jpg"} />
                        <Card.Body>
                          <Link href={`/admin/albums/single/${album._id}`}>
                            <Card.Title style={{ cursor: "pointer" }}>
                              {album.name}
                            </Card.Title>
                          </Link>
                          <Card.Text>
                            {new Date(album.createdAt).toLocaleDateString(
                              "en-US",
                              options
                            )}
                          </Card.Text>

                          <div className={styles.albumDeleteBtn}>
                            <AiFillDelete
                              fontSize="30px"
                              onClick={() => deleteAlbumHandler(album._id)}
                            />
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </>
          )}
        </div>
      </Container>
    </AdminLayout>
  );
}

AlbumsPage.auth = true;
