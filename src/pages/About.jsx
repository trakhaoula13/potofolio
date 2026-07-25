import React from 'react';
import { GraduationCap, Briefcase, Heart, Calendar, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="container py-5">
      {/* En-tête avec une petite intro */}
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto text-center">
          {/*<span className="badge bg-info text-white px-3 py-2 mb-3">À propos de moi</span>*/}
          <h2 className="border-start border-4 border-info ps-3 mb-4">À propos de moi</h2>
          <p className="lead text-muted">
            Étudiante en Master Automatique, Robotique et Traitement de l'Information à ENICarthage, 
            je combine modélisation théorique et simulation numérique pour concevoir des systèmes intelligents.
          </p>
        </div>
      </div>

      {/* Timeline - Formation & Expériences */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="d-flex align-items-center gap-2 mb-3">
            <GraduationCap size={28} className="text-info" />
            <h4 className="mb-0">Formation</h4>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-badge bg-info"></div>
              <div className="timeline-content">
                <h6 className="fw-bold mb-1">Master Recherche</h6>
                <p className="text-muted small mb-1">Automatique, Robotique &amp; Traitement d'information</p>
                <span className="badge bg-light text-dark">2025 - Présent</span>
                <p className="text-muted small mt-1">ENICarthage, Tunisie</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-badge bg-secondary"></div>
              <div className="timeline-content">
                <h6 className="fw-bold mb-1">Licence</h6>
                <p className="text-muted small mb-1">Électronique, Électrotechnique &amp; Automatique</p>
                <span className="badge bg-light text-dark">2021 - 2024</span>
                <p className="text-muted small mt-1">ISTIC, Tunisie</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-badge bg-secondary"></div>
              <div className="timeline-content">
                <h6 className="fw-bold mb-1">Baccalauréat</h6>
                <p className="text-muted small mb-1">Mathématiques</p>
                <span className="badge bg-light text-dark">2021</span>
                <p className="text-muted small mt-1">Lycée Cité El Salem, Tunisie</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="d-flex align-items-center gap-2 mb-3">
            <Briefcase size={28} className="text-info" />
            <h4 className="mb-0">Expériences</h4>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-badge bg-info"></div>
              <div className="timeline-content">
                <h6 className="fw-bold mb-1">Stage PFE – TIS Circuits</h6>
                <p className="text-muted small mb-1">Carte IoT &amp; Plateforme de métrologie Python</p>
                <span className="badge bg-light text-dark">2024</span>
                <p className="text-muted small mt-1">Ben Arous, Tunisie</p>

              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-badge bg-secondary"></div>
              <div className="timeline-content">
                <h6 className="fw-bold mb-1">Stage PFA – Sagemcom</h6>
                <p className="text-muted small mb-1">Réécriture d'outils Shell vers Python</p>
                <span className="badge bg-light text-dark">2023</span>
                <p className="text-muted small mt-1">Megrine, Tunisie</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Centres d'intérêt - en badges */}
      <div className="row">
        <div className="col-12">
          <div className="d-flex align-items-center gap-2 mb-3">
            <Heart size={28} className="text-info" />
            <h4 className="mb-0">Centres d'intérêt</h4>
          </div>
          <div className="d-flex flex-wrap gap-3">
            <span className="badge bg-dark text-white px-4 py-2 rounded-pill">🤖 Robotique autonome</span>
            <span className="badge bg-dark text-white px-4 py-2 rounded-pill">⚡ Électronique de puissance</span>
            <span className="badge bg-dark text-white px-4 py-2 rounded-pill">📡 CEM / EMI</span>
            <span className="badge bg-dark text-white px-4 py-2 rounded-pill">📚 Lecture scientifique</span>
            <span className="badge bg-dark text-white px-4 py-2 rounded-pill">💻 Simulation numérique</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;