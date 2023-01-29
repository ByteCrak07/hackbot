import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Construction from "../components/construction";
import PageTransition from "../components/layout/pageTransition";

const FAQs: NextPage = () => {
  return (
    <PageTransition>
      <NextSeo title="FAQs" />
      <section>
        <Construction />
      </section>
    </PageTransition>
  );
};

export default FAQs;
