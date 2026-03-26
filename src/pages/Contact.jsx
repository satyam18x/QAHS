import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, ChevronUp } from 'lucide-react';

const Contact = () => {
   const [openFaq, setOpenFaq] = useState(0);
   const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
   });

   const handleChange = (e) => {
      const { name, id, value } = e.target;
      // Handle both select (no name) and input (with name/id)
      const fieldName = name || id || (e.target.tagName === 'SELECT' ? 'service' : '');
      if (fieldName) {
         setFormData(prev => ({ ...prev, [fieldName]: value }));
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      
      // Construct message for WhatsApp
      const text = `*New Website Inquiry*\n\n` +
                   `*Name:* ${formData.name}\n` +
                   `*Phone:* ${formData.phone}\n` +
                   `*Email:* ${formData.email || 'Not provided'}\n` +
                   `*Inquiry:* ${formData.service || 'General Inquiry'}\n\n` +
                   `*Message:*\n${formData.message}`;
      
      const whatsappUrl = `https://wa.me/919301444414?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
   };

   const faqs = [
// ... existing faqs ...
      { q: "What is the process to get a new hospital license?", a: "The process involves preparing a DPR, securing building plans, obtaining Fire and Pollution NOCs, and applying with the CMHO/Health Department. QHAS manages this entire lifecycle for you." },
      { q: "Do you provide services outside Madhya Pradesh?", a: "Yes, while we are headquartered in Jabalpur, MP, we handle hospital setups, NABH, and international patient coordination for clients across India." },
      { q: "How much time does NABH accreditation take?", a: "Entry-level NABH typically takes 3-6 months, while full accreditation can take 9-12 months depending on the hospital's current infrastructure and readiness." },
      { q: "Can you help with international patient visas?", a: "Absolutely. We issue medical invitation letters and assist patients from Bangladesh, Africa, and the Middle East with their medical visa processing." },
      { q: "Do you charge consultation fees for the first meeting?", a: "We offer a free initial assessment call to understand your requirements and outline how we can help before proceeding with a formal agreement." }
   ];

   return (
      <div className="contact-page">
         <PageHero
            title="Contact Us"
            subtitle="We are here to help you scale and secure your hospital"
            breadcrumb="Contact"
         />

         {/* I2. Contact Layout */}
         <section className="contact-section">
            <div className="container contact-grid">

               <div className="contact-details">
                  <span className="section-label">Get In Touch</span>
                  <h2>Let's Discuss Your Hospital's Future</h2>
                  <p className="lead mb-40">
                     Fill out the form or reach out directly. Our experts typically respond within 2-4 hours during business days.
                  </p>

                  <div className="info-cards">
                     <div className="info-card">
                        <div className="i-icon"><Phone size={24} /></div>
                        <div className="i-text">
                           <span>Call Us (24/7 Support)</span>
                           <strong>+91 9301444414</strong>
                        </div>
                     </div>
                     <div className="info-card">
                        <div className="i-icon"><Mail size={24} /></div>
                        <div className="i-text">
                           <span>Email Us</span>
                           <strong>quickhospital01@gmail.com</strong>
                        </div>
                     </div>
                     <div className="info-card">
                        <div className="i-icon"><MapPin size={24} /></div>
                        <div className="i-text">
                           <span>Head Office</span>
                           <strong>Jabalpur, Madhya Pradesh, India</strong>
                        </div>
                     </div>
                     <div className="info-card border-none">
                        <div className="i-icon"><Clock size={24} /></div>
                        <div className="i-text">
                           <span>Business Hours</span>
                           <strong>Mon - Sat: 10:00 AM - 7:00 PM</strong>
                        </div>
                     </div>
                  </div>

                  <div className="mt-40">
                     <hr className="divider-line" />
                     <h4 className="mt-20 mb-10">Follow Us</h4>
                     <div className="social-links-contact">
                        <a href="#" className="s-link">LinkedIn</a>
                        <a href="#" className="s-link">Facebook</a>
                        <a href="#" className="s-link">Twitter</a>
                     </div>
                  </div>
               </div>

               <div className="contact-form-wrapper">
                  <div className="card form-card">
                     <h3>Send Us a Message</h3>
                     <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                           <label>Full Name *</label>
                           <input 
                              type="text" 
                              name="name"
                              placeholder="Dr. John Doe" 
                              required 
                              value={formData.name}
                              onChange={handleChange}
                           />
                        </div>
                        <div className="form-row">
                           <div className="form-group">
                              <label>Phone Number *</label>
                              <input 
                                 type="tel" 
                                 name="phone"
                                 placeholder="+91 98765 43210" 
                                 required 
                                 value={formData.phone}
                                 onChange={handleChange}
                              />
                           </div>
                           <div className="form-group">
                              <label>Email Address</label>
                              <input 
                                 type="email" 
                                 name="email"
                                 placeholder="john@hospital.com" 
                                 value={formData.email}
                                 onChange={handleChange}
                              />
                           </div>
                        </div>
                        <div className="form-group">
                           <label>Inquiry Type *</label>
                           <select 
                              required 
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                           >
                              <option value="">Select a service</option>
                              <option value="Hospital Setup">Hospital Setup</option>
                              <option value="Licensing & Compliance">Licensing & Compliance</option>
                              <option value="NABH Accreditation">NABH Accreditation</option>
                              <option value="International Patients">International Patients</option>
                              <option value="Other Query">Other Query</option>
                           </select>
                        </div>
                        <div className="form-group">
                           <label>Message *</label>
                           <textarea 
                              rows="4" 
                              name="message"
                              placeholder="Tell us about your requirements..." 
                              required 
                              value={formData.message}
                              onChange={handleChange}
                           ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-full">
                           Send Request <Send size={18} />
                        </button>
                        <p className="form-note mt-10 text-center font-sm text-muted">
                           Your information is kept strictly confidential.
                        </p>
                     </form>
                  </div>
               </div>

            </div>
         </section>

         {/* I3. Google Map Embed placeholder */}
         <section className="map-section">
            <div className="map-placeholder">
               <div className="map-overlay">
                  <h3>QHAS Head Office</h3>
                  <p>Jabalpur, Madhya Pradesh</p>
                  <a
                     href="https://www.google.com/maps/search/?api=1&query=Gate+No.+04,+Beside+Gautam+IAS+Academy,+Sneh+Nagar+Road,+Jabalpur,+M.P."
                     target="_blank"
                     rel="noopener noreferrer"
                     className="btn btn-outline mt-10 btn-sm"
                     style={{ textDecoration: 'none', display: 'inline-block' }}
                  >
                     Get Directions
                  </a>
               </div>
            </div>
         </section>

         {/* I4. FAQs */}
         <section className="faq-section bg-light">
            <div className="container">
               <div className="section-header centered">
                  <h2>Frequently Asked Questions</h2>
                  <p className="lead">Clear answers to your hospital administration queries.</p>
               </div>

               <div className="faq-accordion">
                  {faqs.map((faq, i) => (
                     <div className={`faq-item card ${openFaq === i ? 'active' : ''}`} key={i}>
                        <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                           {faq.q}
                           <span className="faq-icon">
                              {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                           </span>
                        </button>
                        <div className="faq-answer" style={{ maxHeight: openFaq === i ? '200px' : '0' }}>
                           <div className="faq-inner">
                              {faq.a}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <style dangerouslySetInnerHTML={{
            __html: `
        .contact-section { padding: 100px 0; background: white; }
        .bg-light { background: var(--bg-light); padding: 100px 0; }
        
        .contact-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 80px; }
        
        .lead { font-size: 18px; color: var(--text-muted); line-height: 1.6; }
        .mb-40 { margin-bottom: 40px; }
        .mt-40 { margin-top: 40px; }
        .mt-20 { margin-top: 20px; }
        .mt-10 { margin-top: 10px; }
        .mb-10 { margin-bottom: 10px; }
        .w-full { width: 100%; justify-content: center; }
        .text-center { text-align: center; }
        .font-sm { font-size: 13px; }
        .text-muted { color: var(--text-muted); }
        .centered { text-align: center; margin-bottom: 60px; max-width: 600px; margin-left: auto; margin-right: auto; }

        .info-cards { display: flex; flex-direction: column; gap: 24px; }
        .info-card { display: flex; align-items: center; gap: 20px; padding-bottom: 24px; border-bottom: 1px dashed var(--border); }
        .info-card.border-none { border-bottom: none; padding-bottom: 0; }
        .i-icon { 
           width: 56px; height: 56px; background: rgba(26,126,181,0.08); 
           color: var(--primary); border-radius: 50%;
           display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .i-text span { display: block; font-size: 14px; color: var(--text-muted); margin-bottom: 4px; }
        .i-text strong { display: block; font-size: 18px; color: var(--text-dark); }

        .divider-line { border: none; border-top: 1px solid var(--border); margin: 0; }
        .social-links-contact { display: flex; gap: 16px; }
        .s-link { 
           background: var(--bg-card); padding: 8px 16px; border-radius: 20px; 
           font-size: 14px; font-weight: 600; color: var(--primary); transition: all 0.2s;
        }
        .s-link:hover { background: var(--primary); color: white; }

        .form-card { padding: 40px; border-top: 4px solid var(--accent-green); box-shadow: 0 20px 60px var(--shadow); }
        .form-card h3 { font-size: 24px; margin-bottom: 24px; }
        .contact-form { display: flex; flex-direction: column; gap: 20px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-group label { font-size: 14px; font-weight: 600; color: var(--text-dark); }
        .form-group input, .form-group select, .form-group textarea {
           padding: 14px 16px; border: 1px solid var(--border); border-radius: 8px;
           font-family: var(--font-body); font-size: 15px; outline: none; transition: border-color 0.2s;
           background: var(--bg-light);
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--primary); }

        .map-section { height: 400px; width: 100%; position: relative; }
        .map-placeholder {
           width: 100%; height: 100%; background: #E5E9EC;
           background-image: radial-gradient(#CED4DA 2px, transparent 2px);
           background-size: 30px 30px;
           display: flex; align-items: center; justify-content: center;
        }
        .map-overlay {
           background: white; padding: 24px 32px; border-radius: 12px;
           box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center;
        }
        .map-overlay h3 { margin-bottom: 8px; color: var(--primary); }
        .map-overlay p { color: var(--text-muted); font-size: 15px; }

        .faq-accordion { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; }
        .faq-item { overflow: hidden; transition: all 0.3s; border: 1px solid var(--border); }
        .faq-item.active { border-color: var(--primary); box-shadow: 0 10px 20px var(--shadow); }
        .faq-question {
           width: 100%; text-align: left; padding: 24px; background: none; border: none;
           display: flex; justify-content: space-between; align-items: center;
           font-family: var(--font-heading); font-size: 18px; font-weight: 600; cursor: pointer; color: var(--text-dark);
        }
        .faq-item.active .faq-question { color: var(--primary); }
        .faq-icon { color: var(--primary); flex-shrink: 0; margin-left: 20px; }
        .faq-answer { overflow: hidden; transition: max-height 0.3s ease-out; }
        .faq-inner { padding: 0 24px 24px; font-size: 16px; color: var(--text-muted); line-height: 1.6; }

        @media (max-width: 1024px) {
           .contact-grid { grid-template-columns: 1fr; gap: 60px; }
           .form-row { grid-template-columns: 1fr; }
        }
      ` }} />
      </div>
   );
};

export default Contact;
