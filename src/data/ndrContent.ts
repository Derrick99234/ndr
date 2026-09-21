export interface FocusArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ExpectationItem {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export interface ScheduleDay {
  dayTag: string;
  title: string;
  subtitle: string;
  description: string;
  time: string;
  venue: string;
  actionText?: string;
  actionUrl?: string;
  highlight?: boolean;
}

export interface SeminarWeek {
  date: string;
  title: string;
  focus: string;
  tag: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: "all" | "worship" | "convener" | "prayer" | "sanctuary";
  src: string;
  caption: string;
}

export interface TextTestimony {
  id: string;
  name: string;
  location: string;
  edition: string;
  title: string;
  summary: string;
  category: "Healing" | "Breakthrough" | "Deliverance" | "Restoration";
  quote: string;
}

export interface VideoTestimony {
  id: string;
  title: string;
  speaker: string;
  duration: string;
  youtubeId: string;
  summary: string;
  thumbnail: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string[];
  scripture: string;
}

export interface BusRoute {
  pickupLocation: string;
  landmark: string;
  coordinatorContact: string;
  departureTime: string;
}

export const NDR_DATA = {
  eventMeta: {
    name: "Night of Divine Reversal (NDR)",
    edition: "Monthly Edition",
    tagline: "Supernatural Turnaround & Decisive Spiritual Intervention",
    themeContext: "Monthly Virtual Meeting",
    format: "Monthly Virtual Meeting",
    targetDate: "2026-10-02T20:00:00+01:00", // Friday 2nd October 2026, 8:00 PM WAT
    dateDisplay: "Friday, 2nd October 2026",
    timeDisplay: "8:00 PM (Prompt) - All Night Vigil (Virtual)",
    venue: "The Ark of Light for All Nations (Studio Broadcast)",
    address: "Plot 11, Kudirat Abiola Way, Alausa, Ikeja, Lagos, Nigeria",
    convener: "Prophet Isaiah Macwealth",
    churchMinistry: "Gospel Pillars Intl. Church",
    physicalAttendees: [
      "Full Choir",
      "All Pastors and Ministers",
      "Testifiers",
    ],
    vfcRegistrationUrl: "https://onesoundbibleinstitute.org/vfc",
    youtubeLive: "https://www.youtube.com/@Arkoflightforallnations",
    facebookLive: "https://www.facebook.com/GospelPillars",
  },

  aboutNDR: {
    summary:
      "The Night of Divine Reversal (NDR), convened by Prophet Isaiah Macwealth, is a special prophetic vigil held as a monthly virtual meeting, broadcast globally from The Ark of Light for all Nations, the international headquarters of Gospel Pillars Intl. Church. While the global congregation connects virtually from across the nations, physical presence is reserved for the Full Choir, Pastors and Ministers, and Testifiers.",
    atmosphere:
      "The Night of Divine Reversal is designed for supernatural turnaround and decisive spiritual intervention. It features praise, prophecy and the manifestation of the power of God. The meeting is also characterized by intimate spiritual elevation, supernatural encounters, deep revelation of God's Word, accompanied by divine power and the manifestation of the Holy Spirit.",
    focusAreas: [
      {
        id: "patterns",
        title: "Reversing Negative Patterns",
        description:
          "Targeting and dissolving long-standing cyclical problems, generational hindrances, and stubborn setbacks.",
        icon: "🔄",
      },
      {
        id: "decrees",
        title: "Overturning Evil Decrees",
        description:
          "Breaking spiritual embargoes, demonic ordinances, limitations, and wrongful verdicts spoken against destinies.",
        icon: "⚖️",
      },
      {
        id: "restoration",
        title: "Restoring Lost Opportunities",
        description:
          "Divine retrieval of lost time, stolen years, withheld blessings, delayed virtues, and derailed callings.",
        icon: "✨",
      },
      {
        id: "justice",
        title: "Enforcing Divine Justice",
        description:
          "Bringing righteous judgment in spiritual warfare and initiating rapid, supernatural realignment of your divine destiny.",
        icon: "🛡️",
      },
      {
        id: "intensity",
        title: "Deeper Spiritual Intensity",
        description:
          "A sacred climate of concentrated warfare prayer, high prophetic praise, and uncompromising Holy Ghost ministry.",
        icon: "🔥",
      },
    ] as FocusArea[],
  },

  convener: {
    name: "Prophet Isaiah Macwealth",
    title: "Convener of NDR & Senior Pastor, Gospel Pillars Intl. Church",
    quote:
      "Teaching the people to grow is the fastest way to eradicate their challenges.",
    bio: [
      "Prophet Isaiah Macwealth is an apostle of revival, prolific author, philanthropist, and teacher of God's Word with an apostolic and prophetic mantle. He serves as the Senior Pastor and Global President of Gospel Pillars International Churches, overseeing a widespread network of assemblies spanning Africa, Europe, North America, and Asia.",
      "In November 2023, the ministry dedicated its multi-thousand-seat international headquarters, The Ark of Light for All Nations, situated in Ikeja, Lagos. It stands as a beacon of revival, global intercession, and humanitarian outreach including the Ark Food Bank.",
      "As the convener of the Night of Divine Reversal and founder of the OneSound Bible Institute (OBI), his heartbeat is to communicate biblical truth with crystalline clarity—empowering believers to exercise their legal authority in Christ, walk in unquestionable victory, and step into divine remembrance.",
    ],
    image: "/images/prophet-isaiah-macwealth.jpg",
  },

  whatToExpect: [
    {
      id: "praise",
      title: "Heart-lifting Praise",
      description:
        "High-energy prophetic thanksgiving that pulls down demonic strongholds and creates a habitation for God's glory.",
      badge: "Atmosphere",
    },
    {
      id: "worship",
      title: "Intimate Worship",
      description:
        "A sacred sanctuary moment where hearts align in deep reverence, leading to tangible manifestations of the Holy Spirit.",
      badge: "Encounter",
    },
    {
      id: "fellowship",
      title: "Deep Fellowship in the Spirit",
      description:
        "Corporate spiritual communion where burdens are lifted, spiritual batteries are recharged, and divine joy is imparted.",
      badge: "Spiritual",
    },
    {
      id: "teaching",
      title: "Revelatory Teaching of God's Word",
      description:
        "In-depth apostolic exposition of scripture that builds concrete, unshakable faith to enforce your victory.",
      badge: "The Word",
    },
    {
      id: "impartation",
      title: "Fresh Impartation & Empowerment",
      description:
        "Direct spiritual transmittals of grace, fresh fire, and spiritual gifts to thrive above all earthly resistance.",
      badge: "Power",
    },
    {
      id: "direction",
      title: "Divine Direction & Destiny Alignment",
      description:
        "Precise celestial insight and prophetic guidance to navigate crossroads and enter into God's appointed seasons.",
      badge: "Prophetic",
    },
    {
      id: "declarations",
      title: "Prophetic Declarations",
      description:
        "Authoritative prophetic words spoken over cases, family bloodlines, careers, health, and national spheres.",
      badge: "Decrees",
    },
    {
      id: "miracles",
      title: "Miracles",
      description:
        "Instantaneous physical healings, deliverance from evil spirits, broken yokes, and divine financial reversals.",
      badge: "Signs",
    },
    {
      id: "wonders",
      title: "Signs and Wonders",
      description:
        "Inexplicable proofs of the living Christ confirming His Word with wonders that cause men to marvel.",
      badge: "Manifestation",
    },
  ] as ExpectationItem[],

  weekSchedule: [
    {
      dayTag: "28th – 30th September (Mon. to Wed.)",
      title: "Faith & Victory Classes",
      subtitle: "OneSound Bible Institute (OBI)",
      description:
        "An extension of the teaching ministry of Prophet Isaiah Macwealth committed to simplifying and communicating biblical knowledge in a clear and practical manner, equipping and empowering God’s people for spiritual growth, personal development, and purposeful living. Anchored on: 'Teaching the people to grow is the fastest way to eradicate their challenges.'",
      time: "Morning & Evening Cohorts Available",
      venue: "Online & Ark of Light Campus",
      actionText: "Register for Classes",
      actionUrl: "https://onesoundbibleinstitute.org/vfc",
      highlight: false,
    },
    {
      dayTag: "30th September (Wednesday)",
      title: "All Nations Remembrance Prayer",
      subtitle: "Global Intercessory Session",
      description:
        "A special intercessory session for revival and divine remembrance for nations of the world. The service brings global believers together to plead the cause of territories and families before the courts of heaven. Broadcast LIVE on Facebook, YouTube, and international TV platforms.",
      time: "6:00 PM (WAT)",
      venue: "Ark of Light for All Nations & Live Online",
      actionText: "Join Live Broadcast",
      actionUrl: "https://www.youtube.com/@Arkoflightforallnations",
      highlight: false,
    },
    {
      dayTag: "1st October (Thursday)",
      title: "Remembrance Prayer Line",
      subtitle: "Prophetic Ministration & Sweet Water",
      description:
        "A special one-on-one ministration session with the man of God, Prophet Isaiah Macwealth. Features focused prayer sessions, administration of Sweet Water, deliverance, healing miracles, and demonstration of the power of God to break every yoke and affliction of the devil.",
      time: "10:00 AM (WAT)",
      venue: "The Ark of Light for All Nations, Ikeja, Lagos",
      actionText: "Register for Prayer Line",
      actionUrl: "https://onesoundbibleinstitute.org/vfc",
      highlight: false,
    },
    {
      dayTag: "2nd October (Friday)",
      title: "🌙 NDR Night — Virtual",
      subtitle: "Monthly Virtual Meeting",
      description:
        "The climactic all-night prophetic vigil of praise, prophetic prayer, and supernatural turnaround with Prophet Isaiah Macwealth. Broadcast virtually across the globe. Physical attendance is strictly reserved for the Full Choir, All Pastors and Ministers, and Testifiers.",
      time: "8:00 PM - Dawn (WAT)",
      venue: "Virtual Broadcast (Ark of Light for All Nations)",
      actionText: "Register to Attend",
      actionUrl: "/register",
      highlight: true,
    },
  ] as ScheduleDay[],

  threeDaysRemembrance: [
    {
      dayTag: "28th – 30th Sept. 2026",
      title: "Faith & Victory Classes",
      subtitle: "OneSound Bible Institute Special Edition",
      description:
        "Intensive doctrinal preparation and faith conditioning for the spiritual climax of the NDR week.",
      time: "Scheduled Sessions",
      venue: "Online & On-Site",
      actionText: "Register Online",
      actionUrl: "https://onesoundbibleinstitute.org/vfc",
    },
    {
      dayTag: "Wed. 30th Sept. 2026",
      title: "All Nations Remembrance Prayer",
      subtitle: "Global Livestream & Intercession",
      description:
        "A night of weeping between the porch and the altar, seeking the mercy and remembrance of God for individuals and nations.",
      time: "6:00 PM WAT",
      venue: "Ark of Light for All Nations & Live Online",
      actionText: "Stream Live",
      actionUrl: "https://www.youtube.com/@Arkoflightforallnations",
    },
    {
      dayTag: "Thurs. 1st Oct. 2026",
      title: "Remembrance Prayer Line",
      subtitle: "Sweet Water & Personal Deliverance",
      description:
        "Personal ministration with Prophet Isaiah Macwealth. Sweet Water administration and yoke-breaking impartation.",
      time: "10:00 AM WAT",
      venue: "Ark of Light for All Nations",
      actionText: "Book Prayer Line",
      actionUrl: "https://onesoundbibleinstitute.org/vfc",
    },
    {
      dayTag: "Fri. 2nd Oct. 2026",
      title: "🌙 NDR Night — Virtual",
      subtitle: "Monthly Virtual Meeting",
      description:
        "The monthly climactic vigil of praise, prophetic prayer, and supernatural turnaround with Prophet Isaiah Macwealth. Streamed live globally. Physical attendance strictly for Full Choir, Pastors & Ministers, and Testifiers.",
      time: "8:00 PM WAT Till Dawn",
      venue: "Global Livestream (Ark of Light for All Nations)",
      actionText: "Reserve Online Seat",
      actionUrl: "/register",
    },
  ] as ScheduleDay[],

  sevenWeekSeminars: [
    {
      date: "Thurs. 17 September",
      title: "Finance & Business Breakthrough Seminar",
      focus:
        "Breaking financial stagnation, supernatural ideas, debt cancellation, and kingdom wealth keys.",
      tag: "Breakthrough",
    },
    {
      date: "Thurs. 24 September",
      title: "Special Healing & Breakthrough Seminar",
      focus:
        "Eradicating terminal diseases, chronic sicknesses, genetic infirmities, and divine vitality.",
      tag: "Healing",
    },
    {
      date: "Thurs. 1 October",
      title: "Special Job Seekers Seminar",
      focus:
        "Supernatural employment favor, interview boldness, career elevation, and overcoming workplace rejection.",
      tag: "Career",
    },
    {
      date: "Thurs. 8 October",
      title: "Singles & Married Seminar",
      focus:
        "Marital destiny settlement, healing troubled unions, peace in the home, and godly relationship guidance.",
      tag: "Family",
    },
    {
      date: "Thurs. 15 October",
      title: "Firstborn, Bloodline & Family Deliverance Seminar",
      focus:
        "Severing ancestral covenants, collective family curses, and restoring firstborn blessings.",
      tag: "Deliverance",
    },
    {
      date: "Thurs. 22 October",
      title: "Fruit of the Womb & Newly Pregnant Seminar",
      focus:
        "Overcoming barrenness, miraculous conception, safe delivery, and covenant protection for mother and child.",
      tag: "Miracle Babies",
    },
    {
      date: "Thurs. 29 October",
      title: "Restoration & Recovery Seminar",
      focus:
        "Pursuing, overtaking, and recovering without fail everything stolen by the adversary.",
      tag: "Restoration",
    },
  ] as SeminarWeek[],

  gallery: [
    {
      id: "g1",
      title: "Divine Presence at Ark of Light",
      category: "sanctuary",
      src: "/images/ndr-hero.jpg",
      caption:
        "Thousands lifted up holy hands during the peak hour of prophetic vigil at The Ark of Light for All Nations.",
    },
    {
      id: "g2",
      title: "Prophet Isaiah Macwealth Ministering",
      category: "convener",
      src: "/images/prophet-isaiah-macwealth.jpg",
      caption:
        "Prophet Isaiah Macwealth releasing the prophetic word of reversal and destiny realignment.",
    },
    {
      id: "g3",
      title: "Heart-Lifting Praise and Worship",
      category: "worship",
      src: "/images/ndr-worship.jpg",
      caption:
        "Intimate fellowship and exuberant praise creating a divine portal for supernatural intervention.",
    },
    {
      id: "g4",
      title: "Sweet Water Prayer Line Ministration",
      category: "prayer",
      src: "/images/ndr-prayer-line.jpg",
      caption:
        "Personal ministration session, breaking afflictions and releasing healing through prophetic prayer.",
    },
    {
      id: "g5",
      title: "The Ark of Light for All Nations by Night",
      category: "sanctuary",
      src: "/images/ark-of-light.png",
      caption:
        "Aerial night view of the international headquarters, welcoming worshippers across the globe to Ikeja, Lagos.",
    },
  ] as GalleryImage[],

  textTestimonies: [
    {
      id: "t1",
      name: "Engr. Emmanuel O.",
      location: "Lagos, Nigeria",
      edition: "NDR 11",
      category: "Breakthrough",
      title: "7-Year Stagnation Shattered in 48 Hours",
      summary:
        "I was tied down by contract approvals withheld without reason for seven consecutive years. During NDR 11, the Prophet declared: 'Between now and Monday, a verdict is overturned in your favor.' On Monday morning, I received a call approving a contract worth over 45 million Naira!",
      quote:
        "The divine reversal was so swift and unmistakable. God proved that what took 7 years of sorrow can be turned around in a single night of prayer!",
    },
    {
      id: "t2",
      name: "Mrs. Blessing A.",
      location: "Abuja, Nigeria",
      edition: "NDR 10",
      category: "Healing",
      title: "Kidney Failure Reversed After Sweet Water Ministration",
      summary:
        "Diagnosed with stage 4 renal dysfunction and placed on dialysis, I attended the Victory & Faith Remembrance prayer line. Prophet Isaiah Macwealth ministered with the Sweet Water. Following tests three days later, doctors confirmed normal creatinine levels and zero fluid retention!",
      quote:
        "My doctor examined the scans three times in disbelief. God gave me a brand new set of kidneys through the Sweet Water prayer line!",
    },
    {
      id: "t3",
      name: "Pastor & Deaconess David C.",
      location: "Port Harcourt, Nigeria",
      edition: "NDR 9",
      category: "Restoration",
      title: "11 Years of Barrenness Ended with Twins",
      summary:
        "We attended the 7-week Fruit of the Womb seminar series and traveled to Lagos for NDR. During the service, the prophetic word came directly to our row. Exactly nine months later, my wife delivered healthy twins—a boy and a girl!",
      quote:
        "The word of the Prophet never falls to the ground. Our shame was replaced with double honor and laughter.",
    },
    {
      id: "t4",
      name: "Victoria K.",
      location: "London, United Kingdom (Online Attendee)",
      edition: "NDR 12",
      category: "Deliverance",
      title: "Ancestral Embargo Broken Over Our Family Firstborns",
      summary:
        "In our family, no firstborn child had ever graduated or married without catastrophic illness. Connecting online from London during the warfare midnight hour, I felt an actual weight roll off my chest. That month, my elder brother graduated with honors and my cousin got married!",
      quote:
        "Distance is not a barrier to the prophetic unction. NDR broke chains that bound our bloodline for three generations.",
    },
  ] as TextTestimony[],

  videoTestimonies: [
    {
      id: "v1",
      title: "Supernatural Reversal & Miracles at NDR 10",
      speaker: "Prophet Isaiah Macwealth & Testifiers",
      duration: "Full Service Highlights",
      youtubeId: "MLG2ztVYrt8",
      summary:
        "Watch instant healings, dramatic yoke-breaking deliveries, and explosive testimonies recorded live at the Ark of Light for All Nations.",
      thumbnail: "/images/ndr-hero.jpg",
    },
    {
      id: "v2",
      title: "Tarrying for Answered Prayers | NDR 11",
      speaker: "Prophet Isaiah Macwealth",
      duration: "Prophetic Service Session",
      youtubeId: "3Vy9M_7Y2KM",
      summary:
        "Experience the deep atmosphere of intercession, spiritual warfare, and documented answers to prayer during the Night of Divine Reversal.",
      thumbnail: "/images/ndr-worship.jpg",
    },
  ] as VideoTestimony[],

  blogPosts: [
    {
      id: "b1",
      slug: "mystery-of-divine-reversal",
      title: "Understanding the Mystery of Divine Reversal: When Heaven Overrules",
      date: "September 12, 2026",
      author: "Prophet Isaiah Macwealth",
      readTime: "6 min read",
      scripture: "Esther 8:8, Colossians 2:14-15",
      excerpt:
        "Divine reversal is not a mere natural change of circumstances; it is an executive spiritual decree that cancels contrary ordinances, resets time, and reallocates what was illegitimately stolen.",
      content: [
        "In scripture, whenever God's people faced seemingly irreversible situations—such as the royal decree instigated by Haman in Esther's day—a spiritual counter-decree was required. Divine reversal is God's judicial mechanism to overturn evil decrees and restore lost destiny.",
        "When you step into a concentrated atmosphere of praise, prophetic prayer, and spiritual warfare, the legal claims of the enemy are dismantled. Colossians 2:14 declares that Christ wiped out the handwriting of requirements that was against us, nailing it to the cross.",
        "As you prepare for the upcoming Night of Divine Reversal, come with holy expectation. No verdict of darkness is final when the Almighty steps into your matter.",
      ],
    },
    {
      id: "b2",
      slug: "power-of-divine-remembrance",
      title: "The 3 Days of Remembrance: Why God Remembers His Covenant",
      date: "August 28, 2026",
      author: "Prophet Isaiah Macwealth",
      readTime: "5 min read",
      scripture: "Exodus 2:24, Genesis 8:1",
      excerpt:
        "When the Bible says 'God remembered', it does not imply He had forgotten. Rather, it signifies that the appointed season for divine intervention has arrived.",
      content: [
        "Scripture records: 'And God heard their groaning, and God remembered His covenant with Abraham, with Isaac, and with Jacob.' (Exodus 2:24). Remembrance marks the transition from waiting to harvest, from affliction to deliverance.",
        "The 3 Days of Remembrance are consecrated seasons set aside at the Ark of Light for All Nations. During this time, believers gather across nations to remind God of His Word through focused intercession, doctrinal alignment, and personal prayer lines.",
        "Teaching the people to grow is the fastest way to eradicate their challenges. When understanding meets prophetic unction, divine remembrance becomes an inevitable reality.",
      ],
    },
    {
      id: "b3",
      slug: "sweet-water-ministration-mystery",
      title: "The Prophetic Significance of Sweet Water in Spiritual Warfare",
      date: "August 14, 2026",
      author: "Prophet Isaiah Macwealth",
      readTime: "4 min read",
      scripture: "2 Kings 2:19-22, Exodus 15:25",
      excerpt:
        "From Marah in Exodus to the healing of the waters of Jericho by Prophet Elisha, water has always been a tangible prophetic instrument for sweetness and barrenness reversal.",
      content: [
        "When the men of Jericho complained to Elisha that the pleasant city was plagued by bad water and barren ground, Elisha demanded a new cruse with salt and poured it into the spring, declaring the healing of the waters.",
        "The administration of Sweet Water during the Victory and Faith Remembrance Prayer Line is a prophetic mystery anchored on biblical precedent to turn bitterness into sweetness, dissolve long-standing sicknesses, and break bodily afflictions.",
        "It is not magic, but faith acting upon the revealed Word under prophetic authority. Countless testifiers have had terminal infirmities overturned through this encounter.",
      ],
    },
  ] as BlogPost[],

  busRoutes: [
    {
      pickupLocation: "Oshodi Bus Terminal",
      landmark: "Beside Terminal 1, Oshodi Interchange",
      coordinatorContact: "+234 802 000 1101",
      departureTime: "5:30 PM & 6:30 PM",
    },
    {
      pickupLocation: "Mile 2 / Festac Junction",
      landmark: "Mile 2 Bridge by BRT Bus Stop",
      coordinatorContact: "+234 802 000 1102",
      departureTime: "5:00 PM & 6:00 PM",
    },
    {
      pickupLocation: "Berger Bus Stop",
      landmark: "Otedola / Berger Underbridge",
      coordinatorContact: "+234 802 000 1103",
      departureTime: "6:00 PM & 7:00 PM",
    },
    {
      pickupLocation: "Iyana Ipaja",
      landmark: "Under Bridge by NYSC Orientation Road",
      coordinatorContact: "+234 802 000 1104",
      departureTime: "5:30 PM & 6:30 PM",
    },
    {
      pickupLocation: "Yaba / Ojuelegba",
      landmark: "Tejuosho Market Front Gate",
      coordinatorContact: "+234 802 000 1105",
      departureTime: "5:45 PM & 6:45 PM",
    },
    {
      pickupLocation: "Ikorodu Roundabout",
      landmark: "Ikorodu Garage by BRT Station",
      coordinatorContact: "+234 802 000 1106",
      departureTime: "5:00 PM & 6:00 PM",
    },
  ] as BusRoute[],

  contactInfo: {
    address: "Plot 11, Kudirat Abiola Way, Alausa, Ikeja, Lagos, Nigeria",
    headquarters: "The Ark of Light for All Nations (Gospel Pillars Intl. Church)",
    hotline1: "+234 703 690 5175",
    hotline2: "+234 809 111 2233",
    email: "info@gospelpillars.org",
    prayerLineEmail: "ndr@onesoundbibleinstitute.org",
    broadcastPlatforms: [
      { name: "YouTube", handle: "@Arkoflightforallnations", url: "https://www.youtube.com/@Arkoflightforallnations" },
      { name: "Facebook", handle: "@GospelPillars", url: "https://www.facebook.com/GospelPillars" },
      { name: "OneSound App", handle: "Available on iOS & Android", url: "https://onesoundbibleinstitute.org" },
      { name: "GoBox 3.0", handle: "Global Satellite Decoder & App", url: "https://gospelpillars.org" },
    ],
  },
};
