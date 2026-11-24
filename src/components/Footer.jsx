import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

const footerSections = [
  {
    title: 'About Kaziranga',
    links: [
      { label: 'Wildlife in Kaziranga', to: '/wildlife-in-kaziranga-national-park' },
      { label: 'Kaziranga Travel Tips', to: '/kaziranga-travel-tips' },
      { label: 'Best Time to Visit', to: '/best-time-to-visit' },
      { label: 'How To Reach', to: '/how-to-reach-kaziranga' },
      { label: 'Tourist Attractions', to: '/tourist-attractions-Kaziranga' },
      { label: "Do's and Don'ts", to: '/do-and-dont-in-kaziranga' },
      { label: 'Assam CM Invites DiCaprio', to: '/news/assam-chief-minister-invites-actor-leonardo-dicaprio' }
    ]
  },
  {
    title: 'Tour Packages',
    links: [
      { label: 'Kaziranga Weekend Tour (2N/3D)', to: '/tour/kaziranaga-weekend-tour' },
      { label: 'Rhino & Tiger Circuit (8N/9D)', to: '/tour/rhino-and-tiger-tour' },
      { label: 'North East Golden Triangle (6N/7D)', to: '/tour/north-east-golden-triangle-tour' },
      { label: 'Splendor of Assam (6N/7D)', to: '/tour/splendor-assam-tour' },
      { label: 'Kaziranga & Shillong (4N/5D)', to: '/tour/kaziranga-shillong-tour' },
      { label: 'Wildlife Photography Tour', to: '/tour/kaziranga-photography-tour' },
      { label: 'View All Packages →', to: '/tour-packages', featured: true }
    ]
  },
  {
    title: 'Wildlife Safari',
    links: [
      { label: 'Jeep Safari Kaziranga', to: '/jeep-safari' },
      { label: 'Elephant Safari Kaziranga', to: '/elephant-safari' },
      { label: 'Online Safari Booking', to: '/online-kaziranga-safari-booking' },
      { label: 'One Horned Rhino Profile', to: '/one-horned-rhino' },
      { label: 'Bird Watching Expeditions', to: '/birdwatching-in-kaziranga' },
      { label: 'Kaziranga Safari Zones', to: '/kaziranga-safari-zones' },
      { label: 'Kaziranga Photo Gallery', to: '/kaziranga-gallery' }
    ]
  },
  {
    title: 'Support & Legal',
    links: [
      { label: 'Contact Safari Desk', to: '/kaziranga-contact' },
      { label: 'Frequently Asked Questions', to: '/kaziranga-faq' },
      { label: 'Payment & Refund Terms', to: '/payment-kaziranga' },
      { label: 'Terms & Conditions', to: '/kaziranga-terms-conditions' },
      { label: 'Privacy Policy', to: '/kaziranga-privacy-policy' },
      { label: 'News & Safari Updates', to: '/news' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="site-footer bg-slate-900 text-slate-300 pt-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="site-footer-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {footerSections.map((section, index) => (
            <nav className="site-footer-section" key={section.title} aria-label={section.title}>
              <h3>
                <span>0{index + 1}</span> {section.title}
              </h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className={link.featured ? 'site-footer-featured' : ''}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {section.title === 'Support & Legal' && (
                <address className="site-footer-contact">
                  <a href="tel:+919911990414">
                    <Phone aria-hidden="true" size={14} /> +91-9911990414
                  </a>
                  <a href="mailto:info@kaziranganationalparkonline.in">
                    <Mail aria-hidden="true" size={14} /> info@kaziranganationalparkonline.in
                  </a>
                  <span>
                    <MapPin aria-hidden="true" size={14} /> Kohora Range, NH-37, Assam 785609
                  </span>
                </address>
              )}
            </nav>
          ))}
        </div>

        <aside className="site-footer-disclaimer mt-12 pt-6 border-t border-slate-800/80 bg-slate-950/40 p-4 rounded-xl">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-safariGold flex-shrink-0 mt-0.5" />
            <div>
              <h4>Legal Travel Disclaimer:</h4>
              <p>
                kaziranganationalparkonline.in is a privately managed travel assistance and safari reservation
                platform created to help wildlife travelers with seamless Assam safari planning. We are an
                authorized private tour operator and are not directly associated with or endorsed by the official
                Assam Forest Department or any government authority. Our services include expert safari zone
                guidance, priority travel assistance, premium resort bookings, and luxury tour packages, offered
                with a professional service charge for end-to-end convenience.
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div className="site-footer-bottom mt-12 bg-slate-950 py-4 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} Kaziranga Safari. All Rights Reserved. Operated by Wild Steps - Private
            Travel Agency organizing Assam wildlife tour packages and Jeep safaris.
          </p>
        </div>
      </div>
    </footer>
  );
}