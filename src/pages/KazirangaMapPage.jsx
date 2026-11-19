import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, Compass, ArrowRight } from 'lucide-react';

export default function KazirangaMapPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Geographic Navigation
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kaziranga National Park Map & Tourist Routes
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Interactive overview of park boundaries, safari circuit tracks, the Brahmaputra River, and transit entry gates along NH-37.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map Illustration */}
          <div className="lg:col-span-8 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm">
            <div className="rounded-xl overflow-hidden border border-slate-100 shadow-inner">
              <img
                src="/assets/img/zones-kazirnag.jpg"
                alt="Kaziranga National Park Zones Map"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 px-1">
              <span>National Park Core Area: 430 sq. km</span>
              <span>Southern Border: National Highway 37</span>
              <span>Northern Border: Brahmaputra River</span>
            </div>
          </div>

          {/* Tourist Gates Summary */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-kaziranga-800" />
              Four Park Entry Gates
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <strong className="text-slate-900 block font-bold mb-0.5">1. Kohora (Central Gate):</strong>
                Main administrative center, hotel cluster, elephant rides (foreigners), and scenic grassland jeep tracks.
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <strong className="text-slate-900 block font-bold mb-0.5">2. Bagori (Western Gate):</strong>
                13 km west of Kohora. Primary range for Indian elephant rides and highest rhino concentration.
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <strong className="text-slate-900 block font-bold mb-0.5">3. Agaratoli (Eastern Gate):</strong>
                22 km east of Kohora. World-class wetland birding zone adjoining the Brahmaputra River.
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <strong className="text-slate-900 block font-bold mb-0.5">4. Ghorakati (Burapahar Gate):</strong>
                33 km west of Kohora. Hilly terrain bordering Karbi Anglong hills; ideal for Hoolock Gibbon tracking.
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/online-kaziranga-safari-booking"
                className="w-full py-3 bg-kaziranga-800 hover:bg-kaziranga-900 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-1.5"
              >
                Book Safari in Any Zone <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
