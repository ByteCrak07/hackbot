import { FC } from "react";
import ConstructionSVG from "./construction-svg";

const Construction: FC = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center h-full md:px-20 min-h-[80vh]">
        <div className="flex-1 text-center">
          <div className="py-10 px-5">
            <h2 className="text-4xl md:text-5xl font-medium pb-3">
              Coming Soon&nbsp;🎉
            </h2>
            <div className="pb-20 md:pb-0">
              <p className="font-medium text-lg md:text-xl">
                This page is currently under construction.
              </p>
              <p className="text-md md:text-lg">
                We will notify when this page comes out.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 md:flex-2 w-full">
          <div className="p-10">
            <ConstructionSVG />
          </div>
        </div>
      </div>
    </>
  );
};

export default Construction;
