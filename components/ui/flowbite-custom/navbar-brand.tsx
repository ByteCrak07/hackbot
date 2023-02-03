import Link from 'next/link'
import { FC, ReactNode } from 'react'

const NavbarBrand: FC<{
  children: ReactNode
  href: string
}> = ({ children, href }) => {
  return (
    <Link href={href} className="flex items-center">
      {children}
    </Link>
  )
}

export default NavbarBrand
