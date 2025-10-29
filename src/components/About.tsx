import Image from "next/image";

export default function About() {
  return (
    <section className="relative">
      {/* Background image with blur and dark overlay for readability */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/backgrounds/DSCF7116.jpg"
          alt="Background"
          fill
          priority
          className="object-cover blur-[4px]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">About the CEO</h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="flex items-start gap-4 lg:col-span-3">
              <div className="relative h-40 w-40 overflow-hidden rounded-full ring-2 ring-white/20 flex-shrink-0">
                <Image
                  src="/assets/team/Jordan Edmunds Profile Pic.jpeg"
                  alt="Jordan Edmunds, CEO of JVE Capital Investments LLC"
                  fill
                  priority
                  sizes="160px"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <p className="mt-2 text-base text-slate-300">
                  Jordan Edmunds, Founder and Principal of JVE Capital Investments LLC, is a seasoned construction and operations professional with more than a decade of experience leading complex commercial and residential projects across the United States. A graduate of Howard University and former Turner Construction leader, Jordan has managed large-scale initiatives such as the Ronald Reagan National Airport Secure National Hall Project and the U.S. Capitol Dome Restoration—two of the nation’s most challenging and prestigious builds.
                </p>
                <p className="mt-3 text-base text-slate-300">
                  His expertise extends from high-security government work to community-driven residential developments, where he has overseen projects for the University of Pittsburgh, Pittsburgh Public Schools, and numerous private clients. Jordan’s approach blends technical precision with a deep commitment to quality, safety, and client satisfaction. Through JVE Capital, he continues to set the standard for excellence in construction management and development, earning the trust of partners who value integrity, innovation, and long-term results.
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

            <div className="w-full rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
              <div className="space-y-4">
                <div>
                  <h3 className="text-white">Commercial Experience</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Tenant fit-outs & build-outs</li>
                    <li>Retail, fitness, and office renovations</li>
                    <li>MEP coordination & permit management</li>
                    <li>ADA upgrades & compliance</li>
                  </ul>
                </div>
                <div>
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
          </div>
        </div>
      </div>
    </section>
  );
}