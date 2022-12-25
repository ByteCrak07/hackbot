import { FC, ReactNode, useEffect } from "react";
import { Jost, Press_Start_2P } from "@next/font/google";
import Header from "./header";
import Footer from "./footer";

const jost = Jost({
  subsets: ["latin"],
});

const press_start_2p = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <style jsx global>
        {`
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          :root {
            --font-jost: ${jost.style.fontFamily};
            --font-press_start_2p: ${press_start_2p.style.fontFamily};
          }
        `}
      </style>

      <Header />
      <main className="mt-16  flex flex-col flex-grow">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
