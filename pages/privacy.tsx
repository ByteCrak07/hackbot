import { NextPage } from 'next'
import Link from 'next/link'
import SEO from '../seo'
import PageTransition from '../components/layout/pageTransition'

const Privacy: NextPage = () => {
  return (
    <PageTransition>
      <SEO title="Privacy Policy" />

      <section className="py-20 px-[12%]">
        <article className="format max-w-none dark:format-invert">
          <h1>Privacy Policy</h1>
          <p>Last updated: 26 February 2023</p>

          <p className="lead">
            This Privacy Policy describes how we, the team behind{' '}
            <Link href="/">HackBot</Link>, collect, use, and disclose your
            personal information when you access or use our website, which will
            be primarily used to list hackathons, apply them, and even form
            teams. We are committed to protecting your privacy and ensuring that
            your personal information is handled responsibly and in accordance
            with applicable laws and regulations.
          </p>

          <h2>Information we collect</h2>
          <p>
            We collect information that you provide to us directly when you
            create an account, apply for a hackathon, form teams, or contact us
            for support. This information may include your name, email address,
            username, and any other information that you choose to provide.
          </p>
          <p>
            In addition, we use tracking technologies to collect information
            about your use of our website, including your IP address, browser
            type, device type, operating system, and other technical
            information. We use this information to analyze and improve our
            website and to personalize your experience on our website.
          </p>

          <h2>How we use your information</h2>
          <p>
            We use your personal information to provide and improve our
            services, to communicate with you about your account, to respond to
            your inquiries and support requests, and to comply with applicable
            laws and regulations.
          </p>
          <p>
            We may also use your information to send you information about
            latest hackathons or other communications, which you can opt out of
            at any time by following the instructions included in those
            communications. We do not sell, rent, or share your personal
            information with anyone.
          </p>

          <h2>Analytics and Tracking Technologies</h2>
          <p>
            We use tracking technologies to collect information about your use
            of our website. These tools may use cookies, web beacons, or other
            technologies to collect information about your interactions with our
            website. We use this information to analyze and improve our website
            and to personalize your experience on our website.
          </p>
          <p>
            Currently we use Google Analytics, Hotjar & Vercel Analytics to
            collect analytical and tracking information.
          </p>

          <h2>Security</h2>
          <p>
            We take very good measures to protect your personal information from
            unauthorized access, disclosure, or destruction. However, no
            security system is completely secure, and we cannot guarantee the
            security of your personal information.
          </p>

          <h2>Children&apos;s privacy</h2>
          <p>
            Our website is not directed to children under the age of 13, and we
            do not knowingly collect personal information from children under
            the age of 13. If we become aware that we have collected personal
            information from a child under the age of 13, we will take steps to
            delete the information as soon as possible.
          </p>

          <h2>Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make
            material changes to this Privacy Policy, we will be posting a notice
            on our website prior to the effective date of the changes. Your
            continued use of our website after the effective date of the changes
            indicates your agreement to the new Privacy Policy.
          </p>

          <h2>Contact us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our privacy practices, please contact us at{' '}
            <a href="mailto:contact@hackbot.xyz">contact@hackbot.xyz</a>.
          </p>
        </article>
      </section>
    </PageTransition>
  )
}

export default Privacy
