import {
  ChevronDown,
  Circle,
  CircleArrowRight,
  CloudDownload,
  Radar,
} from "lucide-react";
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

const Home = () => (
  <Section
    id="home"
    className="bg-gradient-to-b from-slate-100 dark:from-slate-900 from-15% to-slate-200 dark:to-slate-800 to-85% items-center justify-center"
  >
    <BackgroundBeams className="z-0 pointer-events-none" />
    <Container className="items-center text-center md:justify-center md:items-center gap-y-6">
      <div className="flex flex-row text-cyan-200 items-center justify-center max-w-fit md:min-h-12 gap-x-2 bg-cyan-900 border border-cyan-500 rounded-full px-4 py-2">
        <Radar className="h-5 md:h-6" />
        <p className="text-sm md:text-base">
          Open for work and collaborations!
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-4">
        <Heading className="bg-gradient-to-br md:bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-6xl md:text-8xl">
          Nicolas Gonzalez
        </Heading>
        <Subheading>
          Passionate self-taught Software Developer with half a decade of
          hands-on experience.
        </Subheading>
      </div>
      <div className="flex flex-row justify-center gap-x-4">
        <a href="#projects">
          <PrimaryButton className="gap-x-1 md:gap-x-2">
            View My Work
            <span>
              <CircleArrowRight className="h-5 md:h-6" />
            </span>
          </PrimaryButton>
        </a>
        <a href="../Nicolas_Gonzalez.pdf">
          <SecondaryButton className="gap-x-1 md:gap-x-2">
            Get My Resume
            <span>
              <CloudDownload className="h-5 md:h-6" />
            </span>
          </SecondaryButton>
        </a>
      </div>
    </Container>
    <div className="absolute flex flex-col text-cyan-500 bottom-8 items-center justify-center gap-y-4">
      <p className="text-slate-500 text-sm animate-pulse">Scroll to explore</p>
      <ChevronDown size={24} className="animate-bounce" />
    </div>
  </Section>
);

const About = () => (
  <Section id="about">
    <Container>
      <Heading>About</Heading>
    </Container>
  </Section>
);

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
          "flex flex-col min-h-screen items-center w-full pt-24",
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
        "flex flex-col container text-center px-8 md:px-24",
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
        "text-wrap text-4xl md:text-6xl font-bold",
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
    <h1
      className={cn(
        "text-wrap text-base md:text-xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
