import React from 'react';
import { Link } from 'react-router-dom';
import { zonesData } from '../data/zonesData';
import { MapPin, Compass, Award, ArrowRight } from 'lucide-react';

export default function SafariZonesPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Tourism Ranges
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kaziranga National Park Safari Zones
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Discover the 4 official wildlife tourism ranges. Each zone possesses distinct topography, animal concentration, and safari track routes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {zonesData.map((zone, idx) => (
            <div
              key={zone.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-kaziranga-800 font-extrabold flex items-center justify-center text-sm">
                      {idx + 1}
                    </span>
                    <h2 className="text-xl font-bold text-slate-900">{zone.name}</h2>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    {zone.distanceFromKohora}
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-5 text-justify">
                  {zone.description}
                </p>

                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs sm:text-sm mb-6">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Entry Gate:</strong> {zone.entryGate}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Compass className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Safari Types:</strong> {zone.safariTypes.join(', ')}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Highlights:</strong> {zone.keyHighlights}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <div>
                  <span className="block text-[11px] text-slate-400 font-bold uppercase">Jeep Price (Ind / For)</span>
                  <span className="font-extrabold text-kaziranga-800 text-sm sm:text-base">
                    {zone.pricing.jeepIndian} / {zone.pricing.jeepForeigner}
                  </span>
                </div>
                <Link
                  to="/online-kaziranga-safari-booking"
                  className="inline-flex items-center gap-1.5 py-2.5 px-4 bg-kaziranga-800 hover:bg-kaziranga-900 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  Book Zone <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
