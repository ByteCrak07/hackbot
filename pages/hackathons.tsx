import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Construction from "../components/construction";

const Hackathons: NextPage = () => {
  return (
    <>
      <NextSeo title="Hackathons" />
      <section>
        <Construction />
      </section>
    </>
  );
};

export default Hackathons;
