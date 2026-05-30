export type PosterFontStyle = "modern" | "classic" | "mono";

export type PosterStyle = {
  lineColor: string;
  paperColor: string;
  fontStyle: PosterFontStyle;
};

export const defaultPosterStyle: PosterStyle = {
  lineColor: "#171717",
  paperColor: "#f7f3ea",
  fontStyle: "modern",
};
