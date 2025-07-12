import React, { useState, useEffect } from "react";
import { CONTACT_INFO } from "../constants";
import SectionTitle from "./SectionTitle";
import { useEmailService } from "../hooks/useEmailService";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const { sendEmail, isSending, isSent, error, statusMessage } = useEmailService();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      return;
    }

    // Add honeypot field for basic bot protection
    if ((e.target as HTMLFormElement).botField.value) {
      return;
    }

    await sendEmail({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });

    // Clear form only on successful submission
    if (isSent) {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTouched({});
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="bg-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/50">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                Let's Build Something Amazing
              </h3>
              <div className="space-y-6">
                {CONTACT_INFO.map((info) => (
                  <div key={info.title} className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#00ff9d]/10 flex-shrink-0 flex items-center justify-center text-xl text-[#00ff9d]">
                      <i className={info.icon}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">
                        {info.title}
                      </h4>
                      <p className="text-slate-400 break-all">{info.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                  placeholder="Your Name"
                  className={`w-full px-5 py-3 bg-slate-800/50 border ${touched.name && !formData.name
                    ? "border-red-400"
                    : "border-white/10"
                    } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00ff9d] transition-all`}
                />
                {touched.name && !formData.name && (
                  <p className="text-red-400 text-sm">Name is required</p>
                )}

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() =>
                    setTouched((prev) => ({ ...prev, email: true }))
                  }
                  placeholder="Your Email"
                  className={`w-full px-5 py-3 bg-slate-800/50 border ${touched.email && !formData.email
                    ? "border-red-400"
                    : "border-white/10"
                    } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00ff9d] transition-all`}
                />
                {touched.email && !formData.email && (
                  <p className="text-red-400 text-sm">
                    Valid email is required
                  </p>
                )}

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={() =>
                    setTouched((prev) => ({ ...prev, subject: true }))
                  }
                  placeholder="Subject"
                  className={`w-full px-5 py-3 bg-slate-800/50 border ${touched.subject && !formData.subject
                    ? "border-red-400"
                    : "border-white/10"
                    } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00ff9d] transition-all`}
                />
                {touched.subject && !formData.subject && (
                  <p className="text-red-400 text-sm">Subject is required</p>
                )}

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() =>
                    setTouched((prev) => ({ ...prev, message: true }))
                  }
                  placeholder="Your Message"
                  rows={5}
                  className={`w-full px-5 py-3 bg-slate-800/50 border ${touched.message && !formData.message
                    ? "border-red-400"
                    : "border-white/10"
                    } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00ff9d] transition-all resize-none`}
                ></textarea>
                {touched.message && !formData.message && (
                  <p className="text-red-400 text-sm">Message is required</p>
                )}

                {/* Honeypot field */}
                <input
                  type="text"
                  name="botField"
                  className="hidden"
                  autoComplete="off"
                />

                                <button
                  type="submit"
                  disabled={isSending}
                  className={`inline-block text-white font-semibold text-lg py-3 px-10 rounded-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] ${isSending
                    ? "opacity-75 cursor-not-allowed"
                    : "hover:shadow-[0_10px_30px_rgba(0,255,157,0.4)] hover:-translate-y-1"
                  } transition-all duration-300 ease-in-out`}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>

                {/* Status Message Display */}
                {statusMessage && (
                  <div className={`mt-4 p-3 rounded-lg text-center ${
                    statusMessage.includes("Success")
                      ? "bg-green-500/20 border border-green-500/30 text-green-400"
                      : statusMessage.includes("Error") || statusMessage.includes("Configuration")
                      ? "bg-red-500/20 border border-red-500/30 text-red-400"
                      : "bg-blue-500/20 border border-blue-500/30 text-blue-400"
                  }`}>
                    {statusMessage}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
