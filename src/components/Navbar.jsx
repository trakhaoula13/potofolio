import React, { useEffect, useState } from 'react';
import { Home, User, Code, Briefcase, Mail, Menu } from 'lucide-react';

const LINKS = [
  { id: 'home', label: 'Acceuil', icon: Home },
  { id: 'about', label: 'A propos', icon: User },
  { id: 'skills', label: 'Compétances', icon: Code },
  { id: 'projects', label: 'Projets', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Navbar = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = LINKS.map(l => document.getElementById(l.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    // ferme le menu mobile après un clic
    const collapse = document.getElementById('mainNav');
    if (collapse?.classList.contains('show')) {
      collapse.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: '#0b1a2b' }}>
      <div className="container">
        <a href="#home" onClick={(e) => handleClick(e, 'home')} className="navbar-brand text-white fw-bold">
          Portofolio<span className="text-info"> Khaoula Trabelsi</span>
        </a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <Menu color="white" size={28} />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {LINKS.map(({ id, label, icon: Icon }) => (
              <li className="nav-item" key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={`nav-link text-white ${active === id ? 'active-link' : ''}`}
                >
                  <Icon size={18} className="me-1" /> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
