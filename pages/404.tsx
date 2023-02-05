import { Button } from 'flowbite-react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import SEO from '../seo'
import PageNotFoundImg from '../components/404/image'
import PageTransition from '../components/layout/pageTransition'

const PageNotFound: NextPage = () => {
  // dynamic imports
  const PageNotFoundImg = dynamic(() => import('../components/404/image'))

  return (
    <PageTransition>
      <SEO title="404 | Page Not Found" />

      <div className="flex h-[80vh] items-center justify-center gap-x-28 p-10">
        <div className="relative hidden sm:block">
          <div className="absolute -top-20 left-10">
            <div className="w-20 border-[20px] border-t-0 border-b-[40px] border-transparent border-b-gray-600"></div>
            <div className="absolute left-1/2 top-7 -z-10 h-6 w-6 -translate-x-1/2 rounded-full border border-gray-600 dark:border-0 dark:bg-yellow-200"></div>
            <div className="absolute left-1/2 top-6 -z-10 w-[460px] -translate-x-1/2 border-[200px] border-t-0 border-b-[380px] border-transparent dark:border-b-yellow-200 dark:border-opacity-20"></div>
          </div>
          <PageNotFoundImg />
        </div>
        <div>
          <h2 className="font-retro text-6xl">404</h2>
          <p className="mb-3 font-jost text-3xl">PAGE NOT FOUND</p>
          <Button outline={true} gradientDuoTone="cyanToBlue">
            Back to Home
          </Button>
        </div>
      </div>
    </PageTransition>
  )
}

export default PageNotFound
