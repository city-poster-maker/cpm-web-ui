import type { Point, Road } from "./posterTypes";

type CreatePosterProjectionParams = {
  roads: Road[];
  width: number;
  height: number;
  padding: number;
};

export function createPosterProjection({
  roads,
  width,
  height,
  padding,
}: CreatePosterProjectionParams) {
  const points = roads.flatMap((road) => road.geometry);

  const minLat = Math.min(...points.map((point) => point.lat));
  const maxLat = Math.max(...points.map((point) => point.lat));
  const minLon = Math.min(...points.map((point) => point.lon));
  const maxLon = Math.max(...points.map((point) => point.lon));

  return function project(point: Point) {
    const x =
      padding +
      ((point.lon - minLon) / (maxLon - minLon)) * (width - padding * 2);

    const y =
      padding +
      ((maxLat - point.lat) / (maxLat - minLat)) * (height - padding * 2);

    return `${x},${y}`;
  };
}