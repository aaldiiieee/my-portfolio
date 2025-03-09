import {
  SiNextdotjs,
  SiJquery,
  SiTailwindcss,
  SiMysql,
  SiTypescript,
} from "react-icons/si";
import { DiReact, DiGit } from "react-icons/di";
import { FaLaravel, FaBootstrap } from "react-icons/fa";

export const STACKS = [
  { icon: <SiNextdotjs className="text-7xl w-full" />, name: "Next.js" },
  { icon: <SiJquery className="text-7xl w-full" />, name: "jQuery" },
  {
    icon: <SiTailwindcss className="text-7xl w-full" />,
    name: "Tailwind CSS",
  },
  { icon: <SiTypescript className="text-7xl w-full" />, name: "TypeScript" },
  { icon: <SiMysql className="text-7xl w-full" />, name: "MySQL" },
  { icon: <DiReact className="text-7xl w-full" />, name: "React" },
  { icon: <DiGit className="text-7xl w-full" />, name: "Git" },
  { icon: <FaLaravel className="text-7xl w-full" />, name: "Laravel" },
  { icon: <FaBootstrap className="text-7xl w-full" />, name: "Bootstrap" },
];
