#![allow(non_snake_case)]

use leptos::prelude::*;
use lucide_leptos::ExternalLink;

use crate::components::heading::{Header, Heading, Subheading};
use crate::components::list::{ListItem, UnorderedList};
use crate::components::section::Section;

struct Resource {
    href: &'static str,
    title: &'static str,
    description: &'static str,
}

#[component]
pub fn Resources() -> impl IntoView {
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
