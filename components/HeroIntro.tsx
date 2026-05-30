"use client";

import { useEffect, useState } from "react";
import { cityMaps } from "@/models/city";

export function HeroIntro() {
  const [heroMap, setHeroMap] = useState(cityMaps[0]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setHeroMap(cityMaps[Math.floor(Math.random() * cityMaps.length)]);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section" aria-label="City poster introduction">
      <div className="hero-title" aria-label="create your city poster.">
        <span>create your</span>
        <span>
          city poster <b>.</b>
        </span>
      </div>
      <svg className="hero-map" viewBox="0 0 600 430" aria-hidden="true">
        <path d={heroMap.path} />
      </svg>
      <p className="hero-city">{heroMap.name}</p>
    </section>
  );
}
