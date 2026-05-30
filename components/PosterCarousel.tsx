import { cityMaps, featuredPosterCities } from "@/models/city";

export function PosterCarousel() {
  return (
    <section className="carousel-section" id="gallery" aria-label="Famous city poster placeholders">
      <div className="carousel-track">
        {featuredPosterCities.map((posterCity, index) => (
          <article className="poster-card" key={posterCity}>
            <div className="poster-placeholder">
              <svg viewBox="0 0 240 240" aria-hidden="true">
                <path d={cityMaps[index % cityMaps.length].path} />
              </svg>
            </div>
            <p>{posterCity}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
