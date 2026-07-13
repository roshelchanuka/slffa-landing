// Import anniversary 2014 images
const anniversary2014Img1 = '/api/imageProxy?id=13utKWebtqZSma1Ugct_AQUhNDb2WZXZE';
const anniversary2014Img2 = '/api/imageProxy?id=1M4jpBoWdJ2bzzsSokoMCLWlfLulWAaUx';
const anniversary2014Img3 = '/api/imageProxy?id=1lL6ZwpETavxgaR6iirg8qhRNXB1oag_Z';

// Import award 2014 images
const award2014Img1 = '/api/imageProxy?id=13nkMOHMSOtZ6wxrGYKuOti3xSEVJptJQ';

// Import workshop 2014 images
const workshop2014Img1 = '/api/imageProxy?id=1x-m_Id5SHfcKQwgq0vVxbgH2ra9yzolb';
const workshop2014Img2 = '/api/imageProxy?id=1BXzswSpke0GIjLegOW2liW74U7Ci2Xsa';

// Import shelter construction 2014 images
const shelter2014Img1 = '/api/imageProxy?id=1Urk6SxnI7IOD2IYU1Lbo-y9K8WaruGYm';
const shelter2014Img2 = '/api/imageProxy?id=1O6Kfb1FJbTNzlKY8aWcTaoMpEUvSbvPZ';

// Import CCNhub 2026 images
const ccnhub2026Img1 = '/api/imageProxy?id=14uxAYNBxHE_eAp2-7o3cYNg40AJ-4_sV';
const ccnhub2026Img2 = '/api/imageProxy?id=11U9s0aiUb5ZIZjnZw-IROrfhdWqEHW40';
const ccnhub2026Img3 = '/api/imageProxy?id=1Nbo5MNT9gXqiwnluPAf3-RcMKfYwWPfi';

// Import Annual Get Together 2016 images
const getTogether2016Img1 = '/api/imageProxy?id=1GtGpFSgad_x4tlIjwbhh5nejLjZQcffm';
const getTogether2016Img2 = '/api/imageProxy?id=13Fy_4pJ8h4WgD5QZXwrR8lt4sspCBJqx';
const getTogether2016Img3 = '/api/imageProxy?id=11pKdv1wEyhfEssh0jXE-oACNmxY9MGKA';

// Import Annual Get Together 2017 images
const getTogether2017Img1 = '/api/imageProxy?id=1sPmf0CiMnWft4GtrqBVptwWZpP3MUpN9';
const getTogether2017Img2 = '/api/imageProxy?id=10RjXqPXzBP6GG4p81QTX7N-7u88t1MN-';
const getTogether2017Img3 = '/api/imageProxy?id=1hqhLsT4OmRqIyJu-vZovaEYml0z52Tj5';

// Import Annual Get Together 2018 images
const getTogether2018Img1 = '/api/imageProxy?id=1Chy6SD19Xtx_zDsLl1PcNijVKOK0sw9z';
const getTogether2018Img2 = '/api/imageProxy?id=11nz1e26p8983KZg11H7nJjPQt45vgCfG';

// Import Annual Get Together 2019 images
const getTogether2019Img1 = '/api/imageProxy?id=1B7gkmKF3trfYY-3zN5UrcmZR5cTSjMnw';
const getTogether2019Img2 = '/api/imageProxy?id=18k6q2xOJbYtnvAo9alXC0yi_sLkuUCIv';
const getTogether2019Img4 = '/api/imageProxy?id=1KgzAV-XYIes_IFK_G8V21QfCgAXlw58e';

// Import 25th Anniversary 2019 images
const anniversary25YearsImg1 = '/api/imageProxy?id=11g008Ldyccl6QGaBxiU7eJd9-KpzrQZx';

// Import all dynamic images from pre-generated staticGalleryData
import {
  anniversary30Images,
  newYear2024Images,
  cricket2022Images,
  newYear2021Images,
  getTogether2026Images
} from './staticGalleryData';

export const newsItems = [
  {
    id: 'slffacs-staff-annual-get-together-2026',
    title: 'SLFFACS Staff Annual Get Together 2026',
    date: 'February 6, 2026',
    category: 'Event',
    image: getTogether2026Images[0],
    images: getTogether2026Images,
    excerpt: `The SLFFACS Staff Annual Get Together was grandly held on Friday, 06th February 2026, at the Dinindu Gardens Hotel in Seeduwa. The event was graced by the participation of Customs Officers, SriLankan Cargo, Airport & Aviation officials, industry agents, and valued consignees.

It was a memorable and delightful occasion for the staff members to celebrate, unwind, and strengthen relationships with our esteemed business partners. The evening was filled with live music, dancing, and great fellowship.`,
    url: 'https://slffacs.com/slffacs-staff-annual-get-together-2026/',
  },
  {
    id: 'slffacs-30-years-anniversary',
    title: 'Milestone of Excellence: Celebrating 30 Years of Innovation & Trust!',
    date: 'November 14, 2024',
    category: 'Anniversary',
    image: anniversary30Images[0],
    images: anniversary30Images,
    excerpt: `Today, we are incredibly proud to mark a monumental milestone—30 years of driving growth, delivering excellence, and shaping the future.

This journey wouldn't have been possible without the dedication, passion, and hard work of our incredible team. To our visionary partners and loyal clients: thank you for placing your trust in us and walking beside us every step of the way. Your success has been our greatest achievement.

As we look to the future, we remain committed to higher standards, continuous innovation, and building stronger connections. Here’s to the next chapter of shared success and limitless possibilities!`,
    url: 'https://slffacs.com/milestone-of-excellence-celebrating-30-years/',
  },
  {
    id: 'slffacs-new-year-2024',
    title: 'Starting Year 2024 with Shared Goals & Strong Beginnings!',
    date: 'January 1, 2024',
    category: 'Event',
    image: newYear2024Images[0],
    images: newYear2024Images,
    excerpt: `We kicked off the first day of 2024 at SLFFA Cargo Services by gathering around the traditional New Year tea table. It was a wonderful moment of togetherness, sharing traditions, and setting our intentions for a successful year ahead in the logistics and cargo industry.

A new year brings new challenges, but with the dedication of our incredible team, we are ready to deliver excellence and navigate the future together.

Wishing all our clients, partners, and team members a prosperous and rewarding 2024!`,
    url: 'https://slffacs.com/starting-year-2024-with-shared-goals/',
  },
  {
    id: 'slffacs-cricket-tournament-2022',
    title: 'Fostering Synergy Beyond Operations: Reflections on the SLFFA Cricket Tournament 2022.',
    date: 'September 21, 2022',
    category: 'Event',
    image: cricket2022Images[0],
    images: cricket2022Images,
    excerpt: `Success in the cargo and logistics sector relies heavily on seamless collaboration, strategic agility, and robust teamwork. The SLFFA Cricket Tournament 2022 provided the perfect platform to demonstrate these identical core principles outside the office environment.

This retrospective look highlights the exceptional sportsmanship, strategic execution, and collective drive displayed by our team. Engaging in such industry events not only strengthens intra-organizational bonds but also reinforces our commitment to shared goals and excellence.

A commendable effort by all participants and organizers who contributed to making this event a benchmark of corporate sportsmanship and camaraderie.`,
    url: 'https://slffacs.com/reflections-on-the-slffa-cricket-tournament-2022/',
  },
  {
    id: 'slffacs-new-year-2021',
    title: 'Steering Through Adversity: Welcoming 2021 with Unwavering Resilience.',
    date: 'January 1, 2021',
    category: 'Event',
    image: newYear2021Images[0],
    images: newYear2021Images,
    excerpt: `Today, on January 1st, 2021, SLFFA Cargo Services officially commenced operations for the new year. As the global supply chain faces unprecedented disruptions due to the COVID-19 pandemic, our role as an essential pillar in logistics and cargo management has never been more critical.

In an era defined by volatility, our team continues to demonstrate exceptional adaptability and resolve—ensuring that vital supply lines remain active, seamless, and secure. Gathering under strict safety protocols to mark day one of 2021, we reaffirm our corporate commitment to delivering operational excellence despite global challenges.

We extend our profound gratitude to our frontline logistics professionals, partners, and clients who continue to trust our capabilities. Together, we look forward to navigating the new year with strategic agility, safety, and shared success.`,
    url: 'https://slffacs.com/steering-through-adversity-welcoming-2021/',
  },
  {
    id: 'slffacs-annual-get-together-2019',
    title: 'SLFFACS Annual Get Together 2019',
    date: 'December 6, 2019',
    category: 'Event',
    image: getTogether2019Img1,
    images: [getTogether2019Img1, getTogether2019Img2, getTogether2019Img4],
    excerpt: `SLFFACS Staff Annual Get Together was held at Full Moon Garden Hotel  -Katunayake on Friday, 06th December 2019 with the participation of Custom Officers, Srilankan Cargo, Airport & Aviation, Agents and Consignees.

It was a memorable occasion for the staff members to enjoy and share the joy with the business partners with live music, dancing and fellowship.`,
    url: 'https://slffacs.com/slffacs-annual-get-together-2019/',
  },
  {
    id: 'slffacs-25-years-anniversary',
    title: 'Celebrates 25 years of dedicated service',
    date: 'August 15, 2019',
    category: 'Anniversary',
    image: anniversary25YearsImg1,
    images: [anniversary25YearsImg1],
    excerpt: `SLFFA Cargo Services Ltd. is an unquoted Public Company with limited liability, incorporated in Sri Lanka, and is solely owned by the Freight Forwarding fraternity of Sri Lanka. Its air cargo operations at the Bandaranaike International Airport is unique in Asia and the Far-East. This year, the company is proud to commemorate its 25th anniversary.

The company was established on 15 August 1994 by a consortium of 22 reputed freight forwarding companies, including some of the blue-chip companies in Sri Lanka, to provide a speedy, safe and efficient service for the benefit of the importers relying on air freight. Its principal activity continues to be facilitating the smooth flow of import air cargo into the country. The company has a proven track record of accuracy and efficiency in the release of goods, appreciated by a very large base of leading importers of the country.

SLFFA Cargo Services Ltd. have been able to attract large scale garments manufacturers and other leading importers to handle their cargo through its cargo terminal based on the quality of personalised service it provides. The customer base also consists of over 100 leading forwarding agents in the country and over 250 consignees representing many trade sectors.

The company’s system of receipt and delivery of cargo operates in a state-of-the-art web-based environment with the objective to ensure the International Civil Aviation Organisation (ICAO) recommended practice of processing cargo through the terminal within a maximum period of four hours from the time of receipt of cargo by air, thereby minimising the cargo delivery time at the airport.

SLFFA Cargo Services Ltd. has also been at the forefront of developing E-Airfreight initiative since 2013, in conjunction with its strategic partner Cargo Community Network (CCN) Singapore and working closely with SriLankan Airlines Cargo and Customs to roll out this initiative for the air cargo Industry in Sri Lanka.

SLFFA Cargo Services Ltd. is grateful to all its much-valued customers, agents and service providers for the trust placed in the company, and will continue to set the standards for service excellence in air cargo handling and warehousing solutions, through total commitment to quality management, to be the leader in Sri Lanka in logistics management for air and ocean freight.`,
    url: 'https://slffacs.com/celebrates-25-years-of-dedicated-service/',
  },
  {
    id: 'slffacs-annual-get-together-2018',
    title: 'SLFFACS Annual Get Together 2018',
    date: 'November 21, 2018',
    category: 'Event',
    image: getTogether2018Img1,
    images: [getTogether2018Img1, getTogether2018Img2],
    excerpt: `SLFFACS staff Annual Get Together was held by the staff members at Eagle Lagoon View Banquet Hall, Kurana – Katunayake on Wednesday, 21st  November with the participants of Custom officers, Some agents, Srilankan/AASL staff and Selected consignees.

It was a memorable occasion for the staff members to enjoy and share the joy with the business partners by live music, dancing and fellowship.`,
    url: 'https://slffacs.com/slffacs-annual-get-together-2018/',
  },
  {
    id: 'slffacs-annual-get-together-2017',
    title: 'SLFFACS Annual Get Together 2017',
    date: 'November 30, 2017',
    category: 'Event',
    image: getTogether2017Img1,
    images: [getTogether2017Img1, getTogether2017Img2, getTogether2017Img3],
    excerpt: `SLFFACS staff Annual Get Together was held by the staff members at Hotel Dinindu Reciption Hall, Seeduwa on Thursday, 30th November with the participants of Some agents and selected consignees.

It was a memorable occasion for the staff members to enjoy and share the joy with the business partners by live music, dancing and fellowship.`,
    url: 'https://slffacs.com/slffacs-annual-get-together-2017/',
  },
  {
    id: 'slffacs-annual-get-together-2016',
    title: 'SLFFACS Annual Get Together 2016',
    date: 'November 25, 2016',
    category: 'Event',
    image: getTogether2016Img1,
    images: [getTogether2016Img1, getTogether2016Img2, getTogether2016Img3],
    excerpt: `SLFFACS staff Annual Get Together was held by the staff members at Hotel Dinindu Reciption Hall, Seeduwa on Friday, 25th November with the participants of Srilankan Cargo, Some agents and selected consignees.

It was a memorable occasion for the staff members to enjoy and share the joy with the business partners by live music, dancing and fellowship.`,
    url: 'https://slffacs.com/slffacs-annual-get-together-2016/',
  },
  {
    id: 'ccnhub-cargo-exports-automation-2016',
    title: 'CCNhub Colombo Facilitates Air Cargo Exports Automation',
    date: 'July 21, 2016',
    category: 'Workshop',
    image: ccnhub2026Img1,
    images: [ccnhub2026Img1, ccnhub2026Img2, ccnhub2026Img3],
    excerpt: `SLFFA Cargo Services Ltd (the commercial arm of SLFFA) in collaboration with CCNhub Colombo hosted an awareness session to familiarize industry stakeholders on the fundamentals of the e-AWB concept for air cargo. It was held on the 21 of July 2016 from 2.30pm to 4.30pm at the Olympic House, Colombo 07.

As a pioneer in e-freight, CCNhub Colombo has driven the industry towards the adoption of e-AWB through collaboration with relevant stakeholders and authorities whilefacilitating unique industry requirements.

The session was opened by the Chairman of SLFFA Cargo Services Ltd. Mr. Diren Hallock with an emphasis on the inception of e-freight in Colombo, its current development and how the industry should evolve into the future. Mr. Sanjeewa Rodrigo – Head of Cargoand Mr. Roshan Cooray – Senior Executive Cargo Reservation, Qatar Airways took to the session to express their views on how the air freight industry is being simplified through e-freight and the progress made by Qatar Airways. Mr. Pubudu Prasanna – Cargo Supervisor, Sri Lankan Airlines reiterated the challenges faced during the adoption of eAWB at CMB and went into detail on the newly adopted ‘Single Process’.

To bring in more perspective to the event Mr. Dilanka Galappatti – Manager System Implementation, Dart Global Logistics spoke about enabling the forwarder and the benefits of electronic submissions. A final presentation was made by Mr. Malaka Yattigala and Ms. Umalka Perera of CCNhub in order to recap the session and highlighted the importance of e-AWB to the e-Freight concept and the role of CCNhub in promoting the automation of the air freight industry in Colombo.

The event witnessed a participation of more than 50 representatives from both airlines and forwarders. It was concluded with a brief Q&A session, Tea and refreshments.`,
    url: 'https://slffacs.com/ccnhub-colombo-facilitates-air-cargo/',
  },
  {
    id: 'shelter-construction-2014',
    title: 'Construction of the shelter to cover 3200 Sq/Ft is now completed',
    date: 'September 7, 2014',
    category: 'Infrastructure',
    image: shelter2014Img1,
    images: [shelter2014Img1, shelter2014Img2],
    excerpt: 'We are happy to announce that the construction of the shelter to cover 3200 Sq/Ft is now completed. We are now capable to hold up to 16 loaded pallets (ULDs) protected from water damage once they are at our facility while breaking down of Import cargo received is in progress.',
    url: 'https://slffacs.com/construction-of-the-shelter-to-cover-3200-sq-ft-is-now-completed/',
  },
  {
    id: 'anniversary-20-years-2014',
    title: '20 Years Service Excellence',
    date: 'August 15, 2014',
    category: 'Anniversary',
    image: anniversary2014Img1,
    images: [anniversary2014Img1, anniversary2014Img2, anniversary2014Img3],
    excerpt: 'SLFFA Cargo Services Ltd celebrated its 20th Anniversary on August 15th in 2014 Participation with Chairman SLFFA CS, the directors of the board, Customs officers and all members of the staff at Terminal 2, Bandaranaike International Airport, Katunayake.',
    url: 'https://slffacs.com/20-years-service-excellence/',
  },
  {
    id: 'global-excellence-awards-2014',
    title: 'GLOBAL EXCELLENCE AWARDS 2014',
    date: 'December 15, 2014',
    category: 'Award',
    image: award2014Img1,
    images: [award2014Img1],
    excerpt: 'SLFFA Cargo Services Ltd was presented with Global Excellence award in recognition of the excellent services rendered in the global commerce industry for over 20 years! We are extremely proud & honored to receive this prestigeous award in recognition of the hard work, dedication and commitment of the Chairman, Board of Directors & all staff over the years.\n\nPicture shows Mr. Diren Hallock – Chairman of SLFFACSL receiving the award from the Governor – Central Bank, Mr. Ajith Nivard Cabraal at a glittering ceremony held on 15th December 2014 at Galadari Hotel, Colombo which was jointly organized by the Central Bank of Sri Lanka, Export Development Bank, Board of Investment, Sri Lanka Ports Authority, Airport & Aviation Services Sri Lanka, Sri Lanka Tea Board and Sri Lanka Export Credit Insurance Corporation.',
    url: 'https://slffacs.com/global-excellence-awards-2014/',
  },
  {
    id: 'slffacs-adds-value-2014',
    title: 'SLFFACS Adds Value To Their Customers',
    date: 'May 13, 2014',
    category: 'Workshop',
    image: workshop2014Img1,
    images: [workshop2014Img1, workshop2014Img2],
    excerpt: 'SLFFA Cargo Services Ltd(SLFFACSL) organized a full day workshop for their clients on 13th May at JAIC Hilton hotel under the theme ‘Driving business growth through competitive supply chains’. The workshop was attended by their clients, freight forwarders and representatives from government authorities. The Chairman of SLFFA Cargo Services Ltd, Mr. Diren Hallock in his welcome address spelt out the objectives of the workshop and stated that this is a landmark occasion for SLFFACSL as they brought all stakeholders under one roof for the first time to understand the current challenges and as a group how everyone should collaborate seamlessly to solve issues in their trade.\n\nHonorable Minister of Finance, Mr Ravi Karunanayake in his address to the audience assured that the government is committed to bring in all authorities engaged in import and export clearance to operate within a single window to facilitate faster and seamless clearance of cargo. Honorable Minister further stressed that although he is supportive of regulatory reforms, he gave a stern warning to miscreants not to violate the system. He also commended SLFFACSL for organizing such a workshop by bringing all stakeholders together to challenge and resolve issues for the industry and make Sri Lanka a competitive place for cargo operations.\n\nThe workshop was facilitated by Ms Gayani de Alwis, Supply Chain Consultant. She started by giving an overall understanding on the big picture on how supply chain and logistics can contribute to business growth in an organization and the need to invest in such professionals to achieve business results. She was followed by a guest lecture by Mr Ahmed Ur Rahman of DHL Global Forwarding Lanka, who shared best practices in air cargo logistics and especially new techniques for ensuring integrity of packaging and the equipment used in ground handling. Both these talks were very engaging and were well received by the audience.\n\nThe key feature of the workshop was the moderated round table discussion consisting of Heads of leading Freight Forwarding Companies, representatives from top customers of SLFFACSL, namely Mr Adrian Basnayake MD of ABC Pharma, Mr Sean Van Dort, Head of Commercial and Logistics, MAS Active, Mr Senaka Pinto, Manager Imports, MAS Intimates, Janaka Munasinghe, Senior Manager Sri Lankan Worldwide Cargo Operations, Dr Neville Gunawardane, Consultant to Ministry of Finance and former Director General of Customs, which turned out to be quite illuminating for participants.\n\nSome of the key takeout’s from the round table discussion were for SLFFACSL to take the lead to push for regulatory reforms, the need for end to end value stream mapping for all government authorities which are engaged in the clearance of cargo to eliminate repetitive non value adding activities, create awareness at ground handling level through focused programs, operationalisation of ‘single window’ concept, support to implement best practices in cargo handling.\n\nSLFFACSL plans to organize similar focused programs catering to their clients in the future.\n\nSLFFACS is a consortium of public unlisted companies comprising mostly of the leading freight forwarders in Sri Lanka and has been in existence for more than two decades since 1994. The company core business is providing common user facilities for the freight forwarding and logistics industry in Sri Lanka. Towards this purpose it has been successfully operating an import air cargo terminal at BIA-Katunayake since 1994, providing valuable service to importers for import air cargo. More recently they have set up the trade portal to facilitate e-trading in the form of E-booking & E-Airwaybill transmission based on their tie up with Cargo Community Network, Singapore (CCN). Future plans involve the extension of their services to cater to the import Less than Container Load (LCL) sea cargo, where they plan to operate a state of the art facility ideally within the port to provide fast and safe handling which all importers are badly in need of.\n\nHonorable Minister of Finance Ravi Karunanayake addressing the gathering\n\nRound Table Discussion\nLeft to right:\nGayani de Alwis, Supply chain Consultant(Moderator), Diren Hallock, Chairman SLFFACSL, Mohan Mohanadas, MD – Dart Global logistics pvt Ltd, Nemantha Hatharasinghe, MD- Scanwell Freight Express Colombo (Pvt) Ltd, Ahmed Ur Rahman, Head of Marketing & Sales- DHL Global Forwarding Lanka, Romesh David, President Transportation sector- JKH, Sean Van Dort, Head of Commercial & Logistics – MAS Active, Senaka Pinto, Manager Imports- MAS Intimates, Adrian Basnayake MD – ABC Pharma, Dr Neville Gunawardane, Consultant to Ministry of Finance, Janaka Munasinghe, Senior Manager Sri Lankan Worldwide Cargo Operations.',
    url: 'https://slffacs.com/slffacs-adds-value-to-their-customers/',
  }
];
