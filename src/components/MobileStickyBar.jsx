import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
      <div className="grid grid-cols-2 gap-2">
        <Link
          to="/online-kaziranga-safari-booking"
          className="flex items-center justify-center gap-1.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold rounded-lg text-xs tracking-wide uppercase shadow-sm transition-all text-center"
        >
          <Calendar className="w-4 h-4 text-emerald-100" /> Online Booking
        </Link>
        <a
          href="tel:+919599553197"
          className="flex items-center justify-center gap-1.5 py-2.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-bold rounded-lg text-xs tracking-wide uppercase shadow-sm transition-all text-center"
        >
          <Phone className="w-4 h-4 text-safariGold" /> Call Now
        </a>
      </div>
    </div>
  );
}
