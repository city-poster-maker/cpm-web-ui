"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";

export default function GeneratorPage() {
  return (
    <main>
      <SiteHeader />
      <CityGenerator />
      <PosterCarousel />
      <AboutSection />
    </main>
  );
}

function CityGenerator() {
  const router = useRouter();
  const [city, setCity] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formatedCity = city
      .trim()
      .replace(/'/g, "_")
      .replace(/ /g, "_");

    window.setTimeout(() => {
      router.push(`/editor?city=${encodeURIComponent(formatedCity)}`);
    }, 1);
  }

  return (
    <section
      className="grid grid-cols-[minmax(0,0.85fr)_minmax(320px,1.15fr)] items-end gap-12 border-t border-[var(--line)] px-12 pb-[34px] pt-24 max-[820px]:grid-cols-1 max-[820px]:px-[22px]"
      id="tool"
    >
      <div>
        <p className="m-0 font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">The tool</p>
        <h1 className="mt-2 text-[clamp(2rem,4vw,4.4rem)] font-medium leading-none">
          Choose a city we can render.
        </h1>
      </div>
      <form className="grid gap-3" onSubmit={handleSubmit}>
        <label className="text-[0.82rem] text-[var(--muted)]" htmlFor="city">
          City
        </label>
        <div className="grid grid-cols-[minmax(0,1fr)_148px] gap-2.5 max-[820px]:grid-cols-1">
          <input
            className="min-h-[54px] w-full rounded-lg border border-[var(--line)] bg-[var(--panel)] px-4 text-[var(--foreground)] outline-none focus:border-[var(--foreground)]"
            id="city"
            list="renderable-cities"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Paris, France"
            autoComplete="off"
          />
          <button className="cursor-pointer min-h-[54px] w-full rounded-lg border border-[var(--foreground)] bg-[var(--foreground)] px-4 text-center font-medium text-[var(--background)] transition hover:bg-transparent hover:text-[var(--foreground)] active:translate-y-px" type="submit">
            Generate
          </button>
        </div>
      </form>
    </section>
  );
}

function PosterCarousel() {
  return (
    <section className="py-6 pb-[72px] pl-12 max-[820px]:pl-[22px]" id="gallery" aria-label="Famous city poster placeholders">
      <div className="flex snap-x gap-[18px] overflow-x-auto py-2 pb-[18px] pr-12 max-[820px]:pr-[22px]">
        {/* {featuredPosterCities.map((posterCity, index) => (
          <article className="shrink-0 basis-[clamp(210px,24vw,320px)] snap-start" key={posterCity}>
            <div className="grid aspect-square place-items-center rounded-lg border border-[var(--line)] bg-[var(--panel)]">
              <svg className="h-[78%] w-[78%]" viewBox="0 0 240 240" aria-hidden="true">
                <path
                  d={cityMaps[index % cityMaps.length].path}
                  fill="none"
                  stroke="var(--foreground)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="7"
                />
              </svg>
            </div>
            <p className="mt-3 font-mono text-[0.78rem] uppercase tracking-[0.1em] text-[var(--muted)]">{posterCity}</p>
          </article>
        ))} */}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      className="grid min-h-[72vh] grid-cols-[minmax(260px,0.9fr)_minmax(280px,1.1fr)] gap-16 border-t border-[var(--line)] px-12 py-[120px] max-[820px]:grid-cols-1 max-[820px]:px-[22px]"
      id="about"
    >
      <div>
        <p className="m-0 font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">About</p>
        <h2 className="mt-2 text-[clamp(2rem,4vw,4.4rem)] font-medium leading-none">
          Street geometry turned into a quiet graphic object.
        </h2>
      </div>
      <p className="m-0 max-w-[740px] text-[clamp(1.15rem,2vw,1.7rem)] leading-normal text-[var(--muted)]">
        City Poster Maker renders road data from your backend into a customizable city poster directly in the browser.
        Keeping the geometry on the frontend makes color, typography, layout, and export controls easier to evolve.
      </p>
    </section>
  );
}
