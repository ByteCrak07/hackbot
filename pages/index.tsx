import { Button } from "flowbite-react";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import TerminalText from "../components/home/terminal-text";
import HackathonCard from "../components/ui/cards/hackathon";
import LoadingCard from "../components/ui/cards/hackathon-loading";

const Home: NextPage = () => {
  useEffect(() => {
    let video = document.getElementById("bg-video") as HTMLVideoElement;

    video.onpause = function () {
      video.play();
    };

    video.onratechange = function () {
      video.playbackRate = 1;
    };
  }, []);

  const scrollDown = () => {
    const heroDiv = document.getElementById("hero") as HTMLDivElement;
    window.scrollTo({ top: heroDiv.clientHeight - 80, behavior: "smooth" });
  };

  return (
    <>
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
              className="pointer-events-none object-cover w-full h-full -z-50"
              suppressHydrationWarning
            >
              <source src="/videos/bg-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col items-center justify-center">
          <TerminalText />
          <div className="mt-24 -mb-24 dark">
            <Link href={"/hackathons"}>
              <Button outline gradientDuoTone="cyanToBlue">
                Explore hackathons
              </Button>
            </Link>
          </div>

          <button
            onClick={scrollDown}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-2xl"
          >
            <BsChevronDoubleDown className="animate-bounce" />
          </button>
        </div>
      </section>

      <section className="pt-20 px-10 md:px-20">
        <h2 className="text-2xl font-medium pb-5">Featured Hackathons</h2>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            <LoadingCard />
            <HackathonCard />
            <HackathonCard />
          </div>
        </div>
      </section>

      <section className="py-20 px-10 md:px-20">
        <h2 className="text-2xl font-medium pb-5">Latest Hackathons</h2>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            <LoadingCard />
            <HackathonCard />
            <HackathonCard />
          </div>
        </div>

        {/* <img src="/blh.svg" /> */}
      </section>
    </>
  );
};

export default Home;
