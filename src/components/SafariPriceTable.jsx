import React from 'react';
import { jeepSafariRates, elephantSafariRates, peakSeasonRates, pricingInclusions } from '../data/safariRatesData';
import { Users, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function SafariPriceTable() {
  return (
    <div className="space-y-6">
      {/* Jeep Safari Price Section */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-kaziranga-800 flex items-center justify-center text-xl shadow-sm">
            🚙
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              Kaziranga Jeep Safari Booking Price
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Government Official Gypsy & Forest Entry Rates (2026-2027)
            </p>
          </div>
        </div>

        {/* Jeep Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white mb-4">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-kaziranga-800 text-white text-xs font-bold uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4">Safari Zones</th>
                <th className="py-3.5 px-4">Indian National</th>
                <th className="py-3.5 px-4">Foreign National</th>
                <th className="py-3.5 px-4">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {jeepSafariRates.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  <td className="py-3 px-4 font-semibold text-slate-900">{row.zone}</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold">{row.indian}</td>
                  <td className="py-3 px-4 text-blue-700 font-bold">{row.foreigner}</td>
                  <td className="py-3 px-4 text-slate-600">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Badges & Notes */}
        <div className="space-y-2.5 text-xs sm:text-sm">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
            <Users className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <span>
              <strong>Seating Capacity:</strong> Maximum 6 Adults and 1 child (below 5 years) are allowed in 1 Jeep.
            </span>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
            <Clock className="w-4 h-4 text-slate-600 flex-shrink-0" />
            <span>
              <strong>Jeep Timings:</strong> Morning: 7:30 - 9:30 AM, 9:30 - 11:30 AM | Afternoon: 1:30 - 3:30 PM, 2:35 - 4:35 PM
            </span>
          </div>

          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900">
            {peakSeasonRates.map((peak, idx) => (
              <div key={idx} className="font-medium">
                📅 <strong>{peak.period}:</strong> {peak.type} : <span className="font-bold text-amber-800">{peak.rate}</span>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-2 p-3 rounded-lg bg-green-50/70 border border-green-200 text-green-900">
            <ShieldCheck className="w-4 h-4 text-green-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Price Includes:</strong> {pricingInclusions.join(', ')}.
            </span>
          </div>
        </div>
      </div>

      {/* Elephant Safari Price Section */}
      <div className="pt-4 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl shadow-sm">
            🐘
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              Kaziranga Elephant Safari Booking Price
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Morning Dawn Shifts with Forest Department Mahouts
            </p>
          </div>
        </div>

        {/* Elephant Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white mb-4">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-kaziranga-800 text-white text-xs font-bold uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4">Safari Zones</th>
                <th className="py-3.5 px-4">Indian National</th>
                <th className="py-3.5 px-4">Foreign National</th>
                <th className="py-3.5 px-4">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {elephantSafariRates.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  <td className="py-3 px-4 font-semibold text-slate-900">{row.zone}</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold">{row.indian}</td>
                  <td className="py-3 px-4 text-blue-700 font-bold">{row.foreigner}</td>
                  <td className="py-3 px-4 text-slate-600">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Elephant Notice */}
        <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm leading-relaxed">
          <AlertTriangle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong>Elephant Safari Booking Note:</strong> Advance reservation is preferred for a confirmed elephant safari seat. Elephant quota availability and your morning timing slot (5:00 AM or 6:00 AM),(6:00 AM or 7:00 AM)  are confirmed one evening prior.
          </div>
        </div>
      </div>
    </div>
  );
}
