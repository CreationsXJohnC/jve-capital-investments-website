export default function Services() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-brand">Commercial Services</h2>
            <ul className="mt-6 space-y-2 text-slate-300">
              <li>Tenant improvements & build-outs</li>
              <li>Project design & permitting</li>
              <li>Site coordination & scheduling</li>
              <li>Facility upgrades & maintenance</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-brand">Residential Services</h2>
            <ul className="mt-6 space-y-2 text-slate-300">
              <li>Interior/exterior remodeling</li>
              <li>Structural modifications</li>
              <li>Custom finish carpentry</li>
              <li>Outdoor spaces & hardscapes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}