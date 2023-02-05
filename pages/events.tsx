import { NextPage } from 'next'
import SEO from '../seo'
import Construction from '../components/construction'
import PageTransition from '../components/layout/pageTransition'

const Events: NextPage = () => {
  return (
    <PageTransition>
      <SEO title="Events" />

      <section>
        <Construction />
      </section>
    </PageTransition>
  )
}

export default Events
