import React from 'react';
import { Link } from 'react-router-dom';

export default function PaymentPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-kaziranga-800">
            Payment &amp; Booking Terms
          </h1>
          <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto">
            Secure, transparent online safari payments and official reservation guidelines.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl border border-slate-200 shadow-md p-8">

            <h3 className="text-xl font-bold text-kaziranga-800 mb-3">
              Online Payment Methods Accepted
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-5">
              We accept all major secure payment gateways including Credit Cards (Visa, MasterCard,
              RuPay, Amex), Debit Cards, UPI (Google Pay, PhonePe, Paytm), and Net Banking across
              all Indian and international banks.
            </p>

            {/* Security badge */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
              <strong className="block text-emerald-900 mb-1">🔒 100% Encrypted &amp; Safe</strong>
              <span className="text-emerald-800 text-xs">
                All financial transactions are protected with 256-bit SSL encryption. We do not
                store card or banking credentials.
              </span>
            </div>

            <h3 className="text-[18px] font-bold text-slate-800 mb-3">
              Safari Permit Policy &amp; Cancellation Terms
            </h3>
            <ul className="text-slate-600 text-sm leading-relaxed list-disc pl-5 space-y-2 mb-6">
              <li>
                Safari permits are non-transferable and non-refundable once issued by the Assam
                Forest Department under official name and ID.
              </li>
              <li>
                In case of sudden park closure due to VIP movement, flood emergencies, or forest
                authority directives, alternative safari shifts or proportional refunds will be
                provided as per government guidelines.
              </li>
              <li>
                Tour package cancellations made 30+ days prior to arrival date are eligible for an
                80% refund of the resort/hotel component.
              </li>
            </ul>

            <div className="text-center pt-5 border-t border-slate-200">
              <Link
                to="/online-kaziranga-safari-booking"
                className="inline-block bg-kaziranga-800 text-white font-bold py-3 px-8 rounded-md hover:opacity-90 transition-opacity"
              >
                Proceed to Safari Booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
