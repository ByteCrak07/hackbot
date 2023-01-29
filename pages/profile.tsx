import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Construction from "../components/construction";
import PageTransition from "../components/layout/pageTransition";

const Profile: NextPage = () => {
  return (
    <PageTransition>
      <NextSeo title="Profile" />
      <section>
        <Construction />
      </section>
    </PageTransition>
  );
};

export default Profile;
