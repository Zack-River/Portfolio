import React from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import SectionHeader from "./SectionHeader";
import { Mail, MapPin, Linkedin, Github, Phone, Briefcase, Facebook, Globe } from "lucide-react";
import { PERSONAL_INFO, SITE_CONTENT } from "../constants";
import Reveal from "./Reveal";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().min(10, "Message too short").required("Required"),
  service: Yup.string().required("Required"),
});

const ContactForm = () => {
  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      service: "Online Consultation",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { resetForm }) => {
      setStatus("sending");
      setErrorMessage("");

      try {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_luknsgi";
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!templateId || !publicKey) {
          throw new Error("EmailJS configuration missing. Please check .env.local");
        }

        /* @ts-ignore */
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: values.name,
            from_email: values.email,
            service: values.service,
            message: values.message,
            reply_to: values.email,
          },
          publicKey,
        );

        setStatus("success");
        resetForm();
        setTimeout(() => setStatus("idle"), 5000);
      } catch (error: any) {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setErrorMessage(error.text || error.message || "Failed to send message");
        setTimeout(() => setStatus("idle"), 5000);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-4 md:space-y-6 relative z-10 flex flex-col flex-1"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-mono text-canvas-dark/60 dark:text-white">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          disabled={status === "sending"}
          className="input-base"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-error text-xs">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-mono text-canvas-dark/60 dark:text-white">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          disabled={status === "sending"}
          className="input-base"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-error text-xs">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-mono text-canvas-dark/60 dark:text-white">
          Service Inquiry
        </label>
        <select
          id="service"
          name="service"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.service}
          disabled={status === "sending"}
          className="input-base cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%230a0a0b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] dark:bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-position-[right_1rem_center] bg-size-[1em]"
        >
          <option value="Branding Websites">Branding Websites</option>
          <option value="Websites & Web Apps">Websites & Web Apps</option>
          <option value="Online Consultation">Online Consultation ($10/h)</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="space-y-2 flex flex-col flex-1">
        <label htmlFor="message" className="text-sm font-mono text-canvas-dark/60 dark:text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          disabled={status === "sending"}
          className="input-base resize-none flex-1"
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="text-error text-xs">{formik.errors.message}</div>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <div className="p-3 bg-success/10 border border-success/20 text-success rounded-xl text-sm text-center">
          Message sent successfully!
        </div>
      )}
      {status === "error" && (
        <div className="p-3 bg-error/10 border border-error/20 text-error rounded-xl text-sm text-center">
          {errorMessage}
        </div>
      )}
    </form>
  );
};

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-canvas-light dark:bg-canvas-dark text-canvas-dark dark:text-canvas-light relative flex-1 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start">
          <div className="text-center md:text-left h-full">
            <Reveal>
              <SectionHeader
                title="Get in Touch"
                subtitle="Start a Conversation"
              />
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-secondary mb-12">
                Currently seeking new opportunities in Backend Engineering.
                Whether you have a question or just want to say hi, I'll try my
                best to get back to you!
              </p>
            </Reveal>

            <div className="flex justify-center md:justify-start">
              <div className="space-y-6 inline-block text-left">
              <Reveal delay={0.3}>
                <div className="flex items-center justify-start space-x-4 mb-6">
                  <div className="p-3 bg-white dark:bg-white/5 shadow-sm ring-1 ring-canvas-dark/5 dark:ring-white/10 border border-canvas-dark/10 dark:border-white/10 rounded-xl text-electric">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-canvas-dark/60 dark:text-white/60 uppercase tracking-wider">
                      Phone
                    </p>
                    <a
                      href="tel:+201201024880"
                      className="text-canvas-dark/80 dark:text-white/90 hover:text-electric transition-colors"
                    >
                      +20 1201024880
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex items-center justify-start space-x-4 mb-6">
                  <div className="p-3 bg-white dark:bg-white/5 shadow-sm ring-1 ring-canvas-dark/5 dark:ring-white/10 border border-canvas-dark/10 dark:border-white/10 rounded-xl text-electric">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-canvas-dark/60 dark:text-white/60 uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-canvas-dark/80 dark:text-white/90 hover:text-electric transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex items-center justify-start space-x-4 mb-6">
                  <div className="p-3 bg-white dark:bg-white/5 shadow-sm ring-1 ring-canvas-dark/5 dark:ring-white/10 border border-canvas-dark/10 dark:border-white/10 rounded-xl text-electric">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-canvas-dark/60 dark:text-white/60 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-canvas-dark/80 dark:text-white/90">Qalubiya, Egypt</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="flex items-center justify-start gap-3 pt-4 flex-wrap">
                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${PERSONAL_INFO.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-canvas-dark/15 dark:border-white/15 bg-canvas-dark/5 dark:bg-white/8 text-canvas-dark/70 dark:text-canvas-light/70 hover:border-green-500/60 hover:bg-green-500/10 hover:text-green-500 dark:hover:border-green-400/60 dark:hover:bg-green-400/10 dark:hover:text-green-400 hover:shadow-[0_0_12px_rgba(34,197,94,0.3)] transition-all duration-200"
                    aria-label="WhatsApp"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href={`https://${PERSONAL_INFO.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-canvas-dark/15 dark:border-white/15 bg-canvas-dark/5 dark:bg-white/8 text-canvas-dark/70 dark:text-canvas-light/70 hover:border-electric/60 hover:bg-electric/10 hover:text-electric dark:hover:border-electric/60 dark:hover:bg-electric/10 dark:hover:text-electric hover:shadow-[0_0_12px_rgba(180,255,0,0.25)] transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={22} />
                  </a>
                  {/* GitHub */}
                  <a
                    href={`https://${PERSONAL_INFO.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-canvas-dark/15 dark:border-white/15 bg-canvas-dark/5 dark:bg-white/8 text-canvas-dark/70 dark:text-canvas-light/70 hover:border-white/50 hover:bg-white/10 hover:text-canvas-dark dark:hover:border-white/50 dark:hover:bg-white/15 dark:hover:text-white hover:shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <Github size={22} />
                  </a>
                  {/* Mostaql */}
                  <a
                    href="https://mostaql.com/u/ZackRiver"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-canvas-dark/15 dark:border-white/15 bg-canvas-dark/5 dark:bg-white/8 text-canvas-dark/70 dark:text-canvas-light/70 hover:border-electric/60 hover:bg-electric/10 hover:text-electric dark:hover:border-electric/60 dark:hover:bg-electric/10 dark:hover:text-electric hover:shadow-[0_0_12px_rgba(180,255,0,0.25)] transition-all duration-200"
                    aria-label="Mostaql"
                    title="Mostaql"
                  >
                    <Briefcase size={22} />
                  </a>
                  {/* Facebook */}
                  <a
                    href={`https://${PERSONAL_INFO.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-canvas-dark/15 dark:border-white/15 bg-canvas-dark/5 dark:bg-white/8 text-canvas-dark/70 dark:text-canvas-light/70 hover:border-[#1877F2]/60 hover:bg-[#1877F2]/10 hover:text-[#1877F2] dark:hover:border-[#1877F2]/60 dark:hover:bg-[#1877F2]/10 dark:hover:text-[#1877F2] hover:shadow-[0_0_12px_rgba(24,119,242,0.3)] transition-all duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook size={22} />
                  </a>
                  {/* Website */}
                  <a
                    href={`https://${PERSONAL_INFO.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-canvas-dark/15 dark:border-white/15 bg-canvas-dark/5 dark:bg-white/8 text-canvas-dark/70 dark:text-canvas-light/70 hover:border-electric/60 hover:bg-electric/10 hover:text-electric dark:hover:border-electric/60 dark:hover:bg-electric/10 dark:hover:text-electric hover:shadow-[0_0_12px_rgba(180,255,0,0.25)] transition-all duration-200"
                    aria-label="Website"
                  >
                    <Globe size={22} />
                  </a>
                </div>
              </Reveal>
            </div>
            </div>
          </div>

          <Reveal delay={0.4} className="h-full flex flex-col w-full max-w-85 md:max-w-md mx-auto lg:ml-auto">
            <div className="h-full bg-white dark:bg-electric/4 p-5 md:p-8 rounded-2xl border border-canvas-dark/10 dark:border-electric/15 shadow-md relative flex flex-col hover:dark:border-electric/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-electric/10 rounded-bl-[4rem]"></div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
