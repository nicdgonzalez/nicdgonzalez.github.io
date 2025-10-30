//! The main entry point to the application.

#![warn(
    clippy::correctness,
    clippy::suspicious,
    clippy::complexity,
    clippy::perf,
    clippy::style,
    clippy::pedantic
)]

mod components;
mod views;

use leptos::mount::mount_to_body;
use leptos::prelude::*;
use leptos_meta::{provide_meta_context, Title};
use leptos_router::components::{Route, Router, Routes};
use leptos_router::path;

use crate::components::{Footer, Header};
use crate::views::Home;

fn main() {
    console_error_panic_hook::set_once();
    mount_to_body(app_view);
}

fn app_view() -> impl IntoView {
    provide_meta_context();
    let formatter = |text| format!("{text} | Nicolas Gonzalez");

    view! {
        <Title formatter />

        <Router>
            <Header />
            <main class="bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white font-inter flex flex-col items-center">
                <Routes fallback=|| "Not found">
                    <Route path=path!("/") view=Home />
                </Routes>
            </main>
            <Footer />
        </Router>
    }
}
