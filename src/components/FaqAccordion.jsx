import React, { useState } from 'react';
import { faqsData } from '../data/faqsData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
      {faqsData.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-xl bg-white overflow-hidden transition-all duration-200 ${
              isOpen ? 'border-kaziranga-700/60 shadow-md ring-1 ring-kaziranga-700/20' : 'border-slate-200/90 shadow-sm hover:border-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleFaq(idx)}
              className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 text-slate-900 font-bold text-sm sm:text-base focus:outline-none"
            >
              <span className="flex items-start gap-2.5">
                <HelpCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isOpen ? 'text-kaziranga-800' : 'text-slate-400'}`} />
                <span className={isOpen ? 'text-kaziranga-800' : 'text-slate-800'}>
                  {faq.question}
                </span>
              </span>
              <span className={`p-1 rounded-full ${isOpen ? 'bg-emerald-50 text-kaziranga-800' : 'bg-slate-100 text-slate-500'} flex-shrink-0`}>
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-fadeIn">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
