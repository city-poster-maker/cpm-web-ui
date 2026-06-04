import type { CityData } from "../_lib/posterTypes";
import { createPosterProjection } from "../_lib/posterProjection";
import { getRoadWidth } from "../_lib/posterStyle";

type PosterPreviewProps = {
  city: string;
  data: CityData;
};

export function PosterPreview({ city, data }: PosterPreviewProps) {
  const width = 800;
  const height = 1000;
  const padding = 60;

  const project = createPosterProjection({
    roads: data.roads,
    width,
    height,
    padding,
  });

  return (
    <section className="flex flex-1 items-center justify-center bg-neutral-100 p-6">
      <div className="bg-white p-6 shadow-xl">
        <h1 className="mb-4 text-center font-serif text-3xl uppercase tracking-widest">
          {data.name ?? city}
        </h1>

        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-[70vh] w-auto bg-[#f8f5ef]"
        >
          {data.roads.map((road, index) => (
            <polyline
              key={index}
              points={road.geometry.map(project).join(" ")}
              fill="none"
              stroke="#111"
              strokeWidth={getRoadWidth(road)}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.75}
            />
          ))}
        </svg>
      </div>
    </section>
  );
}