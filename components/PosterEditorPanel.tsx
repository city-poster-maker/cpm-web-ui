import Link from "next/link";
import { PosterFontStyle, PosterStyle } from "@/models/poster";

type PosterEditorPanelProps = {
  city: string;
  style: PosterStyle;
  onStyleChange: (style: PosterStyle) => void;
};

export function PosterEditorPanel({ city, style, onStyleChange }: PosterEditorPanelProps) {
  return (
    <aside className="editor-panel">
      <p className="eyebrow">Poster studio</p>
      <h1>{city}</h1>
      <div className="control-group">
        <label htmlFor="line-color">Line color</label>
        <input
          id="line-color"
          type="color"
          value={style.lineColor}
          onChange={(event) => onStyleChange({ ...style, lineColor: event.target.value })}
        />
      </div>
      <div className="control-group">
        <label htmlFor="paper-color">Paper color</label>
        <input
          id="paper-color"
          type="color"
          value={style.paperColor}
          onChange={(event) => onStyleChange({ ...style, paperColor: event.target.value })}
        />
      </div>
      <div className="control-group">
        <label htmlFor="city-font">City font</label>
        <select
          id="city-font"
          value={style.fontStyle}
          onChange={(event) => onStyleChange({ ...style, fontStyle: event.target.value as PosterFontStyle })}
        >
          <option value="modern">Modern</option>
          <option value="classic">Classic</option>
          <option value="mono">Mono</option>
        </select>
      </div>
      <Link className="primary-button button-link" href="/generator#tool">
        Create another poster
      </Link>
    </aside>
  );
}
