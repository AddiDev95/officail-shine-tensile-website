import { Link } from "react-router-dom";

export default function ProjectPage({ project }) {
  return (
    <main className="bg-white font-sans">

      {/* ================= HERO ================= */}
      <section className="relative h-[75vh]">
        <img
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-end pb-20 text-white">
          <div>
            <span className="uppercase tracking-widest text-sm opacity-80">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              {project.title}
            </h1>
            <p className="mt-4 text-lg opacity-90">
              {project.location}
            </p>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-16">

          {/* TEXT */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-[#03045e] mb-6">
              Project Overview
            </h2>

            {project.overview.map((para, idx) => (
              <p key={idx} className="text-gray-600 leading-relaxed mb-6">
                {para}
              </p>
            ))}
          </div>

          {/* META */}
          <div className="bg-[#f8fbff] p-8 rounded-3xl">
            <h3 className="text-lg font-semibold text-[#03045e] mb-6">
              Project Details
            </h3>

            <ul className="space-y-4 text-sm text-gray-700">
              <li><strong>Location:</strong> {project.location}</li>
              <li><strong>Year:</strong> {project.year}</li>
              <li><strong>Fabric:</strong> {project.fabric}</li>
              <li><strong>Structure:</strong> {project.structure}</li>
              <li><strong>Area Covered:</strong> {project.area}</li>
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
            {project.highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl text-center shadow-sm"
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
            {project.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${project.title} ${idx + 1}`}
                className="rounded-3xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-[#03045e] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Planning a Similar Project?
        </h2>
        <p className="max-w-3xl mx-auto mb-10 opacity-90">
          Let’s discuss materials, spans, and feasibility for your site.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-[#03045e]
                     px-10 py-4 rounded-full font-semibold
                     hover:bg-[#caf0f8] transition"
        >
          Contact Technical Team
        </Link>
      </section>

    </main>
  );
}
