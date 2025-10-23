export default function TrustedLogos() {
  const logos = [1, 2, 3];
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-sm uppercase tracking-widest text-slate-400">Trusted by</p>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {logos.map((id) => (
            <div
              key={id}
              className="flex h-20 items-center justify-center rounded bg-slate-800 text-slate-400"
            >
              Logo {id}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}