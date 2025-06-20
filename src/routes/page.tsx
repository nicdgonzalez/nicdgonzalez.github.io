import { Button, ButtonVariant } from "../components/Button";

export default function Page() {
  return (
    <main>
      <div class="grid grid-cols-1 lg:grid-cols-2 h-screen w-full items-center px-8 lg:px-16 gap-y-8 gap-x-16 pt-18">
        <div class="flex flex-col gap-y-6">
          <div class="flex flex-col gap-y-1">
            <h1 class="font-bold text-2xl">
              Hello,<br />My name is <span class="">Nic</span>.
            </h1>
            <h2 class="text-zinc-500 font-medium">
              Full-Stack Developer & Developer Tools
            </h2>
          </div>
          <div class="text-zinc-800 font-light flex flex-col gap-y-4">
            <p>
              I am a passionate software developer of{" "}
              <strong>{getYearsOfExperience()}+ years</strong>{" "}
              (since November 2020).
            </p>
            <p>
              I take pride in writing{" "}
              <strong>efficient, readable, maintainable code</strong>, and am
              committed to{" "}
              <strong>continuously learning and improving my craft</strong>.
            </p>
            <p>
              I am currently exploring{" "}
              <span class="underline">
                <strong>new opportunities</strong>
              </span>.
            </p>
          </div>
          <Button
            href=""
            text="View Résumé"
            variant={ButtonVariant.Primary}
          />
        </div>
        <div class="flex flex-col text-center items-center">
          <figure>
            <img
              src="/images/goran-ivos-iOykDIkZLQw-unsplash.jpg"
              class="max-w-md border border-zinc-100 border-8"
            />
            <figcaption class="text-xs">
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
      </div>
    </main>
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
