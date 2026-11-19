import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Customer Support & Inquiries
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Kaziranga Safari Desk
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Reach out to our certified safari booking coordinators for zone recommendations, forest department permits, or customized wildlife tours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 5 Cols: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm space-y-5">
              <h2 className="text-xl font-bold text-slate-900 pb-3 border-b border-slate-100">
                Helpline & Information
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-kaziranga-800 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Safari Booking Helpline</strong>
                    <a href="tel:+919911990414" className="text-emerald-700 hover:underline font-semibold">
                      +91-9911990414
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">WhatsApp & Tour Planning</strong>
                    <a href="tel:+918882859236" className="text-amber-800 hover:underline font-semibold">
                      +91-8882859236
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Email Inquiries</strong>
                    <span className="text-slate-600 text-xs sm:text-sm">info@kaziranganationalparkonline.in</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Kaziranga Reservation Office</strong>
                    <span className="text-slate-600 text-xs sm:text-sm leading-relaxed block">
                      Near Kohora Central Gate, NH-37, Kaziranga National Park, District Golaghat, Assam - 785609
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-emerald-900">
              <Clock className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Working Hours:</strong>
                <span>7:00 AM to 9:00 PM (Monday to Sunday, All 7 Days Operational)</span>
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Send Online Safari Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Fill in your travel preferences and our coordinator will respond with zone availability and price quotation.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 animate-fadeIn text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold">Message Sent Successfully!</h3>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                  Thank you for reaching out. A Kaziranga safari coordinator will contact you at your phone number and email address shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-kaziranga-700 focus:border-transparent bg-slate-50/50 hover:bg-white transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-kaziranga-700 focus:border-transparent bg-slate-50/50 hover:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-kaziranga-700 focus:border-transparent bg-slate-50/50 hover:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Travel Plan & Requirements
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Preferred dates, number of travelers, preferred safari vehicle (Jeep / Elephant), resort preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-kaziranga-700 focus:border-transparent bg-slate-50/50 hover:bg-white transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-kaziranga-800 hover:bg-kaziranga-900 active:bg-kaziranga-950 text-white font-bold rounded-lg text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Safari Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
