"use client";

import {
  ChevronDown,
  CircleArrowRight,
  CloudDownload,
  CodeXml,
  Palette,
  Rocket,
} from "lucide-react";
import { BackgroundBeams } from "@/components/BackgroundBeams";
import { PrimaryButton, SecondaryButton } from "@/components/Button";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

// function getYearsOfExperience() {
//   const startedDate = new Date(2020, 11, 1);
//   const currentDate = new Date();
//   let yearsBetween = currentDate.getFullYear() - startedDate.getFullYear();
//
//   if (currentDate.getMonth() < startedDate.getMonth()) {
//     yearsBetween -= 1;
//   }
//
//   return yearsBetween;
// }

export const Home = () => {
  return (
    <Section
      id="home"
      className="bg-gradient-to-b from-slate-100 dark:from-slate-900 from-15% to-slate-300 dark:to-slate-800 to-85% items-center justify-center "
    >
      <BackgroundBeams className="z-0 pointer-events-none" />
      <Container className="items-center text-center lg:justify-center lg:items-center gap-y-8">
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="text-wrap bg-gradient-to-br lg:bg-gradient-to-b from-cyan-300 to-cyan-500 to-50% bg-clip-text text-transparent text-6xl lg:text-8xl font-extrabold animate-once animate-fade-down animate-ease-in">
            Nicolas Gonzalez
          </h1>
          <h2 className="text-wrap text-base md:text-xl animate-once animate-fade animate-ease-in animate-delay-500">
            Passionate self-taught Software Developer with half a decade of
            hands-on experience.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-center gap-4 animate-once animate-fade-up animate-ease-in animate-delay-1000">
          <a href="#projects">
            <PrimaryButton className="gap-x-1 lg:gap-x-2">
              View My Work
              <span>
                <CircleArrowRight className="h-5 lg:h-6" />
              </span>
            </PrimaryButton>
          </a>
          <a href="../Nicolas_Gonzalez.pdf">
            <SecondaryButton className="gap-x-1 lg:gap-x-2">
              Get My Résumé
              <span>
                <CloudDownload className="h-5 lg:h-6" />
              </span>
            </SecondaryButton>
          </a>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-4 text-wrap md:top-12 lg:top-24 animate-once animate-fade-up animate-ease-in animate-delay-1500">
          <InfoCard
            icon={<CodeXml />}
            title="Full-Stack Development"
            body="Building scalable full-stack web applications using various frameworks and languages."
          />
          <InfoCard
            icon={<Palette />}
            title="UI/UX"
            body="Creating beautiful and intuitive user interfaces with close attention to detail."
          />
          <InfoCard
            icon={<Rocket />}
            title="Performance"
            body="Writing efficient, readable, maintainable code, and commited to continuously learning."
          />
        </div>
      </Container>
      <div className="hidden absolute lg:flex flex-col text-cyan-500 bottom-2 items-center justify-center gap-y-1.5 animate-once animate-fade-up animate-ease-in animate-delay-3000">
        <p className="text-cyan-500 text-sm animate-pulse">
          Scroll to explore
        </p>
        <ChevronDown size={24} className="animate-bounce" />
      </div>
    </Section>
  );
};

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  body: string;
}

const InfoCard = ({ icon, title, body }: InfoCardProps) => {
  return (
    <div className="flex flex-col lg:max-w-[25vw] items-start text-left bg-slate-100 dark:bg-slate-900 border border-slate-500 dark:border-slate-700 px-6 py-4 gap-y-2 lg:gap-y-4 rounded-lg">
      <div className="flex flex-row gap-x-4">
        <div className="h-fit p-2 bg-slate-200 dark:bg-slate-800 text-cyan-500 rounded-lg">
          {icon}
        </div>
        <h1 className="flex min-h-10 items-center font-bold text-base lg:text-lg">
          {title}
        </h1>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 text-left">
        {body}
      </p>
    </div>
  );
};
