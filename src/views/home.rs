#![allow(non_snake_case)]

use leptos::prelude::*;
use leptos_meta::*;
use lucide_leptos::ExternalLink;

use crate::components::Section;

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
            <header>
                <h2>"Hey, I'm "<strong>"Nic"</strong>"."</h2>
                <p>"A software developer based in the U.S.A."</p>
            </header>
            <p>
                "I build meticulously crafted tools and applications that "
                <i>"feel good to use"</i>"."
            </p>
            <p>
                "I appreciate clean, thoughtful codebases — the kind with solid tests, clear documentation, and features that fit together seamlessly."
            </p>
            <p>
                "My goal is to write code that others look at and think, "
                <q>"this is the way it "<em>"should"</em>" be done."</q>
            </p>
        </Section>
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
            <header>
                <h2>"Projects"</h2>
                <p>"Carefully crafted tools, experiments, and ideas."</p>
            </header>
            <ul class="flex flex-col gap-y-2">
                {projects
                    .into_iter()
                    .map(|project| {
                        view! {
                            <li class="after:mt-2 after:block after:content-[''] after:w-full after:h-px after:bg-zinc-400 dark:after:bg-zinc-600">
                                <a
                                    href=project.href
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    class="flex flex-row items-center gap-x-2 w-max font-semibold text-base lg:text-xl text-zinc-800 hover:text-black dark:text-zinc-200 dark:hover:text-white hover:underline"
                                >
                                    {project.title}
                                    <ExternalLink size=20 />
                                </a>
                                <p class="text-zinc-800 dark:text-zinc-200">
                                    {project.description}
                                </p>
                            </li>
                        }
                    })
                    .collect_view()}
            </ul>
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
            <header>
                <h2>"Resources"</h2>
                <p>"Pages that I find useful."</p>
            </header>
            <ul class="flex flex-col gap-y-2">
                {resources
                    .into_iter()
                    .map(|resource| {
                        view! {
                            <li class="after:mt-2 after:block after:content-[''] after:w-full after:h-px after:bg-zinc-400 dark:after:bg-zinc-600">
                                <a
                                    href=resource.href
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    class="flex flex-row items-center gap-x-2 w-max font-semibold text-base lg:text-xl text-zinc-800 hover:text-black dark:text-zinc-200 dark:hover:text-white hover:underline"
                                >
                                    {resource.title}
                                    <ExternalLink size=20 />
                                </a>
                                <p class="text-zinc-800 dark:text-zinc-200">
                                    {resource.description}
                                </p>
                            </li>
                        }
                    })
                    .collect_view()}
            </ul>
        </Section>
    }
}

#[component]
fn Contact() -> impl IntoView {
    view! {
        <Section id="contact">
            <header>
                <h2>"Contact"</h2>
                <p>""</p>
            </header>
            <p>
                "You can reach me anytime at "
                <a href="mailto:ndgonzalez.work@gmail.com" class="font-semibold hover:underline">
                    "ndgonzalez.work@gmail.com"
                </a>
            </p>
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
