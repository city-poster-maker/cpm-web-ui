import Link from "next/link";

type SiteHeaderProps = {
  compact?: boolean;
};

export function SiteHeader({ compact = false }: SiteHeaderProps) {
  return (
    <header className={`site-header ${compact ? "site-header-compact" : ""}`}>
      <Link className="brand" href="/">
        CPM
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/generator#tool">The tool</Link>
        <Link href="/generator#about">About</Link>
        <Link href="/generator#gallery">Gallery</Link>
        <a href="mailto:hello@citypostermaker.com">Contact</a>
      </nav>
    </header>
  );
}
