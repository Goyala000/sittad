import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";

import { toast } from "react-toastify";
import { Container, ListGroup, Badge } from "react-bootstrap";

import { AiFillDelete } from "react-icons/ai";

import AdminLayout from "@/components/AdminLayout";
import AdminTitle from "@/components/AdminTitle";
import Loader from "@/components/Loader";
import Message from "@/components/Message";
import styles from "@/styles/Admin.module.css";
import { API_URL } from "@/config/index";

export default function NewsPage() {
  const [allNews, setAllNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [newsDeleted, setNewsDeleted] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/api/news`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setAllNews(data);
        setIsLoading(false);
      });
  }, [newsDeleted]);

  const deleteNewsHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      setNewsDeleted(true);
      const res = await fetch(`${API_URL}/api/news/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        toast.error("Something went wrong. Try Again later.");
        setNewsDeleted(false);
      } else {
        toast.success("News Deleted Successfully");
        setNewsDeleted(false);
      }
    }
  };

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <AdminLayout>
      <Container className="container">
        <AdminTitle
          title="Added News"
          variant="dark"
          btnName="Add New"
          href="news/add"
        />
        <Container>
          <div className={styles.adminContent}>
            {isLoading ? (
              <Loader />
            ) : (
              <ListGroup as="ol" numbered>
                {allNews &&
                  allNews.map((news) => (
                    <ListGroup.Item
                      className="d-flex justify-content-between align-items-center bg-light text-dark"
                      key={news._id}
                    >
                      <div
                        className="ms-2 me-auto"
                        style={{ overflow: "hidden", wordWrap: "break-word" }}
                      >
                        <div className="fw-bold">
                          <h4 style={{ margin: 0 }}>{news.title}</h4>
                        </div>
                        <p className={styles.newsDesc}>{news.description}</p>

                        <p style={{ margin: 0, textDecoration: "underline" }}>
                          {new Date(news.updatedAt).toLocaleDateString(
                            "en-US",
                            options
                          )}
                        </p>
                      </div>

                      <div style={{ marginLeft: "20px" }}>
                        <AiFillDelete
                          fontSize="25px"
                          onClick={() => deleteNewsHandler(news._id)}
                        />
                      </div>
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            )}
          </div>
        </Container>
      </Container>
    </AdminLayout>
  );
}

NewsPage.auth = true;
