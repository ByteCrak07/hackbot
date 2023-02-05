import { NextPage } from 'next'
import SEO from '../seo'
import Construction from '../components/construction'
import PageTransition from '../components/layout/pageTransition'

const FAQs: NextPage = () => {
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
