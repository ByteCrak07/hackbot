import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Construction from "../components/construction";
import PageTransition from "../components/layout/pageTransition";

const About: NextPage = () => {
  return (
    <PageTransition>
      <NextSeo title="About" />
      <section>
        <Construction />
      </section>
    </PageTransition>
  );
};

export default About;
