export default function Footer() {
  return (
    <footer className="bg-black text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">© {new Date().getFullYear()} JVE Capital Investments LLC</p>
          <nav className="flex gap-6 text-sm">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="/gallery" className="hover:text-brand">Gallery</a>
            <a href="#contact" className="hover:text-brand">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}