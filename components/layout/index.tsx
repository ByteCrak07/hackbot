import { FC, ReactNode, useEffect } from 'react'
import { Inconsolata, Jost, Press_Start_2P, Quicksand } from '@next/font/google'
import Header from './header'
import Footer from './footer'
import { useRouter } from 'next/router'

const jost = Jost({
  subsets: ['latin'],
})

const quicksand = Quicksand({
  subsets: ['latin'],
})

const inconsolata = Inconsolata({
  subsets: ['latin'],
})

const press_start_2p = Press_Start_2P({ weight: '400', subsets: ['latin'] })

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

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
            --font-quicksand: ${quicksand.style.fontFamily};
            --font-inconsolata: ${inconsolata.style.fontFamily};
            --font-press_start_2p: ${press_start_2p.style.fontFamily};
          }
        `}
      </style>

      <Header />
      <main
        className={`flex flex-grow flex-col font-jost ${
          router.pathname === '/' ? '' : 'mt-16'
        }`}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
export default Layout
