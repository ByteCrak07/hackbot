import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Construction from "../components/construction";

const Events: NextPage = () => {
  return (
    <>
      <NextSeo title="Events" />
      <section>
        <Construction />
      </section>
    </>
  );
};

export default Events;
