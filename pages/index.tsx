import { NextPage } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs'
import SEO from '../seo'
import PageTransition from '../components/layout/pageTransition'
import HackathonCard from '../components/ui/cards/hackathon'
import LoadingCard from '../components/ui/cards/hackathon-loading'
import ExploreBtn from '../components/home/explore-btn'

const Home: NextPage = () => {
  // dynamic imports
  const TerminalText = dynamic(() => import('../components/home/terminal-text'))
  const VideoInfo = dynamic(() => import('../components/home/video-info'))

  useEffect(() => {
    let video = document.getElementById('bg-video') as HTMLVideoElement

    video.onpause = function () {
      video.play()
    }

    video.onratechange = function () {
      video.playbackRate = 1
    }
  }, [])

  const scrollDown = () => {
    const heroDiv = document.getElementById('hero') as HTMLDivElement
    window.scrollTo({ top: heroDiv.clientHeight - 80, behavior: 'smooth' })
  }

  return (
    <PageTransition>
      <SEO />

      <section id="hero" className="relative h-screen w-full overflow-hidden">
        <div className="h-full">
          <div className="h-full bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              aria-hidden
              id="bg-video"
              poster="/videos/bg-video-thumbnail.webp"
              className="pointer-events-none -z-50 h-full w-full object-cover"
              suppressHydrationWarning
            >
              <source src="/videos/bg-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <TerminalText />
          <div className="dark mt-24 -mb-24">
            <Link href={'/hackathons'}>
              <ExploreBtn />
            </Link>
          </div>

          <button
            onClick={scrollDown}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-2xl"
            aria-label="more"
          >
            <BsChevronDoubleDown className="animate-bounce" />
          </button>

          <div className="absolute bottom-10 right-10">
            <VideoInfo />
          </div>
        </div>
      </section>

      <section className="px-10 pt-20 md:px-20">
        <h3 className="pb-5 text-2xl font-medium">Featured Hackathons</h3>
        <div className="flex justify-center">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <LoadingCard />
            <HackathonCard />
            <HackathonCard />
          </div>
        </div>
      </section>

      <section className="py-20 px-10 md:px-20">
        <h3 className="pb-5 text-2xl font-medium">Latest Hackathons</h3>
        <div className="flex justify-center">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <LoadingCard />
            <HackathonCard />
            <HackathonCard />
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Home
