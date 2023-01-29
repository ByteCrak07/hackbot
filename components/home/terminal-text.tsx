import { FC } from "react";
import Typewriter from "typewriter-effect";

const TerminalText: FC = () => {
  const headings = [
    "Explore hackathons",
    "Find your perfect team",
    "Learn, Build and Explore",
  ];

  return (
    <div className="font-terminal w-full flex flex-col justify-center items-center px-5">
      <div className="text-6xl md:text-7xl font-medium">
        <span className="mr-5">&gt;</span>
        <h1 className="inline">Hi Hacker</h1>
      </div>
      <div className="flex justify-center h-[100px] text-4xl md:text-5xl">
        <Typewriter
          options={{
            strings: headings,
            autoStart: true,
            loop: true,
            cursor: "_",
            deleteSpeed: 30,
          }}
        />
      </div>
    </div>
  );
};

export default TerminalText;
