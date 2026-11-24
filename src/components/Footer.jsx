import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import logo from '../assets/img/kazirangalogo.webp';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <Link to="/" aria-label="Kaziranga Safari home">
              <img src={logo} alt="Kaziranga Safari" />
            </Link>
            <p>Plan your Kaziranga safari with easy online booking and local travel support.</p>
          </div>

          <nav className="site-footer-section" aria-label="Navigate">
            <h3>Navigate</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/online-kaziranga-safari-booking">Kaziranga Online Safari Booking</Link></li>
              <li><Link to="/tour-packages">Kaziranga Tour Packages</Link></li>
              <li><Link to="/kaziranga-safari-zones">Kaziranga Safari Zones</Link></li>
            </ul>
          </nav>

          <section className="site-footer-section" aria-labelledby="footer-contact-heading">
            <h3 id="footer-contact-heading">Contact</h3>
            <address className="site-footer-contact">
              <div className="site-footer-contact-row">
                <Phone aria-hidden="true" size={16} />
                <div>
                  <strong>Contact Details</strong>
                  <div className="site-footer-contact-inline">
                    <a href="tel:+919873398995">+91- 9873398995</a>
                    <span aria-hidden="true">|</span>
                    <a href="tel:+919599553197">+91- 9599553197</a>
                  </div>
                </div>
              </div>
              <div className="site-footer-contact-row">
                <MapPin aria-hidden="true" size={16} />
                <div>
                  <strong>Address</strong>
                  <span>
                    Near Kohora Central Gate, NH-37, Kaziranga National Park, District Golaghat, Assam - 785609
                  </span>
                </div>
              </div>
            </address>
          </section>
        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Kaziranga Safari. All Rights Reserved. Operated by Wild Steps - Private
            Travel Agency organizing Assam wildlife tour packages and Jeep safaris.
          </p>
        </div>
      </div>
    </footer>
  );
}
