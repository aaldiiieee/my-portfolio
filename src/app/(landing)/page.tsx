"use client";

import { useState } from "react";
import SectionTemplate from "@/components/templates/SectionTemplate";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import {
  HeaderTitle,
  ButtonTab,
  ExperienceList,
  StackList,
  ButtonSubmit,
} from "@/components/ui";

import { SiNextdotjs, SiJquery, SiTailwindcss, SiMysql } from "react-icons/si";
import { DiJavascript1, DiReact, DiGit, DiCss3 } from "react-icons/di";
import { FaLaravel, FaBootstrap } from "react-icons/fa";

export default function Home() {
  const [activeTab, setActiveTab] = useState("introduction");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const experiences = [
    {
      role: "Frontend Developer",
      company: "PT. Ifabula Digital Kreasi",
      period: "Jul 2023 - Dec 2024",
    },
    {
      role: "Production Planning and Inventory Control (PPIC) Intern",
      company: "ADR Group of Companies",
      period: "Sep 2021 - Jan 2022",
    },
  ];

  const educations = [
    {
      role: "Universitas Pamulang",
      company: "Teknik Informatika",
      period: "March 2022 - June 2025",
    },
    {
      role: "SMK Miftahul Jannah",
      company: "Teknik Ketenagalistrikan",
      period: "May 2017 - June 2020",
    },
  ];

  const stacks = [
    { icon: <SiNextdotjs className="text-7xl w-full" />, name: "Next.js" },
    { icon: <SiJquery className="text-7xl w-full" />, name: "jQuery" },
    {
      icon: <SiTailwindcss className="text-7xl w-full" />,
      name: "Tailwind CSS",
    },
    { icon: <SiMysql className="text-7xl w-full" />, name: "MySQL" },
    {
      icon: <DiJavascript1 className="text-7xl w-full" />,
      name: "Java Script",
    },
    { icon: <DiReact className="text-7xl w-full" />, name: "React" },
    { icon: <DiGit className="text-7xl w-full" />, name: "Git" },
    { icon: <DiCss3 className="text-7xl w-full" />, name: "CSS3" },
    { icon: <FaLaravel className="text-7xl w-full" />, name: "Laravel" },
    { icon: <FaBootstrap className="text-7xl w-full" />, name: "Bootstrap" },
  ];

  return (
    <>
      <SectionTemplate image="/images/bunny-purple.png" className="bg-white">
        <h1 className="hero-text md:text-8xl text-5xl text-white font-bold">
          Hi There! 👋🏻
        </h1>
        <h3 className="hero-text md:text-6xl text-5xl text-white font-bold mt-5">
          I&apos;m Aldi, a Frontend Developer.
        </h3>

        <div className="flex justify-center items-center mt-8 gap-4">
          <ButtonSubmit
            text="Contact Me"
            type="submit"
            className="bg-green-400"
          />
          <Link
            href={"/pdf/CV_Pramudya Reynaldi Salim_2024.pdf"}
            target="_blank"
            className="bg-red-400 text-white btn__submit p-4 md:text-2xl rounded text-center"
          >
            Download CV
          </Link>
        </div>
      </SectionTemplate>

      <HeaderTitle title="About" className="bg-green-400" />

      <div className="grid md:grid-cols-5 grid-cols-12 gap-4">
        <div className="md:col-span-1 col-span-12 flex flex-col gap-4">
          <ButtonTab
            onClick={() => handleTabChange("introduction")}
            className={`${
              activeTab === "introduction" &&
              "shadow-none translate-x-1 translate-y-1"
            }`}
          >
            Introduction
          </ButtonTab>
          <ButtonTab
            onClick={() => handleTabChange("education")}
            className={`${
              activeTab === "education" &&
              "shadow-none translate-x-1 translate-y-1"
            }`}
          >
            Education
          </ButtonTab>
          <ButtonTab
            onClick={() => handleTabChange("skills")}
            className={`${
              activeTab === "skills" &&
              "shadow-none translate-x-1 translate-y-1"
            }`}
          >
            Skills
          </ButtonTab>
          <ButtonTab
            onClick={() => handleTabChange("experience")}
            className={`${
              activeTab === "experience" &&
              "shadow-none translate-x-1 translate-y-1"
            }`}
          >
            Experience
          </ButtonTab>
        </div>

        <div className="md:col-span-4 col-span-12">
          {activeTab === "introduction" && (
            <SectionTemplate className="bg-purple-400 text-white w-full h-full">
              <h4 className="hero-text md:text-6xl text-5xl text-white font-bold">
                Introduction
              </h4>
              <div className="mt-4 bg-purple-200 shadow-section border-2 border-black rounded p-4 text-black">
                <p className="text-lg">
                  Hi, I’m Pramudya Reynaldi Salim, a passionate{" "}
                  <span className="font-bold text-purple-800 italic">
                    Frontend Developer
                  </span>{" "}
                  dedicated to crafting{" "}
                  <span className="font-bold text-purple-800 italic">
                    Modern and Responsive Web Applications.
                  </span>{" "}
                  Proficient in{" "}
                  <span className="font-bold text-purple-800 italic">
                    Laravel, Next.js, and Tailwind CSS,
                  </span>{" "}
                  I focus on delivering optimal user experiences and efficient,
                  scalable solutions. I thrive on learning new technologies and
                  exploring innovative approaches to solve development
                  challenges. For me, web development is not just about writing
                  code but creating value and meaningful impact through
                  technology.{" "}
                  <span className="font-bold text-purple-800 italic">
                    Open to collaboration, discussions, and new opportunities.
                  </span>{" "}
                  Let’s connect and build something impactful together! 🚀
                </p>
              </div>
            </SectionTemplate>
          )}

          {activeTab === "education" && (
            <SectionTemplate className="bg-pink-400 text-white w-full h-full">
              <h1 className="hero-text md:text-6xl text-5xl text-white font-bold">
                Education
              </h1>
              <ExperienceList experiences={educations} className="bg-pink-200" />
            </SectionTemplate>
          )}

          {activeTab === "experience" && (
            <SectionTemplate className="bg-blue-400 text-white w-full h-full">
              <h1 className="hero-text md:text-6xl text-5xl text-white font-bold">
                My Experience
              </h1>
              <ExperienceList experiences={experiences} className="bg-blue-200" />
            </SectionTemplate>
          )}

          {activeTab === "skills" && (
            <SectionTemplate className="bg-red-400 text-white w-full h-full">
              <h4 className="hero-text md:text-6xl text-5xl text-white font-bold">
                My Skills
              </h4>
              <div className="grid md:grid-cols-5 grid-cols-2 gap-3 mt-4">
                <StackList stacks={stacks} />
              </div>
            </SectionTemplate>
          )}
        </div>
      </div>

      <HeaderTitle title="Days I Code" className="bg-yellow-400 mb-8" />

      <GitHubCalendar
        username="aaldiiieee"
        blockSize={16}
        blockMargin={5}
        fontSize={16}
        colorScheme="light"
      />
    </>
  );
}
