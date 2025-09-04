"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Navigation, NavigationItem, NavigationSection } from "./Navigation";

export const Header = () => {
  const items: Array<{
    id: string;
    href: string;
    name: string;
    targetSectionId: string;
  }> = [
    {
      id: "nav-home",
      href: "#home",
      name: "Home",
      targetSectionId: "home",
    },
    {
      id: "nav-about",
      href: "#about",
      name: "About",
      targetSectionId: "about",
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

  console.assert(items.length > 0);
  console.assert(items[0].targetSectionId === "home");
  const [currentSection, setCurrentSection] = useState(items[0].id);

  // Whether the mobile navigation is open or not.
  const [isOpenMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    items.forEach((section) => {
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

            setCurrentSection(section.id);
          });
        },
        { threshold: 0.6 },
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
    <>
      <button
        type="button"
        className="fixed md:hidden top-8 right-8 hover:pointer-cursor z-50"
        onClick={() => {
          setOpenMobile(!isOpenMobile);
        }}
      >
        {isOpenMobile ? <X size={24} /> : <Menu size={24} />}
      </button>
      <header
        className={`z-40 fixed md:top-0 flex md:flex flex-col md:flex-row w-screen min-h-screen bg-slate-100 dark:bg-slate-900 md:bg-transparent md:dark:bg-transparent md:min-h-6 justify-center md:justify-end items-center p-8
          ${isOpenMobile ? "" : "hidden"}`}
      >
        <Navigation>
          <NavigationSection>
            {items.map((item) => (
              <NavigationItem key={item.id}>
                <a
                  href={item.href}
                  className={`font-semibold after:content-[''] after:block after:w-full after:h-[2px] after:mt-1 hover:after:bg-cyan-500 ${
                    item.id === currentSection && "after:bg-cyan-500"
                  }`}
                  onClick={() => void setOpenMobile(false)}
                >
                  {item.name}
                </a>
              </NavigationItem>
            ))}
          </NavigationSection>
          <NavigationSection>
            <NavigationItem>
              <a
                href="../Nicolas_Gonzalez.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button
                  type="button"
                  className="flex flex-row items-center bg-slate-700 hover:bg-slate-900 dark:bg-slate-300 hover:dark:bg-slate-100 text-white dark:text-black text-sm px-4 py-2 rounded-lg hover:cursor-pointer"
                >
                  Résumé
                  <span className="ml-2">
                    <Download size={16} />
                  </span>
                </button>
              </a>
            </NavigationItem>
          </NavigationSection>
          <NavigationSection>
            <NavigationItem>
              <a
                href="https://github.com/nicdgonzalez"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub size={24} />
              </a>
            </NavigationItem>
          </NavigationSection>
        </Navigation>
      </header>
    </>
  );
};
