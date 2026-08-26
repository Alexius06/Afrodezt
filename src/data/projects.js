export const PROJECT_CATEGORIES = [
  "ALL",
  "MARITIME & NAVAL",
  "WORKSHOP REFURBISHMENT",
  "SPECIALIZED TRAINING",
  "FIRE TRUCK COMMISSIONING",
];

export const PROJECTS_DATA = [
  // ---------------------------------------------------------------------------
  // 1. MARITIME ENGINEERING (Featured on Index)
  // ---------------------------------------------------------------------------
  {
    id: "mar-01",
    ref: "AF-NAV-01",
    category: "MARITIME & NAVAL",
    categories: ["MARITIME & NAVAL"],
    client: "NIGERIAN NAVY",
    title: "NAVAL CO2 FIRE SUPPRESSION",
    subtitle: "HIGH-RISK VESSEL SAFETY INTEGRATION",
    type: "NAVAL FIRE SAFETY",
    location: "LAGOS NAVAL DOCKYARD, NIGERIA",
    status: "COMPLETED",
    date: "Q3 2023",
    featuredOnIndex: true,
    initialHalf: "bottom",
    image: "/assets/projects/maritime/af-mar-01.jpg",
    heroImage: "/assets/projects/maritime/af-mar-01.jpg",
    summary: "Installation and engineering of high-pressure CO2 fixed fire suppression systems onboard active Nigerian Navy operational vessels.",
    cardSpecs: ["SOLAS Marine Certified", "Zero Electrical Damage"],
    specs: {
      serviceType: "Fixed Gas Fire Suppression & Vessel Safety",
      contractor: "Afrodezt Global Services Ltd",
      assetClass: "Naval Capital & Patrol Vessels",
      primaryClient: "Nigerian Navy",
    },
    coordinates: {
      lat: "6.4654° N",
      long: "3.4064° E",
      elev: "0.0 M ASL",
    },
    overview: [
      "Afrodezt Global Services executed the precision engineering, installation, and testing of high-pressure CO2 total-flooding fire suppression systems across primary machinery spaces and ammunition holds onboard active Nigerian Navy warships.",
      "Engineered to meet international SOLAS and ISO marine safety standards, the fixed CO2 network ensures rapid flame knockdown in high-density engine bays while safeguarding sensitive naval tactical electronics from chemical or moisture damage.",
    ],
    outcomes: [
      {
        title: "RAPID FLAME KNOCKDOWN",
        description: "Automated total-flooding activation securing main engine enclosures within 60 seconds.",
      },
      {
        title: "ZERO-RESIDUE PROTECTION",
        description: "Gas-based agent deployment preventing damage to mission-critical naval electronics.",
      },
    ],
    evidenceLogs: [
      { id: "NAV-01-A", label: "LOG: CO2 CYLINDER BANK INSTALLATION", image: "/assets/projects/maritime/af-mar-02.jpg" },
      { id: "NAV-01-B", label: "LOG: DISCHARGE MANIFOLD INTEGRATION", image: "/assets/projects/maritime/af-mar-03.jpg" },
      { id: "NAV-01-C", label: "LOG: PRESSURE TEST & COMMISSIONING", image: "/assets/projects/maritime/af-mar-04.jpg" },
    ],
    downloadUrl: "#",
  },

  // ---------------------------------------------------------------------------
  // 2. WORKSHOP REFURBISHMENT (Featured on Index)
  // ---------------------------------------------------------------------------
  {
    id: "wsr-01",
    ref: "AF-WSR-01",
    category: "WORKSHOP REFURBISHMENT",
    categories: ["WORKSHOP REFURBISHMENT"],
    client: "MUNICIPAL & INSTITUTIONAL FLEETS",
    title: "FIRE TRUCK FLEET REFURBISHMENT",
    subtitle: "WORKSHOP APPARATUS OVERHAUL",
    type: "HEAVY FLEET OVERHAUL",
    location: "AFRODEZT ENGINEERING WORKSHOP",
    status: "OPERATIONAL",
    date: "Q1 2024",
    featuredOnIndex: true,
    initialHalf: "top",
  
    image: "/assets/projects/workshop/refurbishment/af-wsr-01.jpg",
    heroImage: "/assets/projects/workshop/refurbishment/af-wsr-01.jpg",
    summary: "Comprehensive mechanical, hydraulic, and structural refurbishment of heavy firefighting trucks at Afrodezt's specialized engineering workshop.",
    cardSpecs: ["+10 Year Life Extension", "Custom Pump Rebuilds"],
    specs: {
      serviceType: "Heavy Apparatus Mechanical & Hydraulic Refurbishment",
      contractor: "Afrodezt Global Services Ltd",
      assetClass: "Heavy Duty Fire Tenders & Rescue Trucks",
      primaryClient: "State & Institutional Fire Services",
    },
    coordinates: {
      lat: "4.8156° N",
      long: "7.0498° E",
      elev: "12.0 M ASL",
    },
    overview: [
      "At Afrodezt's dedicated engineering workshop, out-of-service and degraded firefighting trucks undergo complete mechanical, bodywork, and hydraulic restoration. This initiative extends operational service life while restoring factory pumping performance at a fraction of new fleet acquisition costs.",
      "The engineering overhaul covers chassis reinforcement, high-pressure pump rebuilds, corrosion-resistant tank replacements, digital control panel updates, and signature high-visibility tactical livery finishing.",
    ],
    outcomes: [
      {
        title: "PUMP & PRESSURE RESTORATION",
        description: "Multi-stage water/foam pumps completely rebuilt to original pressure and flow specs.",
      },
      {
        title: "CAPITAL COST SAVINGS",
        description: "Restored full operational capacity at 35% of the cost of purchasing new replacement appliances.",
      },
    ],
    evidenceLogs: [
      { id: "WSR-01-A", label: "LOG: PUMP OVERHAUL & BENCH TESTING", image: "/assets/projects/workshop/refurbishment/af-wsr-02.jpg" },
      { id: "WSR-01-B", label: "LOG: CHASSIS & STRUCTURAL REPAIR", image: "/assets/projects/workshop/refurbishment/af-wsr-03.jpg" },
      { id: "WSR-01-C", label: "LOG: FINAL LIVERY & SPRAY FINISH", image: "/assets/projects/workshop/refurbishment/af-wsr-04.jpg" },
    ],
    downloadUrl: "#",
  },

  // ---------------------------------------------------------------------------
  // 3. SPECIALIZED TRAINING (Featured on Index)
  // ---------------------------------------------------------------------------
  {
    id: "trn-01",
    ref: "AF-TRN-01",
    category: "SPECIALIZED TRAINING",
    categories: ["SPECIALIZED TRAINING"],
    client: "DEFENSE & EMERGENCY CREWS",
    title: "TACTICAL SAFETY SYSTEMS TRAINING",
    subtitle: "HANDS-ON CREW CAPACITY BUILDING",
    type: "CAPACITY BUILDING",
    location: "TACTICAL FIELD SITE / COMMAND HUBS",
    status: "ONGOING PROGRAM",
    date: "Q2 2024",
    featuredOnIndex: true,
    initialHalf: "bottom",
    image: "/assets/projects/training/af-trn-01.jpg",
    heroImage: "/assets/projects/training/af-trn-01.jpg",
    summary: "Hands-on operational training and technical capacity building empowering client professionals and crews to safely operate and maintain safety systems.",
    cardSpecs: ["100% Field Practical", "Certified Crew Competency"],
    specs: {
      serviceType: "Technical Capacity Building & Systems Operation",
      contractor: "Afrodezt Global Services Ltd",
      assetClass: "Marine & Land Emergency Systems",
      primaryClient: "Inter-Agency & Defense Personnel",
    },
    coordinates: {
      lat: "8.9928° N",
      long: "7.4694° E",
      elev: "490.0 M ASL",
    },
    overview: [
      "Afrodezt provides intensive, hands-on technical capacity building and operational simulation drills for client crews, fire officers, and maintenance technicians.",
      "The structured curriculum covers manual override protocols, preventive maintenance schedules, high-pressure line handling, and fault diagnostics, ensuring a smooth transition from system delivery to long-term operational autonomy.",
    ],
    outcomes: [
      {
        title: "CREW AUTONOMY",
        description: "Empowered client operators to independently execute daily system checks and basic field troubleshooting.",
      },
      {
        title: "SAFETY DRILL COMPLIANCE",
        description: "Zero training incidents while instilling strict emergency response protocols across crews.",
      },
    ],
    evidenceLogs: [
      { id: "TRN-01-A", label: "LOG: LIVE-FIRE MANIFOLD DRILL", image: "/assets/projects/training/af-trn-02.jpg" },
      { id: "TRN-01-B", label: "LOG: CLASSROOM SYSTEMS BRIEFING", image: "/assets/projects/training/af-trn-03.jpg" },
      { id: "TRN-01-C", label: "LOG: SIMULATED MAINTENANCE OVERRIDE", image: "/assets/projects/training/af-trn-04.jpg" },
    ],
    downloadUrl: "#",
  },

  // ---------------------------------------------------------------------------
  // 4. FIRE TRUCK COMMISSIONING (Portfolio Page)
  // ---------------------------------------------------------------------------
  {
    id: "ftc-01",
    ref: "AF-FTC-01",
    category: "FIRE TRUCK COMMISSIONING",
    categories: ["FIRE TRUCK COMMISSIONING"],
    client: "FEDERAL FIRE SERVICE (FFS)",
    title: "FEDERAL FIRE SERVICE FLEET DELIVERY",
    subtitle: "STATE APPARATUS COMMISSIONING",
    type: "FLEET PROCUREMENT & DELIVERY",
    location: "FFS HEADQUARTERS, ABUJA, FCT",
    status: "COMMISSIONED",
    date: "OFFICIAL HANDOVER",
    featuredOnIndex: false,
    initialHalf: "bottom",
    image: "/assets/projects/fire-truck commissioning/ffs/af-ftc-ffs-01.jpg",
    heroImage: "/assets/projects/fire-truck commissioning/ffs/af-ftc-ffs-01.jpg",
    summary: "Official commissioning of modern firefighting trucks supplied by Afrodezt to the Federal Fire Service at FFS Headquarters, Abuja.",
    cardSpecs: ["National Fleet Expansion", "Ministerial Commissioning"],
    specs: {
      serviceType: "Turnkey Fire Tender Procurement & Commissioning",
      contractor: "Afrodezt Global Services Ltd",
      assetClass: "Rapid Response & Heavy Water/Foam Tenders",
      primaryClient: "Federal Fire Service / Ministry of Interior",
    },
    coordinates: {
      lat: "9.0579° N",
      long: "7.4951° E",
      elev: "510.0 M ASL",
    },
    overview: [
      "Afrodezt successfully supplied and commissioned a fleet of modern firefighting trucks at the Federal Fire Service (FFS) Headquarters in Abuja.",
      "The official commissioning and handover ceremony was attended by key executive leadership, including Minister of Interior Ogbeni Rauf Aregbesola, Permanent Secretary Ministry of Interior Georgina E. Ehuriah, Controller General of the Federal Fire Service Dr. Liman Ibrahim, and Afrodezt Group CEO Mazi Emmanuel Olugbuo. This deployment significantly enhanced national fire response infrastructure.",
    ],
    outcomes: [
      {
        title: "NATIONAL RESPONSE EXPANSION",
        description: "Expanded municipal emergency response capabilities across strategic federal fire stations.",
      },
      {
        title: "EXECUTIVE FLEET CERTIFICATION",
        description: "Full flow-rate and pump-pressure testing verified prior to official ministerial handover.",
      },
    ],
    evidenceLogs: [
      { id: "FTC-01-A", label: "LOG: EXECUTIVE HANDOVER CEREMONY", image: "/assets/projects/fire-truck commissioning/ffs/af-ftc-ffs-02.jpg" },
      { id: "FTC-01-B", label: "LOG: FFS HEADQUARTERS FLEET LINEUP", image: "/assets/projects/fire-truck commissioning/ffs/af-ftc-ffs-03.jpg" },
      { id: "FTC-01-C", label: "LOG: APPARATUS INSPECTION BY DIGNITARIES", image: "/assets/projects/fire-truck commissioning/ffs/af-ftc-ffs-04.jpg" },
    ],
    downloadUrl: "#",
  },

  // ---------------------------------------------------------------------------
  // 5. NAF WORKSHOP REFURBISHMENT (Portfolio Page)
  // ---------------------------------------------------------------------------
  {
    id: "wsr-02",
    ref: "AF-WSR-02",
    category: "WORKSHOP REFURBISHMENT",
    categories: ["WORKSHOP REFURBISHMENT"],
    client: "NIGERIAN AIR FORCE (NAF)",
    title: "AIR FORCE CANTONMENT FLEET UPGRADE",
    subtitle: "AIRFIELD APPARATUS REFURBISHMENT",
    type: "MILITARY FLEET RESTORATION",
    location: "MOGADISHU CANTONMENT, ASOKORO, ABUJA",
    status: "COMMISSIONED",
    date: "OFFICIAL HANDOVER",
    featuredOnIndex: false,
    initialHalf: "bottom",
    image: "/assets/projects/workshop/naf/af-wsr-naf-01.jpg",
    heroImage: "/assets/projects/workshop/naf/af-wsr-naf-01.jpg",
    summary: "Official commissioning of refurbished and upgraded Nigerian Air Force firefighting trucks by Afrodezt at Mogadishu Cantonment Asokoro.",
    cardSpecs: ["Airfield Crash Safety Certified", "High-Level Military Handover"],
    specs: {
      serviceType: "Military Airfield Fire Tender Restoration & Retrofit",
      contractor: "Afrodezt Group",
      assetClass: "Heavy Airfield Crash & Structural Appliances",
      primaryClient: "Nigerian Air Force",
    },
    coordinates: {
      lat: "9.0342° N",
      long: "7.5312° E",
      elev: "530.0 M ASL",
    },
    overview: [
      "Afrodezt completed the comprehensive technical restoration and upgrade of specialized Nigerian Air Force (NAF) firefighting trucks, culminating in an official commissioning ceremony at Mogadishu Cantonment, Asokoro, Abuja.",
      "The ceremony was attended by Chief of the Air Staff Air Marshal H.B. Abubakar, GMD/CEO of Afrodezt Group Mazi Emmanuel Olugbuo, alongside senior officers of the Nigerian Air Force. The restored appliances were returned to full operational capability to protect flight line assets and cantonment infrastructure.",
    ],
    outcomes: [
      {
        title: "FLIGHT LINE SAFETY READINESS",
        description: "Restored specialized high-discharge foam turrets for airfield crash response.",
      },
      {
        title: "MILITARY-GRADE RETROFIT",
        description: "Upgraded heavy electrical and hydraulic lines to withstand high-stress military deployment.",
      },
    ],
    evidenceLogs: [
      { id: "WSR-02-A", label: "LOG: COMMISSIONING WITH CHIEF OF AIR STAFF", image: "/assets/projects/workshop/naf/af-wsr-naf-02.jpg" },
      { id: "WSR-02-B", label: "LOG: FLEET INSPECTION AT MOGADISHU CANTONMENT", image: "/assets/projects/workshop/naf/af-wsr-naf-03.jpg" },
      { id: "WSR-02-C", label: "LOG: TURRET PRESSURE DISCHARGE TEST", image: "/assets/projects/workshop/naf/af-wsr-naf-04.jpg" },
    ],
    downloadUrl: "#",
  },
];