import { useState } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

import FilePondPluginFileRename from "filepond-plugin-file-rename";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import { Container, Form, Row, Col, Button } from "react-bootstrap";

import AdminLayout from "@/components/AdminLayout";
import AdminTitle from "@/components/AdminTitle";
import { toast } from "react-toastify";
import { API_URL } from "@/config/index";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginFileRename
);

export default function AddCarouselPage() {
  const [title, setTitle] = useState("");
  const [uploading, setUploading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState("");

  const router = useRouter();

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
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const carouselObj = {
        title,
        image,
      };
      const res = await fetch(`${API_URL}/api/carousel`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carouselObj),
      });

      if (!res.ok) {
        toast.error("Something went wrong. Try Again later.");
      } else {
        router.replace("/admin/carousel");
        setTitle("");
        setValidated(false);
        toast.success("Carousel Added Successfully");
      }
    }
    setValidated(true);
  };

  return (
    <AdminLayout>
      <Container style={{ padding: "20px 50px" }}>
        <AdminTitle
          title="Add Carousel"
          variant="dark"
          btnName="View All"
          href="/admin/carousel"
        />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicTitle">
            <Form.Label>Carousel Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter carousel title ....."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide carousel title.
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

AddCarouselPage.auth = true;
