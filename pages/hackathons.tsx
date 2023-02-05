import { NextPage } from 'next'
import SEO from '../seo'
import Construction from '../components/construction'
import PageTransition from '../components/layout/pageTransition'

const Hackathons: NextPage = () => {
  return (
    <PageTransition>
      <SEO title="Hackathons" />

      <section>
        <Construction />
      </section>
    </PageTransition>
  )
}

export default Hackathons
