import { FC } from 'react'

const ExploreBtn: FC = () => {
  return (
    <>
      <style jsx>{`
        .exp-btn {
          background: linear-gradient(
            -45deg,
            #ee7752,
            #e73c7e,
            #23a6d5,
            #23d5ab
          );
          background-size: 600% 400%;
          animation: gradient 3s linear infinite;
        }

        .exp-btn:hover {
          scale: 1.1;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 0%;
          }
          10% {
            background-position: 0% 50%;
          }
          20% {
            background-position: 50% 50%;
          }
          30% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 100% 100%;
          }
          70% {
            background-position: 50% 100%;
          }
          80% {
            background-position: 50% 50%;
          }
          90% {
            background-position: 50% 0%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
      <button className="exp-btn relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg p-0.5 text-sm font-medium text-gray-900 focus:outline-none">
        <span className="relative rounded-md bg-gray-900 px-5 py-2.5 text-white transition-all duration-75 ease-in hover:bg-opacity-0">
          Explore Hackathons
        </span>
      </button>
    </>
  )
}

export default ExploreBtn
