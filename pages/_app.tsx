import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import Head from "../components/head/Head";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft, faArrowRight);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head title={`Issa Dia | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}
