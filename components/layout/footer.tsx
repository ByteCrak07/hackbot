import { FC } from "react";
import { Footer } from "flowbite-react";
import {
  BsDiscord,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Logo from "./logo";
import Link from "next/link";

const AppFooter: FC = () => (
  <Footer container={true}>
    <div className="w-full font-jost">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className="w-48">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <Footer.Title title="Follow us" />
            <Footer.LinkGroup col={true}>
              <Footer.Link
                href="https://github.com/ByteCrak07/hackbot"
                target="_blank"
              >
                Github
              </Footer.Link>
              <Footer.Link href="#">Discord</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms & Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright
          href="#"
          by="HackBot"
          year={new Date().getFullYear()}
        />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsTwitter} />
          <Footer.Icon
            href="https://github.com/ByteCrak07/hackbot"
            icon={BsGithub}
          />
          <Footer.Icon href="#" icon={BsDiscord} />
        </div>
      </div>
    </div>
  </Footer>
);

export default AppFooter;
