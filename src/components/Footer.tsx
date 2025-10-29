export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex justify-center">
          <p className="text-sm text-center w-full">© {new Date().getFullYear()} JVE Capital Investments LLC</p>
        </div>
      </div>
    </footer>
  );
}