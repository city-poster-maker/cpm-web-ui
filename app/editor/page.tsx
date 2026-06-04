import { SiteHeader } from "@/components/SiteHeader";
import { redirect } from "next/navigation";
import { getPosterData } from "./_lib/getPosterData";
import { Editor } from "./_components/Editor";
import { PosterPreview } from "./_components/PosterPreview";

type EditorPageProps = {
  searchParams: Promise<{
    city?: string;
  }>;
};

export default async function EditorPage({ searchParams }: EditorPageProps) {
  const { city = "" } = await searchParams;

  if (!city) {
    redirect("/main");
  }

  const data = await getPosterData(city);

  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader compact />
      <div className="flex flex-1">
        <PosterPreview city={city} data={data} />
        <Editor />
      </div>
    </main>
  );
}