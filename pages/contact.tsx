import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Construction from "../components/construction";

const Contact: NextPage = () => {
  return (
    <>
      <NextSeo title="Contact" />
      <section>
        <Construction />
      </section>
    </>
  );
};

export default Contact;
