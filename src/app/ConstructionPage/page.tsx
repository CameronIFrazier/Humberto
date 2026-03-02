// app/constructionPage/page.tsx
// Place this file at: app/constructionPage/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Services — dR CleaN House",
  description:
    "Full construction and remodeling services including bathroom, kitchen, exterior, flooring, painting, and more. Serving the Inland Empire, Orange County, and LA.",
};

// ─── NAV ────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-cream/80 border-b border-forest/5 px-8 md:px-16 py-5 flex items-center justify-between">
      <a href="/" className="font-display text-2xl font-bold text-forest tracking-tight">
        dR CleaN<em className="text-green-700 not-italic"> House</em>
      </a>
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-forest/70">
        <li><a href="#bathroom"  className="hover:text-forest transition-colors">Bathroom</a></li>
        <li><a href="#kitchen"   className="hover:text-forest transition-colors">Kitchen</a></li>
        <li><a href="#exterior"  className="hover:text-forest transition-colors">Exterior</a></li>
        <li><a href="#flooring"  className="hover:text-forest transition-colors">Flooring</a></li>
        <li>
          <a
            href="#contact"
            className="bg-forest text-cream px-5 py-2.5 rounded-full hover:bg-green-700 transition-colors"
          >
            Get a Quote
          </a>
        </li>
      </ul>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-forest px-8 md:px-16 pt-40 pb-24 relative overflow-hidden">
      <div className="absolute -right-40 -top-20 w-[500px] h-[500px] rounded-full bg-green-800/20 pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-[300px] h-[300px] rounded-full bg-mint/5 pointer-events-none" />

      <div className="relative z-10 max-w-3xl animate-fade-up">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-mint/60 hover:text-mint text-sm mb-8 transition-colors"
        >
          ← Back to Home
        </a>

        <div className="inline-flex items-center gap-2 bg-mint/10 text-mint text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-mint inline-block" />
          Construction &amp; Remodeling
        </div>

        <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-cream leading-[1.08] mb-6">
          Built right,<br />
          <em className="text-mint not-italic">built to last.</em>
        </h1>

        <p className="text-cream/55 text-lg leading-relaxed max-w-xl mb-10">
          From bathroom remodels to full exterior work — dR CleaN House handles it all.
          Talk to us for a quote on any service.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-mint text-forest px-8 py-4 rounded-full font-semibold hover:bg-cream hover:-translate-y-0.5 transition-all"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:9005096815"
            className="border border-cream/20 text-cream px-8 py-4 rounded-full font-medium hover:border-mint hover:text-mint transition-all hover:-translate-y-0.5"
          >
            📞 (900) 509-6815
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION COMPONENT ───────────────────────────────────────────────────────
function ServiceSection({
  id,
  icon,
  title,
  subtitle,
  bg,
  categories,
}: {
  id: string;
  icon: string;
  title: string;
  subtitle?: string;
  bg: "cream" | "white";
  categories: { heading: string; items: string[] }[];
}) {
  return (
    <section
      id={id}
      className={`px-8 md:px-16 py-20 border-b border-forest/5 ${bg === "white" ? "bg-white" : "bg-cream"}`}
    >
      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 rounded-2xl bg-forest flex items-center justify-center text-2xl flex-shrink-0">
          {icon}
        </div>
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-forest">{title}</h2>
          {subtitle && <p className="text-forest/50 text-sm mt-1">{subtitle}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map(({ heading, items }) => (
          <div
            key={heading}
            className="bg-white border border-forest/5 rounded-2xl p-6 hover:shadow-lg hover:shadow-forest/6 hover:-translate-y-1 transition-all duration-200"
          >
            <h3 className="font-display text-lg font-bold text-forest mb-4 pb-3 border-b border-forest/8">
              {heading}
            </h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-forest/65">
                  <span className="text-green-700 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CONTACT FORM ────────────────────────────────────────────────────────────
function ContactForm() {
  return (
    <section id="contact" className="bg-forest px-8 md:px-16 py-24 relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-mint/5 pointer-events-none" />

      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center max-w-5xl">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight mb-4">
            Talk to us for a{" "}
            <em className="text-mint not-italic">quote.</em>
          </h2>
          <p className="text-cream/50 leading-relaxed mb-8">
            Get in contact via email with us here. Please allow up to 24 hours
            for dR CleaN House to respond.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="tel:9005096815"
              className="flex items-center gap-3 text-cream/70 hover:text-mint transition-colors text-sm"
            >
              <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">📞</span>
              (900) 509-6815
            </a>
            <a
              href="mailto:dRCleanHouse12@gmail.com"
              className="flex items-center gap-3 text-cream/70 hover:text-mint transition-colors text-sm"
            >
              <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">✉️</span>
              dRCleanHouse12@gmail.com
            </a>
          </div>
        </div>

        {/* Right — form */}
        <form
          action={`mailto:dRCleanHouse12@gmail.com`}
          method="POST"
          encType="text/plain"
          className="bg-white/5 border border-white/8 rounded-3xl p-8 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-cream/40">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Smith"
              required
              className="bg-white/8 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder:text-cream/25 text-sm focus:outline-none focus:border-mint/40 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-cream/40">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="bg-white/8 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder:text-cream/25 text-sm focus:outline-none focus:border-mint/40 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-cream/40">
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              required
              rows={5}
              className="bg-white/8 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder:text-cream/25 text-sm focus:outline-none focus:border-mint/40 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-green-700 text-cream px-6 py-4 rounded-xl font-semibold hover:bg-mint hover:text-forest transition-all hover:-translate-y-0.5 text-sm mt-2"
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-forest px-8 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap border-t border-white/5">
      <a href="/" className="font-display text-xl font-bold text-cream">
        dR CleaN<em className="text-mint not-italic"> House</em>
      </a>
      <ul className="flex gap-7 text-sm">
        {[
          { label: "Home", href: "/" },
          { label: "Bathroom", href: "#bathroom" },
          { label: "Kitchen", href: "#kitchen" },
          { label: "Exterior", href: "#exterior" },
          { label: "Contact", href: "#contact" },
        ].map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="text-cream/45 hover:text-mint transition-colors">{label}</a>
          </li>
        ))}
      </ul>
      <p className="text-cream/30 text-sm">© 2025 dR CleaN House</p>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function ConstructionPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <ServiceSection
          id="bathroom"
          icon="🛁"
          title="Bathroom"
          subtitle="Full bathroom remodeling and installation services"
          bg="cream"
          categories={[
            {
              heading: "Remodeling",
              items: ["Complete Remodeling", "Tub Installation", "Shower Installation", "Vanity"],
            },
            {
              heading: "Fixtures & Hardware",
              items: ["Fixtures", "Faucet", "Shower Valve", "Sink", "Exhaust Fan"],
            },
            {
              heading: "Cabinetry & Storage",
              items: ["Medicine Cabinet", "Mirrors", "Light Fixtures"],
            },
            {
              heading: "Surfaces",
              items: ["Shower Pans", "Toilets"],
            },
          ]}
        />

        <ServiceSection
          id="kitchen"
          icon="🍳"
          title="Kitchen"
          subtitle="Complete kitchen remodeling from cabinets to countertops"
          bg="white"
          categories={[
            {
              heading: "Cabinetry & Surfaces",
              items: ["Cabinets", "Counter Tops", "Back Splash", "Tile"],
            },
            {
              heading: "Plumbing & Fixtures",
              items: ["Sink", "Faucet", "Garbage Disposal"],
            },
            {
              heading: "Electrical & Lighting",
              items: ["Lighting", "Electrical", "Hood"],
            },
            {
              heading: "Flooring",
              items: ["Flooring"],
            },
          ]}
        />

        <ServiceSection
          id="exterior"
          icon="🏡"
          title="Exterior"
          subtitle="Curb appeal and outdoor improvements"
          bg="cream"
          categories={[
            {
              heading: "Structure & Surfaces",
              items: ["Paint", "Stucco", "Siding", "Windows", "Doors", "Decks"],
            },
            {
              heading: "Hardscape",
              items: ["Cement", "Pavers", "Retaining Wall", "Patio Covers"],
            },
            {
              heading: "Landscaping",
              items: ["Artificial Grass", "Irrigation", "Fence", "Weed Maintenance"],
            },
            {
              heading: "Electrical & Lighting",
              items: ["Lighting", "Outlets", "Low Voltage Lighting"],
            },
          ]}
        />

        <ServiceSection
          id="flooring"
          icon="🪵"
          title="Flooring &amp; Extras"
          subtitle="Flooring installation and additional home services"
          bg="white"
          categories={[
            {
              heading: "Flooring",
              items: ["Laminate", "Vinyl", "Carpet", "Tile"],
            },
            {
              heading: "Extras",
              items: ["Furniture Assembly", "Move Appliances", "Install Appliances", "Junk Removal"],
            },
            {
              heading: "Paint, Trim & Casing",
              items: ["Laminate", "Vinyl", "Carpet", "Tile"],
            },
            {
              heading: "Trim & Casing",
              items: ["Baseboard", "Door and Door", "Crown Molding", "Custom Cabinets"],
            },
          ]}
        />

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}