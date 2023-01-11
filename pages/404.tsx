import { Button } from "flowbite-react";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function PageNotFound() {
  return (
    <>
      <NextSeo title="404" />
      <div className="flex p-10 h-[80vh] items-center justify-center gap-x-28">
        <div className="hidden sm:block relative">
          <div className="absolute -top-20 left-10">
            <div className="w-20 border-[20px] border-t-0 border-b-[40px] border-transparent border-b-gray-600"></div>
            <div className="w-6 h-6 rounded-full border-gray-600 border dark:border-0 dark:bg-yellow-200 absolute left-1/2 top-7 -z-10 -translate-x-1/2"></div>
            <div className="w-[460px] border-[200px] border-t-0 border-b-[380px] border-transparent dark:border-b-yellow-200 dark:border-opacity-20 absolute -z-10 left-1/2 top-6 -translate-x-1/2"></div>
          </div>
          <Image src={"/imgs/404.svg"} alt="404" height={350} width={350} />
        </div>
        <div>
          <h2 className="font-retro text-6xl">404</h2>
          <p className="font-jost text-3xl mb-3">PAGE NOT FOUND</p>
          <Button outline={true} gradientDuoTone="cyanToBlue">
            Back to Home
          </Button>
        </div>
      </div>
    </>
  );
}
