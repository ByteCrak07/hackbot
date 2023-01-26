import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Construction from "../components/construction";

const About: NextPage = () => {
  return (
    <>
      <NextSeo title="About" />
      <section>
        <Construction />
      </section>
    </>
  );
};

export default About;
