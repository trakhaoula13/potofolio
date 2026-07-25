import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white text-center py-4 mt-5" style={{ backgroundColor: '#0b1a2b' }}>
      <div className="container">
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="mailto:khaoula.trabelsi@enicar.ucar.tn" className="text-white-50"><Mail size={22} /></a>
          <a href="tel:+21656925548" className="text-white-50"><Phone size={22} /></a>
        </div>
        {/*<p className="mb-0 small text-white-50">© 2026 Khaoula Trabelsi. Tous droits réservés.</p>*/}
      </div>
    </footer>
  );
};

export default Footer;
