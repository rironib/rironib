import { atomic_age } from "@/config/fonts";

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
            <img
              src="/pro.png"
              alt="RON:B"
              className="mx-auto w-auto lg:w-72"
            />
          </div>
          <div className="grid gap-12 text-center lg:text-left">
            <div className="font-medium dark:text-gray-300">
              Web Developer, with extensive knowledge and years of experience,
              working in web technologies &amp; delivering quality work.
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
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
                Contact Me{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558ZM5 4.38249V10.9999H10V12.9999H5V19.6174L18.8499 11.9999L5 4.38249Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
