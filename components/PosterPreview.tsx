import { cityMaps } from "@/models/city";
import { PosterStyle } from "@/models/poster";

type PosterPreviewProps = {
  city: string;
  style: PosterStyle;
};

export function PosterPreview({ city, style }: PosterPreviewProps) {
  return (
    <div className="poster-preview" style={{ backgroundColor: style.paperColor }}>
      <svg viewBox="0 0 600 720" role="img" aria-label={`${city} poster preview`}>
        <rect width="600" height="720" fill={style.paperColor} />
        <g fill="none" stroke={style.lineColor} strokeLinecap="round" strokeLinejoin="round">
          <path className="poster-path major" d={cityMaps[0].path} />
          <path
            className="poster-path minor"
            d="M108 420 C172 386 222 392 270 430 C319 468 371 461 424 417 M150 500 L468 500 M190 558 C250 534 323 534 402 558"
          />
        </g>
        <text
          x="300"
          y="646"
          textAnchor="middle"
          className={`poster-title poster-title-${style.fontStyle}`}
          fill={style.lineColor}
        >
          {city.split(",")[0]}
        </text>
        <text x="300" y="674" textAnchor="middle" className="poster-subtitle" fill={style.lineColor}>
          OpenStreetMap graph poster
        </text>
      </svg>
    </div>
  );
}
