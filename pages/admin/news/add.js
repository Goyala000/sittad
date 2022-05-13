import { useState } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

import Loader from "@/components/Loader";
import Message from "@/components/Message";
import AdminLayout from "@/components/AdminLayout";
import AdminTitle from "@/components/AdminTitle";

import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";

import FilePondPluginFileRename from "filepond-plugin-file-rename";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import { toast } from "react-toastify";
import { API_URL } from "@/config/index";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginFileRename
);

export default function AddNewsPage() {
  const [values, setValues] = useState({
    title: "",
    author: "",
    description: "",
  });
  const [uploading, setUploading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState("");

  const router = useRouter();

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  function fileNameGen(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const filePondOptions = {
    process: {
      url: "/api/upload",
      onload: (response) => {
        setImage(response);
      },
    },
    revert: {
      url: "/api/upload",
      onload: function (response) {
        console.log(response);
        return JSON.stringify({ msg: "WTFFFFF" });
      },
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const newsObj = {
        title: values.title,
        author: values.author,
        description: values.description,
        image,
      };
      console.log(newsObj);
      const res = await fetch(`${API_URL}/api/news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newsObj),
      });

      if (!res.ok) {
        toast.error("Something went wrong. Try Again later.");
      } else {
        router.push("/admin/news");
        setValues({ title: "", author: "", description: "" });
        setValidated(false);
        toast.success("News Added Successfully");
      }
    }
    setValidated(true);
  };

  return (
    <AdminLayout>
      <Container style={{ padding: "20px 50px" }}>
        <AdminTitle
          title="Add News"
          variant="dark"
          btnName="View All"
          href="/admin/news"
        />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="g-2">
            <Col md>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter news title"
                  name="title"
                  value={values.title}
                  onChange={handleInputChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide news title.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name..."
                  name="author"
                  value={values.author}
                  onChange={handleInputChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your name.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

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
              Please provide description.
            </Form.Control.Feedback>
          </Form.Group>

          <FilePond
            files={files}
            onupdatefiles={setFiles}
            acceptedFileTypes={["image/png", "image/jpeg"]}
            // server="/api/upload"
            server={filePondOptions}
            name="file"
            credits={false}
            labelIdle='Drag & Drop your file or <span class="filepond--label-action">Browse</span>'
            fileRenameFunction={(file) => {
              return `${fileNameGen(8)}${file.extension}`;
            }}
          />

          <Button variant="dark" type="submit">
            Add
          </Button>
        </Form>
      </Container>
    </AdminLayout>
  );
}

AddNewsPage.auth = true;
