import { Link } from "react-router-dom";

import roofing from "../assets/img/serviceMain.jpg";
import membrane from "../assets/img/ar.hero.jpg";
import shade from "../assets/img/service3.jpg";
import pavilion from "../assets/img/service4.jpg";
import industrial from "../assets/img/service5.jpg";
import parking from "../assets/img/service5.jpg";

export default function Services() {
  const services = [
    {
      title: "Custom Tensile Roofing",
      desc: "High-performance tensile roofing systems designed for durability, aesthetics, and long-term performance.",
      img: roofing,
      link: "/services/custom-tensile-roofing",
    },
    {
      title: "Architectural Membrane Structures",
      desc: "Lightweight yet strong membrane structures for iconic architectural applications.",
      img: membrane,
      link: "/services/architectural-membranes",
    },
    {
      title: "Outdoor Shade & Canopies",
      desc: "Functional and elegant shade solutions for public and private environments.",
      img: shade,
      link: "/services/outdoor-shade-solutions",
    },
    {
      title: "Event & Pavilion Structures",
      desc: "Temporary and permanent tensile structures for exhibitions, events, and public spaces.",
      img: pavilion,
      link: "/services/event-pavilion-structures",
    },
    {
      title: "Industrial Fabric Covers",
      desc: "Heavy-duty fabric structures engineered for industrial protection and efficiency.",
      img: industrial,
      link: "/services/industrial-fabric-covers",
    },
    {
      title: "Car Parking & Walkway Shades",
      desc: "UV-protected tensile shading solutions for parking areas and pedestrian pathways.",
      img: parking,
      link: "/services/car-parking-walkway-shades",
    },
  ];

  return (
    <main className="font-sans bg-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-r from-[#03045e] to-[#0077b6] text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our Services
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90 leading-relaxed text-white">
            We provide innovative tensile membrane and architectural fabric
            solutions engineered for performance, beauty, and longevity.
          </p>
        </div>
      </section>

     {/* ================= SERVICES – SPLIT LAYOUT ================= */}
<section className="py-28 bg-[#f8fbff]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="max-w-3xl mb-20">
      <span className="text-[#0077b6] uppercase tracking-widest text-sm font-semibold">
        Our Expertise
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-[#03045e] mt-4">
        Engineered Tensile Solutions
      </h2>
      <p className="mt-6 text-gray-600 leading-relaxed">
        We work closely with architects, developers, and consultants to design
        and deliver tensile membrane systems that balance aesthetics,
        performance, and longevity.
      </p>
    </div>

    {/* Layout */}
    <div className="grid lg:grid-cols-2 gap-20 items-start">

      {/* LEFT – SERVICE LIST */}
      <div className="space-y-10">
        {services.map((service, idx) => (
          <Link
            key={idx}
            to={service.link}
            className="group block border-l-4 border-transparent hover:border-[#0077b6] pl-6 transition"
          >
            <h3 className="text-xl font-semibold text-[#03045e] group-hover:text-[#0077b6] transition">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 max-w-lg leading-relaxed">
              {service.desc}
            </p>
            <span className="inline-block mt-3 text-sm font-semibold text-[#0077b6]">
              Explore Service →
            </span>
          </Link>
        ))}
      </div>

      {/* RIGHT – VISUAL */}
      <div className="relative">
        <div className="rounded-3xl overflow-hidden shadow-2xl bg-white">
          <img
            src={services[0].img}
            alt="Tensile Structures"
            className="w-full h-[460px] object-cover"
          />
        </div>

        {/* Accent */}
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#caf0f8] rounded-3xl -z-10" />
      </div>

    </div>
  </div>
</section>

    </main>
  );
}
