import { DefaultSeoProps } from "next-seo";

const SEOconfig: DefaultSeoProps = {
  defaultTitle: "HackBot",
  titleTemplate: "%s | HackBot",
  description: "Bot for hackathons",
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
