// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={project.image}
        className="card-img-top"
        alt={project.title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text text-muted small">{project.description}</p>
        <div className="mt-2 mb-3">
          {project.techs.map((tech, idx) => (
            <span key={idx} className="badge bg-secondary me-1">{tech}</span>
          ))}
        </div>
        <div className="mt-auto">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info btn-sm text-white w-100"
          >
            📄 Lire le rapport
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;