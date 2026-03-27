import React from 'react';
import PageHero from '../components/PageHero';
import { Target, Star, Shield, Zap, Users, Globe, CheckCircle, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      <PageHero 
        title="About QHAS" 
        subtitle="India's Trusted Hospital Administration & Compliance Partner" 
        breadcrumb="About Us"
      />

      {/* D2. Who We Are */}
      <section className="who-we-are">
        <div className="container grid-2">
          <div className="who-image">
            <div className="image-wrap about-img-wrap">
              <img src="/images/team.jpg" alt="QHAS Doctor Team" className="about-team-img" />
            </div>
          </div>
          <div className="who-text">
            <span className="section-label">Our Story</span>
            <h2>Who We Are</h2>
            <div className="divider"></div>
            <p>
              Quick Hospital Administrative Services (OPC) Pvt. Ltd. is a dedicated healthcare consultancy firm offering complete hospital administration, legal compliance, and regulatory support services across India.
            </p>
            <p>
              We act as a trusted bridge between hospitals and government authorities — ensuring smooth operations, timely approvals, and zero legal complications for healthcare providers at every stage of their journey.
            </p>
            <p>
              From planning a new hospital to renewing annual licenses, from NABH accreditation to international patient coordination — QHAS is your single-window solution for everything hospital administration.
            </p>
            <div className="highlight-box">
              <p>
                Headquartered in Jabalpur, Madhya Pradesh — serving hospitals across India and coordinating care for international patients from Bangladesh, Nepal, Nigeria, Kenya, and the Middle East.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* D3. Mission & Vision */}
      <section className="mission-vision bg-light">
        <div className="container grid-2">
          <div className="mv-card mission">
            <div className="mv-icon"><Target size={40} /></div>
            <h3>Our Mission</h3>
            <p>To simplify hospital administration and empower healthcare providers with seamless compliance, regulatory support, and operational excellence — so they can focus entirely on delivering quality patient care.</p>
          </div>
          <div className="mv-card vision">
            <div className="mv-icon"><Star size={40} /></div>
            <h3>Our Vision</h3>
            <p>To become the most trusted and preferred hospital consultancy partner across India and internationally — known for speed, reliability, and results-driven service that transforms healthcare administration.</p>
          </div>
        </div>
      </section>

      {/* D4. Core Values */}
      <section className="core-values">
        <div className="container">
          <div className="section-header centered">
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            {[
              { icon: <Shield />, title: "Integrity", desc: "We operate with complete transparency, honesty, and ethical standards in every engagement." },
              { icon: <Zap />, title: "Efficiency", desc: "Speed and accuracy define our execution. We deliver on time, every time." },
              { icon: <Award />, title: "Expertise", desc: "Deep domain knowledge in hospital administration, compliance, and healthcare regulation." },
              { icon: <Users />, title: "Partnership", desc: "We don't just consult — we partner with you for the long term success of your institution." }
            ].map((v, i) => (
              <div key={i} className="value-card card">
                <div className="v-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .about-img-wrap { position: relative; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
        .about-team-img { width: 100%; height: auto; display: block; object-fit: contain; }

        .who-text p { margin-bottom: 20px; color: var(--text-muted); font-size: 17px; }
        .highlight-box {
          background: var(--bg-card);
          border-left: 4px solid var(--primary);
          padding: 24px;
          border-radius: 0 12px 12px 0;
          margin-top: 30px;
        }
        .highlight-box p { font-style: italic; color: var(--primary-dark); font-weight: 500; margin: 0; }

        .bg-light { background: var(--bg-light); }
        .mv-card { padding: 60px 40px; border-radius: 16px; position: relative; overflow: hidden; }
        .mv-card.mission { background: var(--bg-card); border-top: 4px solid var(--primary); }
        .mv-card.vision { background: var(--bg-green-soft); border-top: 4px solid var(--accent-green); }
        .mv-icon { color: var(--primary); margin-bottom: 24px; }
        .vision .mv-icon { color: var(--accent-green); }
        .mv-card h3 { font-size: 28px; margin-bottom: 16px; }

        .centered { text-align: center; margin: 0 auto 50px; max-width: 700px; }
        .values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .value-card { text-align: center; }
        .v-icon {
          width: 64px;
          height: 64px;
          background: rgba(26,126,181,0.1);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }
        
        @media (max-width: 1024px) {
          .grid-2 { grid-template-columns: 1fr; gap: 40px; }
          .section-header.centered { margin-bottom: 40px; }
          .values-grid { grid-template-columns: 1fr; }
        }
      ` }} />
    </div>
  );
};

export default About;
