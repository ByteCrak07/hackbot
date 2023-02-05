import { FC, useEffect } from 'react'
import { Popover } from 'flowbite'
import type { PopoverOptions, PopoverInterface } from 'flowbite'
import { BsInfoCircleFill } from 'react-icons/bs'

const VideoInfo: FC = () => {
  useEffect(() => {
    // popover content element
    const targetEl = document.getElementById('pop-content') as HTMLElement

    // element that trigger the popover
    const triggerEl = document.getElementById('pop-btn') as HTMLElement

    const options: PopoverOptions = {
      placement: 'left',
      triggerType: 'hover',
      offset: 10,
    }

    if (targetEl) {
      const popover: PopoverInterface = new Popover(
        targetEl,
        triggerEl,
        options
      )
    }
  }, [])

  return (
    <>
      <style jsx>{`
        #pop-btn {
          animation: subtle-ping 2s linear infinite;
        }

        @keyframes subtle-ping {
          0% {
            scale: 1;
          }
          50% {
            scale: 1.2;
          }
          100% {
            scale: 1;
          }
        }
      `}</style>
      <button
        id="pop-btn"
        type="button"
        className="text-xl"
        aria-label="video info"
      >
        <BsInfoCircleFill />
      </button>
      <div
        data-popover
        id="pop-content"
        role="tooltip"
        className="invisible absolute z-10 inline-block w-72 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 opacity-0 shadow-sm transition-opacity duration-300"
      >
        <div className="px-3 py-2">
          <p>
            Credits to{' '}
            <a
              className="underline hover:cursor-pointer"
              href="https://ethindia.co"
              target="_blank"
              rel="noreferrer"
            >
              EthIndia
            </a>
            , video source:{' '}
            <a
              className="underline hover:cursor-pointer"
              href="https://twitter.com/ETHIndiaco/status/1599779802512179200"
              target="_blank"
              rel="noreferrer"
            >
              tweet
            </a>
          </p>
        </div>
        <div data-popper-arrow></div>
      </div>
    </>
  )
}

export default VideoInfo
