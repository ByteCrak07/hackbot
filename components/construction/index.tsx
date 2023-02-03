import { FC } from 'react'
import ConstructionSVG from './construction-svg'

const Construction: FC = () => {
  return (
    <>
      <div className="flex h-full min-h-[80vh] flex-col-reverse items-center md:flex-row md:px-20">
        <div className="flex-1 text-center">
          <div className="py-10 px-5">
            <h2 className="pb-3 text-4xl font-medium md:text-5xl">
              Coming Soon&nbsp;🎉
            </h2>
            <div className="pb-20 md:pb-0">
              <p className="text-lg font-medium md:text-xl">
                This page is currently under construction.
              </p>
              <p className="text-md md:text-lg">
                We will notify when this page comes out.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 md:flex-2">
          <div className="p-10">
            <ConstructionSVG />
          </div>
        </div>
      </div>
    </>
  )
}

export default Construction
