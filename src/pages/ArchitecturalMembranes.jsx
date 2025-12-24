import { Link } from "react-router-dom";
import hero from "../assets/img/ar.hero.jpg"; // Membrane structure hero image

export default function ArchitecturalMembranes() {
  return (
    <main className="font-sans">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] flex items-center">
        <img
          src={hero}
          alt="Architectural Membrane Structures"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045e]/85 to-[#0077b6]/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Architectural Membrane Structures
          </h1>
          <p className="max-w-2xl text-lg opacity-90 text-white">
            Lightweight, flexible membrane solutions for modern architecture, 
            combining visual elegance with structural performance.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">
              Iconic Membrane Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our membrane structures are engineered for large spans and complex geometries, allowing architects to create visually stunning and functional spaces.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Designed to withstand environmental loads, UV exposure, and long-term usage, each membrane structure enhances both aesthetics and performance.
            </p>
          </div>

          {/* Technical Highlights */}
          <div className="bg-[#f8fbff] p-10 rounded-3xl">
            <h3 className="text-xl font-semibold text-[#03045e] mb-6">
              Technical Highlights
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>• PTFE / PVC / ETFE Fabric Options</li>
              <li>• Large Clear Span & Lightweight</li>
              <li>• UV & Weather Resistant</li>
              <li>• Fire Retardant & Code Compliant</li>
              <li>• Low Maintenance & Long Life</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="py-24 bg-[#f8fbff]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#03045e] mb-12">
            Typical Applications
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Commercial Complexes",
              "Sports Arenas & Stadiums",
              "Convention & Exhibition Halls",
              "Transportation Terminals",
              "Public Plazas & Parks",
              "Hospitality & Leisure Spaces",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-md text-center"
              >
                <span className="text-[#0077b6] font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS (ANIMATED FLOW) ================= */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="max-w-3xl mb-20">
            <span className="uppercase tracking-widest text-sm text-[#0077b6] font-semibold">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#03045e] mt-4">
              End-to-End Execution Process
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              A structured workflow ensuring precision, durability, and aesthetic excellence in every membrane project.
            </p>
          </div>

          {/* Flow */}
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-[#caf0f8]" />

            <div className="grid md:grid-cols-4 gap-12 relative z-10">
              {[
                {
                  step: "01",
                  title: "Concept Design",
                  desc: "Architectural intent, site assessment, and functional requirement analysis.",
                },
                {
                  step: "02",
                  title: "Structural Engineering",
                  desc: "Load calculations, form-finding, and structural detailing.",
                },
                {
                  step: "03",
                  title: "Fabrication",
                  desc: "High-precision cutting and assembly with certified materials.",
                },
                {
                  step: "04",
                  title: "Installation",
                  desc: "Safe, accurate, and on-time installation on site.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl border border-[#caf0f8]
                             p-8 text-center shadow-md
                             hover:shadow-2xl hover:-translate-y-3
                             transition-all duration-500"
                >
                  {/* Step Circle */}
                  <div
                    className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center
                               bg-gradient-to-br from-[#0077b6] to-[#03045e]
                               text-white font-bold text-lg
                               group-hover:scale-110 transition-transform"
                  >
                    {item.step}
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold text-[#03045e] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Arrow (Desktop) */}
                  {idx !== 3 && (
                    <span
                      className="hidden md:block absolute top-1/2 -right-6 text-[#0077b6]
                                 text-2xl font-bold"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Background Shape */}
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#caf0f8]/40 rounded-full blur-3xl" />
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-[#0077b6] to-[#03045e] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Discuss Your Membrane Structure Project
          </h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90 text-white">
            Connect with our experts to evaluate feasibility, materials, and design options tailored to your project.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#03045e] px-10 py-4 rounded-xl font-semibold hover:bg-[#caf0f8] transition"
          >
            Contact Technical Team
          </Link>
        </div>
      </section>

    </main>
  );
}
