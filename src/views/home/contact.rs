#![allow(non_snake_case)]

use leptos::prelude::*;
use leptos_icons::Icon;

use crate::components::heading::{Header, Heading, Subheading};
use crate::components::section::Section;

#[component]
pub fn Contact() -> impl IntoView {
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
