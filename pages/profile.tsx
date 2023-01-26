import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Construction from "../components/construction";

const Profile: NextPage = () => {
  return (
    <>
      <NextSeo title="Profile" />
      <section>
        <Construction />
      </section>
    </>
  );
};

export default Profile;
