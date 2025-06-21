export default function Page() {
  return (
    <main class="top-0">
      <About />
      <Resume />
      <Projects />
    </main>
  );
}

function About() {
  return (
    <section
      id="about"
      class="grid grid-cols-1 lg:grid-cols-2 h-screen w-full px-8 lg:px-16 items-center gap-y-4 lg:gap-x-8 pt-24"
    >
      <div class="flex flex-col gap-y-6">
        <h1 class="font-bold text-2xl">
          Hello,<br />My name is <span class="underline">Nic</span>.
        </h1>
        <p class="flex flex-col gap-y-4 text-zinc-800 dark:text-zinc-200 text-sm lg:text-base">
          <span>
            I am a passionate developer of{" "}
            <strong>{getYearsOfExperience()}+ years</strong>{" "}
            (started November 2020).
          </span>
          <span>
            I take pride in writing{" "}
            <strong>efficient, readable, maintainable code</strong>, and I am
            committed to{" "}
            <strong>continuously learning and improving my craft</strong>.
          </span>
          <span>
            I am currently <strong>exploring new opportunities</strong>.
          </span>
        </p>
        <a href="/assets/Nicolas_Gonzalez.pdf">
          <button
            type="button"
            class="text-sm hover:cursor-pointer w-fit px-4 py-2 border rounded-md font-medium border-zinc-800 dark:border-zinc-200 text-white dark:text-black bg-zinc-950 dark:bg-zinc-50 hover:bg-zinc-800 dark:hover:bg-zinc-200"
          >
            View Résumé
          </button>
        </a>
      </div>
      <div class="flex flex-col items-center text-center">
        <figure class="flex flex-col gap-y-2 max-w-sm lg:max-w-lg">
          <img
            src="/assets/images/goran-ivos-iOykDIkZLQw-unsplash.jpg"
            class="border-zinc-100 border"
          />
          <figcaption class="text-sm">
            Photo by{" "}
            <a
              href="https://unsplash.com/@goran_ivos?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              class="text-blue-500 hover:underline hover:pointer"
            >
              Goran Ivos
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/photos/turned-on-macbook-air-on-desk-iOykDIkZLQw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              class="text-blue-500 hover:underline hover:pointer"
            >
              Unsplash
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section
      id="resume"
      class="flex flex-col h-screen w-full px-8 lg:px-16 justify-center gap-y-4 lg:gap-x-8"
    >
      <h1 class="font-bold text-2xl">
        Résumé
      </h1>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      class="flex flex-col h-screen w-full px-8 lg:px-16 justify-center gap-y-4 lg:gap-x-8"
    >
      <div class="flex flex-col gap-y-6">
        <h1 class="font-bold text-2xl">
          Projects
        </h1>
        <p class="flex flex-col gap-y-4 text-zinc-800 dark:text-zinc-200 text-sm lg:text-base">
          Showcase of some of my open-source projects.
        </p>
      </div>
      <ol class="grid grid-cols-1 lg:grid-cols-4 grid-rows-8 lg:grid-rows-2">
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
        <li>Project 4</li>
        <li>Project 5</li>
        <li>Project 6</li>
        <li>Project 7</li>
        <li>Project 8</li>
      </ol>
    </section>
  );
}

function getYearsOfExperience() {
  const startedDate = new Date(2020, 11, 1);
  const currentDate = new Date();
  let yearsBetween = currentDate.getFullYear() - startedDate.getFullYear();

  if (currentDate.getMonth() < startedDate.getMonth()) {
    yearsBetween -= 1;
  }

  return yearsBetween;
}
