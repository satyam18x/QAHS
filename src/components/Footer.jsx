import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1 - Brand */}
          <div className="footer-col brand-col">
            <div className="footer-logo-wrap" style={{ marginBottom: '16px' }}>
              <img src="/src/assets/images/qhas-logo.png" alt="QHAS Logo" style={{ maxWidth: '180px', maxHeight: '60px', objectFit: 'contain' }} className="footer-logo-img" onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
              <h2 className="footer-logo" style={{ display: 'none', margin: 0 }}>QHAS</h2>
            </div>
            <p className="tagline">Your Hospital Admin & Compliance Partner</p>
            <p className="description">
              Simplifying hospital administration for healthcare providers across India.
            </p>
            <div className="social-links">
              <a href="https://wa.me/919301444414" className="social-icon"><MessageCircle size={20} /></a>
              <a href="#" className="social-icon"><Globe size={20} /></a>
              <a href="#" className="social-icon"><Globe size={20} /></a>
              <a href="mailto:quickhospital01@gmail.com" className="social-icon"><Mail size={20} /></a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/hospital-setup">Hospital Setup</Link></li>
              <li><Link to="/compliance">Compliance Solutions</Link></li>
              <li><Link to="/international">International Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="footer-col">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/compliance">Hospital Licensing</Link></li>
              <li><Link to="/compliance">NABH Accreditation</Link></li>
              <li><Link to="/compliance">Fire & Pollution NOC</Link></li>
              <li><Link to="/compliance">Documentation & Liaison</Link></li>
              <li><Link to="/services">Equipment Procurement</Link></li>
              <li><Link to="/international">International Patients</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-title">Get In Touch</h4>
            <div className="contact-info">
              <p>
                <MapPin size={16} />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Gate+No.+04,+Beside+Gautam+IAS+Academy,+Sneh+Nagar+Road,+Jabalpur,+M.P."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                >
                  Gate No. 04, Beside Gautam IAS Academy, Sneh Nagar Road, Jabalpur, M.P.
                </a>
              </p>
              <p><MapPin size={16} /> Branch: 872 Yadav Colony, Vivekanand Ward, Jabalpur (M.P.) — 482002</p>
              <p><Phone size={16} /> +91 9301444414</p>
              <p><Mail size={16} /> quickhospital01@gmail.com</p>
              <p className="hours">⏰ Mon–Sat | 10AM – 6PM</p>
            </div>
            <Link to="/contact" className="btn btn-outline footer-btn">Get Free Consultation</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>© 2024 Quick Hospital Administrative Services (OPC) Pvt. Ltd. All rights reserved.</p>
          <div className="bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="sep">|</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .footer {
          background: #0D3B5C;
          color: rgba(255,255,255,0.75);
          padding: 72px 0 0;
          margin-top: auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 60px;
        }
        .footer-logo {
          color: white;
          font-size: 32px;
          margin-bottom: 12px;
        }
        .tagline {
          font-style: italic;
          font-size: 15px;
          color: rgba(255,255,255,0.65);
          margin-bottom: 16px;
        }
        .description {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          max-width: 260px;
          margin-bottom: 24px;
        }
        .social-links {
          display: flex;
          gap: 12px;
        }
        .social-icon {
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s;
        }
        .social-icon:hover { background: var(--primary); transform: translateY(-3px); }

        .footer-title {
          color: white;
          font-size: 16px;
          margin-bottom: 24px;
          font-weight: 600;
        }
        .footer-links li { margin-bottom: 12px; }
        .footer-links a {
          font-size: 14px;
          color: rgba(255,255,255,0.65);
          transition: color 0.3s;
        }
        .footer-links a:hover { color: white; padding-left: 4px; }

        .contact-info p {
          display: flex;
          gap: 12px;
          font-size: 14px;
          margin-bottom: 16px;
          line-height: 1.5;
        }
        .contact-info svg { color: var(--primary); flex-shrink: 0; margin-top: 3px; }
        .hours { margin-top: 20px; font-weight: 500; color: white; }
        
        .footer-btn {
          border-color: rgba(255,255,255,0.3);
          color: white;
          width: 100%;
          margin-top: 10px;
        }
        .footer-btn:hover { background: white; color: var(--primary-dark); }

        .footer-bottom {
          background: rgba(0,0,0,0.2);
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 24px 0;
        }
        .bottom-content {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
        }
        .bottom-links { display: flex; gap: 12px; }
        .bottom-links a { color: rgba(255,255,255,0.6); }
        .bottom-links a:hover { color: white; }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 767px) {
          .footer-grid { grid-template-columns: 1fr; gap: 40px; }
          .bottom-content { flex-direction: column; gap: 16px; text-align: center; }
          .bottom-links { justify-content: center; }
        }
      ` }} />
    </footer>
  );
};

export default Footer;
