import React from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SectionHeader from './SectionHeader';
import { Mail, MapPin, Linkedin, Github, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import Reveal from './Reveal';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().min(10, 'Message too short').required('Required'),
});

const Contact: React.FC = () => {
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { resetForm }) => {
      setStatus('sending');
      setErrorMessage('');

      try {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_luknsgi';
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!templateId || !publicKey) {
          throw new Error('EmailJS configuration missing. Please check .env.local');
        }

        /* @ts-ignore */
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
            reply_to: values.email,
          },
          publicKey
        );

        setStatus('success');
        resetForm();
        setTimeout(() => setStatus('idle'), 5000);
      } catch (error: any) {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setErrorMessage(error.text || error.message || 'Failed to send message');
        setTimeout(() => setStatus('idle'), 5000);
      }
    },
  });

  return (
    <section id="contact" className="py-16 md:py-0 bg-canvas-light text-canvas-dark relative flex-1 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto md:px-12 lg:px-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          <div className="text-center md:text-left px-4 md:px-0">
            <Reveal>
              <SectionHeader 
                title="Get in Touch" 
                subtitle="Start a Conversation" 
                number="04" 
              />
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-canvas-dark/80 mb-12">
                Currently seeking new opportunities in Backend Engineering. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.3}>
                <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
                  <div className="p-3 bg-white shadow-sm ring-1 ring-canvas-dark/5 border border-canvas-dark/10 rounded-full text-electric">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-canvas-dark/60 uppercase tracking-wider">Phone</p>
                    <a href="tel:+201201024880" className="text-canvas-dark/80 hover:text-electric transition-colors">
                      +20 1201024880
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="p-3 bg-white shadow-sm ring-1 ring-canvas-dark/5 border border-canvas-dark/10 rounded-full text-electric">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-canvas-dark/60 uppercase tracking-wider">Email</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-canvas-dark/80 hover:text-electric transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
              </Reveal>

               <Reveal delay={0.4}>
                 <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="p-3 bg-white shadow-sm ring-1 ring-canvas-dark/5 border border-canvas-dark/10 rounded-full text-electric">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-canvas-dark/60 uppercase tracking-wider">Location</p>
                    <p className="text-canvas-dark/80">Egypt</p>
                  </div>
                </div>
              </Reveal>

               <Reveal delay={0.5}>
                 <div className="flex items-center justify-center md:justify-start space-x-4 pt-8">
                    <a 
                      href="https://w.app/kx9pjb" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white shadow-sm ring-1 ring-canvas-dark/5 border border-canvas-dark/10 hover:bg-green-900/30 text-canvas-dark/80 hover:text-green-400 rounded-lg transition-all"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="lucide lucide-message-circle"
                      >
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 .5-.5V9m3 1a.5.5 0 0 0 .5-.5V9m3 1a.5.5 0 0 0 .5-.5V9" stroke="none" />
                      </svg>
                    </a>
                    <a 
                      href={`https://${PERSONAL_INFO.linkedin}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white shadow-sm ring-1 ring-canvas-dark/5 border border-canvas-dark/10 hover:bg-blue-900/30 text-canvas-dark/80 hover:text-blue-400 rounded-lg transition-all"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a 
                      href={`https://${PERSONAL_INFO.github}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white shadow-sm ring-1 ring-canvas-dark/5 border border-canvas-dark/10 hover:bg-canvas-dark/90 text-canvas-dark/80 hover:text-electric rounded-lg transition-all"
                    >
                      <Github size={24} />
                    </a>
                 </div>
               </Reveal>
            </div>
          </div>

          <Reveal delay={0.4}>
            <div className="bg-canvas-light p-4 sm:p-8 sm:border sm:border-canvas-dark/10 sm:shadow-2xl relative">
               <div className="absolute top-0 right-0 w-20 h-20 bg-electric/10 rounded-bl-[4rem]"></div>

               <form onSubmit={formik.handleSubmit} className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-mono text-canvas-dark/60">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      disabled={status === 'sending'}
                      className="w-full bg-white shadow-sm ring-1 ring-canvas-dark/5 border border-canvas-dark/20 p-3 text-canvas-dark/80 focus:outline-none focus:border-electric transition-colors disabled:opacity-50"
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-red-500 text-xs">{formik.errors.name}</div>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-mono text-canvas-dark/60">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      disabled={status === 'sending'}
                      className="w-full bg-white shadow-sm ring-1 ring-canvas-dark/5 border border-canvas-dark/20 p-3 text-canvas-dark/80 focus:outline-none focus:border-electric transition-colors disabled:opacity-50"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-xs">{formik.errors.email}</div>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-mono text-canvas-dark/60">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                      disabled={status === 'sending'}
                      className="w-full bg-white shadow-sm ring-1 ring-canvas-dark/5 border border-canvas-dark/20 p-3 text-canvas-dark/80 focus:outline-none focus:border-electric transition-colors resize-none disabled:opacity-50"
                    />
                    {formik.touched.message && formik.errors.message ? (
                      <div className="text-red-500 text-xs">{formik.errors.message}</div>
                    ) : null}
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="w-full py-4 bg-canvas-dark text-canvas-light font-bold hover:bg-electric hover:ring-electric transition-colors duration-300 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'success' && (
                    <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-500 rounded text-sm text-center">
                      Message sent successfully!
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded text-sm text-center">
                      {errorMessage}
                    </div>
                  )}
               </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;