import React, { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  // Récupération des identifiants depuis les variables d'environnement
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    // Vérification que les identifiants sont définis
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: 'error',
        message: '❌ Configuration EmailJS manquante. Vérifiez votre fichier .env.',
      });
      setIsLoading(false);
      return;
    }

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          time: new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Tunis' }),
        },
        PUBLIC_KEY
      );

      console.log('✅ Email envoyé :', result.text);
      setStatus({ type: 'success', message: '✅ Votre message a été envoyé avec succès !' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi :', error);
      setStatus({
        type: 'error',
        message: `❌ Une erreur est survenue : ${error.text || 'Veuillez réessayer plus tard.'}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="border-start border-4 border-info ps-3 mb-4">Contact</h2>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Votre nom"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="votre@email.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                placeholder="Objet de votre message"
                required
                value={form.subject}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="5"
                placeholder="Écrivez votre message ici..."
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            {status.message && (
              <div
                className={`alert ${
                  status.type === 'success' ? 'alert-success' : 'alert-danger'
                } d-flex align-items-center`}
                role="alert"
              >
                {status.type === 'success' ? (
                  <CheckCircle size={20} className="me-2" />
                ) : (
                  <AlertCircle size={20} className="me-2" />
                )}
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-info text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="me-2 spinner-border spinner-border-sm" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send size={18} className="me-2" />
                  Envoyer
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;