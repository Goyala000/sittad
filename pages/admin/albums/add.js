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

import { Container, Form, Button } from "react-bootstrap";
import Loader from "@/components/Loader";
import Message from "@/components/Message";
import AdminLayout from "@/components/AdminLayout";
import AdminTitle from "@/components/AdminTitle";

import axios from "axios";

import { toast } from "react-toastify";
import { API_URL } from "@/config/index";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginFileRename
);

export default function AddNewsPage() {
  const [albumName, setAlbumName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);

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

  function blobToFile(theBlob, fileName) {
    return new File([theBlob], fileName, {
      lastModified: new Date().getTime(),
      type: theBlob.type,
    });
  }

  const albumUpload = async (e) => {
    var formData = new FormData();
    files
      .map((item) => item.file)
      .forEach((file) => formData.append("file", blobToFile(file, file.name)));

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(`${API_URL}/api/multiupload`, formData);

      setUploading(false);
      const albumObj = {
        name: albumName,
        images: data,
      };
      const res = await fetch(`${API_URL}/api/albums`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(albumObj),
      });

      if (!res.ok) {
        toast.error("Something went wrong. Try Again later.");
      } else {
        router.push("/admin/albums");
        setValidated(false);
        toast.success("Album Added Successfully");
      }
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      await albumUpload();
    }
    setValidated(true);
  };

  return (
    <AdminLayout>
      <Container style={{ padding: "20px 50px" }}>
        <AdminTitle
          title="Add New Album"
          variant="dark"
          btnName="View All"
          href="/admin/albums"
        />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Album Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Album Name ....."
              value={albumName}
              onChange={(e) => setAlbumName(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide album name ....
            </Form.Control.Feedback>
          </Form.Group>

          <FilePond
            files={files}
            onupdatefiles={setFiles}
            acceptedFileTypes={["image/png", "image/jpeg"]}
            allowMultiple={true}
            multiple
            // server="/api/upload"
            name="file"
            credits={false}
            required={true}
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
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
