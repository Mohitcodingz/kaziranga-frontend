import React from 'react';
import SafariBookingWidget from '../components/SafariBookingWidget';
import SafariPriceTable from '../components/SafariPriceTable';
import { Calendar, Compass, UserCheck, CheckCircle } from 'lucide-react';

export default function SafariBookingPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Online Forest Reservation
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Online Kaziranga Safari Booking Portal
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Advance safari permit reservation for 4x4 Gypsy Jeep Safaris and Morning Mahout Elephant Safaris across all four ranges.
          </p>
        </div>

        {/* 4 Steps Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-kaziranga-800 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">1. Select Date</h4>
              <p className="text-xs text-slate-500 mt-0.5">Choose your safari date on the live calendar</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">2. Zone & Vehicle</h4>
              <p className="text-xs text-slate-500 mt-0.5">Select Jeep or Elephant across 4 ranges</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">3. Traveler Info</h4>
              <p className="text-xs text-slate-500 mt-0.5">Enter group details & valid Photo ID</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-green-100 text-green-800 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">4. E-Permit Issued</h4>
              <p className="text-xs text-slate-500 mt-0.5">Confirmed gate voucher delivered digitally</p>
            </div>
          </div>
        </div>

        {/* Layout: Price Tables on Left, Live Booking Widget on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
            <SafariPriceTable />
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SafariBookingWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
