import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Plane, Building, Clock, Languages, ChevronRight } from 'lucide-react';

const International = () => {
  return (
    <div className="international-page">
      <PageHero 
        title="International Patient Services" 
        subtitle="World-Class Healthcare Coordination for Global Patients" 
        breadcrumb="International"
      />

      <div className="container mobile-back-btn">
        <Link to="/services">← Back to All Services</Link>
      </div>

      {/* F2. Why India */}
      <section className="why-india bg-white">
        <div className="container grid-2">
          <div className="india-stats">
            <span className="section-label">Why India?</span>
            <h3>Top Destination for Medical Care</h3>
            <div className="stat-grid mt-30">
               <div className="card text-center p-20">
                 <strong className="text-primary text-2xl d-block mb-10">90% Less</strong>
                 <span className="text-muted font-sm">Costly vs Western countries</span>
               </div>
               <div className="card text-center p-20">
                 <strong className="text-primary text-2xl d-block mb-10">World-Class</strong>
                 <span className="text-muted font-sm">Hospitals & JCI accreditations</span>
               </div>
               <div className="card text-center p-20">
                 <strong className="text-primary text-2xl d-block mb-10">Zero Wait</strong>
                 <span className="text-muted font-sm">Immediate appointments</span>
               </div>
               <div className="card text-center p-20">
                 <strong className="text-primary text-2xl d-block mb-10">English</strong>
                 <span className="text-muted font-sm">Speaking doctors & staff</span>
               </div>
            </div>
          </div>
          <div className="india-text">
            <img src="/images/international_patient_care.png" alt="International Patient Care Delivery" style={{width: '100%', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', objectFit: 'cover'}} />
            <p className="lead">
              India has emerged as one of the world's top destinations for affordable, high-quality medical care. Procedures that cost $30,000+ in the US or UK can be done here with the same clinical quality at a fraction of the cost.
            </p>
            <p>
              <strong>QHAS is your trusted on-ground partner in India</strong> — ensuring every international patient receives seamless, dignified care throughout their entire medical journey. We handle all logistics so you can focus on healing.
            </p>
          </div>
        </div>
      </section>

      {/* F3. Countries Served */}
      <section className="countries-served bg-light text-center">
        <div className="container">
           <h2>Countries We Serve</h2>
           <div className="divider mx-auto"></div>
           <div className="country-grid">
              <div className="country-box">🇧🇩 Bangladesh</div>
              <div className="country-box">🇳🇵 Nepal</div>
              <div className="country-box">🇳🇬 Nigeria</div>
              <div className="country-box">🇰🇪 Kenya</div>
              <div className="country-box">🇹🇿 Tanzania</div>
              <div className="country-box">🌍 Middle East</div>
           </div>
        </div>
      </section>

      {/* F4. Patient Journey */}
      <section className="patient-journey bg-white">
        <div className="container">
          <div className="section-header centered">
             <h2>The Patient Journey</h2>
             <p className="lead text-center">Seamless support from home to hospital and back.</p>
          </div>
          
          <div className="journey-flow">
            {[
              { icon: "📞", title: "Inquiry & Assessment" },
              { icon: "📋", title: "Treatment Plan" },
              { icon: "✈️", title: "Visa & Travel Support" },
              { icon: "🛬", title: "Airport Welcome" },
              { icon: "🏥", title: "Hospital Admission" },
              { icon: "🏠", title: "Recovery Support" },
              { icon: "✈️", title: "Safe Return" }
            ].map((step, i) => (
               <div className="journey-step" key={i}>
                  <div className="j-circle">{step.icon}</div>
                  <h5>{step.title}</h5>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* F6. Partner Program */}
      <section className="partner-program">
        <div className="container centered text-white">
          <h2>Become a QHAS International Partner</h2>
          <p className="lead text-white max-w-600 mx-auto mt-20 mb-30">
            Are you a doctor, travel agent, healthcare coordinator, or NGO working with patients seeking treatment abroad? Partner with QHAS and help patients access world-class care in India.
          </p>
          <div className="partner-pills">
             <span className="pill-trans">✦ Earn Referral Commission</span>
             <span className="pill-trans">✦ Zero Investment</span>
             <span className="pill-trans">✦ Full Patient Support</span>
          </div>
          <div className="mt-40">
             <a href="mailto:quickhospital01@gmail.com" className="btn btn-ghost btn-lg">Become a Partner <ChevronRight /></a>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
         .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
         .bg-white { background: white; }
         .bg-light { background: var(--bg-light); padding: 80px 0; }
         
         .mt-20 { margin-top: 20px; }
         .mt-30 { margin-top: 30px; }
         .mt-40 { margin-top: 40px; }
         .mb-10 { margin-bottom: 10px; }
         .mb-30 { margin-bottom: 30px; }
         .mx-auto { margin-left: auto; margin-right: auto; }
         .text-center { text-align: center; }
         .text-primary { color: var(--primary); }
         .text-muted { color: var(--text-muted); }
         .text-white { color: white !important; }
         .text-2xl { font-size: 24px; font-weight: 700; font-family: var(--font-heading); }
         .d-block { display: block; }
         .p-20 { padding: 20px; }
         .max-w-600 { max-width: 600px; }
         .font-sm { font-size: 14px; }
         
         .lead { font-size: 18px; color: var(--text-muted); line-height: 1.6; }

         .stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
         
         .country-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 800px; margin: 0 auto; }
         .country-box { 
            background: white; border: 1px solid var(--border); border-radius: 12px;
            padding: 24px; font-size: 18px; font-weight: 600; font-family: var(--font-heading);
            transition: all 0.3s; cursor: default;
         }
         .country-box:hover { border-color: var(--primary); transform: translateY(-3px); box-shadow: 0 10px 20px var(--shadow); }

         .journey-flow {
            display: flex; justify-content: space-between; position: relative; padding-top: 20px;
            overflow-x: auto; padding-bottom: 20px; /* For mobile swipe */
         }
         .journey-flow::after {
            content: ''; position: absolute; top: 60px; left: 5%; right: 5%;
            height: 2px; background: var(--border); border-style: dashed; z-index: 1;
         }
         .journey-step { text-align: center; position: relative; z-index: 2; flex: 1; min-width: 120px; padding: 0 10px; }
         .j-circle {
            width: 80px; height: 80px; background: white; border: 2px solid var(--primary);
            border-radius: 50%; display: flex; align-items: center; justify-content: center;
            font-size: 32px; margin: 0 auto 16px; box-shadow: 0 4px 10px var(--shadow);
         }
         .journey-step h5 { font-size: 14px; font-weight: 600; color: var(--text-dark); }

         .partner-program { background: var(--cta-gradient); color: white; padding: 100px 0; }
         .partner-pills { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
         .pill-trans { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); padding: 8px 20px; border-radius: 30px; font-size: 14px; }

         @media (max-width: 1024px) {
            .grid-2 { grid-template-columns: 1fr; gap: 40px; }
            .country-grid { grid-template-columns: 1fr 1fr; }
            .journey-flow::after { display: none; }
         }
         @media (max-width: 767px) {
            .country-grid { grid-template-columns: 1fr; }
            .journey-flow {
               flex-direction: column;
               align-items: center;
               gap: 40px;
               overflow-x: visible;
            }
            .journey-step { width: 100%; max-width: 250px; }
            .journey-flow::after {
               display: block;
               top: 40px;
               bottom: 40px;
               left: 50%;
               right: auto;
               width: 2px;
               height: auto;
               transform: translateX(-50%);
            }
         }
      ` }} />
    </div>
  );
};

export default International;
