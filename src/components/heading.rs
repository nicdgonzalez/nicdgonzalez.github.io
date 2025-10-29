#![allow(non_snake_case)]

use leptos::prelude::*;
use tw_merge::{tw_join, tw_merge};

#[component]
pub fn Header(
    children: Children,
    #[prop(into, optional)] class: MaybeProp<String>,
    #[prop(into, optional)] id: MaybeProp<String>,
) -> impl IntoView {
    let class = tw_merge!(
        "flex flex-col pb-4 gap-y-1",
        class.get().unwrap_or_default()
    );

    view! {
        <header id=move || { id.get() } class=class>
            {children()}
        </header>
    }
}

#[component]
pub fn Heading(
    children: Children,
    #[prop(into, optional)] class: MaybeProp<String>,
    #[prop(into, optional)] id: MaybeProp<String>,
) -> impl IntoView {
    let class = tw_join!(
        "text-2xl lg:text-4xl font-medium",
        class.get().unwrap_or_default()
    );

    view! {
        <h2 id=move || { id.get() } class=class>
            {children()}
        </h2>
    }
}

#[component]
pub fn Subheading(
    children: Children,
    #[prop(into, optional)] class: MaybeProp<String>,
    #[prop(into, optional)] id: MaybeProp<String>,
) -> impl IntoView {
    let class = tw_join!("text-base lg:text-lg", class.get().unwrap_or_default());

    view! {
        <p id=move || { id.get() } class=class>
            {children()}
        </p>
    }
}
