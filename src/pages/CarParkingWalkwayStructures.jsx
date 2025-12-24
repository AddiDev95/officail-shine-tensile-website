import { Link } from "react-router-dom";
import hero from "../assets/img/car.hero.jpg"; // Replace with the actual parking shades hero image

export default function CarParkingWalkwayShades() {
  return (
    <main className="font-sans">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] flex items-center">
        <img
          src={hero}
          alt="Car Parking & Walkway Shades"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03045e]/85 to-[#0077b6]/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Car Parking & Walkway Shades
          </h1>
          <p className="max-w-2xl text-lg opacity-90 text-white">
            UV-protected tensile shading solutions for parking areas, pedestrian pathways, and commercial walkways.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">
              Functional & Aesthetic Shades
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our car parking and walkway shades provide practical sun protection while enhancing the visual appeal of commercial and residential spaces.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Engineered for durability, the structures are resistant to UV, wind, and rain while offering modular, customizable designs to suit different site conditions.
            </p>
          </div>

          {/* Technical Highlights */}
          <div className="bg-[#f8fbff] p-10 rounded-3xl">
            <h3 className="text-xl font-semibold text-[#03045e] mb-6">
              Technical Highlights
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>• UV-Protected Tensile Fabric Membranes</li>
              <li>• Modular & Scalable Designs</li>
              <li>• Resistance to Wind, Rain, and Sun</li>
              <li>• Low-Maintenance & Long Lifespan</li>
              <li>• Aesthetic & Functional Architectural Solution</li>
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
              "Commercial Parking Lots",
              "Residential Parking Areas",
              "Pedestrian Walkways",
              "Airport & Railway Terminals",
              "Schools & Universities",
              "Shopping Mall Awnings",
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
              A structured approach ensuring safe, durable, and visually appealing parking and walkway shade solutions.
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
                  title: "Site Survey",
                  desc: "Assessing site dimensions, sunlight direction, and accessibility.",
                },
                {
                  step: "02",
                  title: "Design & Engineering",
                  desc: "Developing structural layout, material specifications, and load calculations.",
                },
                {
                  step: "03",
                  title: "Fabrication",
                  desc: "Producing high-quality tensile covers with precision and consistency.",
                },
                {
                  step: "04",
                  title: "Installation",
                  desc: "On-site execution ensuring alignment, safety, and aesthetic integration.",
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
            Protect Your Parking & Walkways
          </h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90 text-white">
            Connect with our experts to design and install high-quality tensile shades for commercial, residential, and public spaces.
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
