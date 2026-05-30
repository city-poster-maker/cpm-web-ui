export function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div>
        <p className="eyebrow">About</p>
        <h2>Street geometry turned into a quiet graphic object.</h2>
      </div>
      <p>
        City Poster Maker will use OpenStreetMap data to render the road graph of a selected city as a printable poster.
        The current interface keeps the flow ready for the server-generated SVG while leaving room for poster styling,
        previewing, and export controls.
      </p>
    </section>
  );
}
