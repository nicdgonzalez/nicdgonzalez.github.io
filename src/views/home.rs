#![allow(non_snake_case)]

use leptos::prelude::*;
use leptos_icons::Icon;
use leptos_meta::*;
use lucide_leptos::{ArrowDown, ArrowRight, ExternalLink};

use crate::components::{
    Button, ButtonVariant, Header, Heading, ListItem, Section, Subheading, UnorderedList,
};

#[component]
pub fn Home() -> impl IntoView {
    view! {
        <Title text="Home" />

        <Hero />
        <Projects />
        <Resources />
        <Contact />
    }
}

#[component]
fn Hero() -> impl IntoView {
    view! {
        <Section id="hero">
            <Header>
                <Heading class="animate-fade-down animate-delay-500">
                    "Hey, I'm "<span class="underline decoration-yellow-500">"Nic"</span>"."
                </Heading>
                <Subheading class="font-noto-sans-jp animate-fade-down animate-delay-1000">
                    "はじめまして、ニックです"
                </Subheading>
            </Header>
            <p class="animate-fade-left animate-delay-1500">
                "I build meticulously crafted tools and applications that "
                <i>"feel good to use"</i>"."
            </p>
            <p class="animate-fade-left animate-delay-1500">
                "I appreciate clean, thoughtful codebases — the kind with solid tests, clear documentation,"
                <br class="hidden lg:inline-block" /> " and features that fit together seamlessly."
            </p>
            <p class="animate-fade-left animate-delay-1500">
                "I want to create meaningful projects that help lots of people."<br />
                "I want my work to inspire others to go out and start building."
            </p>
            <p class="animate-fade-left animate-delay-1500">
                <q lang="ja" cite="The Final Boss!! season 8, episode 3, BONES FILM, 18 Oct. 2025.">
                    "世界は一人の力で変えられます"
                </q>
                " — "
                <span>"The world can change with the power of one person."</span>
            </p>
            <div class="flex flex-row gap-x-4 pt-4 animate-fade-up animate-delay-2000">
                <Button variant=ButtonVariant::Primary href="#projects">
                    "See what I'm building"
                    <ArrowRight size=20 />
                </Button>
            </div>
        </Section>

        <div class="flex flex-col absolute bottom-4 justify-center items-center gap-y-4 animate-fade-up animate-delay-3000">
            <p class="text-sm animate-pulse">"Scroll to explore!"</p>
            <span class="animate-bounce">
                <ArrowDown size=24 />
            </span>
        </div>
    }
}

struct Project {
    href: &'static str,
    title: &'static str,
    description: &'static str,
}

#[component]
fn Projects() -> impl IntoView {
    let projects = [
        Project {
            href: "https://github.com/nicdgonzalez/clap",
            title: "Command-line Argument Parser",
            description: "Auto-generate CLIs from function signatures in Python.",
        },
        Project {
            href: "https://github.com/nicdgonzalez/axiom",
            title: "Axiom",
            description: "A command-line tool for managing PaperMC Minecraft servers.",
        },
        Project {
            href: "https://github.com/nicdgonzalez/orbit",
            title: "Orbit",
            description: "Quickly switch between multiple development environments using tmux.",
        },
        Project {
            href: "https://github.com/nicdgonzalez/kanjivg-to-png",
            title: "KanjiVG to PNG",
            description: "Convert KanjiVG SVGs into PNG stroke diagrams.",
        },
        Project {
            href: "https://github.com/nicdgonzalez/colorize",
            title: "Colorize",
            description: "Add color and style to terminal output in Python.",
        },
    ];

    view! {
        <Section id="projects">
            <Header>
                <Heading>"Projects"</Heading>
                <Subheading>"Carefully crafted tools, experiments, and ideas."</Subheading>
            </Header>
            <UnorderedList>
                {projects
                    .into_iter()
                    .map(|project| {
                        view! {
                            <ListItem>
                                <a
                                    href=project.href
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    class="flex flex-row items-center gap-x-1.5 w-max \
                                    font-semibold text-sm lg:text-base text-zinc-800 hover:text-black dark:text-zinc-200 dark:hover:text-white hover:underline"
                                >
                                    {project.title}
                                    <ExternalLink size=16 />
                                </a>
                                <p class="text-zinc-800 dark:text-zinc-200 text-xs lg:text-sm">
                                    {project.description}
                                </p>
                            </ListItem>
                        }
                    })
                    .collect_view()}
            </UnorderedList>
            <p class="pb-4">
                "See "
                <a
                    href="https://github.com/nicdgonzalez"
                    class="inline-flex gap-x-1 items-center hover:underline"
                >
                    "more"
                    <ExternalLink size=16 />
                </a> "."
            </p>
        </Section>
    }
}

struct Resource {
    href: &'static str,
    title: &'static str,
    description: &'static str,
}

#[component]
fn Resources() -> impl IntoView {
    let resources = [
        Resource {
            href: "https://lucide.dev/icons/",
            title: "Lucide Icons",
            description: "Large library of SVG icons for web applications.",
        },
        Resource {
            href: "https://deadsimplesites.com/",
            title: "Dead Simple Sites",
            description: "A collection of minimalist-style websites.",
        },
        Resource {
            href: "https://stock.pulpxstyle.com/",
            title: "Stock",
            description: "A collection of Japanese-style websites.",
        },
    ];

    view! {
        <Section id="resources">
            <Header>
                <Heading>"Resources"</Heading>
                <Subheading>"Pages that I find useful."</Subheading>
            </Header>
            <UnorderedList>
                {resources
                    .into_iter()
                    .map(|resource| {
                        view! {
                            <ListItem>
                                <a
                                    href=resource.href
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    class="flex flex-row items-center gap-x-1.5 w-max \
                                    font-semibold text-sm lg:text-base text-zinc-800 hover:text-black dark:text-zinc-200 dark:hover:text-white hover:underline"
                                >
                                    {resource.title}
                                    <ExternalLink size=16 />
                                </a>
                                <p class="text-zinc-800 dark:text-zinc-200 text-xs lg:text-sm">
                                    {resource.description}
                                </p>
                            </ListItem>
                        }
                    })
                    .collect_view()}
            </UnorderedList>
        </Section>
    }
}

#[component]
fn Contact() -> impl IntoView {
    view! {
        <Section id="contact">
            <Header>
                <Heading>"Contact"</Heading>
                <Subheading>""</Subheading>
            </Header>
            <p class="pb-4">
                "You can reach me anytime at "
                <a
                    href="mailto:ndgonzalez.work@gmail.com"
                    class="font-semibold hover:underline decoration-yellow-500"
                >
                    "ndgonzalez.work@gmail.com"
                </a>
            </p>
            <h3 class="text-lg font-medium">"Find me on"</h3>
            <ul class="flex flex-row gap-x-4">
                <li>
                    <a
                        href="https://github.com/nicdgonzalez"
                        target="_blank"
                        rel="noreferrer noopener"
                        class="flex flex-row items-center gap-x-3 hover:cursor-pointer hover:underline"
                    >
                        <Icon icon=icondata::AiGithubFilled width="24" height="24" />
                        "GitHub"
                    </a>
                </li>
                <li>
                    <a
                        href="https://linkedin.com/in/nicdgonzalez"
                        target="_blank"
                        rel="noreferrer noopener"
                        class="flex flex-row items-center gap-x-3 hover:cursor-pointer hover:underline"
                    >
                        <Icon icon=icondata::AiLinkedinFilled width="24" height="24" />
                        "LinkedIn"
                    </a>
                </li>
                <li>
                    <a
                        href="https://discord.com/users/374923756646301698/"
                        target="_blank"
                        rel="noreferrer noopener"
                        class="flex flex-row items-center gap-x-3 hover:cursor-pointer hover:underline"
                    >
                        <Icon icon=icondata::BsDiscord width="24" height="24" />
                        "Discord"
                    </a>
                </li>
            </ul>
        </Section>
    }
}

#[component]
fn ContactForm() -> impl IntoView {
    view! {
        <form method="post" class="mt-4">
            <ul class="flex flex-col gap-y-4">
                <li class="flex flex-col gap-y-2">
                    <label for="company-name" class="font-medium">
                        "Company Name"
                    </label>
                    <input
                        type="text"
                        id="company-name"
                        name="company-name"
                        placeholder="Company Name"
                        class="border border-zinc-500 rounded-sm px-2 py-1 outline-none"
                    />
                </li>

                <li class="flex flex-col gap-y-2">
                    <label for="full-name" class="font-medium">
                        "Full name"
                    </label>
                    <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        placeholder="Your Name"
                        class="border border-zinc-500 rounded-sm px-2 py-1 outline-none"
                        required
                    />
                </li>

                <li class="flex flex-col gap-y-2">
                    <label for="phone" class="font-medium">
                        "Phone number"
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="+1 (123) 456 7890"
                        class="border border-zinc-500 rounded-sm px-2 py-1 outline-none"
                        required
                    />
                </li>

                <li class="flex flex-col gap-y-2">
                    <label for="email" class="font-medium">
                        "Email address"
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="First.Last@email.com"
                        class="border border-zinc-500 rounded-sm px-2 py-1 outline-none"
                        required
                    />
                </li>

                <li class="flex flex-col gap-y-2">
                    <label for="message" class="font-medium">
                        "Message"
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        class="border border-zinc-500 rounded-sm px-2 py-1 outline-none"
                    ></textarea>
                </li>

                <li>
                    <button type="submit" class="px-4 py-2 border border-zinc-500 rounded-sm">
                        "Send"
                    </button>
                </li>
            </ul>
        </form>
    }
}
