// CoolRooms Page static content data

// Import images from assets/images folder
const bgHero = '/api/imageProxy?id=1flQrQwFQoO3rFI32mnodliXQIwyvol-F';
const imgRoom = '/api/imageProxy?id=1bvtsNt89ETLIckvvKxtmjZ_qeGm8U5hl';
const img9034 = '/images/IMG_9034.JPG';
const img9037 = '/api/imageProxy?id=1CMxWb3mf1FiQAGzzkf2ZPOwA7Bs-esMv';
const img2_8CoolRoom = '/api/imageProxy?id=1hicX0mlr-f2gE8CsDLXM1gptDZ1hHjeg';
const imgFreezerUnits = '/api/imageProxy?id=1hN5RzveDc5yx1GtlaaPHYf6-wadEbjyO';
const imgFreezerOutdoor = '/api/imageProxy?id=1mkULQFxg55VcDCMN6vJYdTJKOxi9q-A7';
const imgAiCoolroom = '/api/imageProxy?id=1hW9J5B1FeqwVB0Sd9doZ02Ymezb9kT8x';

export { bgHero, imgAiCoolroom };

export const tempRoomsData = [
  {
    range: "-20°C",
    rooms: "02 Freezer Rooms",
    useCase: "Deep Freeze Storage",
    badgeColor: "bg-blue-600 text-white shadow-blue-500/30",
    accentColor: "border-blue-600",
    glowColor: "shadow-blue-500/10",
    description: "Optimized for deep frozen cargo such as vaccines, sensitive biologics, frozen foods, and ocean-bound perishable goods requiring deep sub-zero conditions."
  },
  {
    range: "2–8°C",
    rooms: "02 Cold Rooms",
    useCase: "Chilled Storage",
    badgeColor: "bg-cyan-500 text-slate-900 shadow-cyan-500/30",
    accentColor: "border-cyan-500",
    glowColor: "shadow-cyan-500/10",
    description: "Dedicated environments for pharmaceutical products, medical supplies, fresh fruits, vegetables, floriculture, and critical temperature-sensitive components."
  },
  {
    range: "15–25°C",
    rooms: "02 Cold Rooms",
    useCase: "Controlled Ambient Storage",
    badgeColor: "bg-emerald-500 text-white shadow-emerald-500/30",
    accentColor: "border-emerald-500",
    glowColor: "shadow-emerald-500/10",
    description: "Maintained climate storage for special chemicals, premium electronics, retail goods, and standard pharmaceutical cargo sensitive to high tropical temperatures."
  }
];

export const facilitiesChecklistData = [
  {
    id: 1,
    iconName: "Snowflake",
    title: "All Temperature-Controlled Cargo Handling",
    description: "Equipped to handle all types of temperature-sensitive air and sea import cargo with the utmost precision and care."
  },
  {
    id: 2,
    iconName: "Activity",
    title: "24-Hour Monitoring with Temperature Control",
    description: "Continuous automated monitoring around the clock with manual checks to maintain optimal climatic conditions."
  },
  {
    id: 3,
    iconName: "FileText",
    title: "Availability of Temperature Records",
    description: "Complete transparent logging history, providing detailed and verified temperature logs for cargo at any time."
  },
  {
    id: 4,
    iconName: "ShieldCheck",
    title: "Separate Storage Areas for Pharmaceuticals",
    description: "Dedicated clean zones specifically isolated for medical and pharmaceutical goods ensuring full GDP compliance."
  },
  {
    id: 5,
    iconName: "Clock",
    title: "Efficient & Personalized Cargo Delivery",
    description: "Tailored airside retrieval and quick terminal clearance pipelines designed to speed up your local supply chains."
  },
  {
    id: 6,
    iconName: "Eye",
    title: "CCTV Monitored with Post Tracking Facility",
    description: "High-security surveillance throughout the facility with complete recording logs for post-delivery tracking audits."
  },
  {
    id: 7,
    iconName: "DollarSign",
    title: "Highly Flexible & Competitive Storage Rates",
    description: "Enjoy the most competitive storage and breakdown tariffs in the Katunayake Airport airside market."
  },
  {
    id: 8,
    iconName: "CreditCard",
    title: "Credit Facility on Written Request",
    description: "Flexible financial arrangements and credit terms are available upon strategic relations request."
  }
];

export const galleryPhotosData = [
  {
    image: img2_8CoolRoom,
    title: "Chilled Storage (2–8°C) Upgraded Chamber",
    description: "Brand new double-door refrigeration chamber configured for medical vaccine and pharmaceutical storage."
  },
  {
    image: img9037,
    title: "Refrigeration Unit & Temperature Controls",
    description: "High-capacity evaporators and digital regulation boards providing constant thermal oversight."
  },
  {
    image: imgRoom,
    title: "Cool Room Chamber Configuration",
    description: "Spacious insulated room configurations configured for reliable climate-controlled freight storage."
  },
  {
    image: imgFreezerUnits,
    title: "Freezer -20°C & 2–8°C Chamber Units",
    description: "Dual system cooling units configured to maintain frozen and chilled temperature cycles."
  },
  {
    image: imgFreezerOutdoor,
    title: "Outdoor Condenser Units",
    description: "Guaranteed secondary backup condensing units configured for outdoor stability."
  }
];
