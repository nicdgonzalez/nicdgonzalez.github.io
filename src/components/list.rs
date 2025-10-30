#![allow(non_snake_case)]

use leptos::prelude::*;
use tw_merge::tw_merge;

#[component]
pub fn UnorderedList(
    children: Children,
    #[prop(into, optional)] id: MaybeProp<String>,
    #[prop(into, optional)] class: MaybeProp<String>,
) -> impl IntoView {
    let class = tw_merge!(
        "flex flex-col gap-y-2 pb-4",
        class.get().unwrap_or_default()
    );

    view! {
        <ul id=move || { id.get() } class=class>
            {children()}
        </ul>
    }
}

#[component]
pub fn ListItem(
    children: Children,
    #[prop(into, optional)] id: MaybeProp<String>,
    #[prop(into, optional)] class: MaybeProp<String>,
) -> impl IntoView {
    let class = tw_merge!(
        "after:mt-2 after:block after:content-[''] after:w-full after:h-px after:bg-zinc-400 dark:after:bg-zinc-600",
        class.get().unwrap_or_default()
    );

    view! {
        <li id=move || { id.get() } class=class>
            {children()}
        </li>
    }
}
