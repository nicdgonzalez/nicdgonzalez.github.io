"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import type { PropsWithChildren } from "react";
import { FaGithub } from "react-icons/fa";
import { PrimaryButton, SecondaryButton } from "@/components/Button";
import { Container } from "@/components/Container";
import { FadeUpOnScroll } from "@/components/FadeUpOnScroll";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { Subheading } from "@/components/Subheading";

enum Category {
  WebApplication = "Web Application",
  Library = "Library",
  Backend = "Backend",
  Cli = "CLI",
}

enum Tag {
  // Programming Languages
  Bash = "Bash",
  C = "C",
  Cpp = "C++",
  JavaScript = "JavaScript",
  Lua = "Lua",
  Python = "Python",
  Rust = "Rust",
  TypeScript = "TypeScript",

  // Technologies
  Axum = "Axum",
  NextJs = "Next.js",
  SolidJs = "Solid.js",
  TailwindCss = "Tailwind CSS",
  Discordpy = "discord.py",

  // Databases
  MongoDb = "MongoDB",
  PostgreSql = "PostgreSQL",
  Sqlite = "SQLite",
}

export function Projects() {
  const cards: CardProps[] = [
    {
      imagePath: undefined,
      category: Category.Backend,
      title: "Monkey",
      description: "An interpreter for the Monkey programming language.",
      tags: [Tag.Rust],
      repository: "https://github.com/nicdgonzalez/monkey",
      liveDemo: undefined,
    },
    {
      imagePath: undefined,
      category: Category.Library,
      title: "CLAP",
      description:
        "A command-line argument parser that uses runtime introspection to generate a command-line interface automatically.",
      tags: [Tag.Python],
      repository: "https://github.com/nicdgonzalez/clap",
      liveDemo: undefined,
    },
    {
      imagePath: undefined,
      category: Category.Cli,
      title: "Orbit",
      description:
        "A session manager for tmux; create and switch between sessions quickly and easily.",
      tags: [Tag.Bash],
      repository: "https://github.com/nicdgonzalez/orbit",
      liveDemo: undefined,
    },
    {
      imagePath: undefined,
      category: Category.Library,
      title: "Colorize",
      description:
        "Use ANSI color codes to style text in the terminal with a clean, builder-style method chaining approach.",
      tags: [Tag.Python],
      repository: "https://github.com/nicdgonzalez/colorize",
      liveDemo: undefined,
    },
    {
      imagePath: undefined,
      category: Category.Cli,
      title: "Axiom",
      description:
        "A command-line tool for managing PaperMC Minecraft servers.",
      tags: [Tag.Rust],
      repository: "https://github.com/nicdgonzalez/axiom",
      liveDemo: undefined,
    },
    {
      imagePath: undefined,
      category: Category.Backend,
      title: "NicBot",
      description: "My personal, general-purpose bot that runs on Discord.",
      tags: [Tag.Python, Tag.Discordpy],
      repository: "https://github.com/nicdgonzalez/nicbot",
      liveDemo: undefined,
    },
  ];

  return (
    <Section id="projects">
      <Container>
        <Heading>Projects</Heading>
        <Subheading>
          A Collection of Projects Showcasing Various Technologies
        </Subheading>
        {
          /**
           * - Search bar
           * - Filter button
           *   - Application Type (Web application, CLI tool, API/Backend, etc.)
           *   - Language
           *   - Technology
           */
        }
        <Cards>
          {cards.map((card) => (
            <Card
              key={`card-${card.title.replaceAll(" ", "-").toLowerCase()}`}
              {...card}
            />
          ))}
        </Cards>
      </Container>
    </Section>
  );
}

const Cards = ({ children }: PropsWithChildren) => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-4">
      {children}
    </ul>
  );
};

interface CardProps {
  imagePath?: string;
  category: Category;
  title: string;
  description: string;
  tags: Tag[];
  repository?: string;
  liveDemo?: string;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1629757509637-7c99379d6d26?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function Card(
  {
    imagePath = DEFAULT_IMAGE,
    category,
    title,
    description,
    tags,
    repository,
    liveDemo,
  }: CardProps,
) {
  return (
    <FadeUpOnScroll>
      <li className="h-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg pb-2 hover:border-black hover:dark:border-white hover:relative hover:-top-1">
        <Image
          src={imagePath}
          alt="top-down view of a laptop on a wooden desk"
          className="w-full overflow-hidden max-h-[20vh] object-cover rounded-t-lg"
          width={1470}
          height={980}
        />
        <div className="flex flex-col p-6 gap-y-4">
          <h2 className="w-max bg-slate-100 dark:bg-slate-900 text-black dark:text-white border border-slate-500 text-xs px-2 py-1 rounded-lg">
            {category}
          </h2>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            {description}
          </p>
          <ul className="flex flex-row gap-x-2">
            {tags.slice(0, 3).map((tag) => (
              <li
                key={tag}
                className="flex flex-col items-center justify-center bg-slate-200 dark:bg-slate-800 text-black dark:text-white px-2 py-1 rounded-lg"
              >
                <p className="text-sm">{tag}</p>
              </li>
            ))}
            {/* Displays a tag with `+N` for however many tags are not being shown. */}
            {tags.length > 3
              ? (
                <li className="flex flex-row items-center justify-center bg-slate-200 dark:bg-slate-800 text-black dark:text-white px-2 py-1 rounded-lg">
                  +{tags.length - 3}
                </li>
              )
              : ""}
          </ul>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 items-center justify-center">
            {repository && (
              <a
                key={repository.toLowerCase()}
                target="_blank"
                rel="noopener noreferrer"
                href={repository}
                className="flex flex-row justify-center items-center gap-x-2"
              >
                <SecondaryButton className="px-4 py-2 text-sm gap-x-2 rounded-xl min-w-full">
                  <FaGithub className="h-4 w-4" />
                  Repository
                </SecondaryButton>
              </a>
            )}
            {liveDemo && (
              <a
                key={liveDemo.toLowerCase()}
                target="_blank"
                rel="noopener noreferrer"
                href={liveDemo}
                className="flex flex-row justify-center items-center gap-x-2"
              >
                <PrimaryButton className="px-4 py-2 text-sm gap-x-2 rounded-xl min-w-full">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </PrimaryButton>
              </a>
            )}
          </div>
        </div>
      </li>
    </FadeUpOnScroll>
  );
}
