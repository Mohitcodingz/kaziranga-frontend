import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import ScrollToTop from './utils/scrollUtils';

// Pages
import HomePage from './pages/HomePage';
import SafariBookingPage from './pages/SafariBookingPage';
import JeepSafariPage from './pages/JeepSafariPage';
import ElephantSafariPage from './pages/ElephantSafariPage';
import SafariZonesPage from './pages/SafariZonesPage';
import TourPackagesPage from './pages/TourPackagesPage';
import TourDetailPage from './pages/TourDetailPage';
import KazirangaMapPage from './pages/KazirangaMapPage';
import KazirangaGalleryPage from './pages/KazirangaGalleryPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import WildlifePage from './pages/WildlifePage';
import TravelTipsPage from './pages/TravelTipsPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import PaymentPage from './pages/PaymentPage';
import TermsPrivacyPage from './pages/TermsPrivacyPage';

export default function App() {
  return (
    <div id="main-wrapper" className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />

      <main className="flex-[1_0_auto]">
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />

          {/* Safari Booking */}
          <Route path="/online-kaziranga-safari-booking" element={<SafariBookingPage />} />
          <Route path="/online-kaziranga-safari-booking.html" element={<Navigate to="/online-kaziranga-safari-booking" replace />} />
          <Route path="/jeep-safari-booking" element={<SafariBookingPage />} />
          <Route path="/jeep-safari-booking.html" element={<Navigate to="/jeep-safari-booking" replace />} />

          {/* Jeep & Elephant Safaris */}
          <Route path="/jeep-safari" element={<JeepSafariPage />} />
          <Route path="/jeep-safari.html" element={<Navigate to="/jeep-safari" replace />} />
          <Route path="/elephant-safari" element={<ElephantSafariPage />} />
          <Route path="/elephant-safari.html" element={<Navigate to="/elephant-safari" replace />} />

          {/* Safari Zones */}
          <Route path="/kaziranga-safari-zones" element={<SafariZonesPage />} />
          <Route path="/kaziranga-safari-zones.html" element={<Navigate to="/kaziranga-safari-zones" replace />} />

          {/* Tour Packages */}
          <Route path="/tour-packages" element={<TourPackagesPage />} />
          <Route path="/tour-packages.html" element={<Navigate to="/tour-packages" replace />} />
          <Route path="/tour/:slug" element={<TourDetailPage />} />

          {/* Legacy Tour Routes */}
          <Route path="/kaziranaga-weekend-tour" element={<TourDetailPage fixedSlug="kaziranaga-weekend-tour" />} />
          <Route path="/kaziranaga-weekend-tour.html" element={<Navigate to="/kaziranaga-weekend-tour" replace />} />
          <Route path="/north-east-golden-triangle-tour" element={<TourDetailPage fixedSlug="north-east-golden-triangle-tour" />} />
          <Route path="/north-east-golden-triangle-tour.html" element={<Navigate to="/north-east-golden-triangle-tour" replace />} />
          <Route path="/splendor-assam-tour" element={<TourDetailPage fixedSlug="splendor-assam-tour" />} />
          <Route path="/splendor-assam-tour.html" element={<Navigate to="/splendor-assam-tour" replace />} />
          <Route path="/rhino-and-tiger-tour" element={<TourDetailPage fixedSlug="rhino-and-tiger-tour" />} />
          <Route path="/rhino-and-tiger-tour.html" element={<Navigate to="/rhino-and-tiger-tour" replace />} />
          <Route path="/kaziranga-photography-tour" element={<TourDetailPage fixedSlug="kaziranga-photography-tour" />} />
          <Route path="/kaziranga-photography-tour.html" element={<Navigate to="/kaziranga-photography-tour" replace />} />
          <Route path="/kaziranga-shillong-tour" element={<TourDetailPage fixedSlug="kaziranga-shillong-tour" />} />
          <Route path="/kaziranga-shillong-tour.html" element={<Navigate to="/kaziranga-shillong-tour" replace />} />
          <Route path="/manas-national-park" element={<TourDetailPage fixedSlug="manas-national-park" />} />
          <Route path="/manas-national-park.html" element={<Navigate to="/manas-national-park" replace />} />

          {/* Map & Gallery */}
          {/* <Route path="/kaziranga-map" element={<KazirangaMapPage />} />
  <Route path="/kaziranga-map.html" element={<Navigate to="/kaziranga-map" replace />} />  
          <Route path="/kaziranga-gallery" element={<KazirangaGalleryPage />} />
          <Route path="/kaziranga-gallery.html" element={<Navigate to="/kaziranga-gallery" replace />} /> */}

          {/* Contact & FAQ */}
          {/* <Route path="/kaziranga-contact" element={<ContactPage />} />
          <Route path="/kaziranga-contact.html" element={<Navigate to="/kaziranga-contact" replace />} />
          <Route path="/kaziranga-faq" element={<FaqPage />} />
          <Route path="/kaziranga-faq.html" element={<Navigate to="/kaziranga-faq" replace />} />
 */}
          {/* Wildlife Pages */}
          {/* <Route path="/wildlife-in-kaziranga-national-park" element={<WildlifePage pageType="general" />} />
          <Route path="/wildlife-in-kaziranga-national-park.html" element={<Navigate to="/wildlife-in-kaziranga-national-park" replace />} />
          <Route path="/one-horned-rhino" element={<WildlifePage pageType="rhino" />} />
          <Route path="/one-horned-rhino.html" element={<Navigate to="/one-horned-rhino" replace />} />
          <Route path="/birdwatching-in-kaziranga" element={<WildlifePage pageType="birds" />} />
          <Route path="/birdwatching-in-kaziranga.html" element={<Navigate to="/birdwatching-in-kaziranga" replace />} /> */}

          {/* Travel Guides */}
          {/* <Route path="/kaziranga-travel-tips" element={<TravelTipsPage pageType="tips" />} />
          <Route path="/kaziranga-travel-tips.html" element={<Navigate to="/kaziranga-travel-tips" replace />} />
          <Route path="/best-time-to-visit" element={<TravelTipsPage pageType="tips" />} />
          <Route path="/best-time-to-visit.html" element={<Navigate to="/best-time-to-visit" replace />} />
          <Route path="/how-to-reach-kaziranga" element={<TravelTipsPage pageType="how-to-reach" />} />
          <Route path="/how-to-reach-kaziranga.html" element={<Navigate to="/how-to-reach-kaziranga" replace />} />
          <Route path="/do-and-dont-in-kaziranga" element={<TravelTipsPage pageType="do-dont" />} />
          <Route path="/do-and-dont-in-kaziranga.html" element={<Navigate to="/do-and-dont-in-kaziranga" replace />} />
          <Route path="/tourist-attractions-Kaziranga" element={<TravelTipsPage pageType="tips" />} />
          <Route path="/tourist-attractions-Kaziranga.html" element={<Navigate to="/tourist-attractions-Kaziranga" replace />} /> */}

          {/* News & Blog */}
          {/* <Route path="/news" element={<NewsPage />} />
          <Route path="/news.html" element={<Navigate to="/news" replace />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="/guide-to-kaziranga-national-park" element={<NewsDetailPage fixedSlug="guide-to-kaziranga-national-park" />} />
          <Route path="/guide-to-kaziranga-national-park.html" element={<Navigate to="/guide-to-kaziranga-national-park" replace />} />
          <Route path="/kaziranga-elephant-safari-charges" element={<NewsDetailPage fixedSlug="kaziranga-elephant-safari-charges" />} />
          <Route path="/kaziranga-elephant-safari-charges.html" element={<Navigate to="/kaziranga-elephant-safari-charges" replace />} />
          <Route path="/ecology-and-the-future-of-a-remarkable-species" element={<NewsDetailPage fixedSlug="ecology-and-the-future-of-a-remarkable-species" />} />
          <Route path="/ecology-and-the-future-of-a-remarkable-species.html" element={<Navigate to="/ecology-and-the-future-of-a-remarkable-species" replace />} />
          <Route path="/assam-chief-minister-invites-actor-leonardo-dicaprio" element={<NewsDetailPage fixedSlug="assam-chief-minister-invites-actor-leonardo-dicaprio" />} />
          <Route path="/assam-chief-minister-invites-actor-leonardo-dicaprio.html" element={<Navigate to="/assam-chief-minister-invites-actor-leonardo-dicaprio" replace />} /> */}

          {/* Information & Legal */}
          {/* <Route path="/about-kaziranga" element={<TermsPrivacyPage type="about" />} />
          <Route path="/about-kaziranga.html" element={<Navigate to="/about-kaziranga" replace />} />
          <Route path="/payment-kaziranga" element={<PaymentPage />} />
          <Route path="/payment-kaziranga.html" element={<Navigate to="/payment-kaziranga" replace />} />
          <Route path="/kaziranga-terms-conditions" element={<TermsPrivacyPage type="terms" />} />
          <Route path="/kaziranga-terms-conditions.html" element={<Navigate to="/kaziranga-terms-conditions" replace />} />
          <Route path="/kaziranga-privacy-policy" element={<TermsPrivacyPage type="privacy" />} />
          <Route path="/kaziranga-privacy-policy.html" element={<Navigate to="/kaziranga-privacy-policy" replace />} /> */}

          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <MobileStickyBar />
      <Footer />
    </div>
  );
}
