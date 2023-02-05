import { NextPage } from 'next'
import SEO from '../seo'
import Construction from '../components/construction'
import PageTransition from '../components/layout/pageTransition'

const Contact: NextPage = () => {
  return (
    <PageTransition>
      <SEO title="Contact" />

      <section>
        <Construction />
      </section>
    </PageTransition>
  )
}

export default Contact
