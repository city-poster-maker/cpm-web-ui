export type TitlePosition = {
  x: number;
  y: number;
};

export type PosterSettings = {
  posterBackgroundColor: string;
  lineColor: string;
  titleColor: string;
  titlePosition: TitlePosition;
};

export type Point = {
  lat: number;
  lon: number;
};

export type Road = {
  geometry: Point[];
  tags?: {
    highway?: string;
  };
};

export type CityData = {
  name: string;
  roads: Road[];
};