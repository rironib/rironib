import { RiExternalLinkLine } from "react-icons/ri";
import { Button } from "@heroui/react";
import { atomic_age } from "@/config/fonts";

const Page = () => {
  return (
    <div className="mx-auto my-12 w-11/12 max-w-[1275px] flex-grow p-4 lg:mb-20 lg:mt-10 lg:w-10/12">
      <main>
        <div className="mb-12 space-y-2 text-center">
          <div className={`${atomic_age.className} text-4xl font-bold`}>
            What I Did?
          </div>
          <div className="dark:text-gray-400">My Some Notable Works.</div>
        </div>
        <div className="rounded-xl bg-default-50 px-4 py-12 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex h-max flex-col gap-4 rounded-xl bg-default-100 p-6">
              <img
                src="/projects/foodhub-bd.web.app.jpg"
                alt="Food Hub - Community Food Sharing Website"
                className="rounded-xl"
              />
              <h3 className="text-xl font-bold">
                Food Hub - Community Food Sharing Website
              </h3>
              <p className="text-slate-400">
                A free food sharing website based on Bangladesh. Where anybody
                can donate food and get free food.
              </p>
              <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
                <div className="text-slate-300">
                  React, TailwindCSS, NodeJS, MongoDB, Firebase
                </div>
                <Button
                  href="https://foodhub-bd.web.app"
                  color="primary"
                  role="link"
                  type="button"
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Take a Look
                </Button>
              </div>
            </div>
            <div className="flex h-max flex-col gap-4 rounded-xl bg-default-100 p-6">
              <img
                src="/projects/real-estate-607b0.web.app.jpg"
                alt="BD Estate | Bangladeshi Top Real Estate Agency"
                className="rounded-xl"
              />
              <h3 className="text-xl font-bold">
                BD Estate | Bangladeshi Top Real Estate Agency
              </h3>
              <p className="text-slate-400">
                A free food sharing website based on Bangladesh. Where anybody
                can donate food and get free food.
              </p>
              <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
                <div className="text-slate-300">
                  React, TailwindCSS, NodeJS, MongoDB, Firebase
                </div>
                <Button
                  href="https://real-estate-607b0.web.app"
                  color="primary"
                  role="link"
                  type="button"
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Take a Look
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
