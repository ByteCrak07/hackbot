import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { IconType } from 'react-icons'

const FooterIcon: FC<{
  icon: IconType
  href: string
  alt?: string
  target?: '_blank'
}> = ({ icon: Icon, href, alt, target }) => {
  if (!target)
    return (
      <Link
        href={href}
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <Icon className="h-5 w-5" />
        <span className="sr-only">{alt}</span>
      </Link>
    )
  else
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <Icon className="h-5 w-5" />
        <span className="sr-only">{alt}</span>
      </a>
    )
}

export default FooterIcon
