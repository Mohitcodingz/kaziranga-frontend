import React from 'react';
import { History, Bird, Layers, PieChart } from 'lucide-react';

export default function QuickFactsTable() {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: History & Fauna */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <History className="w-5 h-5 text-kaziranga-800" />
                <h3 className="text-lg font-bold text-slate-900">
                  Kaziranga Milestones & History
                </h3>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
                <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-kaziranga-800 w-16">1905</td>
                      <td className="py-2.5 px-4 text-slate-700">Conservation journey initiated by Lady Curzon for Rhino protection.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-slate-50/50">
                      <td className="py-2.5 px-4 font-bold text-kaziranga-800">1908</td>
                      <td className="py-2.5 px-4 text-slate-700">Notified as a Reserve Forest with focus on Indian Rhinoceros.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-kaziranga-800">1916</td>
                      <td className="py-2.5 px-4 text-slate-700">Designated officially as a Game Sanctuary.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-slate-50/50">
                      <td className="py-2.5 px-4 font-bold text-kaziranga-800">1937</td>
                      <td className="py-2.5 px-4 text-slate-700">Opened for the first time for public wildlife visitors.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-kaziranga-800">1950</td>
                      <td className="py-2.5 px-4 text-slate-700">Sanctuary renamed officially to Kaziranga Wildlife Sanctuary.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-slate-50/50">
                      <td className="py-2.5 px-4 font-bold text-kaziranga-800">1974</td>
                      <td className="py-2.5 px-4 text-slate-700">Declared as a National Park by the Government of India.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-kaziranga-800">1985</td>
                      <td className="py-2.5 px-4 text-slate-700">Inscribed on UNESCO World Heritage List.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Bird className="w-5 h-5 text-kaziranga-800" />
                <h3 className="text-lg font-bold text-slate-900">
                  Kaziranga Fauna at a Glance
                </h3>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
                <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900 w-24">Mammals</td>
                      <td className="py-2.5 px-4 text-slate-700">39 species including Schedule I Rhino, Bengal Tiger, Elephant, Wild Buffalo.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-slate-50/50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Birds</td>
                      <td className="py-2.5 px-4 text-slate-700">478 species including 25 globally threatened and 21 near-threatened species.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Reptiles</td>
                      <td className="py-2.5 px-4 text-slate-700">Diverse species of Python, King Cobra, endemic Lizards & Turtles.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-slate-50/50">
                      <td className="py-2.5 px-4 font-bold text-slate-900">Fishes</td>
                      <td className="py-2.5 px-4 text-slate-700">40+ indigenous wetland and Brahmaputra riverine species.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Column 2: Area Expansion & Ecosystem */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-kaziranga-800" />
                <h3 className="text-lg font-bold text-slate-900">
                  Area Expansion Story
                </h3>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
                <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-medium text-slate-800">Original National Park Area</td>
                      <td className="py-2.5 px-4 font-bold text-emerald-700 text-right">429.93 Sq. Km.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-slate-50/50">
                      <td className="py-2.5 px-4 font-medium text-slate-800">First Addition to KNP</td>
                      <td className="py-2.5 px-4 font-bold text-emerald-700 text-right">43.79 Sq. Km.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-medium text-slate-800">Third, Fourth & Fifth Additions</td>
                      <td className="py-2.5 px-4 font-bold text-emerald-700 text-right">2.73 Sq. Km.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-slate-50/50">
                      <td className="py-2.5 px-4 font-medium text-slate-800">Sixth Addition to KNP</td>
                      <td className="py-2.5 px-4 font-bold text-emerald-700 text-right">376.50 Sq. Km.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-medium text-slate-800">Reserve Forests (Kukurakata & Panbari)</td>
                      <td className="py-2.5 px-4 font-bold text-emerald-700 text-right">23.58 Sq. Km.</td>
                    </tr>
                    <tr className="bg-emerald-50/80 font-bold">
                      <td className="py-2.5 px-4 text-emerald-950">Total Calculated Protected Sanctuary</td>
                      <td className="py-2.5 px-4 text-emerald-900 text-right">882.00 Sq. Km.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <PieChart className="w-5 h-5 text-kaziranga-800" />
                <h3 className="text-lg font-bold text-slate-900">
                  Unique Ecosystem Composition
                </h3>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
                <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-slate-100 font-medium">
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 text-slate-800">Grasslands & Savannah (Alluvial)</td>
                      <td className="py-2.5 px-4 font-bold text-slate-900 text-right">51.91%</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-slate-50/50">
                      <td className="py-2.5 px-4 text-slate-800">Moist Mixed Deciduous Forests</td>
                      <td className="py-2.5 px-4 font-bold text-slate-900 text-right">29.13%</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 text-slate-800">Riverine Sand Banks & Chars</td>
                      <td className="py-2.5 px-4 font-bold text-slate-900 text-right">07.12%</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-slate-50/50">
                      <td className="py-2.5 px-4 text-slate-800">Water Bodies & Natural Beels</td>
                      <td className="py-2.5 px-4 font-bold text-slate-900 text-right">06.62%</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 text-slate-800">Swamp & Marshy Areas</td>
                      <td className="py-2.5 px-4 font-bold text-slate-900 text-right">05.21%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
