import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Construction from '../components/construction'
import PageTransition from '../components/layout/pageTransition'

const Hackathons: NextPage = () => {
  return (
    <PageTransition>
      <NextSeo title="Hackathons" />
      <section>
        <Construction />
      </section>
    </PageTransition>
  )
}

export default Hackathons
