import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Phone, CheckCircle, Award, Users, Globe } from 'lucide-react';

// Using generated image paths
const IMAGES = {
  hero: '/src/assets/images/hero_doctor_admin.png',
  setup: '/src/assets/images/hospital_setup_consultancy.png',
  international: '/src/assets/images/international_patient_care.png'
};

const Home = () => {
  return (
    <div className="home-page">
      {/* C1. Hero Section */}
      <section className="hero">
        <div className="hero-content container">
          <div className="hero-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hero-badge"
            >
              ✦ Trusted by 100+ Hospitals
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Your Hospital Admin <br />
              <span className="accent-text">& Compliance Partner</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="hero-sub"
            >
              End-to-end hospital setup, licensing, compliance & international patient coordination — all under one roof.
            </motion.p>

            <p className="hero-support">
              Let us handle the paperwork. You focus on patient care.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="hero-ctas"
            >
              <a href="/contact" className="btn btn-ghost btn-lg">Get Started <ChevronRight size={20} /></a>
              <a href="/services" className="hero-text-link">Our Services</a>
            </motion.div>

            {/* Floating Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, type: 'spring' }}
              viewport={{ once: true }}
              className="hero-float-card"
            >
              <span>📞 24/7 Support</span>
              <strong>+91 9301444414</strong>
            </motion.div>
          </div>

          <div className="hero-right">
            <div className="hero-image-wrap">
              <img src={IMAGES.hero} alt="Professional Hospital Administrator" className="hero-img" />
            </div>
          </div>
        </div>


      </section>

      {/* C2. Trust Indicator Bar */}
      <div className="trust-bar">
        <div className="container trust-flex">
          <div className="trust-item">✦ NABH Accreditation Experts</div>
          <div className="trust-item">✦ Govt. Registered Firm</div>
          <div className="trust-item">✦ 100+ Hospitals Served</div>
          <div className="trust-item">✦ Jabalpur HQ | PAN India</div>
          <div className="trust-item">✦ Compliance Specialists</div>
        </div>
      </div>

      {/* C3. About Preview */}
      <section className="about-preview">
        <div className="container grid-2">
          <div className="about-text">
            <span className="section-label">About QHAS</span>
            <h2>India's Trusted Hospital Administration Partner</h2>
            <div className="divider"></div>
            <p>
              Quick Hospital Administrative Services (QHAS) is a specialized healthcare consultancy firm headquartered in Jabalpur, Madhya Pradesh. We provide comprehensive administrative, legal, and compliance solutions to hospitals and healthcare institutions across India and globally.
            </p>
            <p>
              We simplify complex hospital processes — from initial setup and government approvals to NABH accreditation and international patient coordination — with expertise, speed, and complete transparency.
            </p>
            <div className="highlight-list">
              <div className="highlight-item">
                <CheckCircle size={20} className="icon" />
                <span>Strong government liaison with key departments</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={20} className="icon" />
                <span>End-to-end support from planning to certification</span>
              </div>
            </div>
            <a href="/about" className="btn btn-outline">Learn About Us <ChevronRight size={18} /></a>
          </div>
          <div className="about-stats-grid">
            <div className="stat-box card">
              <strong>100+</strong>
              <span>Hospitals Supported</span>
            </div>
            <div className="stat-box card accent">
              <strong>10+</strong>
              <span>Years Exp.</span>
            </div>
            <div className="stat-box card accent">
              <strong>PAN India</strong>
              <span>Service</span>
            </div>
            <div className="stat-box card">
              <strong>24/7</strong>
              <span>Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* C4. Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-label">What We Do</span>
            <h2>Everything Your Hospital Needs, Under One Roof</h2>
          </div>

          <div className="services-grid">
            {[
              { icon: "🏛️", title: "Govt. Registrations & Renewals", desc: "Annual registrations, license renewals, and department follow-ups handled end-to-end." },
              { icon: "🏥", title: "Hospital Licensing & Approvals", desc: "Complete hospital license processing — new applications and renewals with government departments." },
              { icon: "🔥", title: "Health, Fire & Pollution NOCs", desc: "Fire NOC, Pollution NOC, Health Department & Municipal Corporation approvals." },
              { icon: "⭐", title: "NABH Accreditation Consultancy", desc: "Gap analysis, SOP documentation, audits, and full accreditation support." },
              { icon: "📄", title: "Documentation & Liaison Work", desc: "Legal documentation, affidavits, government correspondence, and department coordination." },
              { icon: "🔬", title: "Medical Equipment Procurement", desc: "ICU monitors, OT lights, ventilators, and diagnostic equipment at competitive prices." },
              { icon: "🌍", title: "International Patient Coordination", desc: "End-to-end support for global patients — visa, travel, treatment coordination, and follow-up." },
              { icon: "🏗️", title: "Hospital Setup Consultancy", desc: "DPR, infrastructure planning, licensing, and complete new hospital setup assistance." },
              { icon: "✅", title: "Compliance Management", desc: "Stay legally compliant with ongoing support for all government and regulatory requirements." }
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card card"
              >
                <div className="service-icon-wrap">
                  <span className="icon-main">{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href="/services" className="learn-more">Learn More <ChevronRight size={14} /></a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* C5. Why Choose Us */}
      <section className="why-choose">
        <div className="container grid-2">
          <div className="why-image">
            <div className="image-wrap">
              <img src={IMAGES.setup} alt="Hospital Setup Consultancy" className="rounded-img" />
            </div>
          </div>
          <div className="why-text">
            <span className="section-label">Why QHAS</span>
            <h2>The Partner Hospitals Rely On</h2>

            <div className="feature-list">
              {[
                { title: "Strong Government Liaison", desc: "Direct relationships with key government departments for faster approvals and fewer rejections.", icon: <Award size={24} /> },
                { title: "100+ Hospitals Successfully Supported", desc: "Proven track record across Jabalpur, MP, and beyond — from clinics to multi-specialty.", icon: <Users size={24} /> },
                { title: "Fast & Reliable Execution", desc: "We prioritize speed without compromising accuracy, quality, or legal integrity.", icon: <CheckCircle size={24} /> },
                { title: "Transparent Pricing", desc: "No hidden charges. Clear deliverables, honest timelines, and straightforward communication.", icon: <Award size={24} /> },
                { title: "Local & National Expertise", desc: "Deep roots in Jabalpur with the capability to serve institutions across India.", icon: <Globe size={24} /> },
                { title: "End-to-End Support", desc: "From hospital planning to ongoing compliance — we stay with you throughout.", icon: <CheckCircle size={24} /> }
              ].map((f, i) => (
                <div key={i} className="feature-item">
                  <div className="f-icon">{f.icon}</div>
                  <div className="f-content">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* C6. How It Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header centered light">
            <h2>How We Work</h2>
            <p>Simple steps, seamless execution</p>
          </div>

          <div className="timeline">
            {[
              { step: "01", title: "Planning & DPR", desc: "We assess requirements and prepare a detailed project report." },
              { step: "02", title: "Design & Infra", desc: "Architectural liaison, space planning, and layout consultation." },
              { step: "03", title: "Licensing & NOCs", desc: "Full government documentation, submissions, and approvals." },
              { step: "04", title: "Equipment Setup", desc: "Procurement of certified medical equipment through trusted vendors." },
              { step: "05", title: "Compliance & Go-Live", desc: "Final certifications, compliance sign-off, and operational launch." }
            ].map((step, index) => (
              <div key={index} className="timeline-item">
                <div className="step-number">{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C7. Achievements */}
      <section className="achievements">
        <div className="container achievement-grid">
          {[
            { num: "100+", label: "Hospitals Supported" },
            { num: "10+", label: "Years Experience" },
            { num: "7+", label: "Countries Served" },
            { num: "100%", label: "Compliance Rate" }
          ].map((stat, i) => (
            <div key={i} className="stat-card">
              <strong className="count-num">{stat.num}</strong>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* C10. Footer Preview Strip */}
      <div className="footer-strip">
        <div className="container strip-flex">
          <div className="strip-text">
            <h3>Have questions? We're just a call away.</h3>
            <p>+91 9301444414  |  quickhospital01@gmail.com</p>
          </div>
          <a href="/contact" className="btn btn-white">Get Free Consultation</a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hero {
          height: calc(100vh - 165px);
          min-height: 600px;
          background: var(--hero-gradient);
          position: relative;
          color: white;
          overflow: hidden;
          padding: 40px 0 0;
          display: flex;
          flex-direction: column;
        }
        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 40px;
          flex: 1;
        }
        .hero-left {
          margin-left: -6vw;
          position: relative;
          z-index: 5;
        }
        .hero-badge {
          display: inline-block;
          background: rgba(255,255,255,0.1);
          padding: 6px 16px;
          border-radius: 30px;
          font-size: 14px;
          margin-bottom: 24px;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .hero h1 {
          font-size: 64px;
          line-height: 1.1;
          margin-bottom: 24px;
        }
        .hero h1 .accent-text {
          color: #82D9A1;
        }
        .hero-sub {
          font-size: 20px;
          opacity: 0.9;
          max-width: 540px;
          margin-bottom: 8px;
        }
        .hero-support {
          font-style: italic;
          opacity: 0.7;
          font-size: 16px;
          margin-bottom: 40px;
        }
        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .hero-text-link {
          font-weight: 600;
          border-bottom: 2px solid white;
        }
        .hero-float-card {
          background: white;
          color: var(--text-dark);
          padding: 10px 16px;
          border-radius: 12px;
          display: inline-flex;
          flex-direction: column;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
          margin-top: 10px;
          transform: rotate(-2deg);
        }
        .hero-float-card span { font-size: 13px; color: var(--text-muted); }
        
        .hero-image-wrap {
          height: 100%;
          max-height: 550px;
          min-height: 400px;
          position: relative;
          display: flex;
          align-items: center;
          margin-right: -10vw;
          transform: scale(1.15);
          transform-origin: right center;
        }
        .hero-img {
          width: 100%;
          max-height: 100%;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        .hero-stats {
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255,255,255,0.2);
          padding: 24px 0;
          margin-top: 30px;
        }
        .stats-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .stat-item { text-align: center; }
        .stat-item strong { display: block; font-size: 28px; font-family: var(--font-accent); }
        .stat-item span { font-size: 14px; opacity: 0.8; }
        .stat-divider { width: 1px; height: 40px; background: rgba(255,255,255,0.2); }

        .trust-bar {
          background: white;
          border-bottom: 1px solid var(--border);
          padding: 20px 0;
        }
        .trust-flex {
          display: flex;
          justify-content: space-between;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 14px;
        }

        .grid-2 { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; align-items: center; }
        .about-text p { margin-bottom: 20px; font-size: 17px; color: var(--text-muted); }
        .highlight-list { margin: 30px 0 40px; }
        .highlight-item { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .highlight-item .icon { color: var(--accent-green); }
        .highlight-item span { font-weight: 600; color: var(--text-dark); }

        .about-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .stat-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          text-align: center;
        }
        .stat-box strong { font-size: 36px; color: var(--primary); font-family: var(--font-accent); }
        .stat-box.accent strong { color: var(--accent-green); }
        .stat-box span { font-size: 14px; color: var(--text-muted); margin-top: 8px; font-weight: 500; }

        .services-section { background: var(--bg-light); }
        .centered { text-align: center; margin-bottom: 60px; max-width: 600px; margin-left: auto; margin-right: auto; }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .service-card {
          border-top: 3px solid var(--primary);
          padding: 40px 32px;
        }
        .service-card:hover { border-top-color: var(--accent-green); }
        .service-icon-wrap {
          width: 64px;
          height: 64px;
          background: rgba(26,126,181,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          font-size: 32px;
        }
        .service-card h3 { font-size: 18px; margin-bottom: 12px; }
        .service-card p { font-size: 15px; color: var(--text-muted); margin-bottom: 20px; line-height: 1.5; }
        .learn-more { color: var(--primary); font-weight: 600; font-size: 14px; display: flex; align-items: center; gap: 4px; }

        .why-choose { background: white; }
        .rounded-img { width: 100%; border-radius: 20px; box-shadow: 0 10px 30px var(--shadow); }
        .feature-list { display: flex; flex-direction: column; gap: 32px; }
        .feature-item { display: flex; gap: 20px; padding-bottom: 32px; border-bottom: 1px dashed var(--border); }
        .feature-item:last-child { border-bottom: none; }
        .f-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          flex-shrink: 0;
        }
        .f-content h4 { font-size: 17px; margin-bottom: 4px; }
        .f-content p { font-size: 15px; color: var(--text-muted); margin: 0; }

        .how-it-works { background: var(--hero-gradient); color: white; }
        .section-header.light h2 { font-size: 40px; margin-bottom: 12px; }
        .section-header.light p { opacity: 0.8; }
        .timeline {
          display: flex;
          justify-content: space-between;
          position: relative;
          padding-top: 40px;
        }
        .timeline::after {
          content: '';
          position: absolute;
          top: 72px;
          left: 5%;
          right: 5%;
          height: 2px;
          background: rgba(255,255,255,0.2);
          border-style: dashed;
          z-index: 1;
        }
        .timeline-item {
          text-align: center;
          flex: 1;
          position: relative;
          z-index: 2;
          padding: 0 10px;
        }
        .step-number {
          width: 64px;
          height: 64px;
          background: #0E5A8A; /* Solid background to cover the line */
          border: 2px solid rgba(255,255,255,0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-family: var(--font-accent);
          font-weight: 700;
          font-size: 24px;
          position: relative; /* Ensure it respects z-index */
          z-index: 5; /* Higher than the line (which is 1) */
        }
        .timeline-item h4 { font-size: 16px; margin-bottom: 8px; }
        .timeline-item p { font-size: 13px; opacity: 0.75; line-height: 1.4; }

        .achievements { background: white; padding: 60px 0; }
        .achievement-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .stat-card {
          text-align: center;
          padding: 40px 20px;
          border-right: 1px solid var(--border);
        }
        .stat-card:last-child { border-right: none; }
        .count-num { display: block; font-size: 52px; color: var(--primary); font-family: var(--font-accent); }
        .stat-label { font-size: 15px; color: var(--text-muted); font-weight: 500; }



        .footer-strip { background: var(--accent-green); color: white; padding: 40px 0; }
        .strip-flex { display: flex; justify-content: space-between; align-items: center; }
        .strip-text h3 { margin-bottom: 4px; }
        .strip-text p { opacity: 0.85; }
        .btn-white { background: white; color: var(--accent-green); }

        @media (max-width: 1024px) {
          .hero-content { grid-template-columns: 1fr; text-align: center; padding-top: 40px; }
          .hero-badge { margin: 0 auto 24px; }
          .hero h1 { font-size: 48px; }
          .hero-sub { margin: 0 auto 20px; }
          .hero-ctas { justify-content: center; }
          .grid-2 { grid-template-columns: 1fr; gap: 60px; }
          .services-grid { grid-template-columns: 1fr 1fr; }
          .achievement-grid { grid-template-columns: 1fr 1fr; }
          .timeline { flex-direction: column; gap: 40px; }
          .timeline::after { display: none; }
          .cta-flex { flex-direction: column; text-align: center; gap: 40px; }
          .footer-strip .strip-flex { flex-direction: column; text-align: center; gap: 30px; }
        }
        @media (max-width: 767px) {
          .services-grid { grid-template-columns: 1fr; }
          .achievement-grid { grid-template-columns: 1fr; }
        }
      ` }} />
    </div>
  );
};

export default Home;
