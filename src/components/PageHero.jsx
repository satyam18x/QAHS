import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHero = ({ title, subtitle, breadcrumb }) => {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> <ChevronRight size={14} /> {breadcrumb}
        </div>
        <h1>{title}</h1>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
      <div className="hero-watermark">{title.split(' ')[0]}</div>
      <style dangerouslySetInnerHTML={{ __html: `
        .page-hero {
          background: var(--hero-gradient);
          color: white;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          opacity: 0.7;
          margin-bottom: 16px;
        }
        .page-hero h1 { font-size: 48px; margin-bottom: 12px; }
        .subtitle { font-size: 20px; opacity: 0.85; max-width: 700px; margin: 0 auto; }
        .hero-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 180px;
          font-weight: 800;
          opacity: 0.04;
          letter-spacing: 20px;
          pointer-events: none;
          text-transform: uppercase;
        }
        @media (max-width: 768px) {
          .page-hero { padding: 30px 0; }
          .page-hero h1 { font-size: 38px; }
          .subtitle { font-size: 18px; }
          .hero-watermark { font-size: 80px; }
        }
      ` }} />
    </section>
  );
};

export default PageHero;
