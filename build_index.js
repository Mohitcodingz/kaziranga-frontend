const fs = require('fs');
const path = require('path');

let html = fs.readFileSync(path.join(__dirname, 'source.html'), 'utf8');

// Replace today's date dynamically in value="2026/11/18" or any hardcoded date
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');
const todayStr = `${yyyy}/${mm}/${dd}`;

html = html.replace(/value="2026\/11\/18"/g, `value="${todayStr}"`);

// Add FontAwesome 4/5 and Themify fallback CDN links right before </head> for guaranteed 100% icon rendering
const iconCdns = `
    <!-- Icon Fonts Fallback CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css">
`;

html = html.replace('</head>', `${iconCdns}\n</head>`);

// Fix any broken or full external kaziranganationalparkonline.in links to local relative anchors or filenames
html = html.replace(/https:\/\/www\.kaziranganationalparkonline\.in\//g, './');
html = html.replace(/https:\/\/www\.kaziranganationalparkonline\.in/g, './');

// Add smooth modal or alert fallback for form submit if PHP backend is not yet attached
const submitEnhancement = `
<script>
// Frontend Form validation & user feedback enhancement
function checkdate() {
    var bdate = document.getElementById('booking_date').value;
    var vehicle = document.getElementById('vehicle').value;
    var zone = document.getElementById('zone').value;
    var timing = document.getElementById('timing').value;
    var persons = document.getElementById('persons').value;
    var name = document.getElementById('q_name').value;
    var phone = document.getElementById('q_phone').value;
    var email = document.getElementById('q_email').value;

    if (!bdate) {
        alert("Please select a safari date from the calendar.");
        return false;
    }
    if (!vehicle) {
        alert("Please select safari vehicle (Jeep or Elephant).");
        return false;
    }
    if (!zone) {
        alert("Please select safari zone.");
        return false;
    }
    if (!timing) {
        alert("Please select safari timing slot.");
        return false;
    }
    if (!persons) {
        alert("Please select number of persons.");
        return false;
    }
    if (!name || !phone || !email) {
        alert("Please fill in all traveler details.");
        return false;
    }

    // If running in static/frontend preview environment:
    alert("Booking Inquiry Submitted Successfully!\\n\\nSafari Date: " + bdate + "\\nVehicle: " + vehicle + "\\nZone: " + zone + "\\nTime: " + timing + "\\nPersons: " + persons + "\\nTraveler: " + name + " (" + phone + ")");
    return false; // prevent page reload in static preview
}
</script>
`;

html = html.replace('</body>', `${submitEnhancement}\n</body>`);

fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');
console.log('Successfully created index.html!');
