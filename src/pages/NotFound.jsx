import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container text-center py-5" style={{ marginTop: '10vh' }}>
      <h1 className="display-1 fw-bold text-info">404</h1>
      <h2 className="mb-3">Oups ! Page introuvable</h2>
      <p className="text-muted">La page que vous cherchez n'existe pas ou a été déplacée.</p>
      <Link to="/" className="btn btn-dark mt-3">Retour à l'accueil</Link>
    </div>
  );
};

export default NotFound;