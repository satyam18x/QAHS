import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { FloatingWhatsApp, BackToTop } from './FloatingItems';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
};

export default Layout;
