import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  { src: '/assets/img/kaziranga-national-park.jpg', title: 'Great Indian One-Horned Rhinoceros in Grassland' },
  { src: '/assets/img/jeep-safari-kaziranga.jpg', title: 'Open 4x4 Gypsy Game Drive in Western Range' },
  { src: '/assets/img/elephant-safari-kaziranga.jpg', title: 'Morning Elephant Safari in Bagori Range' },
  { src: '/assets/img/kazirnag-buffalo.jpg', title: 'Asiatic Wild Water Buffalo Herd near Water Hole' },
  { src: '/assets/img/indian-elephant.jpg', title: 'Asian Wild Elephant Herd in Forest Marsh' },
  { src: '/assets/img/bird-kaziranga.jpg', title: 'Avian Diversity of Agaratoli Sohola Wetland' },
  { src: '/assets/img/tiger-bengal-kaziranga.jpg', title: 'Royal Bengal Tiger in Tall Elephant Grass' },
  { src: '/assets/img/deer-kaziranga.jpg', title: 'Eastern Swamp Deer (Barasingha) Group' },
  { src: '/assets/img/kaziranaga-photo.jpg', title: 'Golden Hour Sunset over Kaziranga Savannah' }
];

export default function KazirangaGalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Visual Showcase
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kaziranga Wildlife & Safari Photo Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            A photographic celebration of majestic wildlife, morning mist, and untamed natural beauty in the heart of Assam.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(img)}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 bg-slate-100"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white">
                <span className="text-xs font-semibold drop-shadow line-clamp-1">{img.title}</span>
                <span className="p-1 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-safariGold group-hover:text-slate-950 transition-colors">
                  <ZoomIn className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedImg && (
          <div
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
            >
              <button
                type="button"
                onClick={() => setSelectedImg(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors"
                aria-label="Close image"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImg.src}
                alt={selectedImg.title}
                className="w-full max-h-[75vh] object-contain bg-black/40"
              />
              <div className="p-4 bg-slate-900 border-t border-slate-800 text-center">
                <p className="text-white text-sm font-semibold">{selectedImg.title}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
