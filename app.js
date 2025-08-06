// Tap For All - Complete Multi-Service Platform with Malayalam Support
class TapForAllApp {
    constructor() {
        this.currentScreen = 'home-screen';
        this.currentUser = 'primary';
        this.selectedCategory = null;
        this.selectedService = null;
        this.selectedProvider = null;
        this.currentBooking = null;
        this.bookingDetails = {};
        this.selectedPaymentMethod = null;
        this.userRating = 0;
        this.selectedTip = 0;
        this.currentLanguage = 'malayalam'; // Default to Malayalam as specified
        
        // Bilingual translations
        this.translations = {
            english: {
                app_title: "Tap For All",
                welcome: "Welcome to Tap4All",
                primary_account: "Primary Account",
                search_placeholder: "Search for services",
                emergency: "SOS",
                home: "Home",
                bookings: "Bookings",
                contacts: "Contacts",
                profile: "Profile",
                services: "Services",
                service_providers: "Service Providers",
                filters: "Filters",
                sort_rating: "Sort by Rating",
                sort_price: "Sort by Price",
                sort_experience: "Sort by Experience",
                sort_availability: "Sort by Availability",
                book_service: "Book Service",
                service_location: "Service Location",
                enter_address: "Enter your address",
                use_gps: "Use GPS",
                date: "Date",
                time: "Time",
                service_duration: "Service Duration",
                "1_hour": "1 Hour",
                "2_hours": "2 Hours",
                "4_hours": "4 Hours",
                full_day: "8 Hours (Full Day)",
                custom_duration: "Custom Duration",
                special_requirements: "Special Requirements",
                describe_requirements: "Describe any specific requirements...",
                booking_for: "Booking For",
                myself: "Myself",
                proceed_payment: "Proceed to Payment",
                payment: "Payment",
                payment_method: "Payment Method",
                accept_terms: "I accept the Terms & Conditions",
                confirm_pay: "Confirm & Pay",
                service_status: "Service Status",
                service_confirmed: "Service Confirmed",
                provider_on_way: "Your service provider is on the way",
                live_tracking: "Live tracking",
                eta: "ETA",
                call: "Call",
                chat: "Chat",
                share: "Share",
                add_contact: "Add Contact",
                full_name: "Full Name",
                phone_number: "Phone Number",
                relationship: "Relationship",
                select_relationship: "Select relationship",
                permission_level: "Permission Level",
                emergency_contact: "Emergency Contact",
                my_bookings: "My Bookings",
                active: "Active",
                history: "History",
                scheduled: "Scheduled",
                edit_profile: "Edit Profile",
                settings: "Settings",
                payment_methods: "Payment Methods",
                saved_addresses: "Saved Addresses",
                rate_app: "Rate App",
                help_support: "Help & Support",
                rate_service: "Rate Service",
                service_completed: "Service Completed!",
                how_experience: "How was your experience?",
                add_tip: "Add Tip (Optional)",
                no_tip: "No Tip",
                submit_rating: "Submit Rating",
                switch_user: "Switch User",
                emergency_support: "Emergency Support",
                cancel: "Cancel",
                rating: "Rating"
            },
            malayalam: {
                app_title: "ടാപ്4ഓൾ",
                welcome: "ടാപ്4ഓൾ ലേക്ക് സ്വാഗതം",
                primary_account: "പ്രധാന അക്കൗണ്ട്",
                search_placeholder: "സേവനങ്ങൾക്കായി തിരയുക",
                emergency: "സഹായം",
                home: "ഹോം",
                bookings: "ബുക്കിങ്ങുകൾ",
                contacts: "കോൺടാക്റ്റുകൾ",
                profile: "പ്രൊഫൈൽ",
                services: "സേവനങ്ങൾ",
                service_providers: "സേവന ദാതാക്കൾ",
                filters: "ഫിൽട്ടറുകൾ",
                sort_rating: "റേറ്റിംഗ് അനുസരിച്ച് അടുക്കുക",
                sort_price: "വില അനുസരിച്ച് അടുക്കുക",
                sort_experience: "അനുഭവം അനുസരിച്ച് അടുക്കുക",
                sort_availability: "ലഭ്യത അനുസരിച്ച് അടുക്കുക",
                book_service: "സേവനം ബുക്ക് ചെയ്യുക",
                service_location: "സേവന സ്ഥലം",
                enter_address: "നിങ്ങളുടെ വിലാസം നൽകുക",
                use_gps: "GPS ഉപയോഗിക്കുക",
                date: "തീയതി",
                time: "സമയം",
                service_duration: "സേവന കാലാവധി",
                "1_hour": "1 മണിക്കൂർ",
                "2_hours": "2 മണിക്കൂർ",
                "4_hours": "4 മണിക്കൂർ",
                full_day: "8 മണിക്കൂർ (മുഴുവൻ ദിവസം)",
                custom_duration: "ഇഷ്ടാനുസൃത കാലാവധി",
                special_requirements: "പ്രത്യേക ആവശ്യങ്ങൾ",
                describe_requirements: "എന്തെങ്കിലും പ്രത്യേക ആവശ്യങ്ങൾ വിവരിക്കുക...",
                booking_for: "ബുക്കിംഗ്",
                myself: "എനിക്ക്",
                proceed_payment: "പേയ്മെന്റിലേക്ക് പോകുക",
                payment: "പേയ്മെന്റ്",
                payment_method: "പേയ്മെന്റ് രീതി",
                accept_terms: "ഞാൻ നിബന്ധനകളും വ്യവസ്ഥകളും അംഗീകരിക്കുന്നു",
                confirm_pay: "സ്ഥിരീകരിച്ച് പണം നൽകുക",
                service_status: "സേവന നില",
                service_confirmed: "സേവനം സ്ഥിരീകരിച്ചു",
                provider_on_way: "നിങ്ങളുടെ സേവന ദാതാവ് വഴിയിലാണ്",
                live_tracking: "തത്സമയ ട്രാക്കിംഗ്",
                eta: "എത്തിച്ചേരാനുള്ള സമയം",
                call: "വിളിക്കുക",
                chat: "ചാറ്റ്",
                share: "പങ്കിടുക",
                add_contact: "കോൺടാക്റ്റ് ചേർക്കുക",
                full_name: "മുഴുവൻ പേര്",
                phone_number: "ഫോൺ നമ്പർ",
                relationship: "ബന്ധം",
                select_relationship: "ബന്ധം തിരഞ്ഞെടുക്കുക",
                permission_level: "അനുമതി നിലവാരം",
                emergency_contact: "അടിയന്തര ബന്ധം",
                my_bookings: "എന്റെ ബുക്കിങ്ങുകൾ",
                active: "സജീവം",
                history: "ചരിത്രം",
                scheduled: "ഷെഡ്യൂൾ ചെയ്തത്",
                edit_profile: "പ്രൊഫൈൽ എഡിറ്റ് ചെയ്യുക",
                settings: "സെറ്റിങ്ങുകൾ",
                payment_methods: "പേയ്മെന്റ് രീതികൾ",
                saved_addresses: "സംരക്ഷിച്ച വിലാസങ്ങൾ",
                rate_app: "ആപ്പിനെ റേറ്റ് ചെയ്യുക",
                help_support: "സഹായം & പിന്തുണ",
                rate_service: "സേവനത്തെ റേറ്റ് ചെയ്യുക",
                service_completed: "സേവനം പൂർത്തിയായി!",
                how_experience: "നിങ്ങളുടെ അനുഭവം എങ്ങനെയായിരുന്നു?",
                add_tip: "ടിപ്പ് ചേർക്കുക (ഓപ്ഷണൽ)",
                no_tip: "ടിപ്പ് വേണ്ട",
                submit_rating: "റേറ്റിംഗ് സമർപ്പിക്കുക",
                switch_user: "ഉപയോക്താവിനെ മാറ്റുക",
                emergency_support: "അടിയന്തര പിന്തുണ",
                cancel: "റദ്ദാക്കുക",
                rating: "റേറ്റിംഗ്"
            }
        };
        
        // Comprehensive service categories with all services from specification
        this.serviceCategories = [
            {
                id: 1,
                name: {
                    english: "Local & Traditional Jobs",
                    malayalam: "പ്രാദേശിക & പരമ്പരാഗത ജോലികൾ"
                },
                icon: "🌾",
                services: [
                    { id: 101, name: { english: "Coconut tree climber", malayalam: "തെങ്ങ് കയറ്റക്കാരൻ" }, icon: "🥥", hasmalayalamName: true },
                    { id: 102, name: { english: "Toddy tapper", malayalam: "കള്ളു തൊഴിലാളി" }, icon: "🪣", hasmalayalamName: true },
                    { id: 103, name: { english: "Well digger / cleaner", malayalam: "കിണർ കുഴിക്കുന്നവൻ" }, icon: "🕳️", hasmalayalamName: true },
                    { id: 104, name: { english: "Septic tank cleaner", malayalam: "Septic tank cleaner" }, icon: "🔧", hasmalayalamName: false },
                    { id: 105, name: { english: "Bamboo / cane artisan", malayalam: "മുള/വടി കലാകാരൻ" }, icon: "🎋", hasmalayalamName: true },
                    { id: 106, name: { english: "Agricultural laborer", malayalam: "കൃഷി തൊഴിലാളി" }, icon: "🌾", hasmalayalamName: true },
                    { id: 107, name: { english: "Mason (construction labor)", malayalam: "മേസ്ത്രി" }, icon: "🧱", hasmalayalamName: true },
                    { id: 108, name: { english: "Fisherman", malayalam: "മീൻകാരൻ" }, icon: "🎣", hasmalayalamName: true },
                    { id: 109, name: { english: "Local blacksmith", malayalam: "കമ്മാരൻ" }, icon: "🔨", hasmalayalamName: true },
                    { id: 110, name: { english: "Firewood supplier", malayalam: "വിറകു വിതരണക്കാരൻ" }, icon: "🪵", hasmalayalamName: true },
                    { id: 111, name: { english: "Manual scavenger", malayalam: "Manual scavenger" }, icon: "🧹", hasmalayalamName: false }
                ]
            },
            {
                id: 2,
                name: {
                    english: "Household Support Services",
                    malayalam: "ഗാർഹിക സഹായ സേവനങ്ങൾ"
                },
                icon: "🏠",
                services: [
                    { id: 201, name: { english: "Housemaid (full-time/part-time)", malayalam: "വീട്ടുജോലിക്കാരി" }, icon: "🏠", hasmalayalamName: true },
                    { id: 202, name: { english: "Cook / home chef", malayalam: "പാചകക്കാരി / ഹോം ഷെഫ്" }, icon: "👩‍🍳", hasmalayalamName: true },
                    { id: 203, name: { english: "Baby sitter / nanny", malayalam: "കുഞ്ഞിനെ നോക്കുന്നവർ" }, icon: "👶", hasmalayalamName: true },
                    { id: 204, name: { english: "Elder care / home nurse", malayalam: "വയോധിക പരിചരണം" }, icon: "👵", hasmalayalamName: true },
                    { id: 205, name: { english: "Driver (car/auto)", malayalam: "ഡ്രൈവർ" }, icon: "🚗", hasmalayalamName: true },
                    { id: 206, name: { english: "Laundry & ironing service", malayalam: "അലക്കു & ഇസ്തിരി സേവനം" }, icon: "👔", hasmalayalamName: true },
                    { id: 207, name: { english: "House cleaner / floor mopper", malayalam: "വീട് വൃത്തിയാക്കുന്നവർ" }, icon: "🧽", hasmalayalamName: true },
                    { id: 208, name: { english: "Clothes washer (Dhobi)", malayalam: "ധോബി" }, icon: "👕", hasmalayalamName: true },
                    { id: 209, name: { english: "Garden maintenance / gardener", malayalam: "തോട്ടക്കാരൻ" }, icon: "🌱", hasmalayalamName: true }
                ]
            },
            {
                id: 3,
                name: {
                    english: "Technical & Utility Services",
                    malayalam: "സാങ്കേതിക & യൂട്ടിലിറ്റി സേവനങ്ങൾ"
                },
                icon: "🔧",
                services: [
                    { id: 301, name: { english: "Electrician", malayalam: "ഇലക്ട്രീഷ്യൻ" }, icon: "⚡", hasmalayalamName: true },
                    { id: 302, name: { english: "Plumber", malayalam: "പ്ലംബർ" }, icon: "🔧", hasmalayalamName: true },
                    { id: 303, name: { english: "Carpenter", malayalam: "മരപ്പണിക്കാരൻ" }, icon: "🪚", hasmalayalamName: true },
                    { id: 304, name: { english: "Painter", malayalam: "പെയിന്റർ" }, icon: "🎨", hasmalayalamName: true },
                    { id: 305, name: { english: "Tiler", malayalam: "ഓട്ടുപണിക്കാരൻ" }, icon: "🔲", hasmalayalamName: true },
                    { id: 306, name: { english: "A/C mechanic", malayalam: "A/C mechanic" }, icon: "❄️", hasmalayalamName: false },
                    { id: 307, name: { english: "Refrigerator / washing machine technician", malayalam: "Refrigerator / washing machine technician" }, icon: "🔧", hasmalayalamName: false },
                    { id: 308, name: { english: "TV / mobile / laptop repair technician", malayalam: "TV / mobile / laptop repair technician" }, icon: "📱", hasmalayalamName: false },
                    { id: 309, name: { english: "RO purifier technician", malayalam: "RO purifier technician" }, icon: "💧", hasmalayalamName: false },
                    { id: 310, name: { english: "Water tank cleaner", malayalam: "Water tank cleaner" }, icon: "🚰", hasmalayalamName: false },
                    { id: 311, name: { english: "Pest control service provider", malayalam: "Pest control service provider" }, icon: "🐛", hasmalayalamName: false },
                    { id: 312, name: { english: "Generator mechanic", malayalam: "Generator mechanic" }, icon: "⚙️", hasmalayalamName: false },
                    { id: 313, name: { english: "Handyman for odd jobs", malayalam: "Handyman for odd jobs" }, icon: "🔨", hasmalayalamName: false }
                ]
            },
            {
                id: 4,
                name: {
                    english: "Medical & Wellness Services",
                    malayalam: "മെഡിക്കൽ & വെൽനെസ് സേവനങ്ങൾ"
                },
                icon: "🏥",
                services: [
                    { id: 401, name: { english: "General physician (MBBS)", malayalam: "സാധാരണ ഡോക്ടർ" }, icon: "👨‍⚕️", hasmalayalamName: true },
                    { id: 402, name: { english: "Specialist doctor (ENT, Ortho, Dermatologist)", malayalam: "സ്പെഷ്യലിസ്റ്റ് ഡോക്ടർ" }, icon: "🩺", hasmalayalamName: true },
                    { id: 403, name: { english: "Home nurse / medical attendant", malayalam: "ഹോം നഴ്സ് / മെഡിക്കൽ അറ്റൻഡന്റ്" }, icon: "👩‍⚕️", hasmalayalamName: true },
                    { id: 404, name: { english: "Physiotherapist", malayalam: "ഫിസിയോതെറാപ്പിസ്റ്റ്" }, icon: "🤸", hasmalayalamName: true },
                    { id: 405, name: { english: "Lab sample collection staff", malayalam: "Lab sample collection staff" }, icon: "🧪", hasmalayalamName: false },
                    { id: 406, name: { english: "Ayurvedic practitioner / masseur", malayalam: "ആയുർവേദ വൈദ്യൻ" }, icon: "🌿", hasmalayalamName: true },
                    { id: 407, name: { english: "Yoga therapist", malayalam: "യോഗ തെറാപ്പിസ്റ്റ്" }, icon: "🧘", hasmalayalamName: true },
                    { id: 408, name: { english: "Ambulance driver / medical transport", malayalam: "ആംബുലൻസ് ഡ്രൈവർ" }, icon: "🚑", hasmalayalamName: true },
                    { id: 409, name: { english: "Mental health counselor", malayalam: "Mental health counselor" }, icon: "🧠", hasmalayalamName: false },
                    { id: 410, name: { english: "Medical equipment supplier", malayalam: "Medical equipment supplier" }, icon: "🏥", hasmalayalamName: false }
                ]
            },
            {
                id: 5,
                name: {
                    english: "Legal & Financial Professionals",
                    malayalam: "നിയമ & സാമ്പത്തിക പ്രൊഫഷണലുകൾ"
                },
                icon: "⚖️",
                services: [
                    { id: 501, name: { english: "Advocate / Notary", malayalam: "അഭിഭാഷകൻ / നോട്ടറി" }, icon: "⚖️", hasmalayalamName: true },
                    { id: 502, name: { english: "Chartered Accountant (CA)", malayalam: "ചാർട്ടേഡ് അക്കൗണ്ടന്റ്" }, icon: "📊", hasmalayalamName: true },
                    { id: 503, name: { english: "Tax consultant", malayalam: "Tax consultant" }, icon: "💰", hasmalayalamName: false },
                    { id: 504, name: { english: "Financial advisor", malayalam: "Financial advisor" }, icon: "📈", hasmalayalamName: false },
                    { id: 505, name: { english: "Company Secretary", malayalam: "Company Secretary" }, icon: "📋", hasmalayalamName: false },
                    { id: 506, name: { english: "Document writer / Scribe", malayalam: "Document writer / Scribe" }, icon: "✍️", hasmalayalamName: false },
                    { id: 507, name: { english: "Stamp paper vendor", malayalam: "Stamp paper vendor" }, icon: "📜", hasmalayalamName: false },
                    { id: 508, name: { english: "Loan agent / DSA", malayalam: "Loan agent / DSA" }, icon: "🏦", hasmalayalamName: false },
                    { id: 509, name: { english: "Insurance agent", malayalam: "Insurance agent" }, icon: "🛡️", hasmalayalamName: false },
                    { id: 510, name: { english: "Auditor", malayalam: "Auditor" }, icon: "🔍", hasmalayalamName: false }
                ]
            },
            {
                id: 6,
                name: {
                    english: "Real Estate & Construction",
                    malayalam: "റിയൽ എസ്റ്റേറ്റ് & നിർമ്മാണം"
                },
                icon: "🏗️",
                services: [
                    { id: 601, name: { english: "Real estate broker / agent", malayalam: "റിയൽ എസ്റ്റേറ്റ് ബ്രോക്കർ" }, icon: "🏠", hasmalayalamName: true },
                    { id: 602, name: { english: "Civil engineer / contractor", malayalam: "സിവിൽ എഞ്ചിനീയർ / കോൺട്രാക്ടർ" }, icon: "🏗️", hasmalayalamName: true },
                    { id: 603, name: { english: "Architect", malayalam: "ആർക്കിടെക്റ്റ്" }, icon: "📐", hasmalayalamName: true },
                    { id: 604, name: { english: "Interior designer", malayalam: "ഇന്റീരിയർ ഡിസൈനർ" }, icon: "🎨", hasmalayalamName: true },
                    { id: 605, name: { english: "Land surveyor", malayalam: "Land surveyor" }, icon: "📏", hasmalayalamName: false },
                    { id: 606, name: { english: "Construction supervisor", malayalam: "Construction supervisor" }, icon: "👷", hasmalayalamName: false },
                    { id: 607, name: { english: "Site workers / laborers", malayalam: "Site workers / laborers" }, icon: "🔨", hasmalayalamName: false },
                    { id: 608, name: { english: "Tile layer", malayalam: "Tile layer" }, icon: "🧱", hasmalayalamName: false },
                    { id: 609, name: { english: "Granite / marble worker", malayalam: "Granite / marble worker" }, icon: "🪨", hasmalayalamName: false },
                    { id: 610, name: { english: "Welder", malayalam: "വെൽഡർ" }, icon: "🔥", hasmalayalamName: true }
                ]
            },
            {
                id: 7,
                name: {
                    english: "Beauty, Grooming & Fashion",
                    malayalam: "സൌന്ദര്യം, ഗ്രൂമിംഗ് & ഫാഷൻ"
                },
                icon: "💇‍♀️",
                services: [
                    { id: 701, name: { english: "Beautician (home service)", malayalam: "ബ്യൂട്ടീഷ്യൻ" }, icon: "💄", hasmalayalamName: true },
                    { id: 702, name: { english: "Bridal makeup artist", malayalam: "Bridal makeup artist" }, icon: "👰", hasmalayalamName: false },
                    { id: 703, name: { english: "Hair stylist / hairdresser", malayalam: "Hair stylist / hairdresser" }, icon: "💇‍♀️", hasmalayalamName: false },
                    { id: 704, name: { english: "Mehndi artist", malayalam: "മെഹന്ദി ആർട്ടിസ്റ്റ്" }, icon: "🎨", hasmalayalamName: true },
                    { id: 705, name: { english: "Spa / massage therapist", malayalam: "Spa / massage therapist" }, icon: "💆‍♀️", hasmalayalamName: false },
                    { id: 706, name: { english: "Tailor / dress designer", malayalam: "തയ്യൽക്കാരൻ / ഡ്രസ് ഡിസൈനർ" }, icon: "👗", hasmalayalamName: true },
                    { id: 707, name: { english: "Embroidery specialist", malayalam: "Embroidery specialist" }, icon: "🧵", hasmalayalamName: false }
                ]
            },
            {
                id: 8,
                name: {
                    english: "Automobile Services",
                    malayalam: "ഓട്ടോമൊബൈൽ സേവനങ്ങൾ"
                },
                icon: "🚗",
                services: [
                    { id: 801, name: { english: "Auto driver", malayalam: "ഓട്ടോ ഡ്രൈവർ" }, icon: "🛺", hasmalayalamName: true },
                    { id: 802, name: { english: "Taxi driver", malayalam: "ടാക്സി ഡ്രൈവർ" }, icon: "🚕", hasmalayalamName: true },
                    { id: 803, name: { english: "Mechanic (2-wheeler / 4-wheeler)", malayalam: "മെക്കാനിക്" }, icon: "🔧", hasmalayalamName: true },
                    { id: 804, name: { english: "Puncture repair service", malayalam: "Puncture repair service" }, icon: "🛞", hasmalayalamName: false },
                    { id: 805, name: { english: "Car wash (mobile or in-garage)", malayalam: "Car wash (mobile or in-garage)" }, icon: "🧽", hasmalayalamName: false },
                    { id: 806, name: { english: "Driving instructor", malayalam: "Driving instructor" }, icon: "🚗", hasmalayalamName: false },
                    { id: 807, name: { english: "Vehicle towing service", malayalam: "Vehicle towing service" }, icon: "🚛", hasmalayalamName: false }
                ]
            },
            {
                id: 9,
                name: {
                    english: "Education & Coaching",
                    malayalam: "വിദ്യാഭ്യാസം & കോച്ചിംഗ്"
                },
                icon: "📚",
                services: [
                    { id: 901, name: { english: "School tuition teacher (home tutor)", malayalam: "School tuition teacher (home tutor)" }, icon: "👨‍🏫", hasmalayalamName: false },
                    { id: 902, name: { english: "College subject tutor", malayalam: "College subject tutor" }, icon: "🎓", hasmalayalamName: false },
                    { id: 903, name: { english: "Language trainer (English, Hindi, Malayalam, etc.)", malayalam: "Language trainer (English, Hindi, Malayalam, etc.)" }, icon: "🗣️", hasmalayalamName: false },
                    { id: 904, name: { english: "Music / dance / art teacher", malayalam: "Music / dance / art teacher" }, icon: "🎵", hasmalayalamName: false },
                    { id: 905, name: { english: "Computer / IT trainer", malayalam: "Computer / IT trainer" }, icon: "💻", hasmalayalamName: false },
                    { id: 906, name: { english: "Competitive exam coaching (PSC, UPSC, etc.)", malayalam: "Competitive exam coaching (PSC, UPSC, etc.)" }, icon: "📖", hasmalayalamName: false }
                ]
            },
            {
                id: 10,
                name: {
                    english: "Digital & Technology Services",
                    malayalam: "ഡിജിറ്റൽ & ടെക്നോളജി സേവനങ്ങൾ"
                },
                icon: "💻",
                services: [
                    { id: 1001, name: { english: "Mobile repair technician", malayalam: "Mobile repair technician" }, icon: "📱", hasmalayalamName: false },
                    { id: 1002, name: { english: "Laptop / PC service provider", malayalam: "Laptop / PC service provider" }, icon: "💻", hasmalayalamName: false },
                    { id: 1003, name: { english: "Internet/Wi-Fi technician", malayalam: "Internet/Wi-Fi technician" }, icon: "📡", hasmalayalamName: false },
                    { id: 1004, name: { english: "CCTV installer", malayalam: "CCTV installer" }, icon: "📹", hasmalayalamName: false },
                    { id: 1005, name: { english: "Printer repair technician", malayalam: "Printer repair technician" }, icon: "🖨️", hasmalayalamName: false },
                    { id: 1006, name: { english: "Digital marketing consultant", malayalam: "Digital marketing consultant" }, icon: "📊", hasmalayalamName: false },
                    { id: 1007, name: { english: "Web designer / freelancer", malayalam: "Web designer / freelancer" }, icon: "🌐", hasmalayalamName: false },
                    { id: 1008, name: { english: "Software developer (freelance)", malayalam: "Software developer (freelance)" }, icon: "💻", hasmalayalamName: false }
                ]
            }
        ];
        
        // Emergency contacts with Malayalam translations
        this.emergencyServices = [
            {
                name: { english: "Police", malayalam: "പോലീസ്" },
                phone: "100",
                type: "emergency",
                icon: "shield-alt"
            },
            {
                name: { english: "Fire Service", malayalam: "അഗ്നിശമന സേവനം" },
                phone: "101",
                type: "emergency",
                icon: "fire-alt"
            },
            {
                name: { english: "Ambulance", malayalam: "ആംബുലൻസ്" },
                phone: "108",
                type: "medical",
                icon: "ambulance"
            },
            {
                name: { english: "Women Helpline", malayalam: "വനിതാ സഹായ ഹോട്ട്‌ലൈൻ" },
                phone: "1091",
                type: "helpline",
                icon: "hands-helping"
            }
        ];
        
        // Sample providers with Malayalam names
        this.sampleProviders = [
            {
                id: 1,
                name: { english: "Ravi Kumar", malayalam: "രവി കുമാർ" },
                service: "electrician",
                rating: 4.8,
                experience: "8 years",
                price: "₹300/hour",
                available: true,
                location: "Kochi"
            },
            {
                id: 2,
                name: { english: "Sunitha Amma", malayalam: "സുനിത അമ്മ" },
                service: "cook",
                rating: 4.9,
                experience: "12 years",
                price: "₹8000/month",
                available: true,
                location: "Thiruvananthapuram"
            },
            {
                id: 3,
                name: { english: "Dr. Prasad", malayalam: "ഡോ. പ്രസാദ്" },
                service: "doctor",
                rating: 4.7,
                experience: "15 years",
                price: "₹500/visit",
                available: true,
                location: "Kozhikode"
            }
        ];
        
        this.relationships = [
            { english: "Spouse", malayalam: "ഇണ" },
            { english: "Parent", malayalam: "രക്ഷിതാവ്" },
            { english: "Child", malayalam: "കുട്ടി" },
            { english: "Sibling", malayalam: "സഹോദരൻ/സഹോദരി" },
            { english: "Friend", malayalam: "സുഹൃത്ത്" },
            { english: "Colleague", malayalam: "സഹപ്രവർത്തകൻ" },
            { english: "Relative", malayalam: "ബന്ധു" },
            { english: "Neighbor", malayalam: "അയൽക്കാരൻ" }
        ];
        
        this.permissionLevels = [
            {
                id: 1,
                name: { english: "Full Access", malayalam: "പൂർണ്ണ ആക്സസ്" },
                description: { english: "Can book any service and make payments", malayalam: "ഏത് സേവനവും ബുക്ക് ചെയ്യാനും പേയ്മെന്റ് നടത്താനും കഴിയും" }
            },
            {
                id: 2,
                name: { english: "Limited Access", malayalam: "പരിമിത ആക്സസ്" },
                description: { english: "Can book services with spending limit", malayalam: "ചെലവ് പരിധിയോടെ സേവനങ്ങൾ ബുക്ക് ചെയ്യാം" }
            },
            {
                id: 3,
                name: { english: "Emergency Only", malayalam: "അടിയന്തരം മാത്രം" },
                description: { english: "Can only book emergency services", malayalam: "അടിയന്തര സേവനങ്ങൾ മാത്രമേ ബുക്ക് ചെയ്യാൻ കഴിയൂ" }
            }
        ];
        
        this.contacts = [];
        this.paymentMethods = [
            { id: 1, name: { english: "UPI Payment", malayalam: "UPI പേയ്മെന്റ്" }, icon: "mobile-alt", enabled: true },
            { id: 2, name: { english: "Credit/Debit Card", malayalam: "ക്രെഡിറ്റ്/ഡെബിറ്റ് കാർഡ്" }, icon: "credit-card", enabled: true },
            { id: 3, name: { english: "Digital Wallet", malayalam: "ഡിജിറ്റൽ വാലറ്റ്" }, icon: "wallet", enabled: true },
            { id: 4, name: { english: "Cash Payment", malayalam: "പണം കൊടുക്കൽ" }, icon: "money-bill-alt", enabled: true }
        ];
        
        this.bookings = [];
        this.currentTab = 'active';
        this.navigationStack = ['home-screen'];
    }
    
    init() {
        this.setupEventListeners();
        this.updateLanguage();
        this.renderServiceCategories();
        this.renderContacts();
        this.renderPaymentMethods();
        this.populateRelationships();
        this.populatePermissions();
        this.populateBookingForOptions();
        this.renderEmergencyServices();
        this.renderUserSwitchModal();
        this.setDefaultDateTime();
        this.renderBookings();
        console.log('Tap For All App with comprehensive Malayalam services initialized successfully');
    }
    
    // Language switching functionality
    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'english' ? 'malayalam' : 'english';
        this.updateLanguage();
        this.renderServiceCategories(); // Re-render categories with new language
        this.renderEmergencyServices(); // Re-render emergency services
        this.renderPaymentMethods(); // Re-render payment methods
        this.populateRelationships(); // Re-populate relationship options
        this.populatePermissions(); // Re-populate permission options
        console.log('Language switched to:', this.currentLanguage);
    }
    
    updateLanguage() {
        const languageToggle = document.getElementById('languageToggle');
        const languageText = document.getElementById('languageText');
        
        if (languageToggle && languageText) {
            languageText.textContent = this.currentLanguage === 'english' ? 'മലയാളം' : 'English';
        }
        
        // Update HTML lang attribute
        const htmlRoot = document.getElementById('htmlRoot');
        if (htmlRoot) {
            htmlRoot.lang = this.currentLanguage === 'malayalam' ? 'ml' : 'en';
        }
        
        // Add Malayalam font class for Malayalam text
        document.body.classList.toggle('malayalam-font', this.currentLanguage === 'malayalam');
        
        // Update all text elements with data-text attributes
        const textElements = document.querySelectorAll('[data-text]');
        textElements.forEach(element => {
            const key = element.getAttribute('data-text');
            if (this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
                element.textContent = this.translations[this.currentLanguage][key];
            }
        });
        
        // Update placeholders
        const placeholderElements = document.querySelectorAll('[data-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-placeholder');
            if (this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
                element.placeholder = this.translations[this.currentLanguage][key];
            }
        });
        
        // Update select options
        this.updateSelectOptions();
    }
    
    updateSelectOptions() {
        // Update sort select options
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            const options = sortSelect.querySelectorAll('option[data-text]');
            options.forEach(option => {
                const key = option.getAttribute('data-text');
                if (this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
                    option.textContent = this.translations[this.currentLanguage][key];
                }
            });
        }
        
        // Update other select elements similarly
        const dataTextOptions = document.querySelectorAll('option[data-text]');
        dataTextOptions.forEach(option => {
            const key = option.getAttribute('data-text');
            if (this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
                option.textContent = this.translations[this.currentLanguage][key];
            }
        });
    }
    
    getText(key) {
        return (this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) || key;
    }
    
    setupEventListeners() {
        // Booking form submission
        const bookingForm = document.getElementById('bookingForm');
        if (bookingForm) {
            bookingForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleBookingSubmit();
            });
        }
        
        // Add contact form submission
        const addContactForm = document.getElementById('addContactForm');
        if (addContactForm) {
            addContactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleAddContact();
            });
        }
        
        // Terms checkbox
        const termsCheckbox = document.getElementById('termsAccept');
        if (termsCheckbox) {
            termsCheckbox.addEventListener('change', (e) => {
                const paymentBtn = document.getElementById('paymentBtn');
                if (paymentBtn) {
                    paymentBtn.disabled = !e.target.checked;
                }
            });
        }
        
        // Star rating
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            star.addEventListener('click', (e) => {
                const rating = parseInt(e.target.dataset.rating);
                this.setRating(rating);
            });
        });
        
        // Tip selection
        const tipButtons = document.querySelectorAll('.tip-btn');
        tipButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tip = parseInt(e.target.dataset.tip);
                this.selectTip(tip);
            });
        });
        
        // Service duration change handler
        const serviceDuration = document.getElementById('serviceDuration');
        if (serviceDuration) {
            serviceDuration.addEventListener('change', () => {
                this.calculatePriceEstimate();
            });
        }
        
        // Fix search input display issue
        const serviceSearch = document.getElementById('serviceSearch');
        if (serviceSearch) {
            serviceSearch.addEventListener('input', (e) => {
                console.log('Search input:', e.target.value);
                this.handleSearch(e.target.value);
            });
        }
    }
    
    handleSearch(searchTerm) {
        if (searchTerm.length < 2) {
            this.renderServiceCategories();
            return;
        }
        
        const searchResults = [];
        
        // Search through all categories and services
        this.serviceCategories.forEach(category => {
            // Check if category name matches
            const categoryEnglishMatch = category.name.english.toLowerCase().includes(searchTerm.toLowerCase());
            const categoryMalayalamMatch = category.name.malayalam.includes(searchTerm);
            
            if (categoryEnglishMatch || categoryMalayalamMatch) {
                searchResults.push({
                    type: 'category',
                    data: category
                });
            }
            
            // Check individual services within category
            if (category.services) {
                category.services.forEach(service => {
                    const serviceEnglishMatch = service.name.english.toLowerCase().includes(searchTerm.toLowerCase());
                    const serviceMalayalamMatch = service.name.malayalam.includes(searchTerm);
                    
                    if (serviceEnglishMatch || serviceMalayalamMatch) {
                        searchResults.push({
                            type: 'service',
                            data: service,
                            category: category
                        });
                    }
                });
            }
        });
        
        this.renderSearchResults(searchResults, searchTerm);
    }
    
    renderSearchResults(results, searchTerm) {
        const serviceCategories = document.getElementById('serviceCategories');
        if (serviceCategories) {
            serviceCategories.innerHTML = '';
            
            if (results.length === 0) {
                serviceCategories.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-search"></i>
                        <p>No services found for "${searchTerm}"</p>
                    </div>
                `;
                return;
            }
            
            results.forEach(result => {
                if (result.type === 'category') {
                    const categoryCard = this.createCategoryCard(result.data);
                    serviceCategories.appendChild(categoryCard);
                } else if (result.type === 'service') {
                    const serviceCard = this.createServiceCard(result.data, result.category);
                    serviceCategories.appendChild(serviceCard);
                }
            });
        }
    }
    
    createCategoryCard(category) {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        const serviceCount = category.services ? category.services.length : 0;
        
        categoryCard.innerHTML = `
            <div class="service-count">${serviceCount}</div>
            <div class="category-icon">${category.icon}</div>
            <h3>${category.name[this.currentLanguage]}</h3>
        `;
        
        categoryCard.addEventListener('click', () => {
            this.selectCategory(category);
        });
        
        return categoryCard;
    }
    
    createServiceCard(service, category) {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        
        // Display name based on whether it has Malayalam name
        const displayName = service.hasmalayalamName 
            ? (this.currentLanguage === 'malayalam' ? service.name.malayalam : `${service.name.malayalam} (${service.name.english})`)
            : service.name.english;
        
        const rating = (4.0 + Math.random() * 1.0).toFixed(1);
        const price = Math.floor(Math.random() * 500) + 200;
        const providers = Math.floor(Math.random() * 20) + 5;
        
        serviceCard.innerHTML = `
            <div class="service-header">
                <div class="service-icon">
                    ${service.icon}
                </div>
                <h4>${displayName}</h4>
            </div>
            <div class="service-description">
                ${category.name[this.currentLanguage]} service
            </div>
            <div class="service-stats">
                <div class="service-rating">
                    <span class="stars">★</span>
                    <span>${rating} (${providers}+ providers)</span>
                </div>
                <div class="service-price">
                    Starting ₹${price}
                </div>
            </div>
        `;
        
        serviceCard.addEventListener('click', () => {
            this.selectService(displayName, service, category);
        });
        
        return serviceCard;
    }
    
    showScreen(screenId) {
        console.log(`Switching to screen: ${screenId}`);
        
        if (this.currentScreen !== screenId && !this.navigationStack.includes(screenId)) {
            this.navigationStack.push(this.currentScreen);
        }
        
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            this.currentScreen = screenId;
        } else {
            console.error(`Screen not found: ${screenId}`);
        }
        
        this.updateNavigation();
    }
    
    updateNavigation() {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        let activeNavSelector = '';
        switch (this.currentScreen) {
            case 'home-screen':
                activeNavSelector = 'button[onclick="showHome()"]';
                break;
            case 'bookings-screen':
                activeNavSelector = 'button[onclick="showBookings()"]';
                break;
            case 'contacts-screen':
                activeNavSelector = 'button[onclick="showContacts()"]';
                break;
            case 'profile-screen':
                activeNavSelector = 'button[onclick="showProfile()"]';
                break;
        }
        
        if (activeNavSelector) {
            const activeNavs = document.querySelectorAll(activeNavSelector);
            activeNavs.forEach(nav => {
                if (nav) nav.classList.add('active');
            });
        }
    }
    
    renderServiceCategories() {
        const serviceCategories = document.getElementById('serviceCategories');
        if (serviceCategories) {
            serviceCategories.innerHTML = '';
            this.serviceCategories.forEach(category => {
                const categoryCard = this.createCategoryCard(category);
                serviceCategories.appendChild(categoryCard);
            });
        }
    }
    
    selectCategory(category) {
        console.log('Category selected:', category);
        this.selectedCategory = category;
        this.renderServices(category);
        
        const categoryTitle = document.getElementById('categoryTitle');
        if (categoryTitle) {
            categoryTitle.textContent = category.name[this.currentLanguage];
        }
        
        this.showScreen('category-screen');
    }
    
    renderServices(category) {
        const servicesGrid = document.getElementById('servicesGrid');
        if (servicesGrid && category.services) {
            servicesGrid.innerHTML = '';
            category.services.forEach(service => {
                const serviceCard = this.createServiceCard(service, category);
                servicesGrid.appendChild(serviceCard);
            });
        }
    }
    
    selectService(serviceName, service, category) {
        console.log('Service selected:', serviceName);
        this.selectedService = serviceName;
        this.selectedServiceData = service;
        this.selectedCategory = category;
        this.generateProviders(serviceName);
        this.renderProviders();
        
        const serviceTitle = document.getElementById('serviceTitle');
        if (serviceTitle) {
            serviceTitle.textContent = `${serviceName} ${this.getText('service_providers')}`;
        }
        
        this.showScreen('providers-screen');
    }
    
    generateProviders(service) {
        this.providers = [];
        const numProviders = Math.floor(Math.random() * 8) + 5;
        
        for (let i = 0; i < numProviders; i++) {
            const baseProvider = this.sampleProviders[i % this.sampleProviders.length];
            const rating = (3.8 + Math.random() * 1.2).toFixed(1);
            const experience = Math.floor(Math.random() * 15) + 1;
            const price = Math.floor(Math.random() * 500) + 200;
            const available = Math.random() > 0.2;
            
            this.providers.push({
                id: i + 1,
                name: baseProvider.name,
                service: service,
                rating: parseFloat(rating),
                experience: experience,
                price: price,
                available: available,
                phone: `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`,
                verified: Math.random() > 0.3,
                reviews: Math.floor(Math.random() * 200) + 20
            });
        }
    }
    
    renderProviders() {
        const providersList = document.getElementById('providersList');
        if (providersList && this.providers) {
            providersList.innerHTML = '';
            
            this.providers.forEach(provider => {
                const providerCard = document.createElement('div');
                providerCard.className = 'provider-card';
                
                providerCard.innerHTML = `
                    <div class="availability-indicator ${provider.available ? '' : 'unavailable'}"></div>
                    <div class="provider-header">
                        <div class="provider-avatar">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="provider-info">
                            <h4>${provider.name[this.currentLanguage]}</h4>
                            <div class="provider-rating">
                                <span class="stars">★</span>
                                <span>${provider.rating} (${provider.reviews} reviews)</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="provider-details">
                        <div class="detail-item">
                            <i class="fas fa-medal"></i>
                            <span>${provider.experience} years exp</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-phone"></i>
                            <span>${provider.phone}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-clock"></i>
                            <span>${provider.available ? 'Available' : 'Busy'}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Within 5km</span>
                        </div>
                    </div>
                    
                    <div class="provider-badges">
                        ${provider.verified ? '<span class="badge verified">Verified</span>' : ''}
                        ${provider.experience > 5 ? '<span class="badge experienced">Experienced</span>' : ''}
                    </div>
                    
                    <div class="provider-price">₹${provider.price}</div>
                `;
                
                if (provider.available) {
                    providerCard.addEventListener('click', () => {
                        this.selectProvider(provider);
                        document.querySelectorAll('.provider-card').forEach(card => card.classList.remove('selected'));
                        providerCard.classList.add('selected');
                        setTimeout(() => {
                            this.proceedToBooking();
                        }, 800);
                    });
                } else {
                    providerCard.style.opacity = '0.6';
                    providerCard.style.cursor = 'not-allowed';
                }
                
                providersList.appendChild(providerCard);
            });
        }
    }
    
    selectProvider(provider) {
        console.log('Provider selected:', provider);
        this.selectedProvider = provider;
    }
    
    proceedToBooking() {
        if (this.selectedProvider) {
            this.renderSelectedProvider();
            this.calculatePriceEstimate();
            this.showScreen('booking-screen');
        }
    }
    
    renderSelectedProvider() {
        const selectedProvider = document.getElementById('selectedProvider');
        if (selectedProvider && this.selectedProvider) {
            selectedProvider.innerHTML = `
                <div class="provider-header">
                    <div class="provider-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="provider-info">
                        <h4>${this.selectedProvider.name[this.currentLanguage]}</h4>
                        <div class="provider-rating">
                            <span class="stars">★</span>
                            <span>${this.selectedProvider.rating} • ${this.selectedProvider.experience} years exp</span>
                        </div>
                    </div>
                </div>
                <div class="provider-details">
                    <div class="detail-item">
                        <i class="fas fa-tools"></i>
                        <span>${this.selectedService}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-rupee-sign"></i>
                        <span>₹${this.selectedProvider.price}/service</span>
                    </div>
                </div>
            `;
        }
    }
    
    calculatePriceEstimate() {
        const priceEstimate = document.getElementById('priceEstimate');
        if (priceEstimate && this.selectedProvider) {
            const duration = parseInt(document.getElementById('serviceDuration')?.value || 1);
            const basePrice = this.selectedProvider.price;
            const totalService = basePrice * duration;
            const serviceFee = Math.round(totalService * 0.1);
            const taxes = Math.round(totalService * 0.05);
            const total = totalService + serviceFee + taxes;
            
            priceEstimate.innerHTML = `
                <div class="price-title">Price Estimate</div>
                <div class="price-breakdown">
                    <div class="price-item">
                        <span>Service (${duration}h)</span>
                        <span>₹${totalService}</span>
                    </div>
                    <div class="price-item">
                        <span>Service Fee</span>
                        <span>₹${serviceFee}</span>
                    </div>
                    <div class="price-item">
                        <span>Taxes</span>
                        <span>₹${taxes}</span>
                    </div>
                    <div class="price-item total">
                        <span>Total</span>
                        <span>₹${total}</span>
                    </div>
                </div>
            `;
        }
    }
    
    handleBookingSubmit() {
        const serviceLocation = document.getElementById('serviceLocation');
        const serviceDate = document.getElementById('serviceDate');
        const serviceTime = document.getElementById('serviceTime');
        const serviceDuration = document.getElementById('serviceDuration');
        const specialRequirements = document.getElementById('specialRequirements');
        const bookingFor = document.getElementById('bookingFor');
        
        this.bookingDetails = {
            provider: this.selectedProvider,
            service: this.selectedService,
            location: serviceLocation ? serviceLocation.value : '',
            date: serviceDate ? serviceDate.value : '',
            time: serviceTime ? serviceTime.value : '',
            duration: serviceDuration ? parseInt(serviceDuration.value) : 1,
            requirements: specialRequirements ? specialRequirements.value : '',
            bookingFor: bookingFor ? bookingFor.value : 'self'
        };
        
        if (!this.bookingDetails.location || !this.bookingDetails.date || !this.bookingDetails.time) {
            alert('Please fill in all required fields');
            return;
        }
        
        console.log('Booking details:', this.bookingDetails);
        this.renderPaymentSummary();
        this.showScreen('payment-screen');
    }
    
    renderPaymentSummary() {
        const paymentSummary = document.getElementById('paymentSummary');
        if (paymentSummary && this.bookingDetails) {
            const total = this.calculateTotal();
            
            paymentSummary.innerHTML = `
                <div class="summary-section">
                    <div class="summary-title">Service Details</div>
                    <div class="summary-details">
                        <div class="summary-item">
                            <span>Service</span>
                            <span>${this.bookingDetails.service}</span>
                        </div>
                        <div class="summary-item">
                            <span>Provider</span>
                            <span>${this.bookingDetails.provider.name[this.currentLanguage]}</span>
                        </div>
                        <div class="summary-item">
                            <span>Date & Time</span>
                            <span>${this.bookingDetails.date} at ${this.bookingDetails.time}</span>
                        </div>
                        <div class="summary-item">
                            <span>Duration</span>
                            <span>${this.bookingDetails.duration} hour(s)</span>
                        </div>
                        <div class="summary-item">
                            <span>Location</span>
                            <span>${this.bookingDetails.location}</span>
                        </div>
                    </div>
                </div>
                
                <div class="summary-section">
                    <div class="summary-details">
                        <div class="summary-item highlight">
                            <span>Total Amount</span>
                            <span>₹${total}</span>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    
    calculateTotal() {
        if (!this.selectedProvider || !this.bookingDetails) return 0;
        
        const duration = this.bookingDetails.duration;
        const basePrice = this.selectedProvider.price;
        const totalService = basePrice * duration;
        const serviceFee = Math.round(totalService * 0.1);
        const taxes = Math.round(totalService * 0.05);
        return totalService + serviceFee + taxes;
    }
    
    renderPaymentMethods() {
        const paymentMethodsContainer = document.getElementById('paymentMethods');
        if (paymentMethodsContainer) {
            paymentMethodsContainer.innerHTML = '';
            this.paymentMethods.forEach(method => {
                const methodElement = document.createElement('div');
                methodElement.className = 'payment-option';
                methodElement.innerHTML = `
                    <input type="radio" name="paymentMethod" value="${method.id}" id="payment-${method.id}">
                    <i class="fas fa-${method.icon} payment-icon"></i>
                    <span>${method.name[this.currentLanguage]}</span>
                `;
                
                methodElement.addEventListener('click', () => {
                    const radio = methodElement.querySelector('input');
                    radio.checked = true;
                    this.selectPaymentMethod(method);
                    
                    document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
                    methodElement.classList.add('selected');
                });
                
                paymentMethodsContainer.appendChild(methodElement);
            });
        }
    }
    
    selectPaymentMethod(method) {
        console.log('Payment method selected:', method);
        this.selectedPaymentMethod = method;
    }
    
    confirmPayment() {
        if (!this.selectedPaymentMethod) {
            alert('Please select a payment method');
            return;
        }
        
        const paymentBtn = document.getElementById('paymentBtn');
        if (paymentBtn) {
            paymentBtn.classList.add('loading');
            paymentBtn.textContent = 'Processing Payment...';
        }
        
        setTimeout(() => {
            this.currentBooking = {
                id: 'BK' + Date.now(),
                ...this.bookingDetails,
                payment: this.selectedPaymentMethod,
                status: 'confirmed',
                amount: this.calculateTotal(),
                createdAt: new Date()
            };
            
            this.bookings.unshift(this.currentBooking);
            
            console.log('Payment confirmed:', this.currentBooking);
            this.showBookingStatus();
            
            if (paymentBtn) {
                paymentBtn.classList.remove('loading');
                paymentBtn.textContent = this.getText('confirm_pay');
            }
        }, 2000);
    }
    
    showBookingStatus() {
        this.renderProviderInfo();
        this.startStatusUpdates();
        this.showScreen('status-screen');
    }
    
    renderProviderInfo() {
        const providerInfo = document.getElementById('providerInfo');
        if (providerInfo && this.selectedProvider) {
            providerInfo.innerHTML = `
                <div class="provider-header">
                    <div class="provider-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="provider-info">
                        <h4>${this.selectedProvider.name[this.currentLanguage]}</h4>
                        <div class="provider-rating">
                            <span class="stars">★</span>
                            <span>${this.selectedProvider.rating}</span>
                        </div>
                    </div>
                </div>
                <div class="provider-details">
                    <div class="detail-item">
                        <i class="fas fa-tools"></i>
                        <span>${this.selectedService}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-phone"></i>
                        <span>${this.selectedProvider.phone}</span>
                    </div>
                </div>
            `;
        }
    }
    
    startStatusUpdates() {
        let currentStatus = 0;
        const statuses = [
            { title: this.getText('service_confirmed'), message: 'Your service provider has been notified', eta: 30 },
            { title: 'Provider En Route', message: this.getText('provider_on_way'), eta: 15 },
            { title: 'Provider Arrived', message: 'Service provider has arrived at your location', eta: 0 },
            { title: 'Service In Progress', message: 'Service is being performed', eta: 0 },
            { title: this.getText('service_completed'), message: 'Service has been completed successfully', eta: 0 }
        ];
        
        const updateStatus = () => {
            if (currentStatus < statuses.length) {
                const status = statuses[currentStatus];
                const statusTitle = document.getElementById('statusTitle');
                const statusMessage = document.getElementById('statusMessage');
                const etaTime = document.getElementById('etaTime');
                
                if (statusTitle) statusTitle.textContent = status.title;
                if (statusMessage) statusMessage.textContent = status.message;
                if (etaTime) etaTime.textContent = status.eta > 0 ? `${status.eta} min` : 'Arrived';
                
                currentStatus++;
                
                if (currentStatus < statuses.length) {
                    setTimeout(updateStatus, 4000);
                } else {
                    setTimeout(() => {
                        this.showRatingScreen();
                    }, 2000);
                }
            }
        };
        
        updateStatus();
    }
    
    showRatingScreen() {
        this.showScreen('rating-screen');
    }
    
    setRating(rating) {
        this.userRating = rating;
        const stars = document.querySelectorAll('.star');
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
    
    selectTip(tip) {
        this.selectedTip = tip;
        document.querySelectorAll('.tip-btn').forEach(btn => btn.classList.remove('selected'));
        const selectedBtn = document.querySelector(`[data-tip="${tip}"]`);
        if (selectedBtn) selectedBtn.classList.add('selected');
    }
    
    submitRating() {
        const feedback = document.getElementById('feedbackText');
        const feedbackValue = feedback ? feedback.value : '';
        
        if (this.currentBooking) {
            this.currentBooking.status = 'completed';
            this.currentBooking.rating = this.userRating;
            this.currentBooking.feedback = feedbackValue;
            this.currentBooking.tip = this.selectedTip;
        }
        
        alert('Thank you for your feedback! Rating submitted successfully.');
        this.resetBookingData();
        this.showScreen('home-screen');
    }
    
    resetBookingData() {
        this.selectedCategory = null;
        this.selectedService = null;
        this.selectedProvider = null;
        this.currentBooking = null;
        this.bookingDetails = {};
        this.selectedPaymentMethod = null;
        this.userRating = 0;
        this.selectedTip = 0;
        
        const bookingForm = document.getElementById('bookingForm');
        if (bookingForm) bookingForm.reset();
        
        document.querySelectorAll('.star').forEach(star => star.classList.remove('active'));
        document.querySelectorAll('.tip-btn').forEach(btn => btn.classList.remove('selected'));
        document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
        
        this.setDefaultDateTime();
    }
    
    renderContacts() {
        const contactsList = document.getElementById('contactsList');
        if (contactsList) {
            contactsList.innerHTML = '';
            
            if (this.contacts.length === 0) {
                contactsList.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-users"></i>
                        <p>No contacts added yet</p>
                        <button class="btn btn--primary" onclick="showAddContact()">Add Contact</button>
                    </div>
                `;
                return;
            }
            
            this.contacts.forEach(contact => {
                const contactCard = document.createElement('div');
                contactCard.className = 'contact-card';
                
                contactCard.innerHTML = `
                    <div class="contact-header">
                        <div class="contact-avatar">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="contact-info">
                            <h4>${contact.name}</h4>
                            <div class="contact-relationship">${contact.relationship}</div>
                        </div>
                    </div>
                    <div class="contact-details">
                        <div class="contact-status">
                            <div class="status-dot ${contact.status === 'online' ? '' : 'offline'}"></div>
                            <span>${contact.status}</span>
                        </div>
                        <div>
                            ${contact.isEmergency ? '<span class="emergency-badge">Emergency</span>' : ''}
                            <span class="permission-level">${contact.permission}</span>
                        </div>
                    </div>
                `;
                
                contactsList.appendChild(contactCard);
            });
        }
    }
    
    populateRelationships() {
        const relationshipSelect = document.getElementById('contactRelationship');
        if (relationshipSelect) {
            relationshipSelect.innerHTML = `<option value="">${this.getText('select_relationship')}</option>`;
            this.relationships.forEach(relationship => {
                const option = new Option(relationship[this.currentLanguage], relationship.english);
                relationshipSelect.add(option);
            });
        }
    }
    
    populatePermissions() {
        const permissionSelect = document.getElementById('contactPermission');
        if (permissionSelect) {
            permissionSelect.innerHTML = '';
            this.permissionLevels.forEach(permission => {
                const option = new Option(permission.name[this.currentLanguage], permission.name.english);
                permissionSelect.add(option);
            });
        }
    }
    
    populateBookingForOptions() {
        const bookingForSelect = document.getElementById('bookingFor');
        if (bookingForSelect) {
            bookingForSelect.innerHTML = `<option value="self">${this.getText('myself')}</option>`;
            this.contacts.forEach(contact => {
                if (contact.permission === 'Full Access' || contact.permission === 'Limited Access') {
                    const option = new Option(contact.name, contact.id);
                    bookingForSelect.add(option);
                }
            });
        }
    }
    
    handleAddContact() {
        const name = document.getElementById('contactName');
        const phone = document.getElementById('contactPhone');
        const relationship = document.getElementById('contactRelationship');
        const permission = document.getElementById('contactPermission');
        const emergency = document.getElementById('emergencyContact');
        
        if (!name.value || !phone.value || !relationship.value || !permission.value) {
            alert('Please fill in all required fields');
            return;
        }
        
        const newContact = {
            id: this.contacts.length + 1,
            name: name.value,
            phone: phone.value,
            relationship: relationship.value,
            permission: permission.value,
            isEmergency: emergency.checked,
            status: 'offline'
        };
        
        this.contacts.push(newContact);
        this.renderContacts();
        this.populateBookingForOptions();
        this.renderUserSwitchModal();
        
        alert('Contact added successfully!');
        this.showScreen('contacts-screen');
        
        const addContactForm = document.getElementById('addContactForm');
        if (addContactForm) addContactForm.reset();
    }
    
    renderBookings() {
        const bookingsList = document.getElementById('bookingsList');
        if (bookingsList) {
            const filteredBookings = this.getFilteredBookings();
            
            if (filteredBookings.length === 0) {
                bookingsList.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-calendar-alt"></i>
                        <p>No ${this.currentTab} bookings</p>
                        <button class="btn btn--primary" onclick="showHome()">Book Service</button>
                    </div>
                `;
                return;
            }
            
            bookingsList.innerHTML = '';
            filteredBookings.forEach(booking => {
                const bookingCard = document.createElement('div');
                bookingCard.className = 'booking-card';
                
                bookingCard.innerHTML = `
                    <div class="booking-header">
                        <div class="booking-info">
                            <h4>${booking.service}</h4>
                            <div class="booking-date">${booking.date} at ${booking.time}</div>
                        </div>
                        <div class="booking-status ${booking.status}">${booking.status}</div>
                    </div>
                    <div class="booking-details">
                        <div>Provider: ${booking.provider}</div>
                        <div>Amount: ₹${booking.amount}</div>
                        <div>ID: ${booking.id}</div>
                        <div>${booking.status === 'completed' ? 'Completed' : 'Upcoming'}</div>
                    </div>
                `;
                
                bookingsList.appendChild(bookingCard);
            });
        }
    }
    
    getFilteredBookings() {
        switch (this.currentTab) {
            case 'active':
                return this.bookings.filter(b => b.status === 'active' || b.status === 'confirmed');
            case 'history':
                return this.bookings.filter(b => b.status === 'completed' || b.status === 'cancelled');
            case 'scheduled':
                return this.bookings.filter(b => b.status === 'scheduled');
            default:
                return this.bookings;
        }
    }
    
    showBookingTab(tab) {
        this.currentTab = tab;
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        const activeTabBtn = document.querySelector(`button[onclick="showBookingTab('${tab}')"]`);
        if (activeTabBtn) activeTabBtn.classList.add('active');
        
        this.renderBookings();
    }
    
    renderEmergencyServices() {
        const emergencyActions = document.getElementById('emergencyActions');
        if (emergencyActions) {
            emergencyActions.innerHTML = '';
            this.emergencyServices.forEach(service => {
                const serviceElement = document.createElement('a');
                serviceElement.className = `emergency-btn-large ${service.type}`;
                serviceElement.href = `tel:${service.phone}`;
                serviceElement.innerHTML = `
                    <i class="fas fa-${service.icon}"></i>
                    ${service.name[this.currentLanguage]} (${service.phone})
                `;
                
                emergencyActions.appendChild(serviceElement);
            });
        }
    }
    
    renderUserSwitchModal() {
        const userList = document.getElementById('userList');
        if (userList) {
            userList.innerHTML = `
                <div class="user-option current">
                    <div class="contact-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="contact-info">
                        <h4>John Doe (You)</h4>
                        <div class="contact-relationship">Primary Account</div>
                    </div>
                </div>
            `;
            
            this.contacts.forEach(contact => {
                if (contact.permission === 'Full Access' || contact.permission === 'Limited Access') {
                    const userOption = document.createElement('div');
                    userOption.className = 'user-option';
                    userOption.innerHTML = `
                        <div class="contact-avatar">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="contact-info">
                            <h4>${contact.name}</h4>
                            <div class="contact-relationship">${contact.relationship} - ${contact.permission}</div>
                        </div>
                    `;
                    
                    userOption.addEventListener('click', () => {
                        this.switchUser(contact);
                    });
                    
                    userList.appendChild(userOption);
                }
            });
        }
    }
    
    switchUser(contact) {
        this.currentUser = contact.id;
        const currentUserElement = document.getElementById('currentUser');
        if (currentUserElement) {
            currentUserElement.querySelector('.user-info h3').textContent = `${this.getText('welcome')}, ${contact.name}`;
            currentUserElement.querySelector('.user-info p').textContent = contact.relationship;
        }
        
        this.hideUserSwitch();
        alert(`Switched to ${contact.name}'s account`);
    }
    
    setDefaultDateTime() {
        const dateInput = document.getElementById('serviceDate');
        const timeInput = document.getElementById('serviceTime');
        
        if (dateInput && timeInput) {
            const now = new Date();
            const tomorrow = new Date(now);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            dateInput.value = tomorrow.toISOString().split('T')[0];
            timeInput.value = '10:00';
        }
    }
    
    useCurrentLocation() {
        const locationInput = document.getElementById('serviceLocation');
        const gpsBtn = document.querySelector('.gps-btn');
        
        if (gpsBtn) {
            gpsBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Getting...';
        }
        
        setTimeout(() => {
            const locations = [
                "123 Main Street, Kochi, Kerala",
                "456 Park Avenue, Thiruvananthapuram, Kerala", 
                "789 Garden Road, Kozhikode, Kerala",
                "321 Business District, Thrissur, Kerala"
            ];
            
            const randomLocation = locations[Math.floor(Math.random() * locations.length)];
            
            if (locationInput) {
                locationInput.value = randomLocation;
            }
            
            if (gpsBtn) {
                const gpsText = gpsBtn.querySelector('[data-text="use_gps"]');
                if (gpsText) {
                    gpsText.textContent = this.getText('use_gps');
                } else {
                    gpsBtn.innerHTML = `<i class="fas fa-crosshairs"></i> <span data-text="use_gps">${this.getText('use_gps')}</span>`;
                }
            }
            
            alert(`Location set to: ${randomLocation}`);
        }, 1500);
    }
    
    filterServices() {
        const searchInput = document.getElementById('serviceSearch');
        if (searchInput) {
            this.handleSearch(searchInput.value);
        }
    }
    
    callProvider() {
        if (this.selectedProvider) {
            alert(`Calling ${this.selectedProvider.name[this.currentLanguage]} at ${this.selectedProvider.phone}...`);
        }
    }
    
    chatProvider() {
        if (this.selectedProvider) {
            alert(`Opening chat with ${this.selectedProvider.name[this.currentLanguage]}...`);
        }
    }
    
    shareService() {
        if (this.currentBooking) {
            alert(`Service details shared: Booking ID ${this.currentBooking.id}`);
        }
    }
    
    toggleFilters() {
        alert('Filters: Rating 4+, Verified providers, Available now');
    }
    
    sortProviders() {
        const sortSelect = document.getElementById('sortSelect');
        const sortValue = sortSelect ? sortSelect.value : 'rating';
        
        if (this.providers) {
            switch (sortValue) {
                case 'rating':
                    this.providers.sort((a, b) => b.rating - a.rating);
                    break;
                case 'price':
                    this.providers.sort((a, b) => a.price - b.price);
                    break;
                case 'experience':
                    this.providers.sort((a, b) => b.experience - a.experience);
                    break;
                case 'availability':
                    this.providers.sort((a, b) => b.available - a.available);
                    break;
            }
            this.renderProviders();
        }
    }
    
    goBack() {
        if (this.navigationStack.length > 0) {
            const previousScreen = this.navigationStack.pop();
            this.showScreen(previousScreen);
        } else {
            this.showScreen('home-screen');
        }
    }
    
    hideUserSwitch() {
        const modal = document.getElementById('user-switch-modal');
        if (modal) modal.classList.add('hidden');
    }
    
    hideEmergency() {
        const modal = document.getElementById('emergency-modal');
        if (modal) modal.classList.add('hidden');
    }
}

// Global app instance
let app;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    app = new TapForAllApp();
    app.init();
});

// Global navigation functions
function showHome() {
    if (app) {
        app.navigationStack = [];
        app.showScreen('home-screen');
    }
}

function showContacts() {
    if (app) app.showScreen('contacts-screen');
}

function showAddContact() {
    if (app) app.showScreen('add-contact-screen');
}

function showBookings() {
    if (app) app.showScreen('bookings-screen');
}

function showProfile() {
    if (app) app.showScreen('profile-screen');
}

function showBookingTab(tab) {
    if (app) app.showBookingTab(tab);
}

function confirmPayment() {
    if (app) app.confirmPayment();
}

function submitRating() {
    if (app) app.submitRating();
}

function useCurrentLocation() {
    if (app) app.useCurrentLocation();
}

function filterServices() {
    if (app) app.filterServices();
}

function toggleFilters() {
    if (app) app.toggleFilters();
}

function sortProviders() {
    if (app) app.sortProviders();
}

function callProvider() {
    if (app) app.callProvider();
}

function chatProvider() {
    if (app) app.chatProvider();
}

function shareService() {
    if (app) app.shareService();
}

function goBack() {
    if (app) app.goBack();
}

function toggleLanguage() {
    if (app) app.toggleLanguage();
}

// Modal functions
function showUserSwitch() {
    const modal = document.getElementById('user-switch-modal');
    if (modal) modal.classList.remove('hidden');
}

function hideUserSwitch() {
    if (app) app.hideUserSwitch();
}

function showEmergency() {
    const modal = document.getElementById('emergency-modal');
    if (modal) modal.classList.remove('hidden');
}

function hideEmergency() {
    if (app) app.hideEmergency();
}