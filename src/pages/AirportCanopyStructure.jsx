import { Link } from "react-router-dom";
import hero from "../assets/img/service1.jpg";
import img2 from "../assets/img/service2.jpg";
import img3 from "../assets/img/service3.jpg";

export default function AirportCanopyStructure() {
  return (
    <main className="font-sans bg-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[75vh]">
        <img
          src={hero}
          alt="Airport Canopy Structure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-end pb-20 text-white">
          <div>
            <span className="uppercase tracking-widest text-sm opacity-80">
              Commercial Project
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              Airport Canopy Structure
            </h1>
            <p className="mt-4 text-lg opacity-90">
              Mumbai, India
            </p>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-16">

          {/* Description */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">
              Project Overview
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This airport canopy structure was designed to provide large-span
              weather protection while maintaining visual lightness and
              architectural elegance. The design responds to heavy footfall,
              high wind loads, and long-term durability requirements.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The tensile membrane system allows daylight penetration while
              reducing heat gain, creating a comfortable microclimate for
              passengers and visitors.
            </p>
          </div>

          {/* Metadata */}
          <div className="bg-[#f8fbff] p-8 rounded-3xl">
            <h3 className="text-lg font-semibold text-[#03045e] mb-6">
              Project Details
            </h3>

            <ul className="space-y-4 text-sm text-gray-700">
              <li><strong>Location:</strong> Gurugram, India</li>
              <li><strong>Category:</strong> Commercial Infrastructure</li>
              <li><strong>Fabric:</strong> PTFE Coated Glass</li>
              <li><strong>Structure:</strong> Steel + Tensile Membrane</li>
              <li><strong>Area Covered:</strong> 8,200 sqft</li>
              <li><strong>Completion:</strong> 2024</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="py-24 bg-[#f8fbff]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#03045e] mb-12">
            Key Highlights
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Large clear span without columns",
              "High wind-load resistance",
              "UV & fire-resistant membrane",
              "Low maintenance lifecycle",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm text-center"
              >
                <span className="text-[#0077b6] font-semibold">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#03045e] mb-12">
            Project Gallery
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <img src={img2} className="rounded-3xl object-cover" />
            <img src={img3} className="rounded-3xl object-cover" />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-[#03045e] text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Planning a Similar Project?
          </h2>
          <p className="max-w-3xl mx-auto mb-10 opacity-90">
            Speak with our technical team to evaluate feasibility, materials,
            and structural systems for your site.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#03045e]
                       px-10 py-4 rounded-full font-semibold
                       hover:bg-[#caf0f8] transition"
          >
            Contact Technical Team
          </Link>
        </div>
      </section>

    </main>
  );
}
