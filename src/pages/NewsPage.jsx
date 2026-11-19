import React from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';

export default function NewsPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-kaziranga-800">
            Kaziranga National Park News &amp; Safari Blogs
          </h1>
          <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto">
            Latest official notices, animal census reports, flood recovery updates, and travel
            advice from Assam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-slate-100 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <small className="text-red-600 font-semibold mb-1 text-xs">
                  📅 {item.date} by {item.author}
                </small>
                <h3 className="text-[17px] font-bold text-slate-800 leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed flex-grow">{item.excerpt}</p>
                <Link
                  to={`/news/${item.slug}`}
                  className="mt-4 self-start inline-block bg-kaziranga-800 text-white text-sm font-semibold py-1.5 px-4 rounded hover:opacity-90 transition-opacity"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
