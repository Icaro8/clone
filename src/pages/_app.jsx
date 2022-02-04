import "../styles/globals.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Layout from "./layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pathName = router.pathname;

  if (pathName === "/") {
    return (
      <>
        <Component {...pageProps} />
        <ToastContainer />
      </>
    );
  }
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
  );
}

export default MyApp;
