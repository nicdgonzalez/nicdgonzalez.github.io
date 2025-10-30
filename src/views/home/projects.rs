#![allow(non_snake_case)]

use leptos::prelude::*;
use lucide_leptos::ExternalLink;

use crate::components::heading::{Header, Heading, Subheading};
use crate::components::list::{ListItem, UnorderedList};
use crate::components::section::Section;

struct Project {
    href: &'static str,
    title: &'static str,
    description: &'static str,
}

#[component]
pub fn Projects() -> impl IntoView {
    view! {
        <Section id="projects">
            <Header>
                <Heading>"Projects"</Heading>
                <Subheading>"Carefully crafted tools, experiments, and ideas."</Subheading>
            </Header>
            <UnorderedList>
                {PROJECTS
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

const PROJECTS: [Project; 5] = [
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
