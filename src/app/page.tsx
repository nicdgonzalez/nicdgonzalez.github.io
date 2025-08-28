import { Header } from "@/components/Header";

export default function Home() {
  // TODO:
  //
  // - Fix spacing between top and section when clicking the links.
  // - Create a `Section` component.
  return (
    <>
      <Header />
      <main>
        <section
          id="home"
          className="min-h-screen flex justify-center"
        >
          <div className="text-white scroll-line" />
          <div className="container">
            <h1 className="text-4xl md:text-4xl font-bold text-center">
              Home
            </h1>
          </div>
        </section>
        <section
          id="projects"
          className="min-h-screen flex justify-center"
        >
          <h1 className="text-4xl md:text-4xl font-bold text-center">
            Projects
          </h1>
        </section>
        <section
          id="contact"
          className="min-h-screen flex justify-center"
        >
          <h1 className="text-4xl md:text-4xl font-bold text-center">
            Contact
          </h1>
        </section>
      </main>
    </>
  );
}
