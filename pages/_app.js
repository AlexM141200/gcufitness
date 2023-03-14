import "../styles/globals.css";
import Layout from "../components/Layout";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
        <NavBar />
        <div className="content">
          <Component {...pageProps} />
        </div>
      </Layout>
    </NextUIProvider>
  );
}
