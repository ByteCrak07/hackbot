import { DefaultSeoProps } from 'next-seo'

const SEOconfig: DefaultSeoProps = {
  defaultTitle: 'HackBot - Discover your perfect hackathon and events',
  titleTemplate: '%s | HackBot',
  description:
    'HackBot matches talented people with their perfect hackathon. Browse our curated list of hackathons, create a profile, showcase your skills and explore events.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://hackbot.ml',
    siteName: 'HackBot',
  },
  // twitter: {
  //   handle: "@AbilSavio",
  //   site: "@AbilSavio",
  //   cardType: "summary_large_image",
  // },
}

export default SEOconfig
