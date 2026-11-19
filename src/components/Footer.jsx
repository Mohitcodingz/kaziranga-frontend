import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About Kaziranga */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-4 pb-2 border-b-2 border-safariGold inline-block">
              About Kaziranga
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/wildlife-in-kaziranga-national-park" className="text-slate-400 hover:text-safariGold transition-colors">
                  Wildlife in Kaziranga
                </Link>
              </li>
              <li>
                <Link to="/kaziranga-travel-tips" className="text-slate-400 hover:text-safariGold transition-colors">
                  Kaziranga Travel Tips
                </Link>
              </li>
              <li>
                <Link to="/best-time-to-visit" className="text-slate-400 hover:text-safariGold transition-colors">
                  Best Time to Visit
                </Link>
              </li>
              <li>
                <Link to="/how-to-reach-kaziranga" className="text-slate-400 hover:text-safariGold transition-colors">
                  How To Reach
                </Link>
              </li>
              <li>
                <Link to="/tourist-attractions-Kaziranga" className="text-slate-400 hover:text-safariGold transition-colors">
                  Tourist Attractions
                </Link>
              </li>
              <li>
                <Link to="/do-and-dont-in-kaziranga" className="text-slate-400 hover:text-safariGold transition-colors">
                  Do's and Don'ts
                </Link>
              </li>
              <li>
                <Link to="/news/assam-chief-minister-invites-actor-leonardo-dicaprio" className="text-slate-400 hover:text-safariGold transition-colors">
                  Assam CM Invites DiCaprio
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Tour Packages */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-4 pb-2 border-b-2 border-safariGold inline-block">
              Tour Packages
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/tour/kaziranaga-weekend-tour" className="text-slate-400 hover:text-safariGold transition-colors">
                  Kaziranga Weekend Tour (2N/3D)
                </Link>
              </li>
              <li>
                <Link to="/tour/rhino-and-tiger-tour" className="text-slate-400 hover:text-safariGold transition-colors">
                  Rhino & Tiger Circuit (8N/9D)
                </Link>
              </li>
              <li>
                <Link to="/tour/north-east-golden-triangle-tour" className="text-slate-400 hover:text-safariGold transition-colors">
                  North East Golden Triangle (6N/7D)
                </Link>
              </li>
              <li>
                <Link to="/tour/splendor-assam-tour" className="text-slate-400 hover:text-safariGold transition-colors">
                  Splendor of Assam (6N/7D)
                </Link>
              </li>
              <li>
                <Link to="/tour/kaziranga-shillong-tour" className="text-slate-400 hover:text-safariGold transition-colors">
                  Kaziranga & Shillong (4N/5D)
                </Link>
              </li>
              <li>
                <Link to="/tour/kaziranga-photography-tour" className="text-slate-400 hover:text-safariGold transition-colors">
                  Wildlife Photography Tour
                </Link>
              </li>
              <li>
                <Link to="/tour-packages" className="text-safariGold hover:underline font-semibold inline-flex items-center gap-1">
                  View All Packages →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Wildlife Safaris */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-4 pb-2 border-b-2 border-safariGold inline-block">
              Wildlife Safari
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/jeep-safari" className="text-slate-400 hover:text-safariGold transition-colors">
                  Jeep Safari Kaziranga
                </Link>
              </li>
              <li>
                <Link to="/elephant-safari" className="text-slate-400 hover:text-safariGold transition-colors">
                  Elephant Safari Kaziranga
                </Link>
              </li>
              <li>
                <Link to="/online-kaziranga-safari-booking" className="text-slate-400 hover:text-safariGold transition-colors">
                  Online Safari Booking
                </Link>
              </li>
              <li>
                <Link to="/one-horned-rhino" className="text-slate-400 hover:text-safariGold transition-colors">
                  One Horned Rhino Profile
                </Link>
              </li>
              <li>
                <Link to="/birdwatching-in-kaziranga" className="text-slate-400 hover:text-safariGold transition-colors">
                  Bird Watching Expeditions
                </Link>
              </li>
              <li>
                <Link to="/kaziranga-safari-zones" className="text-slate-400 hover:text-safariGold transition-colors">
                  Kaziranga Safari Zones
                </Link>
              </li>
              <li>
                <Link to="/kaziranga-gallery" className="text-slate-400 hover:text-safariGold transition-colors">
                  Kaziranga Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Help & Contact */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-4 pb-2 border-b-2 border-safariGold inline-block">
              Support & Legal
            </h3>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <Link to="/kaziranga-contact" className="text-slate-400 hover:text-safariGold transition-colors">
                  Contact Safari Desk
                </Link>
              </li>
              <li>
                <Link to="/kaziranga-faq" className="text-slate-400 hover:text-safariGold transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/payment-kaziranga" className="text-slate-400 hover:text-safariGold transition-colors">
                  Payment & Refund Terms
                </Link>
              </li>
              <li>
                <Link to="/kaziranga-terms-conditions" className="text-slate-400 hover:text-safariGold transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/kaziranga-privacy-policy" className="text-slate-400 hover:text-safariGold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-slate-400 hover:text-safariGold transition-colors">
                  News & Safari Updates
                </Link>
              </li>
            </ul>

            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60 text-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-safariGold flex-shrink-0" />
                <span>+91-9911990414</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-safariGold flex-shrink-0" />
                <span>info@kaziranganationalparkonline.in</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-safariGold flex-shrink-0 mt-0.5" />
                <span>Kohora Range, NH-37, Assam 785609</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 bg-slate-950/40 p-4 rounded-xl">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-safariGold flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-safariGold mb-1">
                Legal Travel Disclaimer:
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed text-justify">
                kaziranganationalparkonline.in is a privately managed travel assistance and safari reservation platform created to help wildlife travelers with seamless Assam safari planning. We are an authorized private tour operator and are not directly associated with or endorsed by the official Assam Forest Department or any government authority. Our services include expert safari zone guidance, priority travel assistance, premium resort bookings, and luxury tour packages, offered with a professional service charge for end-to-end convenience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mt-12 bg-slate-950 py-4 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Kaziranga National Park Online. All Rights Reserved. Operated by Wild Steps - Private Travel Agency organizing Assam wildlife tour packages and Jeep safaris.
          </p>
        </div>
      </div>
    </footer>
  );
}
