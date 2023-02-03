import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Construction from '../components/construction'
import PageTransition from '../components/layout/pageTransition'

const Contact: NextPage = () => {
  return (
    <PageTransition>
      <NextSeo title="Contact" />
      <section>
        <Construction />
      </section>
    </PageTransition>
  )
}

export default Contact
