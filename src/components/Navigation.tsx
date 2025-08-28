"use client";

import { ExternalLink, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

interface Section {
  id: string;
  href: string;
  name: string;
  targetSectionId: string;
}

export function MainNavigation() {
  const sections: Section[] = [
    {
      id: "nav-home",
      href: "#home",
      name: "Home",
      targetSectionId: "home",
    },
    {
      id: "nav-projects",
      href: "#projects",
      name: "Projects",
      targetSectionId: "projects",
    },
    {
      id: "nav-contact",
      href: "#contact",
      name: "Contact",
      targetSectionId: "contact",
    },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.targetSectionId);

      if (element === null) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            setActiveSection(section.id);
          });
        },
        { threshold: 0.8 },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, []);

  return (
    <nav className="flex h-full items-center justify-end w-full">
      <button type="button" className="block md:hidden hover:cursor-pointer">
        <Menu size={24} />
      </button>
      <ul className="hidden md:grid grid-flow-col gap-x-8 text-center items-center">
        {sections.map((section) => {
          return (
            <li
              key={section.id}
              className="text-zinc-700 max-w-fit dark:text-zinc-300"
            >
              <a
                href={section.href}
                className={`hover:text-black hover:dark:text-white text-sm after:content-[''] after:block after:w-full after:mt-1 after:h-[2px] hover:after:bg-cyan-500 font-semibold ${
                  activeSection === section.id &&
                  "text-black dark:text-white after:bg-cyan-500"
                }`}
              >
                {section.name}
              </a>
              {section.href.startsWith("http") && <ExternalLink size={16} />}
            </li>
          );
        })}
        <li className="flex flex-row before:content-[''] before:block h-full before:h-full before:w-[1px] before:bg-zinc-500 before:mr-8">
          <a
            href="/Nicolas_Gonzalez.pdf"
            rel="noreferrer noopener"
            target="_blank"
          >
            <button
              type="button"
              className="overflow-x-visible bg-zinc-700 hover:bg-black dark:bg-zinc-300 hover:dark:bg-white text-white dark:text-black text-xs px-4 py-2 rounded-lg hover:cursor-pointer"
            >
              Get Résumé
            </button>
          </a>
        </li>
        <li className="flex flex-row before:content-[''] before:block h-full before:h-full before:w-[1px] before:bg-zinc-500 before:mr-8 items-center">
          <a
            href="https://github.com/nicdgonzalez"
            rel="noreferrer noopener"
            target="_blank"
          >
            <FaGithub
              size={24}
              className="text-zinc-700 dark:text-zinc-300 hover:text-black hover:dark:text-white"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
