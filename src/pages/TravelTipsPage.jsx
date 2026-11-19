import React from 'react';
import { Link } from 'react-router-dom';
import DistanceTable from '../components/DistanceTable';

export default function TravelTipsPage({ pageType = 'tips' }) {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">

        {/* ── HOW TO REACH ── */}
        {pageType === 'how-to-reach' && (
          <div>
            <div className="text-center mb-10">
              <h1 className="text-3xl font-extrabold text-kaziranga-800">
                How to Reach Kaziranga National Park
              </h1>
              <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto">
                Full transport connectivity guide by air, train, and roadway along National Highway 37.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  emoji: '✈️',
                  title: 'By Air',
                  body: (
                    <>
                      Nearest regional airport is{' '}
                      <strong>Jorhat Airport (JRH)</strong> at 96 km (2 hours drive). The primary
                      major gateway is{' '}
                      <strong>
                        Lokpriya Gopinath Bordoloi International Airport (GAU)
                      </strong>{' '}
                      in Guwahati at 240 km (4.5 to 5 hours drive via NH-37).
                    </>
                  ),
                },
                {
                  emoji: '🚆',
                  title: 'By Train',
                  body: (
                    <>
                      The closest railway station is{' '}
                      <strong>Furkating Junction (FKG)</strong> located 80 km away, connected to
                      Delhi and Kolkata. Guwahati Railway Station (225 km) offers the widest
                      connectivity across India with express Rajdhani &amp; Shatabdi trains.
                    </>
                  ),
                },
                {
                  emoji: '🚗',
                  title: 'By Road',
                  body: 'National Highway 37 passes directly alongside the park gates. Regular Assam State Transport (ASTC) buses, private sleeper coaches, and private hire cabs operate round the clock between Guwahati and Kohora.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-6 h-full"
                >
                  <div className="text-4xl mb-3">{card.emoji}</div>
                  <h3 className="text-[18px] font-bold text-kaziranga-800 mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>

            <DistanceTable />
          </div>
        )}

        {/* ── DO & DON'T ── */}
        {pageType === 'do-dont' && (
          <div>
            <div className="text-center mb-10">
              <h1 className="text-3xl font-extrabold text-kaziranga-800">
                Do's and Don'ts in Kaziranga National Park
              </h1>
              <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto">
                Assam Forest Department visitor code of conduct for responsible wildlife tourism.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* DOS */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h3 className="text-emerald-900 text-xl font-bold mb-4">
                  ✔ What You SHOULD DO:
                </h3>
                <ul className="text-emerald-800 text-sm leading-loose list-disc pl-5 space-y-1">
                  <li>Carry binoculars and telephoto lenses for bird and animal sightings.</li>
                  <li>Always stay inside the Gypsy vehicle while on safari tracks.</li>
                  <li>Follow the instructions of your certified naturalist and driver.</li>
                  <li>Wear earth-colored clothes (khaki, brown, olive green, beige).</li>
                  <li>Carry a reusable water flask and hat for sun protection.</li>
                  <li>Respect animals' right of way and maintain safe distance.</li>
                </ul>
              </div>

              {/* DON'TS */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-red-900 text-xl font-bold mb-4">
                  ✕ What You MUST NOT DO:
                </h3>
                <ul className="text-red-700 text-sm leading-loose list-disc pl-5 space-y-1">
                  <li>Do not play loud music or blow car horns inside the park.</li>
                  <li>Do not carry or use single-use plastic bottles or polythene bags.</li>
                  <li>Do not smoke, light fires, or consume alcohol in the sanctuary.</li>
                  <li>Do not use camera flash when photographing wildlife.</li>
                  <li>Do not attempt to feed, taunt, or tease wild animals.</li>
                  <li>Do not step down from your Jeep at unauthorized points.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ── TIPS (default) ── */}
        {pageType === 'tips' && (
          <div>
            <div className="text-center mb-10">
              <h1 className="text-3xl font-extrabold text-kaziranga-800">
                Kaziranga Safari Travel Tips &amp; Guide
              </h1>
              <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto">
                Essential advice from veteran naturalists to make your jungle vacation unforgettable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  num: '1',
                  title: 'Book Permits in Advance',
                  body: 'Forest department limits daily vehicle entries per zone. During peak holiday weeks (December to January), slots sell out weeks in advance.',
                },
                {
                  num: '2',
                  title: 'Combine Jeep & Elephant Safaris',
                  body: 'Take an early morning Elephant safari for eye-level rhino views, then explore deeper zones via 4x4 Gypsy in the afternoon.',
                },
                {
                  num: '3',
                  title: 'Visit Multiple Zones',
                  body: 'Do not restrict yourself to one range. Do Bagori for high rhino density, Kohora for sweeping grassland scenery, and Agaratoli for birds.',
                },
                {
                  num: '4',
                  title: 'Winter Warm Clothing',
                  body: 'Early morning open Jeep drives between November and February can feel freezing (5°C to 10°C). Layer with thermal fleece, jackets, and woolen beanies.',
                },
              ].map((tip) => (
                <div
                  key={tip.num}
                  className="bg-white border border-slate-200 rounded-lg p-5"
                >
                  <h4 className="text-[18px] font-bold text-kaziranga-800 mb-2">
                    {tip.num}. {tip.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{tip.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── CTA ── */}
        <div className="text-center mt-10">
          <Link
            to="/online-kaziranga-safari-booking"
            className="inline-block bg-kaziranga-800 text-white font-bold py-3 px-8 rounded-md hover:opacity-90 transition-opacity"
          >
            Plan Your Safari Now
          </Link>
        </div>
      </div>
    </div>
  );
}
