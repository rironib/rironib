import { atomic_age } from "@/config/fonts";
import {
  SiCss3,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiVite,
  SiWordpress,
} from "react-icons/si";

export const metadata = {
  title: "Skills",
  description:
    "Discover the technical skills and expertise of RONiB in web development.",
};

const SkillCard = ({ icon: Icon, name, color }) => (
  <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-default-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-default-200 hover:shadow-xl">
    <Icon className="text-5xl lg:text-6xl" style={{ color }} />
    <span className="text-sm font-semibold lg:text-base">{name}</span>
  </div>
);

const Section = ({ title, skills }) => (
  <div className="space-y-8">
    <h2 className="text-center text-2xl font-bold text-primary lg:text-3xl">
      {title}
    </h2>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  </div>
);

const Page = () => {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#ffffff" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Mongoose", icon: SiMongoose, color: "#880000" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Git", icon: SiGit, color: "#F05033" },
        { name: "GitHub", icon: SiGithub, color: "#ffffff" },
        { name: "Vercel", icon: SiVercel, color: "#ffffff" },
        { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      ],
    },
    {
      title: "Design & CMS",
      skills: [
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "WordPress", icon: SiWordpress, color: "#21759B" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
      ],
    },
  ];

  return (
    <div className="space-y-16">
      <div className="space-y-2 text-center">
        <h1
          className={`${atomic_age.className} text-4xl font-bold lg:text-5xl`}
        >
          My Tech Stack
        </h1>
        <p className="mx-auto max-w-2xl text-default-500">
          I use a wide array of modern technologies to build fast, scalable, and
          responsive web applications.
        </p>
      </div>

      <div className="space-y-20">
        {categories.map((category, index) => (
          <Section key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Page;
