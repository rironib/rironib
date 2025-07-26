import { atomic_age } from "@/config/fonts";
import Image from "next/image";
import { RiSendPlane2Line } from "react-icons/ri";

const Page = () => {
  return (
    <div className="mx-auto my-12 w-11/12 max-w-[1275px] flex-grow p-4 lg:mb-20 lg:mt-10 lg:w-10/12">
      <main>
        <div className="mb-12 space-y-2 text-center">
          <div className={`${atomic_age.className} text-4xl font-bold`}>
            About Me
          </div>
          <div className="dark:text-gray-400">My Introduction</div>
        </div>
        <div className="mx-auto flex flex-col items-center justify-center gap-12 lg:w-8/12 lg:flex-row lg:justify-start">
          <div className="mx-auto w-10/12 lg:w-full">
            <Image
              src="/pro.png"
              alt="RON:B"
              className="mx-auto w-auto lg:w-72"
              width={480}
              height={480}
            />
          </div>
          <div className="grid gap-12 text-center lg:text-left">
            <div className="font-medium dark:text-gray-300">
              Web Developer, with extensive knowledge and years of experience,
              working in web technologies &amp; delivering quality work.
            </div>
            <div className="grid gap-4 lg:grid-cols-3 lg:gap-8">
              <div className="flex flex-col justify-center gap-3">
                <div className="text-3xl font-bold">05+</div>
                <div>Years experience</div>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <div className="text-3xl font-bold">30+</div>
                <div>Projects completed</div>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <div className="text-3xl font-bold">02+</div>
                <div>Companies worked</div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <a
                className="flex w-max items-center gap-2 rounded-md bg-violet-600 px-4 py-2 font-semibold text-white lg:px-6 lg:py-3"
                href="/contact"
              >
                Contact Me <RiSendPlane2Line />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
