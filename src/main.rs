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

use components::{Footer, Header};
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
            <Header />
            <main class="bg-zinc-200 dark:bg-zinc-900 text-black dark:text-white font-inter flex flex-col items-center">
                <Routes fallback=|| "Not found">
                    <Route path=path!("/") view=Home />
                </Routes>
            </main>
            <Footer />
        </Router>
    }
}
