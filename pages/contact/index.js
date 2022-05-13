import {
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Button,
} from "react-bootstrap";

import ImageHeader from "@/components/ImageHeader";
import Layout from "@/components/Layout";

import styles from "@/styles/Contact.module.css";

const index = () => {
  return (
    <Layout title="Contact">
      <ImageHeader mtitle="Contact" />
      <div className={styles.title}>Contact Us</div>
      <Container>
        <Form className="container my-5 py-4">
          <Row className="g-2 mb-4">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Name">
                <Form.Control type="text" placeholder="Enter Your Name...." />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
                <Form.Control
                  type="number"
                  placeholder="Enter Phone Number...."
                />
              </FloatingLabel>
            </Col>
          </Row>

          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-4"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <Button className="mt-3" variant="dark">
            Submit
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default index;
