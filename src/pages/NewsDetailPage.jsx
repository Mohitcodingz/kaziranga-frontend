import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsData } from '../data/newsData';

export default function NewsDetailPage({ fixedSlug }) {
  const { slug } = useParams();
  const currentSlug = fixedSlug || slug;

  const article =
    newsData.find((a) => a.slug === currentSlug || a.id === currentSlug) || newsData[0];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">

        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-6">
          <Link to="/" className="text-kaziranga-800 hover:underline">Home</Link>
          {' / '}
          <Link to="/news" className="text-kaziranga-800 hover:underline">News &amp; Blog</Link>
          {' / '}
          <span className="text-slate-800 font-semibold">{article.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Article ── */}
          <div className="lg:col-span-2">
            <h1 className="text-[28px] font-extrabold text-kaziranga-800 leading-snug mb-3">
              {article.title}
            </h1>

            <p className="text-xs text-slate-500 mb-5">
              <span>📅 Published on {article.date}</span>
              {' • '}
              <span>✍️ By {article.author}</span>
            </p>

            <div className="max-h-[400px] overflow-hidden rounded-xl mb-6">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="text-slate-700 text-[15px] leading-relaxed whitespace-pre-line">
              {article.content}
            </div>

            <div className="mt-10 pt-5 border-t border-slate-200">
              <Link
                to="/online-kaziranga-safari-booking"
                className="inline-block bg-kaziranga-800 text-white font-bold py-3 px-7 rounded-md hover:opacity-90 transition-opacity"
              >
                Book Your Safari in Kaziranga →
              </Link>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 sticky top-24">
              <h3 className="text-[18px] font-bold text-slate-800 mb-4">Other Recent Articles</h3>
              {newsData
                .filter((item) => item.id !== article.id)
                .map((item) => (
                  <div
                    key={item.id}
                    className="mb-4 pb-3 border-b border-slate-200 last:border-0 last:mb-0"
                  >
                    <Link
                      to={`/news/${item.slug}`}
                      className="text-kaziranga-800 font-semibold text-sm block mb-1 hover:underline"
                    >
                      {item.title}
                    </Link>
                    <small className="text-slate-400 text-xs">📅 {item.date}</small>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
