import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Construction from "../components/construction";

const FAQs: NextPage = () => {
  return (
    <>
      <NextSeo title="FAQs" />
      <section>
        <Construction />
      </section>
    </>
  );
};

export default FAQs;
