type LoadingScreenProps = {
  label: string;
};

export function LoadingScreen({ label }: LoadingScreenProps) {
  return (
    <section className="loader-screen">
      <div className="loader-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p>{label}</p>
    </section>
  );
}
