import React from 'react';
import SafariBookingWidget from '../components/SafariBookingWidget';
import SafariPriceTable from '../components/SafariPriceTable';
import { Check, AlertCircle } from 'lucide-react';

export default function ElephantSafariPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
            Morning Dawn Mahout Rides
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kaziranga Elephant Safari Online Booking
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Encounter the Great One-Horned Rhinoceros at eye level in the morning mist atop trained forest elephants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
              <SafariPriceTable />
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Why Elephant Safari is an Unforgettable Experience
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                Riding an elephant is the most intimate and reliable mode of wildlife viewing in Kaziranga. Elephants can navigate deep swamps, high grass corridors, and marshlands where four-wheelers cannot enter. Rhinos feel at ease in the presence of other pachyderms, allowing visitors to view them up close in their natural habitat.
              </p>

              <h4 className="text-base font-bold text-slate-900 pt-2">
                Shift Timings & Rules:
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Two morning shifts: 5:00 AM - 6:00 AM (Sunrise) and 6:00 AM - 7:00 AM.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Duration: 1 full hour of silent forest traversal through dense grasslands.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Bagori (Western Range) is designated for Indian visitors; Kohora (Central) for Foreign visitors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Seats are limited by the forest department. Advance reservation is strongly recommended.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SafariBookingWidget defaultVehicle="Elephant" />
          </div>
        </div>
      </div>
    </div>
  );
}
