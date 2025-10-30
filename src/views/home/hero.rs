#![allow(non_snake_case)]

use leptos::prelude::*;
use lucide_leptos::{ArrowDown, ArrowRight};

use crate::components::button::{Button, ButtonVariant};
use crate::components::heading::{Header, Heading, Subheading};
use crate::components::section::Section;

#[component]
pub fn Hero() -> impl IntoView {
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
                <br class="hidden lg:inline-block" />" and features that fit together seamlessly."
            </p>
            <p class="animate-fade-left animate-delay-1500">
                "My goal is to create meaningful projects that make difference."<br />
                "I hope my work is able to inspire you in one way or another."
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

            <div class="flex flex-col self-center absolute bottom-4 justify-center items-center gap-y-4 animate-fade-up animate-delay-3000">
                <p class="text-sm animate-pulse">"Scroll to explore!"</p>
                <span class="animate-bounce">
                    <ArrowDown size=24 />
                </span>
            </div>
        </Section>
    }
}
