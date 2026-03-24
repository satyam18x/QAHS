import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export const FloatingWhatsApp = () => (
  <a 
    href="https://wa.me/919301444414" 
    className="whatsapp-btn"
    target="_blank"
    rel="noopener noreferrer"
    title="Chat with us on WhatsApp"
  >
    <MessageCircle size={28} />
    <span className="ripple"></span>
    <style dangerouslySetInnerHTML={{ __html: `
      .whatsapp-btn {
        position: fixed;
        bottom: 28px;
        right: 28px;
        width: 56px;
        height: 56px;
        background: #25D366;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 20px rgba(37,211,102,0.4);
        z-index: 9999;
        transition: transform 0.3s ease;
      }
      .whatsapp-btn:hover { transform: scale(1.1); }
      .whatsapp-btn .ripple {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 2px solid #25D366;
        border-radius: 50%;
        animation: ripple 3s infinite;
      }
      @keyframes ripple {
        0% { transform: scale(1); opacity: 0.8; }
        100% { transform: scale(1.6); opacity: 0; }
      }
    `}} />
  </a>
);

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button 
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp size={24} />
      <style dangerouslySetInnerHTML={{ __html: `
        .back-to-top {
          position: fixed;
          bottom: 96px;
          right: 28px;
          width: 44px;
          height: 44px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s;
          z-index: 9998;
        }
        .back-to-top.visible { opacity: 1; visibility: visible; }
        .back-to-top:hover { background: var(--primary-dark); transform: translateY(-3px); }
      ` }} />
    </button>
  );
};
