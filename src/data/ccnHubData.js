// CcnHub Page static content data

// Import images from assets/images folder
const bgImage = '/api/imageProxy?id=1i9X_tH-QrTXZDRNG-T9yHEOVQiGlSQBP';
const eventImg1 = '/images/ChatGPT Image Jun 4, 2026 at 12_34_23 PM.png';
const eventImg2 = '/images/ChatGPT Image Jun 4, 2026 at 12_38_40 PM.png';
const eventImg3 = '/images/ChatGPT Image Jun 4, 2026 at 12_44_01 PM.png';

export { bgImage, eventImg1, eventImg2, eventImg3 };

export const ccnFeaturesData = [
  {
    title: 'E-bookings',
    iconName: 'Globe2',
    items: ['Ad hoc/Single', 'Multiple'],
  },
  {
    title: 'Track & Trace shipments',
    iconName: 'PackageSearch',
    items: ['Real-time status updates'],
  },
  {
    title: 'AWB Inventory Management',
    iconName: 'BookOpen',
    items: ['Neutral Airway Bills', 'Preprinted Airway Bills'],
  },
  {
    title: 'Consol Manifest (FHL)',
    iconName: 'ShieldCheck',
    items: ['Streamlined manifest submission'],
  },
  {
    title: 'Flight Schedule & Availability',
    iconName: 'CalendarDays',
    items: ['Check current schedules', 'Availability inquiries'],
  },
  {
    title: 'Allotment Management',
    iconName: 'Plane',
    items: ['Manage airline allotments efficiently'],
  },
  {
    title: 'Custom Connectivity',
    iconName: 'Settings',
    items: ['In-house system integration (FTP gateway)'],
  },
];
