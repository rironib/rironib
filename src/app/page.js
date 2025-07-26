import { atomic_age } from "@/config/fonts";
import { RiSendPlane2Line } from "react-icons/ri";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto my-12 w-11/12 max-w-[1275px] flex-grow p-4 lg:mb-20 lg:mt-10 lg:w-10/12">
      <main className="flex min-h-[70dvh] items-center justify-center">
        <div className="flex flex-col-reverse items-center justify-center gap-16 lg:flex-row lg:gap-8">
          <div className="grid gap-3 text-center lg:text-start">
            <div className="font-atomic text-3xl font-bold lg:text-5xl">
              Hi, I&apos;m <span className={atomic_age.className}>RON𝒾B</span>
            </div>
            <div className="mb-2 text-lg font-medium text-violet-400">
              Web Developer
            </div>
            <div className="mb-6 dark:text-gray-400">
              H:gh level experience in web design and development knowledge,
              producing quality work.
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
          <div className="flex w-full justify-center">
            <Image
              src="/pro.png"
              alt="RON:B"
              className="w-60 lg:w-72"
              width={480}
              height={480}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
