import { atomic_age } from "@/config/fonts";
import fs from "fs/promises";
import path from "path";
import ProjectCard from "./ProjectCard";

export const metadata = {
  title: "Projects",
  description:
    "Explore the works and projects of RONiB, including web development and design.",
};

const Page = async () => {
  const filePath = path.join(process.cwd(), "public", "projects.json");
  const fileData = await fs.readFile(filePath, "utf8");
  const projects = JSON.parse(fileData);

  return (
    <>
      <div className="mb-12 space-y-2 text-center">
        <div className={`${atomic_age.className} text-4xl font-bold`}>
          What I Did?
        </div>
        <div className="dark:text-gray-400">My Some Notable Works.</div>
      </div>
      <div className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
