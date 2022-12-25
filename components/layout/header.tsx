import { FC, useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
import DarkModeBtn from "./darkModeBtn";

const Header: FC<{}> = () => {
  const [user, setUser] = useState<null | { name: string; username: string }>(
    null
  );

  const profileDropdowns = [
    { title: "Profile", link: "/profile" },
    { title: "Your Hackathons", link: "/hackathons/participating" },
    { title: "Account settings", link: "/settings" },
  ];

  const menus = [
    { title: "Home", link: "/home" },
    { title: "About", link: "/about" },
    { title: "Hackathons", link: "/hackathons" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <header className="fixed z-10 w-full rounded-b-lg shadow-xl">
      <Navbar fluid={true} className="rounded-b-lg">
        <Navbar.Brand href="/">
          <div className="w-48">
            <Logo track />
          </div>
        </Navbar.Brand>
        <div className="flex md:order-2 z-50">
          <DarkModeBtn />
          {!user ? (
            <>
              <Button
                onClick={() =>
                  setUser({ name: "Shashi Soman", username: "@shashi" })
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
        <Navbar.Collapse>
          {menus.map((menu, i) => (
            <Navbar.Link key={`menu ${i}`} href={menu.link} active={i === 0}>
              {menu.title}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
