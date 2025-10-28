#![allow(non_snake_case)]

use leptos::prelude::*;
use tw_merge::tw_merge;

#[component]
pub fn Navigation(
    children: Children,
    #[prop(into, optional)] class: MaybeProp<String>,
) -> impl IntoView {
    let class = tw_merge!("flex flex-row", class.get().unwrap_or_default());

    view! { <nav class=class>{children()}</nav> }
}

#[component]
pub fn NavigationSection(children: Children) -> impl IntoView {
    view! {
        <ul class="flex flex-row gap-x-4 px-4 py-4 not-first:before:block not-first:before:content-[''] not-first:before:w-px not-first:before:h-full not-first:before:bg-black not-first:before:mr-4 dark:not-first:before:bg-white">
            {children()}
        </ul>
    }
}

#[component]
pub fn NavigationItem(children: Children) -> impl IntoView {
    view! {
        <li class="flex flex-row items-center justify-center text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white hover:cursor-pointer">
            {children()}
        </li>
    }
}
