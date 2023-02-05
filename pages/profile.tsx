import { NextPage } from 'next'
import SEO from '../seo'
import Construction from '../components/construction'
import PageTransition from '../components/layout/pageTransition'

const Profile: NextPage = () => {
  return (
    <PageTransition>
      <SEO title="Profile" />

      <section>
        <Construction />
      </section>
    </PageTransition>
  )
}

export default Profile
