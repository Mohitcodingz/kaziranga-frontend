import React from 'react';
import { Link } from 'react-router-dom';

/* Shared prose card wrapper */
function ProseCard({ children }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-md p-8 text-slate-700 text-[14px] leading-relaxed">
      {children}
    </div>
  );
}

/* Shared section heading */
function SectionH3({ children }) {
  return (
    <h3 className="text-[18px] font-bold text-kaziranga-800 mt-6 mb-2 first:mt-0">{children}</h3>
  );
}

export default function TermsPrivacyPage({ type = 'terms' }) {

  /* ── PRIVACY ── */
  if (type === 'privacy') {
    return (
      <div className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-kaziranga-800">Privacy Policy</h1>
            <p className="text-slate-500 text-sm mt-2">
              How we collect, protect, and handle your traveler information.
            </p>
          </div>

          <ProseCard>
            <SectionH3>1. Information We Collect</SectionH3>
            <p>
              When booking Kaziranga Jeep or Elephant safaris through our portal, we collect
              passenger names, contact numbers, email addresses, and a single
              government-recognized identification document (Aadhaar, Passport, Voter ID)
              required by the Assam Forest Department for generating official entry gate permits.
            </p>

            <SectionH3>2. Use of Information</SectionH3>
            <p>
              Your data is utilized solely for issuing safari permits, sending reservation
              vouchers, and updating you regarding shift timings or park alerts. We do not sell,
              rent, or trade traveler data to third parties.
            </p>

            <SectionH3>3. Data Security</SectionH3>
            <p>
              We implement industry-standard encryption protocols and secure database connections
              to protect traveler identification documents from unauthorized disclosure or access.
            </p>
          </ProseCard>
        </div>
      </div>
    );
  }

  /* ── ABOUT ── */
  if (type === 'about') {
    return (
      <div className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-kaziranga-800">
              About Kaziranga National Park
            </h1>
            <p className="text-slate-500 text-sm mt-2">
              A sanctuary of global significance, UNESCO World Heritage status, and historic
              conservation victory.
            </p>
          </div>

          <ProseCard>
            <p className="text-justify mb-4">
              Situated in the state of Assam along the alluvial floodplains of the Brahmaputra
              River, Kaziranga National Park spans over 880 square kilometers of virgin
              wilderness, tall elephant grasslands, tropical deciduous forests, and riverine beels.
            </p>
            <p className="text-justify mb-4">
              First declared a reserve forest in 1908 through the initiative of Lady Curzon, the
              park was notified as a National Park in 1974 and inscribed on the UNESCO World
              Heritage list in 1985. In 2006, Kaziranga was also declared an official Tiger
              Reserve.
            </p>
            <p className="text-justify mb-6">
              Today, it represents the most successful wildlife conservation model in India,
              sheltering over 2,400 One-Horned Rhinos, 1,200 Asian Wild Elephants, and over 100
              Royal Bengal Tigers alongside 470+ bird species.
            </p>
            <div className="text-center">
              <Link
                to="/online-kaziranga-safari-booking"
                className="inline-block bg-kaziranga-800 text-white font-bold py-3 px-8 rounded-md hover:opacity-90 transition-opacity"
              >
                Experience Kaziranga In Person →
              </Link>
            </div>
          </ProseCard>
        </div>
      </div>
    );
  }

  /* ── TERMS (default) ── */
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-kaziranga-800">Terms &amp; Conditions</h1>
          <p className="text-slate-500 text-sm mt-2">
            General rules, reservation guidelines, and visitor policies.
          </p>
        </div>

        <ProseCard>
          <SectionH3>1. Safari Bookings &amp; Permits</SectionH3>
          <p>
            All jungle safaris in Kaziranga are subject to strict daily vehicle caps and entry
            rules regulated by the Assam Forest Department. All bookings are processed on a
            first-come, first-served basis upon receipt of traveler details and payment.
          </p>

          <SectionH3>2. Identity Proof Requirement</SectionH3>
          <p>
            Travelers must carry the original photo identity proof used during booking. Failure to
            present original identification at the entry gate may lead to cancellation of entry
            with no refund.
          </p>

          <SectionH3>3. Park Rules &amp; Liability</SectionH3>
          <p>
            Travelers must adhere strictly to all forest regulations. No tourist may alight from
            the vehicle inside core zones. The operator shall not be liable for any natural events,
            animal encounters, weather disruptions, or personal belongings lost inside the park.
          </p>
        </ProseCard>
      </div>
    </div>
  );
}
