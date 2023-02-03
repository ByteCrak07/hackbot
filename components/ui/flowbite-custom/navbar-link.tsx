import Link from 'next/link'
import { FC, ReactNode } from 'react'

const NavbarLink: FC<{
  children: ReactNode
  href: string
  target?: '_blank'
  active?: boolean
}> = ({ children, href, target, active }) => {
  if (!target)
    return (
      <li>
        <Link
          href={href}
          className={
            active
              ? `block bg-blue-700 py-2 pr-4 pl-3 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700`
              : `block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700  hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white`
          }
        >
          {children}
        </Link>
      </li>
    )
  else
    return (
      <li>
        <a
          href={href}
          className={
            active
              ? `block bg-blue-700 py-2 pr-4 pl-3 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700`
              : `block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700  hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white`
          }
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      </li>
    )
}

export default NavbarLink
