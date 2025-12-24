import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import hero1 from "../assets/img/mainHero/main1.jpg";
import hero2 from "../assets/img/mainHero/main2.jpg";
import hero3 from "../assets/img/mainHero/main3.jpg";
import hero4 from "../assets/img/mainHero/main4.jpg";
import hero5 from "../assets/img/mainHero/main5.png";

import service1 from "../assets/img/cust.hero.jpg";
import service2 from "../assets/img/ar.hero.jpg";
import service3 from "../assets/img/out.hero.jpg";
import service4 from "../assets/img/event.hero.jpg";
import service5 from "../assets/img/indu.hero.jpg";

const Home = () => {
  const heroImages = [hero1, hero2, hero3, hero4, hero5];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const theme = {
    primary: "#03045e",
    secondary: "#0077b6",
    accent: "#00b4d8",
    light: "#90e0ef",
    highlight: "#caf0f8",
    textLight: "#ffffff",
  };

  const services = [
    {
      img: service1,
      title: "Custom Tensile Roofing",
      desc: "High-performance tensile roofing solutions engineered for durability and aesthetics.",
      link: "/services/custom-tensile-roofing",
    },
    {
      img: service2,
      title: "Architectural Membranes",
      desc: "Innovative membrane structures designed for modern architectural needs.",
      link: "/services/architectural-membranes",
    },
    {
      img: service3,
      title: "Outdoor Shade Solutions",
      desc: "Stylish and functional shade structures for public and commercial spaces.",
      link: "/services/outdoor-shade-solutions",
    },
    {
      img: service4,
      title: "Event & Pavilion Structures",
      desc: "Temporary and permanent tensile structures for events and exhibitions.",
      link: "/services/event-pavilion-structures",
    },
    {
      img: service5,
      title: "Industrial Fabric Covers",
      desc: "Robust fabric covers designed for industrial protection and longevity.",
      link: "/services/industrial-fabric-covers",
    },
  ];

  /* ================= TESTIMONIAL SLIDER ================= */
const testimonials = [
    {
      quote:
        "Shine Tensile Structure delivered an exceptional tensile roofing solution that perfectly balanced aesthetics, durability, and functionality.",
      name: "Rajesh Mehta",
      role: "Project Manager, Commercial Infrastructure",
    },
    {
      quote:
        "Outstanding design execution and professional coordination. The tensile structure elevated both performance and visual appeal.",
      name: "Anita Sharma",
      role: "Architect & Design Consultant",
    },
    {
      quote:
        "From planning to completion, the team exceeded expectations. Truly world-class tensile architecture solutions.",
      name: "Vikram Patel",
      role: "Director, Urban Development Projects",
    },
  ];
  
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  

  return (
    <main className="font-sans">

      {/* HERO SLIDER */}
      <section style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
        {heroImages.map((img, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: index === currentSlide ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          />
        ))}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,119,182,0.75), rgba(3,4,94,0.85))",
            zIndex: 1,
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ color: theme.highlight, fontSize: "3rem", fontWeight: 700 }}>
              High-Performance Tensile Membrane Structures
            </h1>
            <p style={{ marginTop: 16, color: theme.highlight }}>
              Innovative, durable, and visually striking architectural fabric solutions.
            </p>
          </div>
        </div>
      </section>

     {/* INTRO SECTION */}
<section
  style={{
    padding: "100px 0",
    background: theme.textLight,
  }}
>
  <div
    className="container"
    style={{
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "60px",
      alignItems: "center",
    }}
  >
    {/* TEXT CONTENT */}
    <div>
      <span
        style={{
          color: theme.secondary,
          fontWeight: 600,
          letterSpacing: "1px",
          textTransform: "uppercase",
          fontSize: "0.9rem",
        }}
      >
        About Our Expertise
      </span>

      <h2
        style={{
          color: theme.primary,
          fontSize: "2.5rem",
          lineHeight: 1.2,
          marginTop: "12px",
          fontWeight: 700,
        }}
      >
        Tension Fabric & Tensile Membrane Structures
      </h2>

      <p
        style={{
          marginTop: "24px",
          fontSize: "1.05rem",
          lineHeight: 1.8,
          color: "#333",
        }}
      >
        Shine Tensile Structure is a leading provider of innovative tensile
        membrane and architectural fabric solutions, delivering visually
        striking, durable, and cost-effective structures for modern spaces.
        Our expertise spans across commercial, industrial, and public
        infrastructure projects, where design excellence meets engineering
        precision.
      </p>

      <p
        style={{
          marginTop: "16px",
          fontSize: "1.05rem",
          lineHeight: 1.8,
          color: "#333",
        }}
      >
        We specialize in creating lightweight yet high-performance tensile
        systems that enhance aesthetics while providing superior weather
        resistance and structural integrity. From concept and design to
        fabrication and installation, our team ensures every project meets
        the highest standards of quality, safety, and innovation.
      </p>

      <div
        style={{
          marginTop: "36px",
          display: "flex",
          gap: "20px",
        }}
      >
        <button
          style={{
            backgroundColor: theme.secondary,
            color: theme.textLight,
            padding: "14px 28px",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer",
            border: "none",
            transition: "all 0.3s ease",
          }}
        >
          Learn More
        </button>

        <button
          style={{
            backgroundColor: "transparent",
            color: theme.secondary,
            padding: "14px 28px",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer",
            border: `2px solid ${theme.secondary}`,
            transition: "all 0.3s ease",
          }}
        >
          Contact Us
        </button>
      </div>
    </div>

    {/* IMAGE */}
    <div style={{ position: "relative" }}>
      <img
        src={hero1}
        alt="Tensile structure"
        style={{
          width: "100%",
          borderRadius: "16px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
        }}
      />

      {/* Decorative Accent */}
      <div
        style={{
          position: "absolute",
          bottom: "-20px",
          left: "-20px",
          width: "120px",
          height: "120px",
          background: theme.light,
          borderRadius: "16px",
          zIndex: -1,
        }}
      />
    </div>
  </div>
</section>

      {/* SERVICES SECTION (UPDATED) */}
      <section style={{ padding: "100px 0", background: theme.light }}>
        <div className="container">

          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            <span
              style={{
                color: theme.secondary,
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontSize: "0.9rem",
              }}
            >
              What We Offer
            </span>

            <h2
              style={{
                color: theme.primary,
                fontSize: "2.4rem",
                marginTop: "12px",
                fontWeight: 700,
              }}
            >
              Our Services
            </h2>

            <p
              style={{
                marginTop: "16px",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "#333",
              }}
            >
              We deliver comprehensive tensile structure solutions combining
              innovative design, engineering excellence, and premium materials.
            </p>
          </div>

          <div
            style={{
              marginTop: "60px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "30px",
            }}
          >
            {services.map((service, i) => (
              <Link
                key={i}
                to={service.link}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    height: "100%",
                    background: theme.highlight,
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                    transition: "all 0.35s ease",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 45px rgba(0,0,0,0.15)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 30px rgba(0,0,0,0.08)";
                  }}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />

                  <div style={{ padding: "24px" }}>
                    <h4
                      style={{
                        color: theme.primary,
                        fontSize: "1.2rem",
                        fontWeight: 600,
                      }}
                    >
                      {service.title}
                    </h4>

                    <p
                      style={{
                        marginTop: "10px",
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        color: "#444",
                      }}
                    >
                      {service.desc}
                    </p>

                    <span
                      style={{
                        display: "inline-block",
                        marginTop: "14px",
                        color: theme.secondary,
                        fontWeight: 600,
                      }}
                    >
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

     {/* ================= TESTIMONIALS SECTION ================= */}
<section
  style={{
    padding: "100px 0",
    background: `linear-gradient(180deg, ${theme.secondary}, ${theme.primary})`,
  }}
>
  <div className="container">

    {/* Heading */}
    <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
      <span
        style={{
          color: theme.highlight,
          fontWeight: 600,
          letterSpacing: "1px",
          textTransform: "uppercase",
          fontSize: "0.9rem",
          opacity: 0.9,
        }}
      >
        Client Feedback
      </span>

      <h2
        style={{
          marginTop: "12px",
          fontSize: "2.4rem",
          fontWeight: 700,
          color: theme.highlight,
        }}
      >
        What Our Clients Say
      </h2>
    </div>

    {/* Slider */}
    <div
      style={{
        marginTop: "60px",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        minHeight: "260px",
      }}
    >
      {testimonials.map((t, index) => (
        <div
          key={index}
          style={{
            position: index === activeTestimonial ? "relative" : "absolute",
            opacity: index === activeTestimonial ? 1 : 0,
            transition: "opacity 0.8s ease-in-out",
            maxWidth: "800px",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            padding: "40px",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.8,
              fontStyle: "italic",
              color: theme.highlight,
            }}
          >
            “{t.quote}”
          </p>

          <div style={{ marginTop: "28px" }}>
            <h4 style={{ fontWeight: 600, color: theme.highlight }}>
              {t.name}
            </h4>
            <span style={{ opacity: 0.85, color: theme.highlight }}>
              {t.role}
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* Dots */}
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {testimonials.map((_, i) => (
        <span
          key={i}
          onClick={() => setActiveTestimonial(i)}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background:
              i === activeTestimonial
                ? theme.highlight
                : "rgba(255,255,255,0.4)",
            cursor: "pointer",
          }}
        />
      ))}
    </div>

  </div>
</section>

    </main>
  );
};

export default Home;
