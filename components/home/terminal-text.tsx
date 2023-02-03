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
        <h1 className="inline">Hi Hacker</h1>
      </div>
      <div className="flex h-[100px] justify-center text-4xl md:text-5xl">
        <Typewriter
          options={{
            strings: headings,
            autoStart: true,
            loop: true,
            cursor: '_',
            deleteSpeed: 30,
          }}
        />
      </div>
    </div>
  )
}

export default TerminalText
