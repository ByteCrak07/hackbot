import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import { DefaultSeo } from 'next-seo'
import { AnimatePresence } from 'framer-motion'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { hotjar } from 'react-hotjar'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import SEOconfig from '../seo/seo.config'

export default function App({ Component, pageProps }: AppProps) {
  const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
  const router = useRouter()

  useEffect(() => {
    if (isProduction)
      hotjar.initialize(
        process.env.NEXT_PUBLIC_HOTJAR_HJID,
        process.env.NEXT_PUBLIC_HOTJAR_HJSV
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Layout>
        <DefaultSeo {...SEOconfig} />
        {isProduction ? <GoogleAnalytics trackPageViews /> : null}
        {isProduction ? <VercelAnalytics /> : null}
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </AnimatePresence>
  )
}
