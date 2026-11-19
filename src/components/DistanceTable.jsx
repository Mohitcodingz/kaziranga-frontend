import React from 'react';
import { distanceData } from '../data/distanceData';
import { Car, Bus, Info } from 'lucide-react';

export default function DistanceTable() {
  return (
    <section className="py-12 bg-slate-100/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Distance and Travel Time to Kaziranga
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Convenient road transit connectivity from major transit hubs, railway stations, and regional airports across Assam and Meghalaya.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-kaziranga-800 text-white text-xs font-bold uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">City / Transit Hub</th>
                  <th className="py-3.5 px-4 sm:px-6">Approx Distance</th>
                  <th className="py-3.5 px-4 sm:px-6">
                    <span className="flex items-center gap-1.5">
                      <Car className="w-4 h-4 text-emerald-300" /> By Car / Taxi
                    </span>
                  </th>
                  <th className="py-3.5 px-4 sm:px-6">
                    <span className="flex items-center gap-1.5">
                      <Bus className="w-4 h-4 text-amber-300" /> By State / Deluxe Bus
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {distanceData.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-slate-50/60 hover:bg-slate-50'}>
                    <td className="py-3 px-4 sm:px-6 font-bold text-slate-900">{item.city}</td>
                    <td className="py-3 px-4 sm:px-6 font-semibold text-emerald-700">{item.distance}</td>
                    <td className="py-3 px-4 sm:px-6">{item.carTime}</td>
                    <td className="py-3 px-4 sm:px-6">{item.busTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
            <Info className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Travel Note:</strong> The travel timings shown above are approximate. Actual journey time may vary depending upon road conditions, weather, traffic along National Highway 37, and your exact departure point.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
