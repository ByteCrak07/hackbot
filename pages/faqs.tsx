import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import SEO from '../seo'
import PageTransition from '../components/layout/pageTransition'

const FAQs: NextPage = () => {
  // dynamic imports
  const Construction = dynamic(() => import('../components/construction'))

  return (
    <PageTransition>
      <SEO title="FAQs" />

      <section>
        <Construction />
      </section>
    </PageTransition>
  )
}

export default FAQs
