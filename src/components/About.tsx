import Image from "next/image";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1 flex items-start gap-4">
          <div className="relative h-32 w-32 overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <Image
              src="/assets/team/Jordan Edmunds Profile Pic.jpeg"
              alt="Jordan Edmunds, CEO of JVE Capital Investments LLC"
              fill
              className="object-cover"
              sizes="128px"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">About the CEO</h2>
            <p className="mt-2 text-sm text-gray-300">
              Jordan Edmunds leads JVE Capital Investments LLC with hands-on expertise across
              commercial and residential projects. From tenant fit-outs, renovations, MEP coordination,
              and general contracting to program management—delivering on-time, on-budget results.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="/docs/Jordan Edmunds - Resume (FINAL).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-100"
              >
                View Resume
              </a>
              <a
                href="/docs/JVE Capital Investments LLC - One Pager.docx"
                className="rounded-md border border-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/10"
              >
                Download One-Pager
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 gap-4 text-sm text-gray-300">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <h3 className="text-white">Commercial Experience</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Tenant fit-outs & build-outs</li>
              <li>Retail, fitness, and office renovations</li>
              <li>MEP coordination & permit management</li>
              <li>ADA upgrades & compliance</li>
            </ul>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <h3 className="text-white">Residential Experience</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Kitchen & bath remodels</li>
              <li>Interior reconfiguration & finish carpentry</li>
              <li>Ground-up construction management</li>
              <li>Sub coordination & inspections</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}