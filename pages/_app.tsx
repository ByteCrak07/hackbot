import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import { DefaultSeo } from 'next-seo'
import SEOconfig from '../configs/seo.config'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Layout>
        <DefaultSeo {...SEOconfig} />
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </AnimatePresence>
  )
}
