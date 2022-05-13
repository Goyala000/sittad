import { useEffect, useState } from "react";
import Link from "next/link";

import { getSession } from "next-auth/react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";

import { API_URL } from "@/config/index";
import AdminLayout from "@/components/AdminLayout";
import AdminTitle from "@/components/AdminTitle";
import styles from "@/styles/Admin.module.css";
import Loader from "@/components/Loader";
import Message from "@/components/Message";

export default function EventPage() {
  const [allEvents, setAllEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [eventDeleted, setEventDeleted] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/api/events`)
      .then((res) => res.json())
      .then((data) => {
        setAllEvents(data);
        setIsLoading(false);
      });
  }, [eventDeleted]);

  const deleteEventsHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      setEventDeleted(true);
      const res = await fetch(`${API_URL}/api/events/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        toast.error("Something went wrong. Try Again later.");
        setEventDeleted(false);
      } else {
        toast.success("Event Deleted Successfully");
        setEventDeleted(false);
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
          title="Added Events"
          variant="dark"
          btnName="Add New"
          href="events/add"
        />
        <div className={styles.adminContent}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {allEvents && allEvents.length === 0 ? (
                <div className={styles.noContent}>
                  <div>No any Upcoming Events.</div>
                  <div>
                    <Link href="/admin/events/add">
                      <Button>Add Some</Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <ListGroup>
                  {allEvents &&
                    allEvents.map((event) => (
                      <ListGroup.Item
                        className="d-flex justify-content-between align-items-center bg-light text-dark"
                        key={event._id}
                      >
                        <div
                          className="ms-2 me-auto"
                          style={{ overflow: "hidden", wordWrap: "break-word" }}
                        >
                          <div className="fw-bold">{event.title}</div>
                          <div>
                            <p
                              style={{ margin: 0, textDecoration: "underline" }}
                            >
                              {new Date(event.date).toLocaleDateString(
                                "en-US",
                                options
                              )}
                            </p>
                          </div>
                          {event.description &&
                            event.description.substring(0, 299)}
                          .......
                          {event.isOutdated && (
                            <div className={styles.outdated}>
                              Outdated Event. Delete it
                            </div>
                          )}
                        </div>
                        <div>
                          <AiFillDelete
                            fontSize="25px"
                            onClick={() => deleteEventsHandler(event._id)}
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

EventPage.auth = true;
