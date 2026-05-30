"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { normalizeCityName, renderableCities } from "@/models/city";
import { LoadingScreen } from "@/components/LoadingScreen";

export function CityGenerator() {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [isRendering, setIsRendering] = useState(false);

  const selectedCity = useMemo(() => normalizeCityName(city), [city]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsRendering(true);

    window.setTimeout(() => {
      router.push(`/poster?city=${encodeURIComponent(selectedCity)}`);
    }, 1400);
  }

  if (isRendering) {
    return <LoadingScreen label={`Rendering ${selectedCity}`} />;
  }

  return (
    <section className="tool-section" id="tool">
      <div className="tool-copy">
        <p className="eyebrow">The tool</p>
        <h1>Choose a city we can render.</h1>
      </div>
      <form className="city-form" onSubmit={handleSubmit}>
        <label htmlFor="city">City</label>
        <div className="input-row">
          <input
            id="city"
            list="renderable-cities"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Paris, France"
            autoComplete="off"
          />
          <datalist id="renderable-cities">
            {renderableCities.map((option) => (
              <option key={option} value={option} />
            ))}
          </datalist>
          <button className="primary-button" type="submit">
            Generate
          </button>
        </div>
      </form>
    </section>
  );
}
