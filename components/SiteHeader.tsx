import Link from "next/link";

type SiteHeaderProps = {
  compact?: boolean;
};

export function SiteHeader({ compact = false }: SiteHeaderProps) {
  return (
    <header
      className={[
        "z-20 flex min-h-[72px] items-center justify-between gap-7 border-b border-[color-mix(in_srgb,var(--line)_72%,transparent)] bg-[color-mix(in_srgb,var(--background)_88%,transparent)] px-12 backdrop-blur-[18px] max-[820px]:flex-col max-[820px]:items-start max-[820px]:gap-3.5 max-[820px]:px-5 max-[820px]:py-[18px]",
        compact ? "relative" : "sticky top-0",
      ].join(" ")}
    >
      <Link className="font-mono text-[0.82rem] font-bold tracking-[0.16em]" href="/">
        CPM
      </Link>
      <nav
        aria-label="Main navigation"
        className="flex items-center gap-7 text-[0.88rem] text-[var(--muted)] max-[820px]:w-full max-[820px]:gap-4 max-[820px]:overflow-x-auto max-[820px]:pb-0.5 max-[820px]:whitespace-nowrap"
      >
        <Link className="transition-colors hover:text-[var(--foreground)]" href="/main#tool">
          The tool
        </Link>
        <Link className="transition-colors hover:text-[var(--foreground)]" href="/main#about">
          About
        </Link>
        <Link className="transition-colors hover:text-[var(--foreground)]" href="/main#gallery">
          Gallery
        </Link>
        <a className="transition-colors hover:text-[var(--foreground)]" href="mailto:hello@citypostermaker.com">
          Contact
        </a>
      </nav>
    </header>
  );
}
