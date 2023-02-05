import { NextPage } from 'next'
import SEO from '../seo'
import Construction from '../components/construction'
import PageTransition from '../components/layout/pageTransition'

const About: NextPage = () => {
  return (
    <PageTransition>
      <SEO title="About" />

      <section>
        <Construction />
      </section>
    </PageTransition>
  )
}

export default About
