import Image from "next/image";

export default function Services() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Intro block merged from the section that was below Services */}
        <div className="grid grid-cols-1 items-start gap-6">
          <div>
            <h2 className="text-brand text-center text-3xl font-bold sm:text-4xl lg:text-5xl">Commercial & Residential Contracting</h2>
            <p className="mt-4 max-w-4xl text-base text-slate-300 mx-auto text-center">
              At JVE Capital Investments LLC, we bring the same level of care, precision, and professionalism to every project — whether it’s a large-scale commercial development or a custom residential renovation. Our expertise spans construction management, restoration, and full-service contracting, allowing us to deliver comprehensive solutions tailored to each client’s goals. With a commitment to safety, quality, and efficiency, JVE ensures that every structure — from modern builds to historic restorations — reflects the highest standards of craftsmanship and integrity. We take pride in building spaces that not only perform but inspire confidence, trust, and long-term value.
            </p>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 grid gap-y-12 gap-x-32 md:grid-cols-[auto_auto] justify-center place-items-center text-center">
          <div className="flex flex-col items-center gap-8">
            <Image
              src="/assets/team/CommercialSpace-pic.jpg"
              alt="Commercial services profile"
              width={192}
              height={192}
              className="mx-auto h-48 w-48 rounded-full object-cover ring-2 ring-white/20"
            />
            <div>
              <h2 className="text-2xl font-semibold text-brand">Commercial Services</h2>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>Owner's Representative</li>
                <li>Project Management</li>
                <li>Site Coordination & Scheduling</li>
                <li>Facility Upgrades & Maintenance</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <Image
              src="/assets/team/Kitchen-pic.jpg"
              alt="Residential services profile"
              width={192}
              height={192}
              className="mx-auto h-48 w-48 rounded-full object-cover ring-2 ring-white/20"
            />
            <div>
              <h2 className="text-2xl font-semibold text-brand">Residential Services</h2>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>Full Service Renovations</li>
                <li>Design Build</li>
                <li>Pre-Scope Analysis</li>
                <li>Real Estate Consultation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}