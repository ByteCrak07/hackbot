import Link from 'next/link'
import { FC, ReactNode } from 'react'

const NavbarBrand: FC<{
  children: ReactNode
  href: string
  ['aria-label']?: string
}> = (props) => {
  return (
    <Link
      href={props.href}
      className="flex items-center"
      aria-label={props['aria-label']}
    >
      {props.children}
    </Link>
  )
}

export default NavbarBrand
