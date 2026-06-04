import { SiteHeader } from "@/components/SiteHeader";

export default function HomePage() {

  return (
    <main>
      <SiteHeader />
      <section className="grid min-h-[calc(100svh-72px)] place-items-center overflow-hidden px-6">
          <h1 className="m-0 flex flex-col items-center justify-center text-center text-[clamp(3rem,8vw,8.8rem)] font-[520] leading-[0.94] tracking-normal text-[var(--ink)]">
            <span className="inline-block">
              create
            </span>
            <span className="flex items-baseline whitespace-nowrap">
              <span className="inline-block">
                your poster
              </span>
              <span className="inline-block text-[var(--accent)]">.</span>
            </span>
        </h1>
      </section>
    </main>
  );
}
