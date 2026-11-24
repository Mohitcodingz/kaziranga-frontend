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
            Kaziranga Online Safari Booking Procedure 
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
           The following points explain the step-by-step process for booking a safari in Kaziranga National Park.
          </p>
        </div>

        



        {/* Layout: Price Tables on Left, Live Booking Widget on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start  ">
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
            <SafariPriceTable />
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SafariBookingWidget />
          </div>
        </div>
        {/* 4 Steps Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-1 mb-12 mt-10">
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm flex items-center flex-col  gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-kaziranga-800 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div className='text-center p-1'>
              <h4 className="text-sm font-bold text-slate-900">1. Select Safari Date </h4>
              <p className="text-xs text-slate-500 mt-0.5">Choose your preferred date for visiting Kaziranga National Park.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm flex items-center flex-col  gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div className='text-center p-1'>
              <h4 className="text-sm font-bold text-slate-900">2.	Choose Safari Type</h4>
              <p className="text-xs text-slate-500 mt-0.5">Select between Jeep Safari and Elephant Safari, depending on availability.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm flex items-center flex-col  gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div className='text-center p-1'>
              <h4 className="text-sm font-bold text-slate-900">3.	Select Safari Zone:</h4>
              <p className="text-xs text-slate-500 mt-0.5">Choose your preferred safari zone, such as Kohora, Bagori, Agaratoli or Burapahar.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm flex items-center flex-col  gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-green-100 text-green-800 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div className='text-center p-1'>
              <h4 className="text-sm font-bold text-slate-900">4.	Select Safari Shift:</h4>
              <p className="text-xs text-slate-500 mt-0.5">Choose the available morning or afternoon safari slot.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm flex items-center flex-col  gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-green-100 text-green-800 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div className='text-center p-1'>
              <h4 className="text-sm font-bold text-slate-900">5.	Enter Visitor Details:</h4>
              <p className="text-xs text-slate-500 mt-0.5">Provide the required details of all visitors, including their names, ages, nationality and identification information.</p>
            </div>
          </div>
           <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm flex items-center flex-col  gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-green-100 text-green-800 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div className='text-center p-1'>
              <h4 className="text-sm font-bold text-slate-900 w-[140px]">6.	Submit Booking Request: </h4>
              <p className="text-xs text-slate-500 mt-0.5">Complete the booking form and submit your request for availability confirmation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
