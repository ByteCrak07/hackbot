import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import SEO from '../seo'
import PageTransition from '../components/layout/pageTransition'

const Profile: NextPage = () => {
  // dynamic imports
  const Construction = dynamic(() => import('../components/construction'))

  return (
    <PageTransition>
      <SEO title="Profile" />

      <section className="min-h-[80vh]">
        <Construction />
      </section>
    </PageTransition>
  )
}

export default Profile
