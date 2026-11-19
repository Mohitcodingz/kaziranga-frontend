import React from 'react';
import SafariBookingWidget from '../components/SafariBookingWidget';
import SafariPriceTable from '../components/SafariPriceTable';
import { ShieldCheck, Check, Info } from 'lucide-react';

export default function JeepSafariPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            4x4 Gypsy Wildlife Game Drives
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kaziranga Jeep Safari Online Booking
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Traverse the savannahs, wetlands, and tropical woodlands of Kaziranga in authorized 4x4 open Gypsies escorted by certified naturalists.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
              <SafariPriceTable />
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                About Kaziranga Jeep Safari Expeditions
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                Jeep safaris operate twice every day across morning and afternoon shifts in all four designated tourism ranges: Bagori (Western), Kohora (Central), Agaratoli (Eastern), and Burapahar. The open 4WD vehicle allows optimal visibility for birding, wildlife tracking, and photography.
              </p>

              <h4 className="text-base font-bold text-slate-900 pt-2">
                Essential Park Regulations for Jeep Safaris:
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Maximum seating is strictly capped at 6 Adults and 1 child under 5 years per vehicle.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Tourists are not allowed to alight or step down from the Gypsy anywhere on safari tracks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Plastic bags, loud electronic music, alcohol, and smoking are strictly forbidden by law.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Wear subdued earth-toned apparel (olive green, khaki, brown) to avoid startling animals.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SafariBookingWidget defaultVehicle="Jeep" />
          </div>
        </div>
      </div>
    </div>
  );
}
