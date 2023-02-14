import { FC, useEffect, useState } from 'react'
import Logo from './logo'
import Link from 'next/link'
import { Navbar, Dropdown, Avatar, Button } from 'flowbite-react'
import DarkModeBtn from './dark-mode-btn'
import { useRouter } from 'next/router'
import throttle from 'lodash/throttle'
import NavbarLink from '../ui/flowbite-custom/navbar-link'
import NavbarBrand from '../ui/flowbite-custom/navbar-brand'

const Header: FC<{}> = () => {
  const [user, setUser] = useState<null | { name: string; username: string }>(
    null
  )

  const router = useRouter()
  const [transparentHeader, setTransparentHeader] = useState(
    router.pathname === '/' ? true : false
  )

  useEffect(() => {
    if (router.pathname === '/') {
      const checkScroll = throttle(() => {
        if (window.scrollY > 50) {
          if (transparentHeader) setTransparentHeader(false)
        } else {
          if (!transparentHeader) setTransparentHeader(true)
        }
      }, 200)

      checkScroll()
      window.addEventListener('scroll', checkScroll)

      return () => {
        window.removeEventListener('scroll', checkScroll)
      }
    } else {
      setTransparentHeader(false)
    }
  }, [router, transparentHeader])

  const profileDropdowns = [
    { title: 'Profile', link: '/profile' },
    { title: 'Your Hackathons', link: '/hackathons/participating' },
    { title: 'Account settings', link: '/settings' },
  ]

  const menus = [
    { title: 'Home', link: '/' },
    { title: 'Hackathons', link: '/hackathons' },
    { title: 'Events', link: '/events' },
    { title: 'About', link: '/about' },
  ]

  return (
    <header
      className={`fixed z-10 w-full rounded-b-lg font-jost ${
        transparentHeader ? 'dark' : 'shadow-xl'
      }`}
    >
      <Navbar
        fluid={true}
        className={`rounded-b-lg ${
          transparentHeader ? 'bg-opacity-0 dark:bg-opacity-0' : ''
        }`}
      >
        <NavbarBrand href="/" aria-label="HackBot">
          <div className="w-48">
            <Logo trackEyes />
          </div>
        </NavbarBrand>
        <div className="z-50 flex justify-end md:order-2 md:w-36">
          <div className="hidden md:block">
            <div className={transparentHeader ? 'hidden' : ''}>
              <DarkModeBtn type="button" />
            </div>
          </div>
          {!user ? (
            <>
              <Button
                onClick={() =>
                  setUser({ name: 'Shashi Soman', username: '@shashi' })
                }
              >
                Sign In
              </Button>
              {/* <Link href="/signin">
                <Button>Sign In</Button>
              </Link> */}
            </>
          ) : (
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user.name}</span>
                <span className="block truncate text-sm font-medium">
                  {user.username}
                </span>
              </Dropdown.Header>
              {profileDropdowns.map((dropdown, i) => (
                <Link key={`dropdown ${i}`} href={dropdown.link}>
                  <Dropdown.Item>{dropdown.title}</Dropdown.Item>
                </Link>
              ))}
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => setUser(null)}>
                Sign out
              </Dropdown.Item>
            </Dropdown>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="bg-white dark:bg-gray-800 md:bg-transparent dark:md:bg-transparent">
          {menus.map((menu, i) => (
            <NavbarLink
              key={`menu ${i}`}
              href={menu.link}
              active={menu.link === router.pathname}
            >
              {menu.title}
            </NavbarLink>
          ))}
          <li className="flex gap-x-4 py-3 px-3 text-black text-opacity-80 dark:text-white dark:text-opacity-60 md:hidden">
            <span>Theme</span>
            <DarkModeBtn type="toggle" />
          </li>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
