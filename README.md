# Kaziranga National Park Online - Frontend Clone

A 100% exact replica of the frontend design, layout, assets, styles, and interactive widgets from [Kaziranga National Park Online](https://www.kaziranganationalparkonline.in/).

---

## 📁 Project Structure

```text
kaziranga-frontend/
├── index.html                   # Complete 1:1 responsive webpage
├── server.js                    # Local preview server (Node.js)
├── dist/
│   ├── jquery.simple-calendar.js # Interactive Safari Booking Calendar widget
│   └── simple-calendar.css       # Calendar styling
└── assets/
    ├── css/
    │   ├── styles.css           # Core theme stylesheet
    │   ├── plugins.css          # Bootstrap, owl carousel, slick, popup styles
    │   └── coustom.css          # Custom booking tables, cards, responsive tweaks
    ├── js/
    │   ├── bootstrap.min.js     # Responsive navbar, dropdowns, and UI
    │   ├── popper.min.js        # Tooltips & popovers
    │   ├── custom.js            # Menu toggling and general animations
    │   ├── rangeslider.js       # Range slider controls
    │   ├── select2.min.js       # Form dropdown enhancement
    │   ├── owl.carousel.min.js  # Image & card sliders
    │   ├── slick.js             # Slider controls
    │   ├── moment.min.js        # Date parsing
    │   ├── daterangepicker.js   # Date picker
    │   └── jquery.magnific-popup.min.js
    ├── fonts/
    │   ├── themify.ttf          # Themify icons
    │   ├── fa-solid-900.woff    # Font Awesome icons
    │   └── icofont.woff2        # IcoFont icon pack
    └── img/
        ├── kaziranga-logo.png
        ├── kaziranga-national-park.jpg
        ├── book-safari.jpg
        ├── jeep-safari-kaziranga.jpg
        ├── elephant-safari-kaziranga.jpg
        ├── tour-package-kaziranga.jpg
        ├── kaziranaga-weekend-tour.jpg
        ├── north-east-golden-triangle.jpg
        ├── nagaland-meghalaya-tour.jpg
        ├── kaziranga-shillong-tour.jpg
        ├── rhino-tiger-tour.jpg
        ├── kaziranaga-photo.jpg
        ├── jeep-safari-kaziranga-natio.jpg
        ├── kazirnag-buffalo.jpg
        ├── indian-elephant.jpg
        ├── popular-kazirnag.jpg
        ├── kaziweathers.jpg
        ├── kaziranga-guide.jpg
        ├── kaziranga-charges.jpg
        ├── kaziranga-nws.jpg
        └── icon.png
```

---

## 🚀 How to Run Locally

### Option 1: Direct HTML Files
Open [`index.html`](file:///C:/Users/Nonnp/.gemini/antigravity/scratch/kaziranga-frontend/index.html) or any page directly in your browser. All internal navigation links are pure `.html` files without any PHP dependencies.

### Option 2: Using the Built-In Smart Node Server
Run:
```bash
node server.js
```
Then visit [http://localhost:3000](http://localhost:3000).

The server supports:
- **Clean Extensionless URLs**: e.g., `/kaziranga-safari-zones`, `/online-kaziranga-safari-booking`, `/tour-packages`
- **Standard HTML URLs**: e.g., `/kaziranga-safari-zones.html`, `/jeep-safari.html`
- **Legacy Fallback URLs**: e.g., `/kaziranga-safari-zones.php` automatically serves the `.html` counterpart so no 404 error ever occurs.

---

## 📑 Complete List of Working Routes (35 Pages)

| Route Name | File | Description |
|---|---|---|
| **Home** | `index.html` | Full homepage with Jeep & Elephant rates, calendar & booking engine |
| **Online Safari Booking** | `online-kaziranga-safari-booking.html` | Dedicated online safari booking portal |
| **Jeep Safari** | `jeep-safari.html` | Jeep safari timings, zone guides & rates |
| **Elephant Safari** | `elephant-safari.html` | Morning elephant safari details & timings |
| **Safari Zones** | `kaziranga-safari-zones.html` | Western (Bagori), Central (Kohora), Eastern (Agaratoli), Burapahar |
| **Tour Packages** | `tour-packages.html` | All curated Kaziranga & Assam packages |
| **Kaziranga Map** | `kaziranga-map.html` | Park boundaries, gates & tourist route map |
| **Contact Us** | `kaziranga-contact.html` | Contact details, office location & inquiry form |
| **Weekend Tour** | `kaziranaga-weekend-tour.html` | 2 Nights / 3 Days Kaziranga holiday package |
| **Rhino & Tiger Tour** | `rhino-and-tiger-tour.html` | 4 Nights / 5 Days wildlife tracking tour |
| **NE Golden Triangle** | `north-east-golden-triangle-tour.html` | Assam, Meghalaya & Nagaland tour package |
| **Splendor of Assam** | `splendor-assam-tour.html` | Cultural and natural Assam circuit package |
| **Photography Tour** | `kaziranga-photography-tour.html` | Specialized wildlife photography safari |
| **Wildlife Guide** | `wildlife-in-kaziranga-national-park.html`| Full guide to mammals, birds, and flora |
| **One-Horned Rhino** | `one-horned-rhino.html` | Habitat, conservation history & rhino statistics |
| **Bird Watching** | `birdwatching-in-kaziranga.html` | Avian species checklist & best birding zones |
| **Park Guide** | `guide-to-kaziranga-national-park.html`| Essential visitor guide & rules |
| **Safari Charges** | `kaziranga-elephant-safari-charges.html`| Detailed pricing breakdown for elephant safaris |
| **How To Reach** | `how-to-reach-kaziranga.html` | By air (Jorhat/Guwahati), rail, and road |
| **Best Time To Visit**| `best-time-to-visit.html` | Seasonal weather, park opening schedule |
| **Travel Tips** | `kaziranga-travel-tips.html` | Packing, clothing & safety recommendations |
| **Tourist Attractions**| `tourist-attractions-Kaziranga.html`| Tea gardens, Kakochang waterfalls, Orchid park |
| **Do's and Don'ts** | `do-and-dont-in-kaziranga.html` | Park conduct & wildlife viewing regulations |
| **Manas National Park**| `manas-national-park.html` | Information on neighboring UNESCO World Heritage site |
| **Gallery** | `kaziranga-gallery.html` | Photo gallery of wildlife, landscapes & safaris |
| **FAQ** | `kaziranga-faq.html` | Frequently Asked Questions & answers |
| **News & Blog** | `news.html` | Latest updates, park opening notifications |
| **About Kaziranga** | `about-kaziranga.html` | Park history, UNESCO recognition & bio-diversity |
| **Terms & Conditions**| `kaziranga-terms-conditions.html`| Booking rules, cancellation policy |
| **Privacy Policy** | `kaziranga-privacy-policy.html` | Traveler privacy & data security terms |
| **Payment Information**| `payment-kaziranga.html` | Online booking payment methods & gateway details |

## 🌟 Included Features & UI Sections
1. **Top Notice Marquee**: Live safari update notification bar.
2. **Header & Navigation**: Brand logo, responsive mobile navigation toggle, contact numbers.
3. **Hero Banner & Booking Engine**:
   - High-resolution hero background image.
   - Jeep & Elephant Safari pricing comparison tables.
   - Interactive calendar with date selection, vehicle switcher (Jeep / Elephant), automatic zone filtering, timing slots, traveler count, and contact input.
4. **Distance & Travel Time Matrix**: Clean tabular layout for all major connected cities (Guwahati, Shillong, Tezpur, Jorhat, etc.).
5. **Safari Zones & Activities Cards**: Jeep safari, Elephant safari, Bird watching, and Rhino tours with hover animations.
6. **Wildlife Packages Carousel / Grid**: Weekend tours, photography tours, golden triangle packages.
7. **Kaziranga Info & Travel Guidelines**: Do's & Don'ts, weather guides, best time to visit, and safari regulations.
8. **Dark Footer**: Full sitemap, links, disclaimer, and copyright notice.
9. **Mobile Bottom Menu**: Sticky quick-action bar for immediate online booking and phone inquiries on mobile screens.
