import Link from "next/link";
import { FC, ReactNode } from "react";

const FooterLink: FC<{
  children: ReactNode;
  href: string;
  target?: "_blank";
}> = ({ children, href, target }) => {
  if (!target)
    return (
      <li className="last:mr-0 md:mr-6">
        <Link href={href} className="hover:underline">
          {children}
        </Link>
      </li>
    );
  else
    return (
      <li className="last:mr-0 md:mr-6">
        <a
          href={href}
          className="hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      </li>
    );
};

export default FooterLink;
