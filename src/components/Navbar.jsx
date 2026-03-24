import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span><MapPin size={14} /> Jabalpur, Madhya Pradesh, India</span>
          </div>
          <div className="top-bar-right">
            <a href="tel:+919301444414"><Phone size={14} /> +91 9301444414</a>
            <a href="mailto:quickhospital01@gmail.com"><Mail size={14} /> quickhospital01@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`main-nav ${isSticky ? 'sticky' : ''}`}>
        <div className="container nav-content">
          <Link to="/" className="logo">
            <img src="/src/assets/images/qhas-logo.png" alt="QHAS Logo" className="logo-img" onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
            <span className="logo-text" style={{display: 'none'}}><img src="/src/assets/images/qhas-logo.png" className="logo-img" /></span>
          </Link>

          <div className="nav-links">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
            
            <div className="dropdown">
              <Link to="/services" className={`dropdown-trigger ${location.pathname.startsWith('/services') ? 'active' : ''}`}>
                Services <ChevronDown size={16} />
              </Link>
              <div className="mega-menu">
                <div className="mega-menu-grid">
                  <Link to="/hospital-setup">
                    
                    <div>
                      <strong>Hospital Setup</strong>
                      <p>Complete consultancy from planning to launch.</p>
                    </div>
                  </Link>
                  <Link to="/compliance">
                   
                    <div>
                      <strong>Licensing & Compliance</strong>
                      <p>Govt. registrations and renewals.</p>
                    </div>
                  </Link>
                  <Link to="/international">
                    
                    <div>
                      <strong>International Services</strong>
                      <p>Global patient coordination.</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
          </div>

          <div className="nav-cta">
            <Link to="/contact" className="btn btn-primary btn-sm">Get Free Consultation</Link>
          </div>

          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
          <div className="mobile-cta">
            <Link to="/contact" className="btn btn-primary">Get Free Consultation</Link>
          </div>
        </div>
      </nav>

      <style dangerouslySetInnerHTML={{ __html: `
        .top-bar {
          background: var(--primary-dark);
          color: rgba(255,255,255,0.85);
          font-size: 13px;
          height: 40px;
          display: flex;
          align-items: center;
        }
        .top-bar-content {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        .top-bar-left, .top-bar-right {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .top-bar svg { vertical-align: middle; margin-right: 6px; color: var(--accent-light); }
        
        .main-nav {
          height: 72px;
          background: white;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          position: relative;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        .main-nav.sticky {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          box-shadow: 0 2px 20px rgba(0,0,0,0.08);
          backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.95);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .logo-img {
          height: 48px;
          width: auto;
          display: block;
          object-fit: contain;
        }
        .logo-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 28px;
          color: var(--primary);
        }
        .nav-links {
          display: flex;
          gap: 24px;
        }
        .nav-links a {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 15px;
          color: var(--text-dark);
          position: relative;
          padding-bottom: 4px;
        }
        .nav-links a.active, .nav-links a:hover {
          color: var(--primary);
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }
        .nav-links a:hover::after, .nav-links a.active::after {
          width: 100%;
        }

        .dropdown { position: relative; }
        .dropdown-trigger { display: flex; align-items: center; gap: 4px; }
        .mega-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 320px;
          background: white;
          border-top: 3px solid var(--primary);
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          border-radius: 0 0 16px 16px;
          padding: 16px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }
        .dropdown:hover .mega-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .mega-menu-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
        }
        .mega-menu-grid a {
          display: flex;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .mega-menu-grid a:hover { background: var(--bg-card); }
        .mega-menu-grid .icon { font-size: 24px; }
        .mega-menu-grid strong { display: block; font-size: 14px; color: var(--text-dark); }
        .mega-menu-grid p { font-size: 12px; color: var(--text-muted); margin: 0; line-height: 1.4; }

        .btn-sm { padding: 10px 22px; font-size: 14px; }
        .mobile-toggle { display: none; background: none; border: none; color: var(--primary); cursor: pointer; }

        .mobile-drawer {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          background: white;
          height: 0;
          overflow: hidden;
          transition: height 0.3s ease;
          display: flex;
          flex-direction: column;
          padding: 0 24px;
          z-index: 999;
        }
        .mobile-drawer.open { height: auto; padding-bottom: 40px; border-bottom: 1px solid var(--border); }
        .mobile-drawer a {
          padding: 16px 0;
          border-bottom: 1px solid var(--bg-light);
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .nav-links, .nav-cta { display: none; }
          .mobile-toggle { display: block; }
          .top-bar-left { display: none; }
        }
      ` }} />
    </>
  );
};

export default Navbar;
