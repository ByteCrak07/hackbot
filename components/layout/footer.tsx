import { FC } from 'react'
import { Footer } from 'flowbite-react'
import { BsDiscord, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import Logo from './logo'
import Link from 'next/link'
import FooterLink from '../ui/flowbite-custom/footer-link'
import FooterIcon from '../ui/flowbite-custom/footer-icon'

const AppFooter: FC = () => (
  <Footer container={true}>
    <div className="w-full font-jost">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className="w-48">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 pt-10 sm:mt-4 sm:grid-cols-3 sm:gap-6 md:pt-0">
          <div>
            <Footer.Title title="Follow us" />
            <Footer.LinkGroup col={true}>
              <FooterLink
                href="https://github.com/ByteCrak07/hackbot"
                target="_blank"
              >
                Github
              </FooterLink>
              <FooterLink href="https://discord.gg/7r3GAJTX" target="_blank">
                Discord
              </FooterLink>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Support" />
            <Footer.LinkGroup col={true}>
              <FooterLink href="/faqs">FAQs</FooterLink>
              <FooterLink href="/contact">Contact us</FooterLink>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright by="HackBot" year={new Date().getFullYear()} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <FooterIcon
            href="https://www.instagram.com"
            icon={BsInstagram}
            target="_blank"
            alt="Instagram"
          />
          <FooterIcon
            href="https://twitter.com"
            icon={BsTwitter}
            target="_blank"
            alt="Twitter"
          />
          <FooterIcon
            href="https://github.com/ByteCrak07/hackbot"
            icon={BsGithub}
            target="_blank"
            alt="Github"
          />
          <FooterIcon
            href="https://discord.gg/7r3GAJTX"
            icon={BsDiscord}
            target="_blank"
            alt="Discord"
          />
        </div>
      </div>
    </div>
  </Footer>
)

export default AppFooter
