import { DefaultSeoProps } from "next-seo";

const SEOconfig: DefaultSeoProps = {
  defaultTitle: "HackBot - Discover your ideal hackathon",
  titleTemplate: "%s | HackBot",
  description:
    "HackBot is a platform matching talented people with their ideal hackathon. Browse through a curated list of hackathons, create a profile, showcase your skills, and apply to events.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hackbot.ml",
    siteName: "HackBot",
  },
  // twitter: {
  //   handle: "@AbilSavio",
  //   site: "@AbilSavio",
  //   cardType: "summary_large_image",
  // },
};

export default SEOconfig;
