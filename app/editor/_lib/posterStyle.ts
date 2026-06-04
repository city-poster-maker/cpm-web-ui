import type { Road } from "./posterTypes";

export function getRoadWidth(road: Road) {
  switch (road.tags?.highway) {
    case "motorway":
    case "trunk":
      return 3;
    case "primary":
      return 2.4;
    case "secondary":
      return 1.8;
    case "tertiary":
      return 1.3;
    default:
      return 0.8;
  }
}