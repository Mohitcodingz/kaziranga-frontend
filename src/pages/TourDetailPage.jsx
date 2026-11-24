import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { toursData } from '../data/toursData';
import { Clock, Star, Check, Phone, ArrowLeft, Calendar, ShieldCheck } from 'lucide-react';

export default function TourDetailPage({ fixedSlug }) {
  const { slug } = useParams();
  const currentSlug = fixedSlug || slug;

  const tour = toursData.find(
    (t) => t.slug === currentSlug || t.id === currentSlug
  ) || toursData[0];

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6">
          <Link to="/" className="hover:text-kaziranga-800 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/tour-packages" className="hover:text-kaziranga-800 transition-colors">Tour Packages</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">{tour.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content: Left 8 Cols */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                {tour.title}
              </h1>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5" /> {tour.duration}
                </span>
                <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> {tour.reviews}
                </span>
                <span className="text-xs font-bold text-slate-500 bg-slate-200/80 px-3 py-1 rounded-full">
                  All Meals & Safari Included
                </span>
              </div>
            </div>

            {/* Tour Hero Photo */}
            <div className="h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tour Overview */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                Tour Package Overview
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
                {tour.description}
              </p>
            </div>

            {/* Tour Highlights */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900">
                Key Package Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {tour.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Day-by-Day Timeline */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900">
                Detailed Day-by-Day Itinerary
              </h2>
              <div className="relative border-l-2 border-emerald-700/60 ml-3 pl-6 space-y-8">
                {tour.itinerary.map((dayItem, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-emerald-700 border-2 border-white ring-2 ring-emerald-200" />
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      {dayItem.day}: {dayItem.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                      {dayItem.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Booking Sidebar: Right 4 Cols */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-lg space-y-5">
              <div className="pb-4 border-b border-slate-100">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Package Price</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-3xl font-extrabold text-kaziranga-800">{tour.price}</span>
                  <span className="text-xs text-slate-500 font-medium">/ person</span>
                </div>
              </div>

              <div className="space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>3-Star / Luxury Eco-Resort Stay</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>All Daily Buffet Meals Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Confirmed Jeep & Elephant Safaris</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Airport Transfers & Guided Sightseeing</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <Link
                  to="/online-kaziranga-safari-booking"
                  className="w-full text-center py-3 bg-kaziranga-800 hover:bg-kaziranga-900 active:bg-kaziranga-950 text-white font-bold rounded-xl text-sm uppercase tracking-wider transition-colors shadow-md block"
                >
                  Book Package Now
                </Link>

                <a
                  href="tel:+919599553197"
                  className="w-full text-center py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors border border-slate-200 block"
                >
                  <Phone className="w-4 h-4 text-safariGold" /> Call Specialist: +91- 9599553197
                </a>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-slate-400">
                  🔒 100% Secure Booking & Verified Forest Department Passes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
