import React from 'react';
import FaqAccordion from '../components/FaqAccordion';

export default function FaqPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-kaziranga-800">
            Frequently Asked Questions (Kaziranga Safari FAQ)
          </h1>
          <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto">
            Find answers to commonly asked queries about safari permits, elephant ride availability,
            child policies, ID proofs, and park timings.
          </p>
        </div>

        <FaqAccordion />
      </div>
    </div>
  );
}
