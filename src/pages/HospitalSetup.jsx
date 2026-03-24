import React from 'react';
import PageHero from '../components/PageHero';
import { CheckCircle } from 'lucide-react';

const HospitalSetup = () => {
  return (
    <div className="setup-page">
      <PageHero 
        title="Start Your Hospital in Jabalpur" 
        subtitle="Turnkey hospital setup consultancy from planning to operations" 
        breadcrumb="Hospital Setup"
      />

      {/* G2. Intro */}
      <section className="setup-intro bg-white">
        <div className="container grid-2">
          <div className="achievement-badge-card">
             <div className="big-num">100+</div>
             <h4>Hospitals Successfully Set Up</h4>
             <p>Across Madhya Pradesh & India</p>
          </div>
          <div className="intro-text">
             <p className="lead">
               Whether you are a practicing doctor ready to establish your own facility, a diagnostic center looking to expand, or an investor exploring healthcare — QHAS provides turnkey consultancy to get your hospital operational with full compliance.
             </p>
             <h4 className="mt-30 mb-20">Who This Is For:</h4>
             <ul className="check-list">
                <li><CheckCircle size={20} /> Medical Doctors & Specialists</li>
                <li><CheckCircle size={20} /> Diagnostic Centers & Pathology Labs</li>
                <li><CheckCircle size={20} /> Architects & Interior Designers (hospital projects)</li>
                <li><CheckCircle size={20} /> Healthcare Investors & Group Hospital Chains</li>
                <li><CheckCircle size={20} /> Fire Safety Consultants & MEP Engineers</li>
             </ul>
          </div>
        </div>
      </section>

      {/* G3. 5-Step Process */}
      <section className="setup-process bg-light">
        <div className="container">
          <div className="section-header centered">
            <h2>Our Hospital Setup Process</h2>
          </div>
          <div className="process-timeline-vertical">
            {[
              { num: "1", title: "PLANNING & DPR", desc: "We conduct site analysis, feasibility study, and prepare a complete Detailed Project Report (DPR) with projections and scope." },
              { num: "2", title: "DESIGN & INFRASTRUCTURE", desc: "Architectural liaison, floor plan review, medical zone planning, HVAC, electrical, and plumbing coordination." },
              { num: "3", title: "LICENSING & NOCs", desc: "Complete government documentation — Hospital License, Fire NOC, Pollution NOC, Health Dept., Municipal Corporation approvals." },
              { num: "4", title: "EQUIPMENT PROCUREMENT", desc: "Sourcing certified medical equipment through trusted vendors. ICU, OT, diagnostic, and general ward equipment." },
              { num: "5", title: "COMPLIANCE & GO-LIVE", desc: "Final NABH or CEA compliance, staff credential verification, inspection preparation, and operational launch support." }
            ].map((step, i) => (
               <div className="p-step" key={i}>
                  <div className="p-num">{step.num}</div>
                  <div className="p-content">
                     <h3>{step.title}</h3>
                     <p>{step.desc}</p>
                  </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* G4. What's Included Checklist */}
      <section className="included-checklist bg-white">
        <div className="container">
          <div className="section-header centered">
             <h2>What's Included</h2>
          </div>
          <div className="grid-2">
            <div className="checklist-card card">
               <h3 className="mb-20 text-primary">Documentation Services</h3>
               <ul className="check-list">
                 <li><CheckCircle size={20} /> DPR Preparation</li>
                 <li><CheckCircle size={20} /> Architectural Plan Review</li>
                 <li><CheckCircle size={20} /> Hospital License Application</li>
                 <li><CheckCircle size={20} /> Clinical Establishment Registration</li>
                 <li><CheckCircle size={20} /> Fire NOC Filing</li>
                 <li><CheckCircle size={20} /> Pollution NOC Filing</li>
               </ul>
            </div>
            <div className="checklist-card card">
               <h3 className="mb-20 text-primary">Operational Setup</h3>
               <ul className="check-list">
                 <li><CheckCircle size={20} /> Staff Recruitment Guidance</li>
                 <li><CheckCircle size={20} /> Equipment List & Procurement</li>
                 <li><CheckCircle size={20} /> Biomedical Waste Authorization</li>
                 <li><CheckCircle size={20} /> Lab & Pharmacy Licensing</li>
                 <li><CheckCircle size={20} /> NABH Entry-Level Consultation</li>
                 <li><CheckCircle size={20} /> Post-Setup Compliance Support</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .bg-white { background: white; padding: 100px 0; }
        .bg-light { background: var(--bg-light); padding: 100px 0; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        
        .achievement-badge-card {
           background: var(--bg-card);
           border-radius: 20px;
           padding: 60px 48px;
           text-align: center;
           border: 1px solid var(--border);
        }
        .big-num { font-size: 80px; font-family: var(--font-accent); font-weight: 800; color: var(--primary); line-height: 1; margin-bottom: 20px; }
        .achievement-badge-card h4 { font-size: 24px; margin-bottom: 10px; }
        .achievement-badge-card p { color: var(--text-muted); font-size: 16px; }

        .lead { font-size: 18px; color: var(--text-muted); line-height: 1.6; }
        .mt-30 { margin-top: 30px; }
        .mb-20 { margin-bottom: 20px; }
        .text-primary { color: var(--primary); }

        .check-list li { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; font-size: 16px; font-weight: 500;}
        .check-list svg { color: var(--accent-green); flex-shrink: 0; margin-top: 2px; }

        .centered { text-align: center; margin-bottom: 60px; max-width: 600px; margin-left: auto; margin-right: auto; }

        .process-timeline-vertical {
           max-width: 800px;
           margin: 0 auto;
           display: flex;
           flex-direction: column;
           gap: 40px;
        }
        .p-step { display: flex; gap: 40px; align-items: flex-start; }
        .p-num {
           width: 80px; height: 80px; flex-shrink: 0;
           background: var(--primary); color: white;
           border-radius: 50%; display: flex; align-items: center; justify-content: center;
           font-family: var(--font-accent); font-weight: 700; font-size: 28px;
           position: relative; z-index: 2; box-shadow: 0 10px 20px var(--shadow);
        }
        /* Vertical connector line */
        .p-step:not(:last-child) { position: relative; }
        .p-step:not(:last-child)::after {
           content: ''; position: absolute; left: 40px; top: 80px; bottom: -40px;
           width: 2px; background: var(--border); border-left: 2px dashed var(--border); z-index: 1;
        }
        .p-content h3 { font-size: 20px; margin-top: 10px; margin-bottom: 12px; }
        .p-content p { font-size: 16px; color: var(--text-muted); line-height: 1.6; }

        .checklist-card { padding: 40px; border-top: 4px solid var(--primary); }

        @media (max-width: 767px) {
           .grid-2 { grid-template-columns: 1fr; gap: 40px; }
           .p-step { gap: 20px; flex-direction: column; align-items: center; text-align: center; }
           .p-step:not(:last-child)::after { display: none; }
           .p-content h3 { margin-top: 0; }
        }
      ` }} />
    </div>
  );
};

export default HospitalSetup;
