#![allow(non_snake_case)]

use leptos::prelude::*;
use tw_merge::tw_merge;

#[component]
pub fn Section(
    children: Children,
    #[prop(into, optional)] class: MaybeProp<String>,
    #[prop(into, optional)] id: MaybeProp<String>,
) -> impl IntoView {
    let class = tw_merge!(
        "flex flex-col items-center w-full min-h-screen pt-24 lg:pt-32 pb-12 \
        border-b border-zinc-300 dark:border-zinc-700",
        class.get().unwrap_or_default()
    );

    view! {
        <section id=move || { id.get() } class=class>
            <Container>{children()}</Container>
        </section>
    }
}

#[component]
pub fn Container(
    children: Children,
    #[prop(into, optional)] id: MaybeProp<String>,
    #[prop(into, optional)] class: MaybeProp<String>,
) -> impl IntoView {
    let class = tw_merge!(
        "flex flex-col container px-8 py-4 gap-y-4",
        class.get().unwrap_or_default()
    );

    view! {
        <div id=move || { id.get() } class=class>
            {children()}
        </div>
    }
}
