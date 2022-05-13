import { useState } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

import { Container, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

import AdminLayout from "@/components/AdminLayout";
import AdminTitle from "@/components/AdminTitle";
import { API_URL } from "@/config/index";

export default function AddEventPage() {
  const [values, setValues] = useState({
    title: "",
    date: "",
    description: "",
  });
  const [validated, setValidated] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const eventObj = {
        title: values.title,
        date: values.date,
        description: values.description,
      };
      const res = await fetch(`${API_URL}/api/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventObj),
      });
      if (!res.ok) {
        toast.error("Something went wrong. Try Again later.");
      } else {
        router.push("/admin/events");
        setValues({ title: "", date: "", description: "" });
        setValidated(false);
        toast.success("Event Added Successfully");
      }
    }
    setValidated(true);
  };

  return (
    <AdminLayout>
      <Container style={{ padding: "20px 50px" }}>
        <AdminTitle
          title="Add New Event"
          btnName="View All"
          href="/admin/events"
        />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event title"
              name="title"
              value={values.title}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide Title
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Select Date (Minumum Date ~ Today)</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={values.date}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please select Date
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNewsDesc">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter event description"
              name="description"
              value={values.description}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide Description
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit">Add</Button>
        </Form>
      </Container>
    </AdminLayout>
  );
}

AddEventPage.auth = true;
