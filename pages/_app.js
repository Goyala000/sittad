import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "@/styles/globals.css";
import "@/styles/bootstrap.min.css";

import { SessionProvider } from "next-auth/react";

import { useSession } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      {" "}
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />{" "}
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}{" "}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        theme="dark"
        limit={3}
      />{" "}
    </SessionProvider>
  );
}

function Auth({ children }) {
  const router = useRouter();

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/admin/login");
    },
  });

  if (status === "loading") {
    return <div> Loading... </div>;
  }

  return children;
}

export default MyApp;
