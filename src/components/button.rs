#![allow(non_snake_case)]

use leptos::prelude::*;
use tw_merge::tw_merge;

#[expect(dead_code)]
#[derive(Debug, Clone, Copy, Default)]
pub enum ButtonVariant {
    #[default]
    Primary,
    Secondary,
    Outline,
}

#[component]
pub fn Button(
    children: Children,
    #[prop(into, optional)] href: MaybeProp<String>,
    #[prop(into, optional)] class: MaybeProp<String>,
    #[prop(into, optional)] id: MaybeProp<String>,
    #[prop(into, optional)] variant: MaybeProp<ButtonVariant>,
) -> impl IntoView {
    let mut base_class = "flex flex-row justify-center items-center gap-x-2 \
        px-4 py-2 min-w-24 lg:min-w-30 min-h-8 lg:min-h-10 rounded-sm \
        text-sm font-medium \
        whitespace-nowrap hover:cursor-pointer "
        .to_owned();

    base_class.push_str(match variant.get().unwrap_or_default() {
        ButtonVariant::Primary => {
            "text-white dark:text-black \
            bg-zinc-800 hover:bg-zinc-700 \
            dark:bg-zinc-200 hover:dark:bg-zinc-300"
        }
        ButtonVariant::Secondary => {
            "text-black dark:text-white \
            bg-zinc-200 hover:bg-zinc-300 \
            dark:bg-zinc-700 hover:dark:bg-zinc-800"
        }
        ButtonVariant::Outline => {
            "text-black dark:text-white border \
            border-zinc-200 hover:bg-zinc-300 \
            dark:border-zinc-700 hover:dark:bg-zinc-800"
        }
    });

    let class = tw_merge!(base_class, class.get().unwrap_or_default());

    view! {
        <a href=move || { href.get() } id=move || { id.get() } class=class>
            {children()}
        </a>
    }
}
