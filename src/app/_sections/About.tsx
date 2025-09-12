"use client";

import { BookOpen, Calendar, MapPin, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { Container } from "@/components/Container";
import { FadeUpOnScroll } from "@/components/FadeUpOnScroll";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { Subheading } from "@/components/Subheading";

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

export function About() {
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
            <Subheading className="max-w-[75vw] sm:max-w-[60vw] lg:max-w-full">
              Passionate Software Developer Committed to Writing High-Quality
              Code
            </Subheading>
            <FadeUpOnScroll>
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
            </FadeUpOnScroll>
          </div>
          <FadeUpOnScroll>
            <div className="flex flex-col text-slate-700 dark:text-slate-300 text-sm lg:text-base gap-y-3 lg:gap-y-4">
              <p>
                In November 2020, I began my programming journey when I decided
                to create my very own Discord bot in Python. From day one, I
                developed a deep passion for programming. I often dedicated all
                of my free time to reading and writing code. Even when I was
                away from my computer, I had my phone in hand with GitHub open,
                either reading others' code or editing my own code directly on
                the mobile website.
              </p>
              <div
                id="about-me-extended"
                className="hidden lg:flex flex-col lg:text-base gap-y-3 lg:gap-y-4"
              >
                <p>
                  In 2021, I focused on mastering Python. By following along
                  with tutorials, completing online courses, and listening to
                  talks from recorded conferences, I gained a deep understanding
                  of Python and what it's capable of.
                </p>
                <p>
                  In 2022, I wanted to dive deeper! I spent the first six months
                  experimenting with C, followed by C++ in the latter half. By
                  implementing various data structures and algorithms, I gained
                  a better understanding of the fundamentals of computer
                  science. I even purchased a Raspberry Pi 4B and dabbled a bit
                  in bare-metal programming!
                </p>
                <p>
                  In 2023, I finally embraced JavaScript. The same year also
                  marked my transition to Linux and my first attempt at learning
                  Rust (who is infamous for its steep learning curve).
                </p>
                <p>
                  In 2024, I dedicated significant time to personal projects and
                  picked up TypeScript along the way. I developed many tools
                  that I still use today!
                </p>
                <p>
                  In 2025, I committed fully to learning Rust. It has easily
                  become my all-time-favorite programming language, and feels
                  like a perfect fit for all of my skills and interests. This
                  year, I'm also focusing on gaining more experience with
                  TypeScript and the whole front-end ecosystem!
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
          </FadeUpOnScroll>
        </div>
        <ExperienceTimeline />
      </Container>
    </Section>
  );
}

const ExperienceTimeline = () => {
  return (
    <FadeUpOnScroll className="flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-wrap text-xl lg:text-2xl font-semibold text-black dark:text-white">
          Experience Timeline
        </h1>
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
    </FadeUpOnScroll>
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
        className={`flex flex-col pb-8 gap-y-0.5 ${
          onLeft ? "order-first" : "order-last"
        }`}
      >
        <h1 className="text-sm lg:text-lg font-bold">{employer}</h1>
        <h2 className="text-slate-700 dark:text-slate-300 text-xs lg:text-sm">
          {title}
        </h2>
        <div
          className={`flex flex-row gap-x-2 items-center mt-2 ${
            onLeft ? "justify-end" : "justify-start"
          }`}
        >
          <Calendar
            className={`hidden sm:block w-4 h-4 text-cyan-500 ${
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
