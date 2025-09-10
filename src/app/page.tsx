"use client";

import {
  BookOpen,
  Briefcase,
  Calendar,
  ChevronDown,
  CircleArrowRight,
  CloudDownload,
  CodeXml,
  MapPin,
  Moon,
  Palette,
  Rocket,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";
import type React from "react";
import { BackgroundBeams } from "@/components/BackgroundBeams";
import { PrimaryButton, SecondaryButton } from "@/components/Button";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

// -> Sections ----------------------------------------------------------------

const Home = () => {
  return (
    <Section
      id="home"
      className="bg-gradient-to-b from-slate-100 dark:from-slate-900 from-15% to-slate-300 dark:to-slate-800 to-85% items-center justify-center "
    >
      <BackgroundBeams className="z-0 pointer-events-none" />
      <Container className="items-center text-center lg:justify-center lg:items-center gap-y-8">
        <div className="flex flex-col items-center gap-y-4">
          <Heading className="bg-gradient-to-br lg:bg-gradient-to-b from-cyan-300 to-cyan-500 to-50% bg-clip-text text-transparent text-6xl lg:text-8xl font-extrabold">
            Nicolas Gonzalez
          </Heading>
          <h2 className="text-wrap text-base md:text-xl">
            Passionate self-taught Software Developer with half a decade of
            hands-on experience.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-center gap-4">
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
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-4 text-wrap md:top-12 lg:top-24">
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
      <div className="hidden absolute lg:flex flex-col text-cyan-500 bottom-2 items-center justify-center gap-y-1.5">
        <p className="text-cyan-500 text-sm animate-pulse">
          Scroll to explore
        </p>
        <ChevronDown size={24} className="animate-bounce" />
      </div>
    </Section>
  );
};

const About = () => {
  const initialTime = getCurrentTime();

  const [currentTime, setCurrentTime] = useState(initialTime);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(getCurrentTime());
    };

    updateTime(); // Set the initial time.
    const delayInMilliseconds = 1000;
    const interval = setInterval(updateTime, delayInMilliseconds);

    // Runs once when the component unmounts.
    return () => clearInterval(interval);
  });

  return (
    <Section id="about">
      <Container className="grid grid-flow-row lg:grid-flow-col grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
        <div className="flex flex-col gap-y-6 text-left">
          <div className="flex flex-col gap-y-2">
            <Heading>About Me</Heading>
            <Subheading>
              Passionate Software Developer Committed to Writing High-Quality
              Code
            </Subheading>
            <div
              id="about-facts"
              className="grid grid-flow-row lg:grid-flow-col grid-cols-2 lg:grid-cols-none mt-2.5 gap-4 max-w-fit"
            >
              <div
                id="about-fact-1"
                className="flex flex-row gap-x-2 items-center"
              >
                <MapPin className="w-5 h-5 text-cyan-500" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Florida, USA
                </p>
              </div>
              <div
                id="about-fact-2"
                className="flex flex-row gap-x-2 items-center"
              >
                {isDaytime(currentTime)
                  ? <Sun className="w-5 h-5 text-cyan-500" />
                  : <Moon className="w-5 h-5 text-cyan-500" />}
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {currentTime}
                </p>
              </div>
              <div
                id="about-fact-3"
                className="flex lg:flex-row gap-x-2 items-center"
              >
                <BookOpen className="w-5 h-5 text-cyan-500" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  2m read
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-slate-700 dark:text-slate-300 text-sm lg:text-base gap-y-3 lg:gap-y-4">
            <p>
              In November 2020, I began my programming journey when I decided to
              create my very own Discord bot in Python. From day one, I
              developed a deep passion for programming, often dedicating all of
              my free time to reading and writing code. Even when I was away
              from my computer, I had my phone in hand with GitHub open, either
              reading others' code or editing my own code directly on the mobile
              website.
            </p>
            <div
              id="about-me-extended"
              className="hidden lg:flex flex-col lg:text-base gap-y-3 lg:gap-y-4"
            >
              <p>
                In 2021, I focused on mastering Python. By following along with
                tutorials, completing online courses, and listening to talks
                from recorded conferences, I gained a deep understanding of
                Python and what it's capable of.
              </p>
              <p>
                In 2022, I wanted to dive deeper! I spent the first six months
                experimenting with C, followed by C++ in the latter half. By
                implementing various data structures and algorithms, I gained a
                better understanding of the fundamentals of computer science. I
                even purchased a Raspberry Pi 4B and dabbled a bit in bare-metal
                programming!
              </p>
              <p>
                In 2023, I finally embraced JavaScript. The same year also
                marked my transition to Linux and my first attempt at learning
                Rust (who is infamous for its steep learning curve).
              </p>
              <p>
                In 2024, I dedicated significant time to personal projects and
                picked up TypeScript along the way. I developed many tools that
                I still use today!
              </p>
              <p>
                In 2025, I committed fully to learning Rust. It has easily
                become my all-time-favorite programming language, and feels like
                a perfect fit for all of my skills and interests. This year, I'm
                also focusing on gaining more experience with TypeScript and the
                whole front-end ecosystem!
              </p>
            </div>
            <button
              type="button"
              className="self-start lg:hidden underline hover:cursor-pointer text-slate-700 dark:text-slate-300 hover:text-black hover:dark:text-white"
              onClick={(event) => {
                const element = document.getElementById("about-me-extended");

                if (element === null) {
                  return;
                }

                element.classList.replace("hidden", "flex");
                event.currentTarget.classList.toggle("hidden");
              }}
            >
              Read more
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Heading className="text-black dark:text-white">
            Experience Timeline
          </Heading>
          <div
            id="experience-timeline"
            className="flex flex-col mt-8"
          >
            <ExperienceEntry
              employer="Bojano Homes, LLC"
              title="Backend Developer"
              date="Mar 2023 - May 2023"
              onLeft={true}
            />
            <ExperienceEntry
              employer="Bojano Homes, LLC"
              title="Fullstack Developer"
              date="Sep 2024 - Mar 2025"
              onLeft={false}
            />
            <p className="mt-4 flex flex-row items-center gap-x-2 self-center text-sm">
              Seeking opportunities!
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

interface ExperienceEntryProps {
  employer: string;
  title: string;
  date: string;
  onLeft: boolean;
}

const ExperienceEntry = (
  { employer, title, date, onLeft }: ExperienceEntryProps,
) => {
  return (
    <div
      className={`grid grid-cols-[1fr_max-content_1fr] ${
        onLeft ? "text-right" : "text-left"
      }`}
    >
      <div
        className={`flex w-full ${onLeft ? "order-last" : "order-first"}`}
      />
      <div className="flex flex-col items-center px-4 lg:px-8">
        <div className="min-w-3 min-h-3 max-w-3 max-h-3 rounded-full block content-[''] bg-cyan-500" />
        <div className="w-px h-full rounded-full block content-[''] bg-cyan-500" />
      </div>
      <div
        className={`flex flex-col gap-y-2 pb-8 ${
          onLeft ? "order-first" : "order-last"
        }`}
      >
        <div className="flex flex-col">
          <h1 className="text-base lg:text-lg font-bold">{employer}</h1>
          <h2 className="text-slate-700 dark:text-slate-300 text-sm">
            {title}
          </h2>
        </div>
        <div
          className={`flex flex-row gap-x-2 items-center ${
            onLeft ? "justify-end" : "justify-start"
          }`}
        >
          <Calendar
            className={`w-4 h-4 text-cyan-500 ${
              onLeft ? "order-last" : "order-first"
            }`}
          />
          <p className="text-slate-600 dark:text-slate-400 text-xs">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => (
  <Section id="projects">
    <Container>
      <Heading>Projects</Heading>
    </Container>
  </Section>
);

const Contact = () => (
  <Section id="contact">
    <Container>
      <Heading>Contact</Heading>
    </Container>
  </Section>
);

// ----------------------------------------------------------------------------

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <>
      <section
        className={cn(
          "flex flex-col min-h-screen items-center w-full pt-24 pb-8",
          className,
        )}
        {...props}
      >
        {children}
      </section>
      <div className="w-full bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </>
  );
};

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "flex flex-col container text-center px-8 lg:px-24",
        className,
      )}
    >
      {children}
    </div>
  );
};

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
}

const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "text-wrap text-cyan-500 text-xl lg:text-2xl font-semibold",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

interface SubheadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
}

const Subheading = ({ children, className, ...props }: SubheadingProps) => {
  return (
    <h2
      className={cn(
        "text-wrap text-2xl lg:text-4xl font-extrabold",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
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

function getCurrentTime(): string {
  const options: Intl.DateTimeFormatOptions = {
    timeZoneName: "short",
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const time = formatter.format(now);

  // const offset = -now.getTimezoneOffset(); // Offset from UTC in minutes.
  // const offsetHours = Math.floor(Math.abs(offset) / 60);
  // const offsetMinutes = Math.abs(offset) % 60;

  // const sign = offset >= 0 ? "+" : "-";
  // const hours = offsetHours.toString().padStart(2, "0");
  // const minutes = offsetMinutes.toString().padStart(2, "0");
  // const currentTime = `${time} (GMT${sign}${hours}:${minutes})`;

  return time;
}

function isDaytime(currentTime: string): boolean {
  const parts = currentTime.split(":");

  if (parts.length < 1) {
    return true;
  }

  const part = parts[0];
  const hour = parseInt(part, 10);
  return hour > 6 && hour < 20;
}

function getYearsOfExperience() {
  const startedDate = new Date(2020, 11, 1);
  const currentDate = new Date();
  let yearsBetween = currentDate.getFullYear() - startedDate.getFullYear();

  if (currentDate.getMonth() < startedDate.getMonth()) {
    yearsBetween -= 1;
  }

  return yearsBetween;
}
