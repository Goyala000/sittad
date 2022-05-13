import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Form, Button, InputGroup, Container } from "react-bootstrap";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { signIn } from "next-auth/react";

import Layout from "@/components/Layout";
import styles from "@/styles/Login.module.css";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (!result.error) {
        // set some auth state
        router.replace("/admin/home");
      } else {
        console.log(result);
      }
    }
    setValidated(true);
  };

  return (
    <Layout title="Sittad Samaj | Login">
      <Container>
        <div className={styles.loginForm}>
          <div className={styles.imgSection}>
            <Image
              src="/images"
              height="300px"
              width="325px"
              alt="Sittad Samaj Logo"
            />
            <div className={styles.content}>
              <h3>Sittad Samaj</h3>
              <h5>Bafal-13, Kathmandu</h5>
              <p>{"Creating Opportunities Through Education"}</p>
            </div>
          </div>
          <div className={styles.formSection}>
            <h3>Log in</h3>
            <Form noValidate validated={validated} onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your email
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <InputGroup.Text
                    id="basic-addon2"
                    onClick={(e) => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </InputGroup.Text>

                  <Form.Control.Feedback type="invalid">
                    Please enter your password
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Button variant="dark" type="submit" className="mt-2 btn-xl">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Login;
