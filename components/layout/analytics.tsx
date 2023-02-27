import { FC, useEffect } from 'react'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { hotjar } from 'react-hotjar'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

const AppAnalytics: FC = () => {
  const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'

  useEffect(() => {
    if (isProduction)
      hotjar.initialize(
        process.env.NEXT_PUBLIC_HOTJAR_HJID,
        process.env.NEXT_PUBLIC_HOTJAR_HJSV
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {isProduction ? <GoogleAnalytics trackPageViews /> : null}
      {isProduction ? <VercelAnalytics /> : null}
    </>
  )
}

export default AppAnalytics
