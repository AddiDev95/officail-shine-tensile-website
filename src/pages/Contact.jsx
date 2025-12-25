import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="font-sans">
      {/* ================= HERO ================= */}
      <section className="relative py-32 bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/img/contact-hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Build Something Iconic
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10">
            Connect with Shine Tensile Structure to discuss your project, request a quote, or explore custom tensile solutions.
          </p>
          <a
            href="https://wa.me/919654270195"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0077b6] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform duration-300"
          >
            Contact on WhatsApp
          </a>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#03045e] mb-12 text-center">
            Send Us a Message
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 shadow-lg rounded-3xl p-10 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0077b6] outline-none transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0077b6] outline-none transition"
                required
              />
            </div>

            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0077b6] outline-none transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0077b6] outline-none transition"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#03045e] text-white font-semibold px-6 py-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ================= OFFICE CONTACT ================= */}
      <section className="py-24 bg-[#f8fbff]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h3 className="text-2xl font-bold text-[#03045e]">Office Contact</h3>
          <p className="text-gray-600 leading-relaxed">
            Shine Tensile Structure<br />
            Delhi, India<br />
            Email: shinestructure470@gmail.com<br />
            Phone: +91 96542 70195
          </p>

          <div className="flex justify-center gap-6 mt-6">
         
            <a
  href="https://wa.me/919654270195"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    if (window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "WhatsApp Contact Button",
      });
    }
  }}
  className="bg-[#25D366] text-white px-8 py-4 rounded-xl"
>
  Chat on WhatsApp
</a>


            <a
              href="mailto:shinestructure470@gmail.com"
              className="bg-[#0077b6] text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition transform"
            >
              Email
            </a>
            <a
              href="tel:+919654270195"
              className="bg-[#03045e] text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition transform"
            >
              Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
