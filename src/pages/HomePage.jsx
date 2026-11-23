import React from 'react';
import { Link } from 'react-router-dom';
import SafariPriceTable from '../components/SafariPriceTable';
import SafariBookingWidget from '../components/SafariBookingWidget';
import DistanceTable from '../components/DistanceTable';
import TourCard from '../components/TourCard';
import FaqAccordion from '../components/FaqAccordion';
import QuickFactsTable from '../components/QuickFactsTable';
import { toursData } from '../data/toursData';
import { newsData } from '../data/newsData';
import { Compass, ShieldAlert, Award, Calendar, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Banner Section */}
      <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] w-full bg-[url('/assets/img/Rhino.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-900/40 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-safariGold/90 text-slate-950 text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-lg">
              <Award className="w-4 h-4" /> UNESCO World Heritage Site
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
              Kaziranga National Park Online
            </h1>
            <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto font-medium drop-shadow leading-relaxed">
              Home to the Great Indian One-Horned Rhinoceros & Royal Bengal Tigers. Reserve your Jeep and Elephant Safari permits online.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                to="/online-kaziranga-safari-booking"
                className="btn-gold px-6 py-3 text-sm sm:text-base font-bold uppercase tracking-wider"
              >
                Book Safari Now
              </Link>
              <Link
                to="/tour-packages"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-6 py-3 rounded-lg text-sm sm:text-base font-bold transition-all"
              >
                Tour Packages
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Safari Pricing & Live Interactive Booking Engine */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: Price Tables & Regulations */}
            <div className="lg:col-span-7">
              <SafariPriceTable />
            </div>

            {/* Right 5 Columns: Interactive Calendar & Booking Form */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <SafariBookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Triumph & Introduction */}
      <section className="py-14 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Wildlife Heritage of Assam
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Kaziranga National Park - Global Conservation Milestone
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
                Through decades of dedicated frontline forest protection, Kaziranga National Park stands as an internationally renowned conservation victory. From a critically endangered count of only 40 rhinos in 1911, the population has grown to over 2,400 individuals today according to the latest government census.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
                Spanning over 1,000 square kilometers across Golaghat, Nagaon, and Sonitpur districts, the sanctuary borders the majestic Brahmaputra River, nourishing extensive wetlands and elephant grass savannahs that harbor India's Big Five.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="/assets/img/book-safari.jpg"
                  alt="Kaziranga Safari Experience"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distance and Travel Time Table */}
      <DistanceTable />

      {/* Top Activities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Recent & Top Safari Activities
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Immerse yourself in authentic Assam wildlife safaris guided by certified local naturalists
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Jeep Safari Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-52 overflow-hidden relative">
                <img
                  src="/assets/img/jeep-safari-kaziranga.jpg"
                  alt="Jeep Safari Kaziranga"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-safariGold text-slate-950 text-xs font-bold px-2.5 py-1 rounded shadow">
                  4x4 Gypsy Game Drive
                </span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Jeep Safari Kaziranga</h3>
                <p className="text-xs text-slate-500 mb-3">Western, Central, Eastern & Burapahar Ranges</p>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 flex-grow">
                  Explore deep jungle tracks, water bodies, and scenic viewpoints in registered open 4WD Maruti Gypsies.
                </p>
                <Link
                  to="/jeep-safari"
                  className="w-full text-center py-2.5 bg-kaziranga-800 hover:bg-kaziranga-900 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors"
                >
                  Book Jeep Safari
                </Link>
              </div>
            </div>

            {/* Elephant Safari Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-52 overflow-hidden relative">
                <img
                  src="/assets/img/elephant-safari-kaziranga.jpg"
                  alt="Elephant Safari Kaziranga"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-safariGold text-slate-950 text-xs font-bold px-2.5 py-1 rounded shadow">
                  Morning Mahout Ride
                </span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Elephant Safari Kaziranga</h3>
                <p className="text-xs text-slate-500 mb-3">Bagori & Kohora Ranges (Morning 5 AM / 6 AM)</p>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 flex-grow">
                  Approach wild One-Horned Rhinos within close photographic distance atop trained mahout elephants.
                </p>
                <Link
                  to="/elephant-safari"
                  className="w-full text-center py-2.5 bg-kaziranga-800 hover:bg-kaziranga-900 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors"
                >
                  Book Elephant Safari
                </Link>
              </div>
            </div>

            {/* Tour Packages Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-52 overflow-hidden relative">
                <img
                  src="/assets/img/tour-package-kaziranga.jpg"
                  alt="Tour Packages Kaziranga"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-safariGold text-slate-950 text-xs font-bold px-2.5 py-1 rounded shadow">
                  Complete Holidays
                </span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Wildlife Holiday Packages</h3>
                <p className="text-xs text-slate-500 mb-3">2 Nights to 8 Nights Complete Circuits</p>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 flex-grow">
                  Inclusive vacation itineraries covering luxury jungle eco-resorts, meals, airport transfers, and confirmed safaris.
                </p>
                <Link
                  to="/tour-packages"
                  className="w-full text-center py-2.5 bg-kaziranga-800 hover:bg-kaziranga-900 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors"
                >
                  Explore All Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages Grid */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Featured Wildlife Holiday Packages
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Handcrafted wildlife itineraries designed for families, photographers, and nature enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toursData.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <QuickFactsTable />

      {/* Things to do in Kaziranga & Timings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                  Park Exploration
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
                  Things to Do in Kaziranga National Park
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
                  From sunrise elephant rides through golden grassland mists to exhilarating open Gypsy drives, Kaziranga provides unmatched encounters with majestic wildlife. Other popular regional activities include orchid watching at the National Orchid Park, tea tasting at Hathikuli organic tea estate, and cultural evenings with authentic Assamese folk dances.
                </p>
              </div>

              {/* Timing Tables */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Kaziranga Elephant Safari Timing & Zones
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                    <thead className="bg-kaziranga-800 text-white text-xs font-bold uppercase">
                      <tr>
                        <th className="py-3 px-4">Range</th>
                        <th className="py-3 px-4">Morning Shift</th>
                        <th className="py-3 px-4">Evening Shift</th>
                        <th className="py-3 px-4">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      <tr>
                        <td className="py-2.5 px-4 font-bold text-slate-900">Central Range (Kohora)</td>
                        <td className="py-2.5 px-4">05:00 AM - 07:00 AM</td>
                        <td className="py-2.5 px-4 text-slate-400">N/A</td>
                        <td className="py-2.5 px-4">01 Hour</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="py-2.5 px-4 font-bold text-slate-900">Western Range (Bagori)</td>
                        <td className="py-2.5 px-4">05:00 AM - 07:00 AM</td>
                        <td className="py-2.5 px-4 text-slate-400">N/A</td>
                        <td className="py-2.5 px-4">01 Hour</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Kaziranga Jeep Safari Timing & Zones
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                    <thead className="bg-kaziranga-800 text-white text-xs font-bold uppercase">
                      <tr>
                        <th className="py-3 px-4">Range</th>
                        <th className="py-3 px-4">Morning Shift</th>
                        <th className="py-3 px-4">Afternoon Shift</th>
                        <th className="py-3 px-4">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      <tr>
                        <td className="py-2.5 px-4 font-bold text-slate-900">Kohora (Central)</td>
                        <td className="py-2.5 px-4">07:30 - 11:30 AM</td>
                        <td className="py-2.5 px-4">01:30 - 04:35 PM</td>
                        <td className="py-2.5 px-4">02 Hours</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="py-2.5 px-4 font-bold text-slate-900">Bagori (Western)</td>
                        <td className="py-2.5 px-4">07:30 - 11:30 AM</td>
                        <td className="py-2.5 px-4">01:30 - 04:35 PM</td>
                        <td className="py-2.5 px-4">02 Hours</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-bold text-slate-900">Agaratoli (Eastern)</td>
                        <td className="py-2.5 px-4">07:30 - 11:30 AM</td>
                        <td className="py-2.5 px-4">01:30 - 04:35 PM</td>
                        <td className="py-2.5 px-4">02 Hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src="/assets/img/jeep-safari-kaziranga-natio.jpg"
                  alt="Kaziranga Jeep Safari"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src="/assets/img/kazirnag-buffalo.jpg"
                  alt="Wild Water Buffalo"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Clear answers regarding safari booking processes, zone guidelines, and forest department rules
            </p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* Best Time to Visit Section */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Seasonal Calendar
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Best Time to Visit Kaziranga National Park
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
                The park is officially open for tourism every year from <strong>November 1st through April 30th</strong>. Winter months (November to February) are the peak season characterized by pleasant daytime weather (15°C to 25°C), cool mornings, and vibrant migratory bird flocks.
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                  <thead className="bg-kaziranga-800 text-white text-xs font-bold uppercase">
                    <tr>
                      <th className="py-3 px-4">Season</th>
                      <th className="py-3 px-4">Months</th>
                      <th className="py-3 px-4">Average Temperature</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    <tr className="bg-emerald-50/50">
                      <td className="py-2.5 px-4 font-bold text-emerald-900">Winter (Peak)</td>
                      <td className="py-2.5 px-4 text-slate-800">November to February</td>
                      <td className="py-2.5 px-4 text-emerald-700 font-semibold">05 °C to 25 °C</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-bold text-slate-900">Summer</td>
                      <td className="py-2.5 px-4 text-slate-800">February to May</td>
                      <td className="py-2.5 px-4 text-amber-700 font-semibold">07 °C to 37 °C</td>
                    </tr>
                    <tr className="bg-rose-50/60">
                      <td className="py-2.5 px-4 font-bold text-rose-900">Monsoon (Closed)</td>
                      <td className="py-2.5 px-4 text-slate-800">June to October</td>
                      <td className="py-2.5 px-4 text-rose-700 font-semibold">10 °C to 35 °C (Flooded)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="/assets/img/kaziweathers.jpg"
                  alt="Kaziranga Weather & Seasons"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Safari News & Blog */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Kaziranga News & Safari Updates
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Stay up-to-date with current wildlife conservation news and safari guidelines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded w-max mb-2">
                    📅 {item.date}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-kaziranga-800 transition-colors line-clamp-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4 flex-grow">
                    {item.excerpt}
                  </p>
                  <Link
                    to={`/news/${item.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-kaziranga-800 hover:text-kaziranga-900 mt-auto"
                  >
                    Read Full Story <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
