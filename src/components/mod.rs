#![allow(non_snake_case)]

pub mod button;
pub mod heading;
pub mod list;
pub mod nav;
pub mod section;

use leptos::prelude::*;
use leptos_icons::Icon;
use lucide_leptos::CircleArrowUp;

pub use nav::*;
pub use section::*;

pub fn Header() -> impl IntoView {
    let links = Vec::from_iter([
        NavLink {
            href: "#",
            title: "Home",
        },
        NavLink {
            href: "#projects",
            title: "Projects",
        },
        NavLink {
            href: "#resources",
            title: "Resources",
        },
        NavLink {
            href: "#contact",
            title: "Contact",
        },
    ]);

    view! {
        <header class="flex flex-row z-50 fixed top-0 w-screen min-h-8 justify-between items-center px-8 py-4 animate-fade-down">
            <a href="/">"Nicolas Gonzalez"</a>
            <Navigation links=links />
        </header>
    }
}

pub struct NavLink {
    href: &'static str,
    title: &'static str,
}

#[component]
pub fn Navigation(links: Vec<NavLink>) -> impl IntoView {
    let links = links
        .into_iter()
        .map(|link| {
            view! {
                <NavItem>
                    <a
                        href=link.href
                        class="hover:underline hover:decoration-2 hover:decoration-yellow-500"
                    >
                        {link.title}
                    </a>
                </NavItem>
            }
        })
        .collect_view();

    view! {
        <Nav>
            <NavGroup>{links}</NavGroup>
            <NavGroup>
                <NavItem>
                    <a
                        href="https://github.com/nicdgonzalez"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Icon icon=icondata::AiGithubFilled width="24" height="24" />
                    </a>
                </NavItem>
            </NavGroup>
        </Nav>
    }
}

#[component]
pub fn Footer() -> impl IntoView {
    view! {
        <footer class="flex justify-center bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
            <Container class="flex flex-row justify-between">
                <p>"© 2025 Nicolas Gonzalez"</p>
                <a href="#">
                    <span class="hover:text-zinc-900 dark:hover:text-zinc-100">
                        <CircleArrowUp size=24 />
                    </span>
                </a>
            </Container>
        </footer>
    }
}
