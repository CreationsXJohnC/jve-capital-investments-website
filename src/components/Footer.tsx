import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center text-center space-y-2">
          <Logo size="xxl" variant="pngWhite" alt="JVE Capital Investments LLC" />
          <p className="text-base">Washington, DC</p>
          <p className="text-base">
            <a href="mailto:jve.capital@gmail.com" className="text-blue-600 hover:underline hover:text-blue-700" aria-label="Email jve.capital@gmail.com">
              jve.capital@gmail.com
            </a>
          </p>
          <p className="text-sm">© 2025 JVE Capital Investments LLC</p>
        </div>
      </div>
    </footer>
  );
}