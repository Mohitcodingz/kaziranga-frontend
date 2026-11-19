# Kaziranga National Park Online - React Application

A modern, modular, component-driven **React + Vite** single-page application (SPA) replicating and upgrading the frontend design, safari booking engine, and tour packages from [Kaziranga National Park Online](https://www.kaziranganationalparkonline.in/).

---

## 📁 Project Architecture

```text
kaziranga-frontend/
├── index.html                   # Vite HTML entry point with fonts & stylesheets
├── package.json                 # React 18, Vite, React Router DOM, Lucide React
├── vite.config.js               # Vite build & local dev server configuration
├── .gitignore                   # Git ignore for node_modules, dist, etc.
├── public/                      # Static assets served at root
│   ├── assets/
│   │   ├── css/                 # Core styles, plugins.css, coustom.css
│   │   ├── img/                 # High-resolution wildlife & park images
│   │   └── fonts/               # Themify, FontAwesome, IcoFont icons
│   └── dist/
│       └── simple-calendar.css  # Safari calendar widget styles
├── src/
│   ├── main.jsx                 # Application entry point with BrowserRouter
│   ├── App.jsx                  # Main router with clean & legacy route fallbacks
│   ├── index.css                # Global React utility styles & responsive tweaks
│   ├── data/                    # Structured data models
│   │   ├── toursData.js         # Tour packages, itineraries, highlights & pricing
│   │   ├── zonesData.js         # 4 safari zones (Bagori, Kohora, Agaratoli, Burapahar)
│   │   ├── safariRatesData.js   # Jeep & Elephant pricing matrix, shifts & inclusions
│   │   ├── distanceData.js      # Travel distance & times from major cities
│   │   ├── faqsData.js          # Frequently Asked Questions with answers
│   │   └── newsData.js          # Wildlife news, blogs & safari updates
│   ├── components/              # Modular, reusable React components
│   │   ├── Header.jsx           # Top alert ticker, phone helplines, logo, responsive nav
│   │   ├── Footer.jsx           # 4-column comprehensive footer with disclaimer & copyright
│   │   ├── SafariBookingWidget.jsx # Interactive React calendar + live booking form
│   │   ├── SafariPriceTable.jsx # Clean pricing tables for Jeep & Elephant safari
│   │   ├── DistanceTable.jsx    # Distance & travel duration table
│   │   ├── TourCard.jsx         # Card component for tour packages
│   │   ├── FaqAccordion.jsx     # Expandable accordion for FAQs
│   │   ├── QuickFactsTable.jsx  # Park history, fauna count, and area expansion
│   │   └── MobileStickyBar.jsx  # Bottom fixed mobile CTA bar for instant booking/call
│   ├── pages/                   # Route page views
│   │   ├── HomePage.jsx         # Complete homepage
│   │   ├── SafariBookingPage.jsx# Dedicated online safari booking portal
│   │   ├── JeepSafariPage.jsx   # 4x4 Jeep safari guide, timings & booking
│   │   ├── ElephantSafariPage.jsx# Morning Elephant safari guide & booking
│   │   ├── SafariZonesPage.jsx  # In-depth guide to 4 safari ranges
│   │   ├── TourPackagesPage.jsx # Listing of all wildlife & holiday tour packages
│   │   ├── TourDetailPage.jsx   # Dynamic day-by-day tour package details
│   │   ├── KazirangaMapPage.jsx # Park boundaries, gates & tourist route map
│   │   ├── KazirangaGalleryPage.jsx # Wildlife & safari photo gallery with modal view
│   │   ├── ContactPage.jsx      # Contact info, inquiry form & helplines
│   │   ├── FaqPage.jsx          # Comprehensive FAQ page
│   │   ├── WildlifePage.jsx     # Big Five wildlife & birdwatching guides
│   │   ├── TravelTipsPage.jsx   # Travel tips, how to reach & Do's/Don'ts
│   │   ├── NewsPage.jsx         # News & safari blog articles
│   │   ├── NewsDetailPage.jsx   # Full article reading view
│   │   ├── PaymentPage.jsx      # Payment terms, security & bank details
│   │   └── TermsPrivacyPage.jsx # Terms & Conditions and Privacy Policy
│   └── utils/
│       └── scrollUtils.js       # Auto scroll-to-top on route change
└── legacy-html/                 # Preserved original static HTML & scraper files (47 files)
```

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📑 Working Routes

- `/` - Homepage with interactive booking engine, pricing, top activities, tour packages, and FAQs
- `/online-kaziranga-safari-booking` - Dedicated Safari Booking Portal
- `/jeep-safari` - Jeep Safari details, timings, and booking
- `/elephant-safari` - Elephant Safari details, shifts, and booking
- `/kaziranga-safari-zones` - Detailed overview of the 4 Safari Zones
- `/tour-packages` - All holiday & wildlife tour packages
- `/tour/:slug` - Dynamic Tour Package Details & Day-by-Day Itineraries
- `/kaziranga-map` - Park map and entry gates
- `/kaziranga-gallery` - Wildlife and safari photo gallery
- `/kaziranga-contact` - Contact details and inquiry form
- `/kaziranga-faq` - Frequently Asked Questions
- `/wildlife-in-kaziranga-national-park` - Wildlife guide
- `/one-horned-rhino` - One-Horned Rhino conservation & profile
- `/birdwatching-in-kaziranga` - Birdwatching guide
- `/how-to-reach-kaziranga` - Transport connectivity & distances
- `/do-and-dont-in-kaziranga` - Park rules & code of conduct
- `/news` - News, blogs, and updates
- `/payment-kaziranga` - Payment information & cancellation policies
- `/kaziranga-privacy-policy` - Privacy policy
- `/kaziranga-terms-conditions` - Terms & Conditions
- *All legacy `.html` URLs (e.g. `/jeep-safari.html`, `/tour-packages.html`) automatically redirect to their clean React routes.*
