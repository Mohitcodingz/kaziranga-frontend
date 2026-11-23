import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Calendar, Compass, Map, Image, Mail } from 'lucide-react';
import logo from '../assets/img/kazirangalogo.webp';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Online Safari Booking', path: '/online-kaziranga-safari-booking' },
    { label: 'Safari Zones', path: '/kaziranga-safari-zones' },
    { label: 'Tour Packages', path: '/tour-packages' },
    { label: 'Kaziranga Map', path: '/kaziranga-map' },
    // { label: 'Gallery', path: '/kaziranga-gallery' },
    { label: 'Contact Us', path: '/kaziranga-contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="site-announcement bg-kaziranga-900 text-white text-xs sm:text-sm py-2 px-4 shadow-inner flex justify-center text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2">
            <span className="bg-safariGold text-slate-950 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded">
              Safari Alert
            </span>
            <span className="text-slate-200">
              Jeep & Elephant Safari Booking Open for 2026-2027 Season | Limited Forest Permits
            </span>
          </div>
          {/* <div className="hidden md:flex items-center gap-4 text-slate-300">
            <a href="tel:+919911990414" className="hover:text-safariGold transition-colors flex items-center gap-1 font-semibold">
              <Phone className="w-3.5 h-3.5 text-safariGold" /> +91-9911990414
            </a>
            <span className="text-slate-600">|</span>
            <a href="tel:+918882859236" className="hover:text-safariGold transition-colors flex items-center gap-1 font-semibold">
              <Phone className="w-3.5 h-3.5 text-safariGold" /> +91-8882859236
            </a>
          </div> */}
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="site-header sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="site-header-inner flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" onClick={() => setMobileOpen(false)} className="site-brand flex items-center gap-3 group">
              <img
                src={logo}
                alt="Kaziranga Safari"
                className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="site-nav hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`site-nav-link px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                      active
                        ? 'bg-kaziranga-800 text-white shadow-sm'
                        : 'text-slate-700 hover:text-kaziranga-800 hover:bg-slate-100/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Quick Action Button & Helplines (Desktop) */}
            <div className="hidden xl:flex items-center gap-3">
              <Link
                to="/online-kaziranga-safari-booking"
                className="site-header-cta inline-flex items-center gap-2 bg-safariGold hover:bg-safariGold-hover text-slate-950 font-bold px-4 py-2 rounded-lg shadow-sm text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" /> Book Safari
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="site-menu-toggle lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-kaziranga-800 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileOpen && (
          <div className="site-mobile-menu lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-xl animate-fadeIn">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`site-mobile-link block px-4 py-2.5 rounded-lg text-base font-semibold ${
                    active
                      ? 'bg-kaziranga-800 text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-kaziranga-800'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-100 space-y-2">
              <Link
                to="/online-kaziranga-safari-booking"
                onClick={() => setMobileOpen(false)}
                className="site-mobile-cta w-full flex items-center justify-center gap-2 bg-safariGold text-slate-950 font-bold py-3 rounded-lg text-sm"
              >
                <Calendar className="w-4 h-4" /> Online Safari Booking
              </Link>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:+919911990414"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-50 text-kaziranga-800 text-xs font-bold rounded-lg border border-emerald-200"
                >
                  <Phone className="w-3.5 h-3.5" /> +91-9911990414
                </a>
                <a
                  href="tel:+918882859236"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 text-slate-800 text-xs font-bold rounded-lg border border-slate-200"
                >
                  <Phone className="w-3.5 h-3.5" /> +91-8882859236
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}