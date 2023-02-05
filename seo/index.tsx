import { FC } from 'react'
import { useRouter } from 'next/router'
import {
  NextSeo,
  NextSeoProps,
  OrganizationJsonLd,
  WebPageJsonLd,
  LogoJsonLd,
  SocialProfileJsonLd,
} from 'next-seo'

const SEO: FC<NextSeoProps> = (props) => {
  const router = useRouter()

  return (
    <>
      <NextSeo {...props} canonical={`https://hackbot.xyz${router.asPath}`} />

      <WebPageJsonLd
        description="HackBot matches talented people with their perfect hackathon. Browse our curated list of hackathons, create a profile, showcase your skills and explore events."
        id="https://hackbot.xyz"
        lastReviewed="2023-02-05T05:59:02.085Z"
        reviewedBy={{
          type: 'Person',
          name: 'Abil Savio',
        }}
      />

      <OrganizationJsonLd
        type="Organization"
        id="https://hackbot.xyz"
        logo="https://hackbot.xyz/icons/android-chrome-512x512.png"
        name="HackBot"
        contactPoint={[
          {
            contactType: 'technical support',
            email: 'contact@hackbot.xyz',
            availableLanguage: 'English',
          },
        ]}
        sameAs={['https://www.hackbot.xyz']}
        url="https://hackbot.xyz"
      />

      <LogoJsonLd
        logo="https://hackbot.xyz/icons/android-chrome-512x512.png"
        url="https://hackbot.xyz"
      />

      {/* TODO: Add social media profiles */}
      {/* <SocialProfileJsonLd
        type="Organization"
        name="Hackbot"
        url="http://hackbot.xyz"
        sameAs={[
          'http://instagram.com/yourProfile',
          'http://www.linkedin.com/in/yourprofile',
        ]}
      /> */}
    </>
  )
}

export default SEO
