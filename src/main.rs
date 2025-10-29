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

use leptos::prelude::*;
use leptos_meta::*;
use leptos_router::components::*;
use leptos_router::path;

use components::{MainFooter, MainHeader};
use views::Home;

fn main() {
    console_error_panic_hook::set_once();
    mount_to_body(App);
}

#[component]
#[expect(non_snake_case)]
fn App() -> impl IntoView {
    provide_meta_context();
    let formatter = |text| format!("{text} | Nicolas Gonzalez");

    view! {
        <Title formatter />

        <Router>
            // <Banner>"This site is currently under active development!"</Banner>
            <MainHeader />
            <main class="bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white font-inter flex flex-col items-center">
                <Routes fallback=|| "Not found">
                    <Route path=path!("/") view=Home />
                </Routes>
            </main>
            <MainFooter />
        </Router>
    }
}

#[component]
fn Banner(children: Children) -> impl IntoView {
    view! {
        <div class="static top-0 min-w-screen flex flex-row justify-center items-center min-h-8 bg-yellow-500 text-black text-sm font-medium">
            {children()}
        </div>
    }
}
