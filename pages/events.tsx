import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Construction from '../components/construction'
import PageTransition from '../components/layout/pageTransition'

const Events: NextPage = () => {
  return (
    <PageTransition>
      <NextSeo title="Events" />
      <section>
        <Construction />
      </section>
    </PageTransition>
  )
}

export default Events
