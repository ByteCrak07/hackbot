import { NextPage } from 'next'
import Link from 'next/link'
import SEO from '../seo'
import PageTransition from '../components/layout/pageTransition'

const Terms: NextPage = () => {
  return (
    <PageTransition>
      <SEO title="Terms & Conditions" />

      <section className="py-20 px-[12%]">
        <article className="format max-w-none dark:format-invert">
          <h1>Terms and Conditions</h1>
          <p>Last updated: 26 February 2023</p>

          <p className="lead">
            These terms and conditions (&quot;Terms&quot;) apply to your use of
            the HackBot website and all related services (collectively, the
            &quot;Service&quot;). By using the Service, you agree to these
            Terms, so please read them carefully. Frontend of this project is
            currently open sourced under GPL-3.0 license.
          </p>

          <h2>Use of the Service</h2>
          <p>
            You may use the Service only in accordance with these Terms. You
            agree not to use the Service:
          </p>
          <ol>
            <li>
              for the purpose of exploiting, harming, or attempting to exploit
              or harm minors in any way by exposing them to inappropriate
              content, asking for personally identifiable information, or
              otherwise;
            </li>
            <li>
              to send, knowingly receive, upload, download, use, or re-use any
              material that does not comply with these Terms;
            </li>
            <li>
              to transmit, or procure the sending of, any advertising or
              promotional material, including any &quot;junk mail&quot;,
              &quot;chain letter&quot;, &quot;spam&quot;, or any other similar
              solicitation;
            </li>
            <li>
              to impersonate or attempt to impersonate the Service, a Service
              employee, another user, or any other person or entity;
            </li>
            <li>
              to engage in any other conduct that restricts or inhibits
              anyone&apos;s use or enjoyment of the Service, or which, as
              determined by us, may harm the Service or users of the Service or
              expose them to liability.
            </li>
          </ol>

          <h2>User Accounts</h2>
          <p>
            To access some features of the Service, you may be required to
            create a user account. When creating your account, you must provide
            accurate and complete information. You are responsible for
            maintaining the confidentiality of your account credentials, and you
            are responsible for all activities that occur under your account.
          </p>
          <p>
            We reserve the right to suspend or terminate your account at any
            time and without notice for any reason, including if we suspect that
            you have violated these Terms or any applicable law or regulation.
          </p>

          <h2>Privacy</h2>
          <p>
            We collect and use information from you in accordance with our{' '}
            <Link href="/privacy">Privacy Policy</Link>, which is incorporated
            into these Terms by reference. By using the Service, you consent to
            our collection and use of your information as described in the
            Privacy Policy.
          </p>

          <h2>Third-Party Links and Services</h2>
          <p>
            The Service may contain links to third-party websites or services
            that are not owned or controlled by us. We have no control over, and
            assume no responsibility for, the content, privacy policies, or
            practices of any third-party websites or services. You further
            acknowledge and agree that we shall not be responsible or liable,
            directly or indirectly, for any damage or loss caused or alleged to
            be caused by or in connection with use of or reliance on any such
            content, goods or services available on or through any such websites
            or services.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            The Service is provided on an &quot;as is&quot; and &quot;as
            available&quot; basis, without any warranties of any kind, either
            express or implied, including but not limited to warranties of
            merchantability, fitness for a particular purpose, or
            non-infringement. Without limiting the foregoing, we do not warrant
            that the Service will be uninterrupted or error-free, that defects
            will be corrected, or that the Service or the server(s) that make it
            available are free of viruses or other harmful components.
          </p>

          <h2>Termination</h2>
          <p>
            We may terminate or suspend your access to the Service, in whole or
            in part, at any time and without notice, for any reason or no
            reason, including but not limited to your breach of these Terms.
            Upon termination, your right to use the Service will immediately
            cease, and you shall destroy all copies of any software or other
            materials provided to you by us.
          </p>

          <h2>Contact us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{' '}
            <a href="mailto:contact@hackbot.xyz">contact@hackbot.xyz</a>.
          </p>
        </article>
      </section>
    </PageTransition>
  )
}

export default Terms
