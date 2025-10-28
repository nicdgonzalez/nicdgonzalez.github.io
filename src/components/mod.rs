#![allow(non_snake_case)]

use leptos::prelude::*;

use tw_merge::tw_merge;

#[component]
pub fn Header() -> impl IntoView {
    view! {
        <header class="z-50 flex flex-row fixed top-0 min-h-6 w-screen justify-between items-center p-8 animate-fade-down">
            <a href="/">"Nicolas Gonzalez"</a>
            <nav>
                <ul>
                    <li>
                        <a href="/">"Home"</a>
                    </li>
                </ul>
            </nav>
        </header>
    }
}

#[component]
pub fn Footer() -> impl IntoView {
    view! { <footer></footer> }
}

#[component]
pub fn Section(
    children: Children,
    #[prop(into, optional)] class: MaybeProp<String>,
    #[prop(into, optional)] id: MaybeProp<String>,
) -> impl IntoView {
    let class = tw_merge!(
        "flex flex-col container px-8 py-4 gap-y-2",
        class.get().unwrap_or_default()
    );

    view! {
        <section id=move || { id.get() } class=class>
            {children()}
        </section>
    }
}
