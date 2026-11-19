import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, ArrowRight } from 'lucide-react';

export default function TourCard({ tour }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
      <Link to={`/tour/${tour.slug}`} className="flex flex-col h-full">
        {/* Thumbnail with overlay badges */}
        <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-3 inset-x-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1 bg-safariGold text-slate-950 text-xs font-bold px-2.5 py-1 rounded-md shadow">
              <Clock className="w-3.5 h-3.5" /> {tour.duration}
            </span>
            <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-2 py-0.5 rounded-md">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> {tour.reviews}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-kaziranga-800 transition-colors mb-2 line-clamp-1">
            {tour.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4 flex-grow">
            {tour.description}
          </p>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
            <div>
              <span className="block text-[11px] text-slate-400 uppercase font-bold tracking-wider">Starts from</span>
              <span className="text-base sm:text-lg font-extrabold text-kaziranga-800">{tour.price}</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-kaziranga-800 group-hover:bg-kaziranga-900 px-3.5 py-2 rounded-lg transition-all shadow-sm">
              Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
