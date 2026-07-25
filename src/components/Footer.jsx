import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer text-white py-4">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-md-6">
            <div className="d-flex justify-content-center gap-3">
              <a className="btn btn-dark mx-2" href="https://www.linkedin.com/in/khaoula-trabelsi-354ab5282/">
                <FaLinkedin size={24} />
              </a>
              <a className="btn btn-dark mx-2" href="https://github.com/trakhaoula13">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column gap-2 align-items-end">
              <span><Mail size={20} /> Khaoula.trabelsi@enicar.ucar.tn</span>
              <span><Phone size={20} /> +216 56925548</span>
            </div>
          </div>
        <div className="footer-copyright text-center">
          <p>&copy; 2026 Khaoula Trabelsi. Tous droits réservés</p>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;