import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ChevronDown, ArrowRight } from "lucide-react";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().min(10, "Message too short").required("Required"),
  service: Yup.string().required("Required"),
});

const serviceOptions = [
  "Branding Websites",
  "Websites & Web Apps",
  "Backend Engineering",
  "Online Consultation ($10/h)",
  "Other"
];

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    <form onSubmit={formik.handleSubmit} className="flex-1 flex flex-col space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-mono text-canvas-dark/60 dark:text-white/60">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            disabled={status === "sending"}
            className="input-base bg-canvas-light dark:bg-canvas-dark"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-error text-xs font-mono">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-mono text-canvas-dark/60 dark:text-white/60">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            disabled={status === "sending"}
            className="input-base bg-canvas-light dark:bg-canvas-dark"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-error text-xs font-mono">{formik.errors.email}</div>
          ) : null}
        </div>
      </div>

      <div className="space-y-2 relative">
        <label className="text-sm font-mono text-canvas-dark/60 dark:text-white/60">Service Inquiry</label>
        
        {/* Custom Dropdown Trigger */}
        <div 
          onClick={() => !status.includes('sending') && setIsDropdownOpen(!isDropdownOpen)}
          className={`input-base bg-canvas-light dark:bg-canvas-dark flex items-center justify-between cursor-pointer select-none ${isDropdownOpen ? 'border-electric ring-1 ring-electric' : ''}`}
        >
          <span className={formik.values.service ? '' : 'text-canvas-dark/40 dark:text-white/40'}>
            {formik.values.service || "Select a service..."}
          </span>
          <ChevronDown size={20} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-electric' : 'text-canvas-dark/40 dark:text-white/40'}`} />
        </div>
        
        {/* Hidden native input for Formik/Accessibility */}
        <input type="hidden" id="service" name="service" value={formik.values.service} />

        {/* Dropdown Menu */}
        <div className={`absolute top-full left-0 w-full mt-2 bg-white dark:bg-[#111] border border-canvas-dark/10 dark:border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden transition-all duration-300 origin-top ${isDropdownOpen ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'}`}>
          {serviceOptions.map((option) => (
            <div
              key={option}
              onClick={() => {
                formik.setFieldValue("service", option);
                setIsDropdownOpen(false);
              }}
              className={`px-5 py-4 cursor-pointer transition-colors duration-200 flex items-center justify-between ${formik.values.service === option ? 'bg-electric/10 text-electric font-medium' : 'hover:bg-canvas-dark/5 dark:hover:bg-white/5'}`}
            >
              {option}
            </div>
          ))}
        </div>

        {/* Click outside overlay */}
        {isDropdownOpen && (
          <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
        )}
      </div>

      <div className="space-y-2 flex flex-col flex-1">
        <label htmlFor="message" className="text-sm font-mono text-canvas-dark/60 dark:text-white/60">Project Details</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project, timeline, and budget..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          disabled={status === "sending"}
          className="input-base bg-canvas-light dark:bg-canvas-dark resize-none flex-1 min-h-25 py-3"
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="text-error text-xs font-mono">{formik.errors.message}</div>
        ) : null}
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
        <button 
          type="submit" 
          className="group relative inline-flex items-center justify-center w-full sm:w-auto gap-4 text-base md:text-lg font-bold uppercase tracking-widest text-canvas-dark dark:text-canvas-light disabled:opacity-50 overflow-hidden px-8 py-4 border border-canvas-dark/20 dark:border-canvas-light/20 rounded-xl hover:border-electric transition-colors duration-500"
          disabled={status === "sending"}
        >
          <div className="absolute inset-0 bg-electric translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </span>
          <span className="relative z-10 flex items-center justify-center">
            <ArrowRight className="text-canvas-dark dark:text-canvas-light group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
          </span>
        </button>

        {status === "success" && (
          <div className="text-success text-sm font-mono flex-1 text-center sm:text-left">
            Message sent successfully!
          </div>
        )}
        {status === "error" && (
          <div className="text-error text-sm font-mono flex-1 text-center sm:text-left">
            {errorMessage}
          </div>
        )}
      </div>

    </form>
  );
};

export default ContactForm;
