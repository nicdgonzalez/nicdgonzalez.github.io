#![allow(non_snake_case)]

mod button;
mod heading;
mod list;
mod nav;
mod section;

use leptos::prelude::*;
use leptos_icons::Icon;
use lucide_leptos::CircleArrowUp;

pub use button::*;
pub use heading::*;
pub use list::*;
pub use nav::*;
pub use section::*;

#[component]
pub fn MainHeader() -> impl IntoView {
    view! {
        <header class="flex flex-row z-50 fixed top-0 w-screen min-h-8 justify-between items-center px-8 py-4 animate-fade-down">
            <a href="/">"Nicolas Gonzalez"</a>
            <MainNavigation />
        </header>
    }
}

struct NavLink {
    href: &'static str,
    title: &'static str,
}

#[component]
pub fn MainNavigation() -> impl IntoView {
    let links = [
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
    ];

    view! {
        <Nav>
            <NavGroup>
                {links
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
                    .collect_view()}
            </NavGroup>
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
pub fn MainFooter() -> impl IntoView {
    view! {
        <footer class="flex justify-center bg-zinc-200 dark:bg-zinc-800">
            <Container class="flex flex-row justify-between">
                <p>"© 2025 Nicolas Gonzalez"</p>
                <a href="#">
                    <span class="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100">
                        <CircleArrowUp size=24 />
                    </span>
                </a>
            </Container>
        </footer>
    }
}
