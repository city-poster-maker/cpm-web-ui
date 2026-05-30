import { PosterEditor } from "@/components/PosterEditor";
import { SiteHeader } from "@/components/SiteHeader";
import { normalizeCityName } from "@/models/city";

type PosterPageProps = {
  searchParams: Promise<{
    city?: string | string[];
  }>;
};

export default async function PosterPage({ searchParams }: PosterPageProps) {
  const cityParam = (await searchParams).city;
  const city = normalizeCityName(Array.isArray(cityParam) ? cityParam[0] ?? "" : cityParam ?? "");

  return (
    <main className="editor-page">
      <SiteHeader compact />
      <PosterEditor city={city} />
    </main>
  );
}
