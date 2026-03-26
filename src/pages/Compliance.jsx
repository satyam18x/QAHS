import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { AlertCircle, ChevronRight } from 'lucide-react';

const Compliance = () => {
  return (
    <div className="compliance-page">
      <PageHero 
        title="Complete Compliance Solutions" 
        subtitle="Stay legally protected with expert regulatory compliance support" 
        breadcrumb="Compliance"
      />

      <div className="container mobile-back-btn">
        <Link to="/services">← Back to All Services</Link>
      </div>

      {/* H2. Why Compliance Matters */}
      <section className="why-compliance bg-white">
        <div className="container">
           <div className="attention-box">
              <div className="a-header">
                 <AlertCircle size={32} color="#C0392B" />
                 <h2>The Cost of Non-Compliance</h2>
              </div>
              <div className="risk-grid mt-30">
                 <div className="risk-item">
                    <span className="warn-icon">⚠️</span>
                    <p>Heavy government fines and penalties</p>
                 </div>
                 <div className="risk-item">
                    <span className="warn-icon">⚠️</span>
                    <p>Hospital license suspension or cancellation</p>
                 </div>
                 <div className="risk-item">
                    <span className="warn-icon">⚠️</span>
                    <p>Legal notices and criminal liability</p>
                 </div>
                 <div className="risk-item">
                    <span className="warn-icon">⚠️</span>
                    <p>Loss of insurance empanelment and patient trust</p>
                 </div>
              </div>
              <div className="text-center mt-40">
                 <Link to="/contact" className="btn btn-alert">Get Compliance Audit <ChevronRight size={18} /></Link>
              </div>
           </div>
        </div>
      </section>

      {/* H3. Compliance Services Grid */}
      <section className="compliance-services bg-light">
        <div className="container">
           <div className="section-header centered">
              <h2>Our Compliance Services</h2>
              <p className="lead">End-to-end management of all regulatory requirements.</p>
           </div>
           
           <div className="services-grid-3x3">
              {[
                { icon: "📋", title: "Government Registrations", desc: "New registrations and annual renewals with all relevant departments." },
                { icon: "🏥", title: "Hospital License Management", desc: "License acquisition, renewal tracking, and government follow-ups." },
                { icon: "🏛️", title: "Health Dept. Approvals", desc: "State and district health department compliance and inspections." },
                { icon: "🔥", title: "Fire Safety Compliance", desc: "Fire NOC acquisition, audit preparation, and fire safety documentation." },
                { icon: "🌿", title: "Pollution Certifications", desc: "MPPCB NOC, consent to establish, consent to operate." },
                { icon: "🗑️", title: "Biomedical Waste NOC", desc: "BMW authorization, treatment documentation, and renewal." },
                { icon: "💊", title: "Drug License Support", desc: "Pharmacy and drug storage license assistance." },
                { icon: "📊", title: "NABH Documentation", desc: "Policy creation, SOP documentation, and accreditation files." },
                { icon: "👥", title: "Staff Training", desc: "Legal, regulatory, and operational compliance training." }
              ].map((s, i) => (
                 <div className="c-service-card card" key={i}>
                    <div className="c-icon">{s.icon}</div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* H4. Compliance Calendar CTA */}
      <section className="calendar-cta">
         <div className="container centered text-white">
            <h3 className="mb-20">Never Miss a Compliance Deadline</h3>
            <p className="lead text-white max-w-600 mx-auto mb-30">
               Let QHAS track and manage all your regulatory renewal dates, ensuring you are always ahead of deadlines — not scrambling to meet them.
            </p>
            <Link to="/contact" className="btn btn-ghost btn-lg">Start Compliance Management <ChevronRight size={18} /></Link>
         </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .bg-white { background: white; padding: 100px 0; }
        .bg-light { background: var(--bg-light); padding: 100px 0; }
        .mt-30 { margin-top: 30px; }
        .mt-40 { margin-top: 40px; }
        .mb-20 { margin-bottom: 20px; }
        .mb-30 { margin-bottom: 30px; }
        .text-center { text-align: center; }
        .centered { text-align: center; margin-bottom: 60px; max-width: 600px; margin-left: auto; margin-right: auto; }
        .text-white { color: white !important; }
        .max-w-600 { max-width: 600px; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .lead { font-size: 18px; color: var(--text-muted); line-height: 1.6; }

        .attention-box {
           background: rgba(255, 100, 100, 0.04);
           border: 1px solid rgba(255, 100, 100, 0.15);
           border-radius: 16px;
           padding: 60px;
           max-width: 900px;
           margin: 0 auto;
        }
        .a-header { display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 20px; }
        .a-header h2 { color: #C0392B; font-size: 32px; margin: 0; }
        
        .risk-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .risk-item {
           display: flex; gap: 12px; align-items: flex-start;
           background: white; padding: 20px; border-radius: 8px;
           box-shadow: 0 4px 10px rgba(0,0,0,0.03);
           border-left: 3px solid #E74C3C;
        }
        .warn-icon { font-size: 20px; }
        .risk-item p { margin: 0; font-weight: 500; font-size: 16px; }

        .btn-alert { background: #E74C3C; color: white; display: inline-flex; align-items: center; gap: 8px; }
        .btn-alert:hover { background: #C0392B; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(231, 76, 60, 0.3); }

        .services-grid-3x3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .c-service-card { border-top: 3px solid transparent; transition: all 0.3s; }
        .c-service-card:hover { border-top-color: var(--primary); transform: translateY(-5px); }
        .c-icon { font-size: 36px; margin-bottom: 20px; }
        .c-service-card h4 { font-size: 18px; margin-bottom: 12px; }
        .c-service-card p { font-size: 15px; color: var(--text-muted); margin: 0; line-height: 1.5; }

        .calendar-cta { background: var(--hero-gradient); padding: 100px 0; }
        .calendar-cta h3 { font-size: 36px; color: white; }

        @media (max-width: 1024px) {
           .services-grid-3x3 { grid-template-columns: 1fr 1fr; }
           .attention-box { padding: 40px 20px; }
        }
        @media (max-width: 767px) {
           .services-grid-3x3 { grid-template-columns: 1fr; }
           .risk-grid { grid-template-columns: 1fr; }
           .a-header h2 { font-size: 24px; text-align: left;}
        }
      ` }} />
    </div>
  );
};

export default Compliance;
