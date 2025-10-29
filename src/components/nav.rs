#![allow(non_snake_case)]

use leptos::prelude::*;
use tw_merge::tw_merge;

#[component]
pub fn Nav(
    children: Children,
    #[prop(into, optional)] id: MaybeProp<String>,
    #[prop(into, optional)] class: MaybeProp<String>,
) -> impl IntoView {
    let class = tw_merge!("flex flex-row", class.get().unwrap_or_default());

    view! {
        <nav id=move || { id.get() } class=class>
            {children()}
        </nav>
    }
}

#[component]
pub fn NavGroup(
    children: Children,
    #[prop(into, optional)] id: MaybeProp<String>,
    #[prop(into, optional)] class: MaybeProp<String>,
) -> impl IntoView {
    let class = tw_merge!(
        "flex flex-row justify-center items-center gap-x-4 \
        not-first:before:block not-first:before:content-[''] not-first:before:w-px not-first:before:h-full not-first:before:bg-black dark:not-first:before:bg-white not-first:before:ml-4",
        class.get().unwrap_or_default()
    );

    view! {
        <ul id=move || { id.get() } class=class>
            {children()}
        </ul>
    }
}

#[component]
pub fn NavItem(
    children: Children,
    #[prop(into, optional)] id: MaybeProp<String>,
    #[prop(into, optional)] class: MaybeProp<String>,
) -> impl IntoView {
    let class = tw_merge!(
        "flex flex-row items-center justify-center \
        text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white \
        hover:cursor-pointer",
        class.get().unwrap_or_default()
    );

    view! {
        <li id=move || { id.get() } class=class>
            {children()}
        </li>
    }
}
