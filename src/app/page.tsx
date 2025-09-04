import {
  ChevronDown,
  CircleArrowRight,
  CloudDownload,
  CodeXml,
  Palette,
  Rocket,
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

const Home = () => {
  return (
    <Section
      id="home"
      className="bg-gradient-to-b from-slate-100 dark:from-slate-900 from-15% to-slate-300 dark:to-slate-800 to-85% items-center justify-center"
    >
      <BackgroundBeams className="z-0 pointer-events-none" />
      <Container className="items-center text-center md:justify-center md:items-center gap-y-8">
        <div className="flex flex-col items-center gap-y-4">
          <Heading className="bg-gradient-to-br md:bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-6xl md:text-8xl">
            Nicolas Gonzalez
          </Heading>
          <Subheading>
            Passionate self-taught Software Developer with half a decade of
            hands-on experience.
          </Subheading>
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-center gap-4">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-wrap">
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
            title="Productive"
            body="Writing efficient, readable, maintainable code, and commited to continuously learning."
          />
        </div>
      </Container>
      <div className="hidden absolute md:flex flex-col text-cyan-500 bottom-2 items-center justify-center gap-y-1.5">
        <p className="text-cyan-500 text-sm animate-pulse">
          Scroll to explore
        </p>
        <ChevronDown size={24} className="animate-bounce" />
      </div>
    </Section>
  );
};

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

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  body: string;
}

const InfoCard = ({ icon, title, body }: InfoCardProps) => {
  return (
    <div className="flex flex-col md:max-w-[25vw] items-start bg-slate-100 dark:bg-slate-900 border border-slate-500 dark:border-slate-700 px-6 py-4 gap-y-4 rounded-lg">
      <div className="flex flex-row gap-x-4">
        <div className="h-fit p-2 bg-slate-200 dark:bg-slate-800 text-cyan-500 rounded-lg">
          {icon}
        </div>
        <h1 className="flex min-h-10 items-center font-bold text-lg">
          {title}
        </h1>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 text-left">
        {body}
      </p>
    </div>
  );
};
