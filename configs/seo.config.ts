import { DefaultSeoProps } from "next-seo";

const SEOconfig: DefaultSeoProps = {
  defaultTitle: "HackBot",
  titleTemplate: "%s | HackBot",
  description:
    "HackBot is a platform for connecting talented individuals with the perfect hackathon for them. We take into account the skill set, experience level, and interests to find the most suitable hackathon events for each user. Browse through a curated list of upcoming hackathons, create a profile to showcase your skills, and apply to events. Elevate your career and meet like-minded individuals with HackBot.",
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
