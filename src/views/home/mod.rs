#![allow(non_snake_case)]

mod contact;
mod hero;
mod projects;
mod resources;

use leptos::prelude::*;
use leptos_meta::Title;

use contact::Contact;
use hero::Hero;
use projects::Projects;
use resources::Resources;

pub fn Home() -> impl IntoView {
    view! {
        <Title text="Home" />

        <Hero />
        <Projects />
        <Resources />
        <Contact />
    }
}
