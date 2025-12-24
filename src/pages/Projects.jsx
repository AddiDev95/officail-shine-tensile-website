import { useState } from "react";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Auto-generate categories
  const categories = [
    "All",
    ...new Set(projectsData.map((p) => p.category)),
  ];

  // Filter logic
  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <main className="bg-white font-sans">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#03045e] to-[#0077b6] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Projects
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90 text-white">
            A curated portfolio of tensile membrane and architectural fabric
            structures, crafted with engineering precision and design excellence.
          </p>
        </div>
      </section>

      {/* ================= FILTERS ================= */}
      <section className="py-10 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-4 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                activeFilter === cat
                  ? "bg-[#0077b6] text-white"
                  : "bg-white text-[#0077b6] border border-[#0077b6]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ================= PROJECT GRID ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group"
            >
              <div className="overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-5">
                <span className="text-xs uppercase tracking-widest text-[#0077b6] font-semibold">
                  {project.category}
                </span>

                <h3 className="mt-2 text-xl font-semibold text-[#03045e]">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden relative animate-fadeIn">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black"
            >
              ✕
            </button>

            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="w-full h-[360px] object-cover"
            />

            <div className="p-8">
              <span className="text-sm uppercase tracking-widest text-[#0077b6] font-semibold">
                {selectedProject.category}
              </span>

              <h2 className="mt-2 text-3xl font-bold text-[#03045e]">
                {selectedProject.title}
              </h2>

              <p className="mt-1 text-gray-600">
                {selectedProject.location}
              </p>

              <p className="mt-6 text-gray-700 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-[#0077b6] to-[#03045e] text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Create Something Iconic
          </h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90 text-white">
            Connect with our team to discuss your architectural or tensile
            structure project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#03045e] px-10 py-4 rounded-xl font-semibold hover:bg-[#caf0f8] transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
