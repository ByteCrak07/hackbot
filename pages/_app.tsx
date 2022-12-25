import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { DefaultSeo } from "next-seo";
import SEOconfig from "../configs/seo.config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo {...SEOconfig} />
      <Component {...pageProps} />
    </Layout>
  );
}
