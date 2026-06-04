import "server-only";

import type { CityData } from "./posterTypes";
import mock from "../_mock/mock.json";

export async function getPosterData(city: string): Promise<CityData> {
  if (process.env.MOCK_POSTER_DATA === "true") {
    return mock as CityData;
  }

  const backendUrl = process.env.POSTER_BACKEND_URL;

  if (!backendUrl) {
    throw new Error("POSTER_BACKEND_URL is not defined");
  }

  const response = await fetch(
    `${backendUrl}/poster?city=${encodeURIComponent(city)}`,
    {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch city data: ${response.statusText}`);
  }

  return response.json();
}