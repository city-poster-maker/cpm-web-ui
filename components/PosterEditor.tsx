"use client";

import { useState } from "react";
import { PosterEditorPanel } from "@/components/PosterEditorPanel";
import { PosterPreview } from "@/components/PosterPreview";
import { defaultPosterStyle } from "@/models/poster";

type PosterEditorProps = {
  city: string;
};

export function PosterEditor({ city }: PosterEditorProps) {
  const [style, setStyle] = useState(defaultPosterStyle);

  return (
    <section className="editor-shell" aria-label="Poster editor">
      <PosterPreview city={city} style={style} />
      <PosterEditorPanel city={city} style={style} onStyleChange={setStyle} />
    </section>
  );
}
