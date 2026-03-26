"use client";

// app/page.tsx

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

// ─── NAV ────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-cream/80 border-b border-forest/5 px-8 md:px-16 py-4 flex items-center justify-between">
      <Image src="/images/image.png" alt="dR CleaN House Logo" width={80} height={80} className="object-contain" />
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-forest/70">
        <li><a href="#cleaning" className="hover:text-forest transition-colors">Cleaning</a></li>
        <li><a href="#construction" className="hover:text-forest transition-colors">Other Services</a></li>
        <li><a href="#why" className="hover:text-forest transition-colors">Why Us</a></li>
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
    <section className="min-h-screen grid md:grid-cols-2 items-center gap-16 px-8 md:px-16 pt-32 pb-20 bg-cream relative overflow-hidden">
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-mint to-sage/20 opacity-60 animate-pulse pointer-events-none" />

      <div className="relative z-10 animate-fade-up">
        

        <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-forest leading-[1.08] mb-6">
          A cleaner space,<br />
          a{" "}
          <em className="text-green-700 not-italic">cleaner mind.</em>
        </h1>

        <p className="text-forest/60 text-lg leading-relaxed max-w-md mb-4">
          Professional cleaning and construction services serving the
          Inland Empire, Orange County, and Los Angeles areas.
        </p>

        <p className="text-forest/50 text-sm mb-10">
          📍 Inland Empire · Orange County · Los Angeles
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="tel:9095096815"
            className="bg-forest text-cream px-8 py-4 rounded-full font-medium hover:bg-green-700 transition-all hover:-translate-y-0.5 flex items-center gap-3"
          >
            <Image src="/images/smartphone-call.png" alt="call" width={18} height={18} className="invert" />
            Call (909) 509-6815
          </a>
          <a
            href="#cleaning"
            className="border border-forest/25 text-forest px-8 py-4 rounded-full font-medium hover:border-green-700 hover:text-green-700 transition-all hover:-translate-y-0.5"
          >
            Our Services
          </a>
        </div>
      </div>

      <div className="relative z-10 hidden md:flex justify-center animate-fade-up [animation-delay:200ms]">
        <div className="relative w-[360px]">
          <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-forest/10">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-700 mb-5">Why Choose Us</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "2",    label: "Service categories" },
                { num: "10+",  label: "Types of services" },
                { num: "3",    label: "Regions served" },
                { num: "100%", label: "Satisfaction focus" },
              ].map(({ num, label }) => (
                <div key={label} className="bg-sage/10 rounded-2xl p-5">
                  <div className="font-display text-3xl font-bold text-forest">{num}</div>
                  <div className="text-xs text-forest/50 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-mint flex items-center justify-center text-2xl animate-float shadow-lg">✨</div>
          <div className="absolute -bottom-5 -left-5 bg-forest text-cream rounded-full px-5 py-3 text-sm font-medium flex items-center gap-3 shadow-xl animate-float [animation-delay:1s]">
            <span className="text-yellow-400 tracking-tight">★★★★★</span>
            <span className="text-cream/80">"Absolutely spotless!"</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CLEANING SERVICES ───────────────────────────────────────────────────────
const cleaningServices = [
  {
    icon: "🧹",
    title: "Regular Cleanings",
    desc: "Keep your home consistently fresh with routine cleaning services tailored to your schedule. We handle dusting, vacuuming, mopping, and surface cleaning to maintain a healthy living space.",
    features: ["Dusting, vacuuming & mopping", "Surface cleaning throughout", "Flexible weekly or bi-weekly plans", "Consistent, reliable team"],
  },
  {
    icon: "🫧",
    title: "Deep Cleaning",
    desc: "A thorough top-to-bottom cleaning that targets built-up dirt, grime, and hard-to-reach areas. Ideal for seasonal refreshes or homes that need extra attention.",
    features: ["Full kitchen & bathroom sanitization", "Baseboards, vents & ceiling fans", "Behind appliances & furniture", "Ideal for seasonal refreshes"],
  },
  {
    icon: "📦",
    title: "Move In / Move Out",
    desc: "Ensure a spotless start or a stress-free move with detailed cleaning designed for empty homes. We prepare spaces for new occupants or help you leave your place in pristine condition.",
    features: ["Full interior top-to-bottom clean", "Inside cabinets & closets", "Appliances inside and out", "Ready for new occupants"],
  },
  {
    icon: "🏗️",
    title: "Post Construction",
    desc: "Remove dust, debris, and construction residue after renovations or new builds. Our team leaves your space clean, polished, and ready to enjoy.",
    features: ["Construction dust removal", "Window & surface polishing", "Debris and residue cleanup", "Move-in ready finish"],
  },
];

function CleaningServices() {
  return (
    <section id="cleaning" className="bg-forest px-8 md:px-16 py-24 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-green-800/20 pointer-events-none" />
      <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-4">House Cleaning Services</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-cream max-w-md leading-tight mb-16">
        Cleaning services <em className="text-mint not-italic">tailored</em> for every home
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10">
        {cleaningServices.map(({ icon, title, desc, features }) => (
          <div key={title} className="group bg-white/5 border border-white/8 rounded-3xl p-8 hover:bg-mint/10 hover:border-mint/25 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green-600 to-mint scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <span className="text-4xl mb-5 block">{icon}</span>
            <h3 className="font-display text-xl font-bold text-cream mb-3">{title}</h3>
            <p className="text-cream/50 text-sm leading-relaxed mb-5">{desc}</p>
            <ul className="space-y-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-cream/65">
                  <span className="text-mint font-bold mt-0.5">✓</span>{f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── OTHER SERVICES ──────────────────────────────────────────────────────────
const constructionServices = [
  { icon: "🎨", title: "Painting",                desc: "Professional interior and exterior painting services that refresh and protect your space. We deliver clean lines, even coverage, and long-lasting results." },
  { icon: "🏠", title: "Popcorn Ceiling Removal", desc: "Safe and efficient popcorn ceiling removal to modernize your home. We leave behind a smooth, clean finish ready for paint or texture." },
  { icon: "🔨", title: "Construction Services", desc: "We offer a range of construction services depending on availability. Give us a call first to discuss your project and confirm whether we can take it on — we'll let you know what's possible!" },
];

function ConstructionServices() {
  return (
    <section id="construction" className="bg-cream px-8 md:px-16 py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-green-700 mb-4">Other Services</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-forest max-w-lg leading-tight mb-16">
        Other services <em className="text-green-700 not-italic">and more...</em>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {constructionServices.map(({ icon, title, desc }) => (
          <div key={title} className="group bg-white border border-forest/5 rounded-3xl p-7 hover:shadow-xl hover:shadow-forest/8 hover:-translate-y-1.5 transition-all duration-300">
            <span className="text-4xl mb-4 block">{icon}</span>
            <h3 className="font-display text-lg font-bold text-forest mb-2">{title}</h3>
            <p className="text-forest/50 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 bg-mint/40 border border-green-700/15 rounded-3xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <span className="text-3xl">🔨</span>
          <p className="text-forest/70 text-sm leading-relaxed">
            <strong className="text-forest">And much more!</strong> Get in contact to discuss your specific needs and see how we can help!
          </p>
        </div>
        <a href="#contact" className="whitespace-nowrap bg-forest text-cream px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-700 hover:-translate-y-0.5 transition-all flex-shrink-0">
          Get In Touch →
        </a>
      </div>
    </section>
  );
}

// ─── WHY US ──────────────────────────────────────────────────────────────────
const perks = [
  { icon: "📍", title: "Serving 3 Regions",        desc: "Proudly serving the Inland Empire, Orange County, and Los Angeles areas." },
  { icon: "🧹", title: "Full-Service Cleaning",     desc: "From regular maintenance to deep cleans and post-construction — we do it all." },
  { icon: "🔨", title: "Other Services & More...", desc: "One company for all your needs. Painting, popcorn ceiling removal, and much more." },
  { icon: "📅", title: "Up to 24hr Response",       desc: "Reach out via email and expect a response within 24 hours. We make it easy." },
];

function WhyUs() {
  return (
    <section id="why" className="px-8 md:px-16 py-24 grid md:grid-cols-2 gap-20 items-center bg-forest">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-4">Why Choose dR CleaN House</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight mb-6">
          Clean you can <em className="text-mint not-italic">count on</em>
        </h2>
        <p className="text-cream/55 leading-relaxed mb-10 max-w-md">
          Whether you need your home cleaned or fully remodeled, dR CleaN House brings professionalism and care to every job — big or small.
        </p>
        <div className="space-y-4">
          {perks.map(({ icon, title, desc }) => (
            <div key={title} className="flex gap-5 items-start bg-white/5 border border-white/8 rounded-2xl p-5 hover:bg-mint/10 hover:border-mint/20 hover:translate-x-1.5 transition-all duration-200">
              <div className="w-12 h-12 rounded-2xl bg-mint/20 flex items-center justify-center text-xl flex-shrink-0">{icon}</div>
              <div>
                <p className="font-medium text-cream text-sm mb-1">{title}</p>
                <p className="text-cream/45 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center relative">
        <span className="font-display text-[11rem] font-bold text-cream/[0.03] select-none absolute">IE</span>
        <div className="w-80 h-80 rounded-full bg-gradient-to-br from-mint to-sage/30 flex flex-col items-center justify-center relative z-10 shadow-2xl shadow-black/20">
          <span className="text-5xl mb-3">🏡</span>
          <span className="font-display text-2xl font-bold text-forest text-center px-6 leading-tight">Inland Empire &amp; Beyond</span>
          <span className="text-forest/55 mt-2 text-sm">OC · LA · IE</span>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setSending(true);
    setStatus("");
    emailjs
      .sendForm("service_96k8sdb", "template_d1wtsbq", form.current, "AYkFkTDxuKDOC1kLr")
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("✅ Message sent! We'll get back to you within 24 hours.");
          setSending(false);
          form.current?.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          setStatus("❌ Failed to send. Please email us directly.");
          setSending(false);
        }
      );
  };

  return (
    <section id="contact" className="bg-forest px-8 md:px-16 py-24 relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-mint/5 pointer-events-none" />
      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center max-w-5xl">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight mb-4">
            Ready for a <em className="text-mint not-italic">spotless space?</em>
          </h2>
          <p className="text-cream/50 leading-relaxed mb-8">
            Get in contact via email with us here. Please allow up to 24 hours for dR CleaN House to respond.
          </p>
          <div className="flex flex-col gap-3">
            <a href="tel:9095096815" className="flex items-center gap-3 text-cream/70 hover:text-mint transition-colors text-sm">
              <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                <Image src="/images/smartphone-call.png" alt="call" width={18} height={18} className="invert opacity-70" />
              </span>
              (909) 509-6815
            </a>
            <a href="mailto:dRCleaNhouse12@gmail.com" className="flex items-center gap-3 text-cream/70 hover:text-mint transition-colors text-sm">
              <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                <Image src="/images/mailicon.png" alt="email" width={18} height={18} className="invert opacity-70" />
              </span>
              dRCleaNhouse12@gmail.com
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="bg-white/5 border border-white/8 rounded-3xl p-8 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-cream/40">Your Name</label>
            <input type="text" name="name" placeholder="John Smith" required className="bg-white/8 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder:text-cream/25 text-sm focus:outline-none focus:border-mint/40 transition-colors" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-cream/40">Your Email</label>
            <input type="email" name="email" placeholder="you@example.com" required className="bg-white/8 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder:text-cream/25 text-sm focus:outline-none focus:border-mint/40 transition-colors" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-widest text-cream/40">Your Message</label>
            <textarea name="message" placeholder="Tell us about your project..." required rows={5} className="bg-white/8 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder:text-cream/25 text-sm focus:outline-none focus:border-mint/40 transition-colors resize-none" />
          </div>
          <button type="submit" disabled={sending} className="bg-green-700 text-cream px-6 py-4 rounded-xl font-semibold hover:bg-mint hover:text-forest transition-all hover:-translate-y-0.5 text-sm mt-2 disabled:opacity-50 disabled:cursor-not-allowed">
            {sending ? "Sending..." : "Send Email"}
          </button>
          {status && <p className="text-center text-sm text-cream/70 mt-1">{status}</p>}
        </form>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-forest px-8 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap">
      <Image src="/images/image.png" alt="dR CleaN House" width={60} height={60} className="object-contain" />
      <div className="flex flex-col items-center md:items-start gap-1">
        <a href="tel:9095096815" className="flex items-center gap-2 text-cream/60 hover:text-mint transition-colors text-sm">
          <Image src="/images/smartphone-call.png" alt="call" width={14} height={14} className="invert opacity-60" />
          (909) 509-6815
        </a>
        <a href="mailto:dRCleaNhouse12@gmail.com" className="text-cream/60 hover:text-mint transition-colors text-sm">
          dRCleaNhouse12@gmail.com
        </a>
      </div>
      <ul className="flex gap-7 text-sm">
        {[
          { label: "Cleaning", href: "#cleaning" },
          { label: "Other Services", href: "#construction" },
          { label: "Why Us", href: "#why" },
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
export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CleaningServices />
        <ConstructionServices />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}