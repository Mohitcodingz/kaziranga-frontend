import React from 'react';
import TourCard from '../components/TourCard';
import { toursData } from '../data/toursData';

export default function TourPackagesPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            All-Inclusive Wildlife Holidays
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kaziranga & Assam Tour Packages
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Handcrafted holiday packages featuring luxury eco-resorts, jeep & elephant safaris, certified escort naturalists, and seamless airport transit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toursData.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}
