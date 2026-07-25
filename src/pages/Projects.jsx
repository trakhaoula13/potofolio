import React from 'react';
import projectsData from '../data/projects';

// Couleurs personnalisées par projet
const colors = ['#00b4d8', '#2ecc71', '#9b59b6', '#f39c12'];

const Projects = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold">Projets</h2>
        <p className="text-muted">Recherche & développement en robotique et électronique</p>
        <div style={{ width: '60px', height: '3px', background: '#00b4d8', margin: '10px auto' }}></div>
      </div>

      <div className="row g-4">
        {projectsData.map((proj, index) => {
          const color = colors[index % colors.length];
          return (
            <div key={proj.id} className="col-md-6 col-lg-3">
              <div 
                className="project-card-masonry" 
                style={{ borderTop: `4px solid ${color}` }}
              >
                <div className="project-card-image">
                  <img src={proj.image} alt={proj.title} />
                </div>
                <div className="project-card-body">
                  <h5>{proj.title}</h5>
                  <p>{proj.description}</p>
                  <div className="project-card-techs">
                    {proj.techs.map((tech, idx) => (
                      <span key={idx} style={{ background: color + '20', color: color }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-card-actions">
                    {/* Bouton unique : Rapport */}
                    <a
                      href={proj.demo}  // ou proj.pdf si vous avez gardé le champ pdf
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-rapport"
                      style={{ background: color }}
                    >
                      📄 Rapport
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .project-card-masonry {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .project-card-masonry:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
        }

        .project-card-image {
          height: 200px;
          overflow: hidden;
          position: relative;
        }

        .project-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .project-card-masonry:hover .project-card-image img {
          transform: scale(1.08);
        }

        .project-card-body {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-card-body h5 {
          font-weight: 700;
          font-size: 1.1rem;
          color: #0b1a2b;
          margin-bottom: 6px;
          min-height: 2.5rem;
        }

        .project-card-body p {
          font-size: 0.85rem;
          color: #6c757d;
          line-height: 1.5;
          flex: 1;
          margin-bottom: 12px;
        }

        .project-card-techs {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin: 8px 0 12px;
        }

        .project-card-techs span {
          font-size: 0.7rem;
          font-weight: 600;
          padding: 4px 14px;
          border-radius: 20px;
          background: #f0f4f8;
          color: #0b1a2b;
          transition: all 0.3s;
        }

        .project-card-masonry:hover .project-card-techs span {
          transform: translateY(-2px);
        }

        .project-card-actions {
          display: flex;
          gap: 10px;
          margin-top: 4px;
        }

        .btn-rapport {
          display: inline-block;
          padding: 6px 20px;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          color: white;
          background: #00b4d8; /* couleur par défaut, sera surchargée par le style inline */
        }

        .btn-rapport:hover {
          opacity: 0.85;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        @media (max-width: 768px) {
          .project-card-image {
            height: 160px;
          }
          .project-card-body h5 {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;