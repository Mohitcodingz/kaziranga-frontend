import React from 'react';
import { Link } from 'react-router-dom';

export default function WildlifePage({ pageType = 'general' }) {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">

        {/* ── RHINO PAGE ── */}
        {pageType === 'rhino' && (
          <div>
            <div className="text-center mb-10">
              <h1 className="text-3xl font-extrabold text-kaziranga-800">
                Great Indian One-Horned Rhinoceros (Rhinoceros unicornis)
              </h1>
              <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto">
                The crown jewel of Kaziranga and the pride of Assam wildlife heritage.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 items-center">
              <div>
                <img
                  src="/assets/img/one-horned-rhino.jpg"
                  alt="One Horned Rhino"
                  className="w-full rounded-xl shadow-md"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Conservation History &amp; Physical Traits
                </h3>
                <p className="text-slate-700 text-[15px] leading-relaxed text-justify mb-4">
                  The Great Indian One-Horned Rhino is the second-largest living land mammal in Asia
                  after the Asian Elephant. With silver-brown armor-like folds of skin, these
                  magnificent beasts weigh between 1.6 to 2.5 tonnes. Their single horn is made of
                  pure keratin (the same protein as human hair and fingernails).
                </p>
                <p className="text-slate-700 text-[15px] leading-relaxed text-justify">
                  Kaziranga alone holds over 2,400 rhinos, which represents approximately 70% of the
                  total global population. Strict round-the-clock patrolling by forest staff has
                  successfully eliminated poaching in recent years.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── BIRDS PAGE ── */}
        {pageType === 'birds' && (
          <div>
            <div className="text-center mb-10">
              <h1 className="text-3xl font-extrabold text-kaziranga-800">
                Birdwatching in Kaziranga National Park
              </h1>
              <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto">
                An Important Bird Area (IBA) recognized by BirdLife International sheltering over
                478 avian species.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 items-center">
              <div>
                <img
                  src="/assets/img/bird-kaziranga.jpg"
                  alt="Birdwatching in Kaziranga"
                  className="w-full rounded-xl shadow-md"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Avian Haven on the Brahmaputra Flyway
                </h3>
                <p className="text-slate-700 text-[15px] leading-relaxed text-justify mb-4">
                  During winter, Kaziranga's natural wetlands (beels) such as Sohola Beel in the
                  Eastern (Agaratoli) Range attract thousands of migratory waterbirds escaping
                  Siberian freezing winters.
                </p>
                <p className="text-slate-700 text-[15px] leading-relaxed text-justify">
                  Notable sightings include the endangered Greater Adjutant Stork, Lesser Adjutant,
                  Spot-billed Pelican, Black-necked Stork, Pallas's Fish Eagle, Grey-headed Fish
                  Eagle, Bengal Florican, and Great Indian Hornbill.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── GENERAL WILDLIFE PAGE ── */}
        {pageType === 'general' && (
          <div>
            <div className="text-center mb-10">
              <h1 className="text-3xl font-extrabold text-kaziranga-800">
                Wildlife in Kaziranga National Park
              </h1>
              <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto">
                Meet the Big Five of Assam: Rhino, Royal Bengal Tiger, Asian Elephant, Asiatic Wild
                Water Buffalo, and Eastern Swamp Deer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                {
                  img: '/assets/img/one-horned-rhino.jpg',
                  alt: 'One Horned Rhino',
                  title: 'One-Horned Rhinoceros',
                  desc: 'Over 2,400 individuals inhabit the alluvial plains and grassland swamps.',
                },
                {
                  img: '/assets/img/tiger-bengal-kaziranga.jpg',
                  alt: 'Bengal Tiger',
                  title: 'Royal Bengal Tiger',
                  desc: "Designated as a Tiger Reserve in 2006, with one of the world's highest tiger densities.",
                },
                {
                  img: '/assets/img/indian-elephant.jpg',
                  alt: 'Asian Elephant',
                  title: 'Asian Wild Elephant',
                  desc: 'Large herds traverse traditional migration corridors between the park and Karbi Anglong hills.',
                },
              ].map((animal) => (
                <div
                  key={animal.title}
                  className="bg-white rounded-lg overflow-hidden shadow-md border border-slate-100"
                >
                  <img
                    src={animal.img}
                    alt={animal.alt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-[18px] font-bold text-kaziranga-800 mb-1">
                      {animal.title}
                    </h4>
                    <p className="text-xs text-slate-500">{animal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── CTA ── */}
        <div className="text-center mt-6">
          <Link
            to="/online-kaziranga-safari-booking"
            className="inline-block bg-kaziranga-800 text-white font-bold py-3 px-8 rounded-md hover:opacity-90 transition-opacity"
          >
            Book Safari to View Wildlife Live
          </Link>
        </div>
      </div>
    </div>
  );
}
