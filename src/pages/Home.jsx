import React from 'react';
import { Download, ArrowDown } from 'lucide-react';
import profile from '.../image.jpeg'; // Mettez votre photo dans assets
import cvPDF from '.../cv.pdf';

const STATS = [
  { value: '1+', label: 'ans de recherche appliquée' },
  { value: '10', label: 'projets techniques menés' },
  { value: '4', label: "domaines d'expertise" },
];

const Home = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="hero-section">
      <div className="container">
        <div className="row align-items-center hero-row">
          <div className="col-lg-7 order-2 order-lg-1 text-center text-lg-start">
            {/*<span className="eyebrow">// portfolio — automatique &amp; robotique</span>*/}
            <h1 className="hero-title">Khaoula Trabelsi</h1>
            <h2 className="hero-subtitle">Chercheuse en Automatique, Robotique &amp; Traitement de l'information </h2>
            <p className="hero-text">
              Étudiante en Master Automatique, Robotique et Traitement de l'Information à ENICarthage, je développe une double compétence en modélisation géométrique des manipulateurs et en simulation de systèmes électroniques de puissance. Rigoureuse et curieuse, je mobilise des outils avancés (MATLAB, CST, LTspice) et des langages de programmation (Python, C++) pour analyser, simuler et optimiser des systèmes complexes.
            </p>
            <div className="mt-4 d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start">
              <a href={cvPDF} download className="btn btn-light fw-semibold px-4">
                <Download size={18} className="me-2" />Télécharger CV
              </a>
              <button onClick={() => scrollTo('contact')} className="btn btn-outline-light px-4">
                Contacte
              </button>
            </div>
            <div className="hero-stats d-flex gap-4 mt-5 flex-wrap justify-content-center justify-content-lg-start">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center">
            <div className="profile-frame mx-auto">
              <img src={profile} alt="Khaoula Trabelsi" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
      <button className="scroll-cue" onClick={() => scrollTo('about')} aria-label="Voir la suite">
        <ArrowDown size={20} />
      </button>
    </div>
  );
};

export default Home;
