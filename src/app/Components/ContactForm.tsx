"use client";

// Drop this into your page.tsx, replacing the existing Contact function.
// Make sure to add "use client"; at the very top of page.tsx as well.

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_96k8sdb",   // your EmailJS Service ID
        "template_d1wtsbq",  // your EmailJS Template ID
        form.current,
        "AYkFkTDxuKDOC1kLr" // your public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("✅ Message sent! We'll get back to you within 24 hours.");
          setSending(false);
          form.current?.reset();
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setStatus("❌ Failed to send message. Please try again or email us directly.");
          setSending(false);
        }
      );
  };

  return (
    <section id="contact" className="bg-forest px-8 md:px-16 py-24 relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-mint/5 pointer-events-none" />

      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center max-w-5xl">
        {/* Left — info */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight mb-4">
            Ready for a{" "}
            <em className="text-mint not-italic">spotless space?</em>
          </h2>
          <p className="text-cream/50 leading-relaxed mb-8">
            Send us a message and we'll get back to you within 24 hours.
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
          ref={form}
          onSubmit={sendEmail}
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
            disabled={sending}
            className="bg-green-700 text-cream px-6 py-4 rounded-xl font-semibold hover:bg-mint hover:text-forest transition-all hover:-translate-y-0.5 text-sm mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center text-sm text-cream/70 mt-1">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}