"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_96k8sdb",   // replace with your EmailJS Service ID
        "template_d1wtsbq",  // replace with your EmailJS Template ID
        form.current,
        "AYkFkTDxuKDOC1kLr" // public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("Message sent successfully!");
          setSending(false);
          form.current.reset(); // clear form
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setStatus("Failed to send message.");
          setSending(false);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-4 w-full max-w-md mx-auto p-4 bg-gray-300 text-black"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="p-2 border rounded "
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="p-2 border rounded "
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="p-2 border rounded"
      />
      <button
        type="submit"
        disabled={sending}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {sending ? "Sending..." : "Send Email"}
      </button>
      {status && <p className="text-center mt-2">{status}</p>}
    </form>
  );
}
