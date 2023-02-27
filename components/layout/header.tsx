import { FC, useEffect, useState } from 'react'
import Logo from './logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import throttle from 'lodash/throttle'
import { Navbar, Dropdown, Avatar, Button } from 'flowbite-react'
import { RiMenu3Fill } from 'react-icons/ri'
import DarkModeBtn from './dark-mode-btn'
import NavbarLink from '../ui/flowbite-custom/navbar-link'
import NavbarBrand from '../ui/flowbite-custom/navbar-brand'
import { usePbAuth } from '../../contexts/AuthWrapper'

const Header: FC<{}> = () => {
  const { user, signOut } = usePbAuth()

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

  // Temporary fix for closing navbar during route change and on clicking outside
  useEffect(() => {
    window.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      const header = document.getElementsByTagName('header')[0]
      const menuBtn = document.getElementById('menu-btn')
      const isClosed = document
        .getElementById('navbar-collapse')
        ?.classList.contains('hidden')

      if (target && header && !isClosed && menuBtn?.id !== target.id) {
        if (header.contains(target)) return

        // if clicked outside
        menuBtn?.click()
      }
    })

    // works everytime when route gets changed to close the collapsed navbar
    const isClosed = document
      .getElementById('navbar-collapse')
      ?.classList.contains('hidden')
    if (!isClosed) document.getElementById('menu-btn')?.click()
  }, [router])

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
          <div className="-ml-2 w-48 scale-90 md:ml-0 md:scale-100">
            <Logo trackEyes />
          </div>
        </NavbarBrand>

        <div className="z-50 flex justify-end md:order-2 md:w-36">
          {/* for dark mode btn */}
          <div className="hidden md:block">
            <div className={transparentHeader ? 'hidden' : ''}>
              <DarkModeBtn type="button" />
            </div>
          </div>

          {!user ? (
            <div className="scale-90 md:scale-100">
              <Link
                href="/signin"
                className="flex items-center justify-center rounded-lg border border-transparent bg-blue-700 p-0.5 text-center font-medium text-white hover:bg-blue-800 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:disabled:hover:bg-blue-600"
              >
                <span className="flex items-center rounded-md px-4 py-2 text-sm">
                  Sign In
                </span>
              </Link>
            </div>
          ) : (
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img={user.avatarUrl}
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user.name}</span>
                <span className="block truncate text-sm font-medium">
                  {user.email}
                </span>
              </Dropdown.Header>
              {profileDropdowns.map((dropdown, i) => (
                <Link key={`dropdown ${i}`} href={dropdown.link}>
                  <Dropdown.Item>{dropdown.title}</Dropdown.Item>
                </Link>
              ))}
              <Dropdown.Divider />
              <Dropdown.Item onClick={signOut}>Sign out</Dropdown.Item>
            </Dropdown>
          )}
          <Navbar.Toggle
            barIcon={RiMenu3Fill}
            className="scale-90"
            id="menu-btn"
          />
        </div>
        <Navbar.Collapse
          id="navbar-collapse"
          className="rounded-lg bg-white dark:bg-gray-800 md:bg-transparent dark:md:bg-transparent"
        >
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
