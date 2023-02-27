import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import { DefaultSeo } from 'next-seo'
import { AnimatePresence } from 'framer-motion'
import SEOconfig from '../seo/seo.config'
import AuthWrapper from '../contexts/AuthWrapper'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <AuthWrapper>
        <Layout>
          <DefaultSeo {...SEOconfig} />
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </AuthWrapper>
    </AnimatePresence>
  )
}
