import "../styles/globals.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";

import Layout from "./layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  const pathName = router.pathname;

  if (pathName === "/") {
    return (
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <ToastContainer />
      </SessionProvider>
    );
  }
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
