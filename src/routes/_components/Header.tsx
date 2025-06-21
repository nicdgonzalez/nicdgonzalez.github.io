import { createSignal, JSX } from "solid-js";

interface Section {
  targetId: string;
  name: string;
}

export let sections: Section[] = [
  {
    targetId: "about",
    name: "About",
  },
  {
    targetId: "resume",
    name: "Résumé",
  },
  {
    targetId: "projects",
    name: "Projects",
  },
];

export function Header() {
  const [currentSection, setCurrentSection] = createSignal(0);

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= sections.length) {
      return;
    }

    console.debug(`Scroll to section: ${index}`);
    const section = document.getElementById(sections[index].targetId);

    if (section === null) {
      throw new Error(
        `expected element with ID ${sections[index].targetId} to exist`,
      );
    }

    section.scrollIntoView({ block: "start", behavior: "smooth" });
    setCurrentSection(index);
  };

  return (
    <header class="fixed top-0 min-h-12 w-full flex flex-row justify-between items-center p-10">
      <div id="header-title">
        <a href="">// Nic</a>
      </div>
      <div id="header-content">
        <ul class="flex flex-row gap-x-4">
          {sections.map((section, index) => {
            console.log(
              `Index: ${index}, currentSection: ${currentSection()}`,
            );

            return (
              <HeaderLink
                href={`#${section.targetId}`}
                name={section.name}
                onClick={(_event) => {
                  scrollToSection(index);
                }}
                selected={currentSection() === index}
              />
            );
          })}
        </ul>
      </div>
    </header>
  );
}

interface HeaderLinkProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  name: string;
  selected: boolean;
}

function HeaderLink(props: HeaderLinkProps) {
  return (
    <li>
      <a
        class="decoration-rose-500 data-[selected=true]:underline hover:underline"
        href={props.href}
        data-selected={props.selected}
        {...props}
      >
        {props.name}
      </a>
    </li>
  );
}
