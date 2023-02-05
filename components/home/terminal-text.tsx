import { FC } from 'react'
import Typewriter from 'typewriter-effect'

const TerminalText: FC = () => {
  const headings = [
    'Explore hackathons',
    'Find your perfect team',
    'Learn, Build and Explore',
  ]

  return (
    <div className="flex w-full flex-col items-center justify-center px-5 font-terminal">
      <div className="text-6xl font-medium md:text-7xl">
        <span className="mr-5">&gt;</span>
        <h1 className="inline">
          Hi Hacker, <span className="sr-only">Welcome to HackBot</span>
        </h1>
      </div>
      <h2 className="flex h-[100px] justify-center text-4xl md:text-5xl">
        <span className="sr-only">Explore hackathons</span>
        <Typewriter
          options={{
            strings: headings,
            autoStart: true,
            loop: true,
            cursor: '_',
            deleteSpeed: 30,
          }}
        />
      </h2>
    </div>
  )
}

export default TerminalText
