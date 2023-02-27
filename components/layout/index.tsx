import { FC, ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Inconsolata, Jost, Press_Start_2P, Quicksand } from 'next/font/google'
import { Toaster } from 'sonner'
import Analytics from './analytics'
import Header from './header'
import Footer from './footer'

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
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
    }
  }, [])

  // observe class of html to detect change in darkmode
  useEffect(() => {
    const observer = new MutationObserver((record) => {
      if ((record[0].target as HTMLElement).className === 'dark')
        setIsDarkMode(true)
      else setIsDarkMode(false)
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
      childList: false,
      characterData: false,
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Analytics />
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
      <Toaster
        closeButton
        richColors
        position="bottom-right"
        theme={isDarkMode ? 'dark' : 'light'}
      />
    </>
  )
}
export default Layout
