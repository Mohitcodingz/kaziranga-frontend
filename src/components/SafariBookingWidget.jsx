import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Phone } from 'lucide-react';

export default function SafariBookingWidget({ defaultVehicle = 'Jeep' }) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const formatDateString = (d) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [selectedDate, setSelectedDate] = useState(formatDateString(today));
  const [vehicle, setVehicle] = useState(defaultVehicle);
  const [zone, setZone] = useState('Western Range');
  const [timing, setTiming] = useState(defaultVehicle === 'Elephant' ? '5 - 6 AM | 6 - 7 AM' : '7:30 - 9:30 AM');
  const [persons, setPersons] = useState('2');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handleDateClick = (day) => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    const todayZero = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    if (clickedDate < todayZero) {
      alert('Safari booking is not allowed for past dates.');
      return;
    }

    setSelectedDate(formatDateString(clickedDate));
  };

  const handleVehicleChange = (val) => {
    setVehicle(val);
    if (val === 'Elephant') {
      setZone('Western Range');
      setTiming('5 - 6 AM | 6 - 7 AM');
    } else {
      setZone('Western Range');
      setTiming('7:30 - 9:30 AM');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDate) {
      alert('Please select a safari date from the calendar.');
      return;
    }
    if (!name.trim() || !phone.trim() || !email.trim()) {
      alert('Please enter your full name, phone number, and email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage({
        type: 'success',
        title: 'Safari Inquiry Received Successfully!',
        text: `Thank you, ${name}. Your reservation request for ${vehicle} Safari on ${selectedDate} (${timing}, ${zone}) for ${persons} person(s) has been recorded. Our safari desk will verify forest quota availability and contact you at ${phone} / ${email} shortly.`
      });
    }, 600);
  };

  return (
    <div className="booking-widget bg-white rounded-2xl border border-slate-200/90 shadow-xl p-5 sm:p-6 transition-all">
      {/* Top Contact Bar */}
      <div className="booking-widget-contact bg-kaziranga-800 text-white rounded-xl p-3 sm:p-3.5 flex items-center justify-between mb-4 border-b-2 border-safariGold shadow-sm">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-emerald-900/60 flex items-center justify-center text-lg">
            🐾
          </span>
          <div>
            <strong className="block text-sm sm:text-base font-bold text-white leading-tight">
              Kaziranga Safari Booking
            </strong>
            <span className="block text-[11px] text-emerald-200">
              Online Forest Permit Desk
            </span>
          </div>
        </div>
        <a
          href="tel:+919911990414"
          className="inline-flex items-center gap-1.5 bg-emerald-900/80 hover:bg-emerald-900 text-white border border-safariGold px-3 py-1.5 rounded-full text-xs font-bold transition-colors whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 text-safariGold" /> +91-9911990414
        </a>
      </div>

      <h2 className="booking-widget-title text-lg sm:text-xl font-bold text-slate-900 text-center mb-3">
        Jeep & Elephant Safari Reservation
      </h2>

      {/* Interactive Calendar */}
      <div className="booking-calendar bg-slate-50 border border-slate-200 rounded-xl p-3.5 mb-5">
        <div className="booking-calendar-heading flex items-center justify-between mb-3 px-1">
          <button
            type="button"
            onClick={prevMonth}
            className="booking-calendar-nav"
            aria-label="Previous month"
          >
            <ChevronLeft aria-hidden="true" className="w-5 h-5" />
          </button>
          <div>
            <span className="booking-calendar-label">Choose your date</span>
            <div className="booking-calendar-month">
              {monthNames[currentMonth]} <span>{currentYear}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={nextMonth}
            className="booking-calendar-nav"
            aria-label="Next month"
          >
            <ChevronRight aria-hidden="true" className="w-5 h-5" />
          </button>
        </div>

        {/* Days of week */}
        <div className="booking-calendar-weekdays grid grid-cols-7 text-center text-xs font-bold text-slate-500 mb-1.5">
          <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
        </div>

        {/* Days grid */}
        <div className="booking-calendar-days grid grid-cols-7 gap-1 text-center">
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className="booking-calendar-empty" aria-hidden="true"></div>
          ))}

          {Array.from({ length: daysInMonth }).map((_, idx) => {
            const dayNum = idx + 1;
            const thisDate = new Date(currentYear, currentMonth, dayNum);
            const isToday = thisDate.toDateString() === today.toDateString();
            const dateStr = formatDateString(thisDate);
            const isSelected = selectedDate === dateStr;
            const isPast = thisDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());

            return (
              <button
                type="button"
                key={`day-${dayNum}`}
                disabled={isPast}
                onClick={() => handleDateClick(dayNum)}
                aria-label={`${monthNames[currentMonth]} ${dayNum}, ${currentYear}`}
                aria-pressed={isSelected}
                className={`booking-calendar-day ${
                  isSelected
                    ? 'is-selected'
                    : isToday
                    ? 'is-today'
                    : isPast
                    ? 'is-past'
                    : 'is-available'
                }`}
              >
                {dayNum}
              </button>
            );
          })}
        </div>

        <div className="booking-selected-date mt-2.5 pt-2 border-t border-slate-200 text-center text-xs text-slate-600">
          <span>Selected Date</span>
          <strong className="font-bold text-kaziranga-800 bg-emerald-100/80 px-2 py-0.5 rounded">
            {selectedDate || 'Select Date'}
          </strong>
        </div>
      </div>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Vehicle */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Safari Vehicle *
            </label>
            <select
              value={vehicle}
              onChange={(e) => handleVehicleChange(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-kaziranga-700 focus:border-transparent bg-slate-50/50 hover:bg-white transition-all"
              required
            >
              <option value="Jeep">Jeep Safari (4x4 Gypsy)</option>
              <option value="Elephant">Elephant Safari (Mahout)</option>
            </select>
          </div>

          {/* Zone */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Safari Zone *
            </label>
            <select
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-kaziranga-700 focus:border-transparent bg-slate-50/50 hover:bg-white transition-all"
              required
            >
              {vehicle === 'Elephant' ? (
                <>
                  <option value="Western Range">Western Range (Bagori)</option>
                  <option value="Central Range">Central Range (Kohora - Foreigners)</option>
                </>
              ) : (
                <>
                  <option value="Western Range">Western Range (Bagori)</option>
                  <option value="Central Range">Central Range (Kohora)</option>
                  <option value="Eastern Range">Eastern Range (Agaratoli)</option>
                  <option value="Burapahar Range">Burapahar Range (Ghorakati)</option>
                </>
              )}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Timing Slot */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Timing Slot *
            </label>
            <select
              value={timing}
              onChange={(e) => setTiming(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-kaziranga-700 focus:border-transparent bg-slate-50/50 hover:bg-white transition-all"
              required
            >
              {vehicle === 'Elephant' ? (
                <>
                  <option value="5 - 6 AM | 6 - 7 AM">Morning: 5:00 AM - 6:00 AM</option>
                  <option value="6 - 7 AM">Morning: 6:00 AM - 7:00 AM</option>
                </>
              ) : (
                <>
                  <option value="7:30 - 9:30 AM">Morning: 7:30 AM to 9:30 AM</option>
                  <option value="9:30 AM - 11:30 AM">Morning: 9:30 AM to 11:30 AM</option>
                  <option value="1:30 PM - 3:30 PM">Afternoon: 1:30 PM to 3:30 PM</option>
                  <option value="2:35 PM - 4:35 PM">Afternoon: 2:35 PM to 4:35 PM</option>
                </>
              )}
            </select>
          </div>

          {/* Persons */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Persons (above 5 yrs) *
            </label>
            <select
              value={persons}
              onChange={(e) => setPersons(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-kaziranga-700 focus:border-transparent bg-slate-50/50 hover:bg-white transition-all"
              required
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Person' : 'Persons'}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <input
              type="text"
              placeholder="Lead Traveler Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-kaziranga-700 focus:border-transparent bg-slate-50/50 hover:bg-white transition-all"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Mobile / WhatsApp Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-kaziranga-700 focus:border-transparent bg-slate-50/50 hover:bg-white transition-all"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
          <div>
            <input
              type="email"
              placeholder="Email ID for Permit *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-kaziranga-700 focus:border-transparent bg-slate-50/50 hover:bg-white transition-all"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 px-4 bg-kaziranga-800 hover:bg-kaziranga-900 active:bg-kaziranga-950 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-150 text-sm tracking-wide uppercase disabled:opacity-70"
            >
              {isSubmitting ? 'Processing...' : 'Book Safari Now'}
            </button>
          </div>
        </div>

        <div className="text-center pt-1">
          <span className="text-[11px] text-red-600 font-semibold">
            * Only one valid Govt photo ID proof is required of the group tour leader.
          </span>
        </div>
      </form>

      {/* Confirmation feedback modal */}
      {statusMessage && (
        <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm animate-fadeIn">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-emerald-900 mb-1">{statusMessage.title}</h4>
              <p className="text-emerald-800 leading-relaxed">{statusMessage.text}</p>
              <button
                type="button"
                onClick={() => setStatusMessage(null)}
                className="mt-2 text-xs font-bold text-emerald-700 hover:underline"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
