import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { ChevronRight, Check } from 'lucide-react';

// Using generated image paths
const IMAGES = {
  setup: '/images/hospital_setup_consultancy.png',
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Services' },
    { id: 'setup', label: 'Hospital Setup' },
    { id: 'licensing', label: 'Licensing' },
    { id: 'documentation', label: 'Documentation' },
    { id: 'nabh', label: 'NABH' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'international', label: 'International' },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    if (id === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 150;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="services-page">
      <PageHero
        title="Our Services"
        subtitle="Complete Hospital Administration & Compliance Solutions"
        breadcrumb="Services"
      />

      <div className="service-tabs sticky-tabs">
        <div className="container tab-container desktop-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="container tab-container mobile-tabs">
          <Link to="/hospital-setup" className="tab-btn">Hospital Setup</Link>
          <Link to="/compliance" className="tab-btn">Licensing & Compliance</Link>
          <Link to="/international" className="tab-btn">International</Link>
        </div>
      </div>

      <div className="service-details">
        {/* SERVICE 1: HOSPITAL SETUP */}
        <section id="setup" className="service-block bg-white text-center">
          <div className="container narrow-container">
            <span className="section-label">Service 01</span>
            <h3>Hospital Setup Consultancy</h3>
            <div className="divider mx-auto"></div>
            <p className="lead">
              We guide healthcare entrepreneurs, doctors, and institutions through every step of establishing a fully compliant, operational hospital — from initial concept to grand opening.
            </p>
            <ul className="check-list-centered">
              <li><Check size={18} /> Detailed Project Report (DPR) preparation</li>
              <li><Check size={18} /> Infrastructure planning, layout & architectural liaison</li>
              <li><Check size={18} /> Licensing, documentation & regulatory filings</li>
              <li><Check size={18} /> Budget planning, vendor identification & procurement</li>
              <li><Check size={18} /> Government registration and pre-opening compliance</li>
              <li><Check size={18} /> Staff documentation and credential verification</li>
            </ul>
            <a href="/hospital-setup" className="btn btn-primary mt-40">Start Your Hospital Journey <ChevronRight size={18} /></a>
          </div>
        </section>

        {/* SERVICE 2: LICENSING */}
        <section id="licensing" className="service-block bg-light text-center">
          <div className="container narrow-container">
            <span className="section-label">Service 02</span>
            <h3>Licensing & Compliance Management</h3>
            <div className="divider mx-auto"></div>
            <p className="lead">
              We manage all government interactions and legal documentation, ensuring your hospital stays 100% compliant with central and state regulations at all times.
            </p>
            <ul className="check-list-centered">
              <li><Check size={18} /> Hospital License — new application & annual renewal</li>
              <li><Check size={18} /> Fire NOC from the Fire Department</li>
              <li><Check size={18} /> Pollution NOC from MPPCB / State Pollution Control Board</li>
              <li><Check size={18} /> Health Department & Municipal Corporation approvals</li>
              <li><Check size={18} /> Biomedical Waste Authorization</li>
              <li><Check size={18} /> Clinical Establishment Act registration</li>
            </ul>
            <div className="highlight-alert-centered mt-40">
              Non-compliance can result in heavy fines, license cancellations, or hospital closure. Let QHAS protect your institution.
            </div>
          </div>
        </section>

        {/* SERVICE 3: DOCUMENTATION */}
        <section id="documentation" className="service-block bg-white text-center">
          <div className="container narrow-container">
            <span className="section-label">Service 03</span>
            <h3>Documentation & Government Liaison</h3>
            <div className="divider mx-auto"></div>
            <p className="lead">
              Our dedicated liaison team handles all backend work with government departments so you never have to chase approvals yourself.
            </p>
            <ul className="check-list-centered">
              <li><Check size={18} /> Annual registration and license renewals</li>
              <li><Check size={18} /> Inter-department follow-ups and coordination</li>
              <li><Check size={18} /> Legal affidavits, agreements & official documentation</li>
              <li><Check size={18} /> Response to government notices & compliance queries</li>
              <li><Check size={18} /> Department inspection preparation & coordination</li>
              <li><Check size={18} /> Document verification and submission tracking</li>
            </ul>
          </div>
        </section>

        {/* SERVICE 4: NABH */}
        <section id="nabh" className="service-block bg-light text-center">
          <div className="container narrow-container">
            <span className="section-label">Service 04</span>
            <h3>NABH Accreditation Consultancy</h3>
            <div className="divider mx-auto"></div>
            <p className="lead">
              NABH accreditation is India's gold standard for hospital quality. We provide end-to-end guidance to help hospitals achieve and maintain NABH status.
            </p>
            <ul className="check-list-centered">
              <li><Check size={18} /> Gap analysis & readiness assessment</li>
              <li><Check size={18} /> Policy and Standard Operating Procedure (SOP) documentation</li>
              <li><Check size={18} /> Staff training & compliance workshops</li>
              <li><Check size={18} /> Internal audits & mock assessments</li>
              <li><Check size={18} /> Full documentation support for accreditation files</li>
              <li><Check size={18} /> Post-accreditation surveillance & renewal support</li>
            </ul>
            <div className="badge-strip centered mt-40">
              <span className="pill-badge">Entry-Level</span>
              <span className="pill-badge">Mid-Level</span>
              <span className="pill-badge">Full Accreditation</span>
            </div>
          </div>
        </section>

        {/* SERVICE 5: EQUIPMENT */}
        <section id="equipment" className="service-block bg-white text-center">
          <div className="container narrow-container">
            <span className="section-label">Service 05</span>
            <h3>Medical Equipment Procurement</h3>
            <div className="divider mx-auto"></div>
            <p className="lead">
              We source high-quality, certified medical equipment at competitive prices through our trusted network of verified suppliers and manufacturers.
            </p>

            <div className="equipment-grid mt-40">
              <div className="eq-item card">ICU Monitors</div>
              <div className="eq-item card">Ventilators</div>
              <div className="eq-item card">OT Lights & Tables</div>
              <div className="eq-item card">Imaging Systems</div>
              <div className="eq-item card">Patient Monitoring</div>
              <div className="eq-item card">Lab Equipment</div>
            </div>

            <p className="usp-note-centered mt-40">
              All equipment is certified, warranty-backed, and sourced through authorized vendors. We negotiate pricing on your behalf.
            </p>
          </div>
        </section>

        {/* SERVICE 6: INTERNATIONAL */}
        <section id="international" className="service-block bg-light text-center">
          <div className="container narrow-container">
            <span className="section-label">Service 06</span>
            <h3>International Patient Coordination</h3>
            <div className="divider mx-auto"></div>
            <p className="lead">
              We facilitate seamless medical travel for international patients seeking affordable, world-class treatment in India — from first inquiry to safe return.
            </p>
            <ul className="check-list-centered">
              <li><Check size={18} /> Patient intake assessment & consultation booking</li>
              <li><Check size={18} /> Visa invitation letters & medical visa documentation</li>
              <li><Check size={18} /> Airport pickup, travel & hotel arrangements</li>
              <li><Check size={18} /> Hospital admission & in-patient coordination</li>
              <li><Check size={18} /> Post-treatment support & discharge planning</li>
            </ul>

            <div className="badge-strip centered mt-40">
              <span className="pill-badge style-2">Bangladesh</span>
              <span className="pill-badge style-2">Nepal</span>
              <span className="pill-badge style-2">Nigeria</span>
              <span className="pill-badge style-2">Kenya</span>
              <span className="pill-badge style-2">Middle East</span>
            </div>
            <a href="/international" className="btn btn-outline mt-40">View International Services</a>
          </div>
        </section>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .service-tabs {
          background: white;
          border-bottom: 2px solid var(--border);
          position: sticky;
          top: 72px; /* below navbar */
          z-index: 100;
        }
        .tab-container {
          display: flex;
          overflow-x: auto;
          scrollbar-width: none;
          justify-content: center;
        }
        .tab-container::-webkit-scrollbar { display: none; }
        .tab-btn {
          background: none;
          border: none;
          padding: 20px 24px;
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 600;
          color: var(--text-muted);
          cursor: pointer;
          white-space: nowrap;
          border-bottom: 3px solid transparent;
          transition: all 0.3s;
        }
        .tab-btn:hover { color: var(--primary); }
        .tab-btn.active { color: var(--primary); border-bottom-color: var(--primary); }

        .mobile-tabs { display: none; }

        .service-block { padding: 120px 0; }
        .service-block.bg-light { background: var(--bg-light); }
        .service-block.bg-white { background: white; }

        .narrow-container { max-width: 800px; margin: 0 auto; }
        .text-center { text-align: center; }
        .mx-auto { margin-left: auto; margin-right: auto; }

        .s-content h3 { font-size: 42px; margin-bottom: 24px; color: var(--text-dark); }
        .lead { font-size: 20px; color: var(--text-muted); margin-bottom: 40px; line-height: 1.6; }
        
        .check-list-centered {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          margin-bottom: 30px;
        }
        .check-list-centered li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 17px;
          color: var(--text-dark);
          text-align: left;
          width: 100%;
          max-width: fit-content;
        }
        .check-list-centered svg { color: var(--accent-green); flex-shrink: 0; }

        .mt-40 { margin-top: 40px; }

        .highlight-alert-centered {
          background: white;
          border: 1px solid var(--border);
          border-top: 4px solid #E74C3C;
          padding: 30px;
          font-weight: 500;
          color: var(--text-dark);
          border-radius: 12px;
          box-shadow: 0 10px 30px var(--shadow);
          font-size: 16px;
          line-height: 1.6;
        }

        .badge-strip.centered { justify-content: center; }
        .badge-strip { display: flex; flex-wrap: wrap; gap: 12px; }
        .pill-badge {
          background: rgba(26,126,181,0.1);
          color: var(--primary);
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }
        .pill-badge.style-2 {
          background: #E1F0FA;
          color: var(--primary-dark);
        }

        .equipment-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .eq-item { 
          padding: 24px; 
          text-align: center; 
          font-weight: 600; 
          font-size: 15px; 
          border-top: 3px solid var(--primary);
        }
        
        .usp-note-centered {
          background: var(--bg-card);
          padding: 24px;
          border-radius: 12px;
          font-size: 15px;
          color: var(--primary-dark);
          font-style: italic;
          line-height: 1.6;
        }

        @media (max-width: 767px) {
          .desktop-tabs { display: none; }
          .mobile-tabs { 
            display: flex; 
            width: 100%;
          }
          .mobile-tabs .tab-btn {
            flex: 1;
            padding: 12px 4px;
            font-size: 13px;
            white-space: normal;
            text-align: center;
            line-height: 1.3;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .service-block { padding: 80px 0; }
          .s-content h3 { font-size: 32px; }
          .lead { font-size: 18px; }
          .equipment-grid { grid-template-columns: 1fr; }
          .tab-container { justify-content: space-between; }
        }
      ` }} />
    </div>
  );
};

export default Services;
