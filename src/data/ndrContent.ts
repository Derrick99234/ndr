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

import { galleryImages, type GalleryImage } from "./galleryImages";
export type { GalleryImage };

export interface TextTestimony {
  id: string;
  name: string;
  location: string;
  edition?: string;
  title: string;
  summary: string;
  fullText: string;
  category?: string;
  quote?: string;
}

export interface VideoTestimony {
  id: string;
  title: string;
  speaker: string;
  duration: string;
  youtubeId: string;
  summary: string;
  thumbnail: string;
  batch?: "Batch 1" | "Batch 2";
  category?: string;
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
    title: "Senior Pastor, Gospel Pillars Intl. Churches worldwide | Founder, OneSound Revival Fellowship",
    quote:
      "Teaching the people to grow is the fastest way to eradicate their challenges.",
    bio: [
      "Dr. Isaiah Macwealth, also known as Isaiah Wealth, is a lover of Jesus, a renowned author, philanthropist, and Senior Pastor of Gospel Pillars Intl. Churches worldwide. He is also the founder of the OneSound Revival Fellowship, which runs a TV house, a Bible College, and Charity foundation.",
      "Called a prophet of God, his daily aim is to seek alignment with Heaven to deliver revelatory teachings, prophecies and exhortations right from the heart of the Father to people, nations, tongues, and kings as seen in Revelation 10:11.",
      "Through his prophetic ministry and teachings, he unveils deep mysteries of the Kingdom, bringing hidden spiritual realities into light and equipping believers to recognise and exercise their authority in Christ. His ministry is marked by profound spiritual engagement, prophetic declarations, divine interventions, healing, deliverance, miracles, signs and wonders, and the manifest power of the Holy Spirit. From this deep prophetic burden for divine intervention, reversal, restoration, and the realignment of destinies, the Night of Divine Reversal emerges as a powerful expression of his ministry—a prophetic atmosphere where faith is stirred, spiritual battles are confronted, and lives are positioned for divine turnaround.",
      "On November 11th, 2023, Dr. Macwealth launched his international ministry headquarters, the Ark of Light for all Nations, which has become a Gospel hotspot and an acclaimed mega church in Ikeja area of Lagos, hosting thousands of worshippers weekly and housing a Food and Emergency Bank, known as the Ark Food Bank, a food sanctuary and an emergency response centre in Lagos providing communities across West and Southern Africa with free food, clothing, and emergency supplies.",
      "In March 2026, in a bold and strategic move to make church more accessible to a wider audience, Prophet Macwealth launched 8 new churches in a single day—including The Hebron, Gospel Pillars Church Lekki, which now serves as the church’s headquarters in Lagos. Since its inauguration, The Hebron has quickly become renowned for its vibrant worship, dynamic atmosphere of prayer, and a thriving community of faith across the island axis of Lagos.",
      "Dr. Macwealth is also passionate to see revival in the United Kingdom as revealed to him by the Lord, for which he works tirelessly and for which he founded the Revival UK Mission (RUM), which is active in missionary training programs and church planting all over the UK and Europe. His mission also plants churches in 5 continents of the world in anticipation of Christ’s second coming, according to Matt 24:14 which serves as the foundation of his efforts. The Prophet lives in Lagos Nigeria with his wife and his sons.",
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

  gallery: galleryImages,

  textTestimonies: [
    {
      id: "tt1",
      name: "Peter O.",
      location: "Middlesbrough, UK",
      title: "WIFE & BABY DELIVERED FROM THE HANDS OF DEATH BY EL-GIBBOWR",
      summary:
        "My wife, who was heavily pregnant complained of severe abdominal pain and later began hallucinating. At the hospital, doctors discovered our baby’s heart rate had dropped dangerously and immediately performed an emergency Caesarean section to bring the baby out, but my wife remained unconscious.",
      fullText: `My wife, who was heavily pregnant complained of severe abdominal pain and later began hallucinating. At the hospital, doctors discovered our baby’s heart rate had dropped dangerously and immediately performed an emergency Caesarean section to bring the baby out, but my wife remained unconscious. 

The doctors diagnosed acute pancreatitis, with almost two litres of fluid in her abdomen, a severely damaged pancreas, calcium nearly three times the normal limit, and almost every blood result abnormal. The doctors themselves admitted they were puzzled. In this confusion, I remembered the testimonies read during the last Nights of Remembrance and began to call on El-Gibbowr for mercy.

Suddenly, during one of the prophetic services God’s Prophet declared, “That terminal disease will not terminate you.” Again, during another revival prayer with the prophet, another word came: “That swollen stomach—I command it to reduce.” I received every word in faith, and from that point everything began to change. The fluid in her abdomen began to reduce exactly as the prophetic word had declared. Her dangerously high calcium returned to normal. Her blood pressure and heart rate stabilised. She regained consciousness and began responding; within a few days it became completely normal. 

After two weeks in critical care and one full month in hospital she was discharged healed and healthy. My son is alive and well. Our family has been preserved by the God of the Prophet. Glory to God. Hallelujah!

— Peter O. (Middlesbrough, UK)`,
    },
    {
      id: "tt2",
      name: "Mr. & Mrs. Okoronkwo",
      location: "Lagos, Nigeria",
      title: "MIRACULOUS CONCEPTION & DELIVERY BY THE MIGHTY HAND OF EL-GIBBOWR",
      summary:
        "After 17 months of waiting for the fruit of the womb, we got a medical diagnosis of Bilateral Adhesion (blocked fallopian tubes), which means the chance of conception was zero. We attended a 3-day prophetic service with the prophet of God, and right there, the LORD showed us mercy...",
      fullText: `After 17 months of waiting for the fruit of the womb, we got a medical diagnosis of Bilateral Adhesion (blocked fallopian tubes), which means the chance of conception was zero. We attended a 3-day prophetic service with the prophet of God, and right there, the LORD showed us mercy and turned that diagnosis around, as my wife conceived just 8 days later, against all medical explanations.

At the point of childbirth, the enemy tried to rear his ugly head again. My wife’s water broke but the doctors asked us to go back home because the dilation was not progressing. 3 days later, our 4kg baby got stuck during delivery, became unresponsive and suffocated. All hope seemed lost, but God’s prophet again declared ‘LIFE’ unto the baby, and miraculously, our child survived the "killer situation" and is alive and healthy today! We return all glory to Jesus. 

Mr. & Mrs. Okoronkwo (Lagos, Nigeria)`,
    },
    {
      id: "tt3",
      name: "Mr & Mrs J. Sylvester",
      location: "Benin City, Nigeria",
      title: "3YEAR SIEGE OF 4 LOST BABIES REVERSED IN THE SEASON OF REMEMBRANCE",
      summary:
        "We got married in October 2023 and within the space of 3 years, we had experienced a stillbirth, a miscarriage, and the loss of twin babies. Nothing could be more devastating. The only anchor we held onto was the prophetic teachings and declarations of God's prophet...",
      fullText: `We got married in October 2023 and within the space of 3 years, we had experienced a stillbirth, a miscarriage, and the loss of twin babies. Nothing could be more devastating.

The only anchor we held onto was the prophetic teachings and declarations of God's prophet, who began to teach about the mystery of the womb and how we can be fruitful, as we believed for a reversal of this cycle of pain and losses. 

During the International Intercessors Conference in 2025, we were privileged to meet with God's Prophet who prayed for us and declared, 'I see you carrying your baby and dancing on your birthday, the child will be the salt of the earth'. 

El-Gibbowr, the God of the Prophet answered us, because within the course of nine months, the Lord wiped away our tears and comforted us with a beautiful baby boy as a sign of the beginning of many beautiful things in our family. Glory be to God! 

Mr & Mrs J. Sylvester (Benin City, Nigeria)`,
    },
    {
      id: "tt4",
      name: "Mrs. & Mr. Okafor",
      location: "GPC Hackney, London",
      title: "EL-GIBBOWR HAS REMEMBERED US AND BROKEN 5 YEARS OF FRUITFULNESS DELAYS",
      summary:
        "My husband and I got married in December 2021, and ever since then, we have been believing and trusting God for a child. I experienced multiple miscarriages, one after the other, but no medical explanation was given for the repeated miscarriages...",
      fullText: `My husband and I got married in December 2021, and ever since then, we have been believing and trusting God for a child. I experienced multiple miscarriages, one after the other, but no medical explanation was given for the repeated miscarriages. At some point, we even went through a stillbirth; the baby was five months and a few weeks old. It was a very difficult season for us. As a wife, I fell into depression because I had gone through different procedures, all to no avail.

In the midst of it all, we held on to the God of the prophet. On June 2nd, 2025, I wrote down a request in my journal, tapping into the anointing of the birthday of our Prophet that before his next birthday, I would carry my child. Our Apostle also sent us “sweet water” from the Prophet and prayed with us.

On August 24th, 2025, I was connected to a revival service at our headquarters, and while the testimonies of remembrance and reversal from others were being read, the Prophet of God was led to make a decree with these words: “Whatever darkness you have experienced, a greater light will shine! Receive restoration, double for your trouble!” I and my spouse believed those words strongly and held on to them.

Shortly after, God blessed us again with another pregnancy. The pregnancy was tagged high-risk because of my history, and we discovered that I had fibroids outside my uterus. As the pregnancy progressed, the fibroids also grew. The doctor told us that the delivery would be through a C-section. It really looked like history would repeat itself. 

During NDR10 in March 2026, I wrote in my journal again that I wanted the C-section to be without pain or excessive bleeding - a smooth process. At 37 weeks, we went to the hospital for the operation with full assurance that the God of the Prophet had gone ahead of us to perfect all that concerned us. The first miracle El-Gibbowr did was that all the fibroids that had been seen on the scan were not found in the cervix. The doctor even asked, “Who said there were fibroids in the cervix?” because he could not see any.

What they initially said would take hours because of the series of complications was completed in less than 20 minutes. My baby was delivered safely. Today, I am here to testify that the God of the Prophet has blessed us with a healthy baby boy. God finally turned our waiting into joy after multiple miscarriages and a stillbirth.

I am so grateful that the God of the Prophet remembered me. Glory to God.
Mrs. & Mr. Okafor, GPC Hackney, London`,
    },
    {
      id: "tt5",
      name: "Gideon O.",
      location: "Nigeria",
      title: "DOUBLE CELEBRATION IN MY HOME AFTER ENGAGING THE POWER OF EL-GIBBOWR!",
      summary:
        "After our traditional marriage in 2023, my wife and I both lost our jobs. In February 2025, we also lost our first pregnancy; it was a very painful season for us. But Since November 2024 when I joined Gospel Pillars Church, we have been diligently following the instructions of our Prophet...",
      fullText: `After our traditional marriage in 2023, my wife and I both lost our jobs. In February 2025, we also lost our first pregnancy; it was a very painful season for us.

But Since November 2024 when I joined Gospel Pillars Church, we have been diligently following the instructions of our Prophet and to the glory of God, my wife conceived again, thought the Doctors marked it a high-risk pregnancy because of the presence of fibroids and her past history.

However, in obedience to the prophetic instructions by the prophet of God, I wrote down my prayer requests (remembrance list) for a new job and safe delivery of my wife.

On the 4th day of Remembrance while my wife was in the labour room, I received an email from a company I had applied to months before, offering me a job with a salary twice what I lost in 2023. Almost immediately after, my wife put to birth a bouncing baby boy! 

Indeed, the God of the prophet, El-Gibbowr has remembered us. Glory be to His Name!
- Gideon O. (Nigeria)`,
    },
    {
      id: "tt6",
      name: "Modupe Omotosho",
      location: "Sangotedo, Lagos",
      title: "DELIVERANCE FROM THE SPIRIT OF INFIRMITY AND DEATH BY THE POWER OF EL-GIBBOWR",
      summary:
        "For the past 5 years, my mum usually would fall sick at a certain time of the year, just before her birthday- we observe the pattern annually, usually there is no diagnosis medically, the symptoms are usually severe blood shortage, hallucination, extreme weakness...",
      fullText: `For the past 5 years, my mum usually would fall sick at a certain time of the year, just before her birthday- we observe the pattern annually, usually there is no diagnosis medically, the symptoms are usually severe blood shortage, hallucination, extreme weakness, inability to walk, eat or function normally. it was tiring! we had spent so much money, prayed, fasted and trusted- in fact we had tested her for cancer, HIV and all manner of possibilities but the results returned negative.

I truly got tired of this satanic oppression and began to trust the Lord
- I set up my altar, put her name on it trusting the Lord for healing 
- Administered jumbo water, gave her communion daily and confessed the word of God
- Did a 3 days thanksgiving dance to the Lord in faith for her healing 
- It was always part of my request each NDR
- She came to Lagos and knelt on the altar before the Lord in the ark and prayed for deliverance and healing, she believed in the God of this house

What the Lord did
On the 29th July 2026, I was in a vision, I saw a huge snake, it was huge, more like a dragon but a snake with 9 heads and several branches, it was terrifying, it hides between the flowers just infront of my parents house. it lives there and has been there for years, seasonally, it rears its head, strikes and goes back into hiding.

We saw it, my mum went there and uprooted it from its root and sprayed something on it that made it powerless and weak and it was disposed out of our household. And ever since, my mum has experienced supernatural healing- I have come to return the Glory to El-Gibbowr the God of my Prophet and fulfill my vow to the Lord for this great deliverance wherein he has wrought for us. Thank you Jesus !!!!!
Modupe Omotosho, Sangotedo`,
    },
    {
      id: "tt7",
      name: "Mrs. Onuoha Uche",
      location: "Lagos, Nigeria",
      title: "EXPEDITED HEALING AND RECOVERY BY THE TOUCH OF EL-GIBBOWR",
      summary:
        "On March 6th, I was involved in an accident and I suffered a broken leg. The bone was badly broken — it was only being held together by flesh. The doctors told me to expect a long recovery: 6 to 8 weeks of immobility and using crutches. Honestly, it looked hopeless...",
      fullText: `On March 6th, I was involved in an accident and I suffered a broken leg. The bone was badly broken — it was only being held together by flesh. The doctors told me to expect a long recovery: 6 to 8 weeks of immobility and using crutches. Honestly, it looked hopeless. But God stepped in. He positioned someone who knew a doctor that could help me. After *5 weeks* of being in one place, I stood for the first time.

My Journey to Recovery:
During those nights of pain and sleeplessness, I held on to God’s Word and used sweet water. I kept reading Ezekiel 37 — the vision of the dry bones. 
I was not alone. I was told Prophet prayed for me. My family stood with me — my favorite brother-in-law *Pastor Salvy*, my sister *Deaconess Kachi*, *Pastor Osayi, Pastor Beauty and Blessing* and others. They prayed for me, checked on me, and encouraged me.
God also spoke to me in dreams. He showed me that I would *throw away my crutches and walk again*.  
In faith, during prayer meetings, I applied the *anointed mantle* from *RMD Night, May Edition* — when Prophet asked us to come to Hebron by 7am — to my affected leg and knee.

The Outcome: My locked knee was released. The severe pain vanished. 
I remember the first Sunday I came to church after the accident. I didn’t even know God was waiting for me. Just as we approached the church entrance, the choir started singing my favorite song and I broke down in tears, thanking *El-Gibbor* for healing me. 
During the service, the Prophet made illustrations using his right leg and said, _"Ignore the pain and worship God."_  
*1st Sunday*: I came with 2 crutches.  
*2nd Sunday*: I came with 2 crutches but left one in the car.  
That was how I progressed until I dropped them completely.  

I want to thank my Prophet, my Pastors, my family, and this wonderful church community for your love and prayers. What the enemy meant for evil, God turned around for my testimony.
Mrs. Onuoha Uche (Lagos)`,
    },
    {
      id: "tt8",
      name: "Ebenezer O.",
      location: "Abuja, Nigeria",
      title: "SUPERNATURAL HEALING, PROMOTION & A NEW LEVEL IN THE SEASON OF REMEMBRANCE",
      summary:
        "I want to bless the name of the Lord, El-Gibbor, the God of our Prophet, for deeming me fit to live again. Last month I was diagnosed with a collapsed lung. I could barely breathe and was in severe pain after surgery at Gwagwalada Teaching Hospital...",
      fullText: `I want to bless the name of the Lord, El-Gibbor, the God of our Prophet, for deeming me fit to live again.

1. HEALING FROM COLLAPSED LUNG  
Last month I was diagnosed with a collapsed lung. I could barely breathe and was in severe pain after surgery at Gwagwalada Teaching Hospital. I had complications, was coughing profusely and losing my breath. I listened to Sunday service message on Faith, connected to AEJ IBADAN online put out my Faith. Then in a dream a I was in a beautiful Hospital and a Dr said he has come to heal me. He will extract the fluid. God sent help in time — I was given oxygen and treatment, and 4 days later the tube was removed. A scan showed my lungs had fully expanded. The doctors were amazed at how fast I recovered.

2. DIVINE PROMOTION  
While I was still recovering, God remembered the word of our Prophet spoken through our Apostle on 10th May: "An in-law will be your point of promotion." I help unto that work and through my in law I was called to take up the  Unit Commander of FIRS/NRS. In just 2 days the signal came out appointing me as Commanding Officer in charge of FIRS/NRS.  
Now I oversee over 200 men across all FIRS branches in Nigeria, though my rank ordinarily covers only 63. God promoted me from field officer to a national command position.

3. GOD’S PROVISION  
In that same month of spending close to ₦1 million on hospital bills, God blessed my family with a car. From deathbed, to instant healing, to promotion, to a car — all in one month.

I’m grateful to the God of our Prophet Jehovah El Gibbowr for his faithfulness. I am grateful for the gift of our Prophet a vessel in God's hand. 
To God alone be all the glory! Amen.
Ebenezer O. (Abuja, Nigeria)`,
    },
    {
      id: "tt9",
      name: "Barr. Opara C.",
      location: "London, United Kingdom",
      title: "DIVINE REVERSAL OF  VISA STATUS BY THE POWER OF DECREES",
      summary:
        "Coming into this year, the prophet taught us to make decrees. At the time, my visa was expiring and she was having difficulties renewing. I wrote as one of my 26 decrees for 2026 that I would secure a sponsored job before the end of January...",
      fullText: `Coming into this year, the prophet taught us to make decrees. At the time, my visa was expiring and she was having difficulties renewing. I wrote as one of my 26 decrees for 2026 that I would secure a sponsored job before the end of January. Given everything that was happening, it seemed almost impossible to write that down. Nevertheless, I did so in faith, trusting God and declaring, "I'm a covenant daughter of the Prophet. Everything will work together for my good."

Soon afterwards, I began receiving multiple interview invitations. I prepared diligently for each one, holding on to the Word of God and depending on the God of the Prophet to give me victory. Over the last two months, I received four job offers, two of which came with full visa sponsorship. On 19 February, I received a provisional offer for the position of Legal Adviser with the Ministry of Justice in the United Kingdom. I have now resumed that position on a sponsored visa.

This time last year, I had no income and was under the intense pressure of an expiring visa with an uncertain future. But God remembered me and completely reversed my situation. He moved me from having no job and no visa options to having multiple job offers which He has now perfected. I am deeply grateful to the God of the Prophet for making a way where there seemed to be none. To Him alone be all the Glory!

— Barr. Opara C. (London, United Kingdom)`,
    },
  ] as TextTestimony[],

  videoTestimonies: [
    // Batch 1 (11 Videos)
    {
      id: "v1",
      title: "From the Edge of Death to a Double Miracle",
      speaker: "Prophet Isaiah Macwealth & Testifier",
      duration: "Shorts",
      youtubeId: "oGr45qcDB-M",
      batch: "Batch 1",
      category: "Miracle & Deliverance",
      summary:
        "A jaw-dropping testimony of resurrection life and divine reversal from the very brink of death to a double miracle.",
      thumbnail: "https://img.youtube.com/vi/oGr45qcDB-M/hqdefault.jpg",
    },
    {
      id: "v2",
      title: "Brought Back to Life by the Mantle of Wonder",
      speaker: "Prophet Isaiah Macwealth & Testifier",
      duration: "Shorts",
      youtubeId: "KdmQ7QI4W6g",
      batch: "Batch 1",
      category: "Resurrection & Healing",
      summary:
        "Documented miracle of life restored through the prophetic mantle and the manifest power of the Holy Spirit.",
      thumbnail: "https://img.youtube.com/vi/KdmQ7QI4W6g/hqdefault.jpg",
    },
    {
      id: "v3",
      title: "Strange Swelling in Private Area Dissolves",
      speaker: "Prophet Isaiah Macwealth & Testifier",
      duration: "Shorts",
      youtubeId: "eLHDoJOZezQ",
      batch: "Batch 1",
      category: "Instant Healing",
      summary:
        "Painful bodily affliction and strange swelling completely dissolved following prophetic declaration and prayer.",
      thumbnail: "https://img.youtube.com/vi/eLHDoJOZezQ/hqdefault.jpg",
    },
    {
      id: "v4",
      title: "Instant Healing After Accurate Prophetic Declaration",
      speaker: "Prophet Isaiah Macwealth & Testifier",
      duration: "Shorts",
      youtubeId: "KzjwQQX8Ijk",
      batch: "Batch 1",
      category: "Prophetic Healing",
      summary:
        "A sharp, accurate prophetic word addressed the condition and brought immediate, verifiable healing.",
      thumbnail: "https://img.youtube.com/vi/KzjwQQX8Ijk/hqdefault.jpg",
    },
    {
      id: "v5",
      title: "Double for Your Trouble & Honor for Your Shame",
      speaker: "Prophet Isaiah Macwealth & Testifier",
      duration: "Shorts",
      youtubeId: "BgnSQ-iYjAQ",
      batch: "Batch 1",
      category: "Breakthrough",
      summary:
        "Supernatural turnaround reversing long seasons of trial into celebrated divine honor and double restoration.",
      thumbnail: "https://img.youtube.com/vi/BgnSQ-iYjAQ/hqdefault.jpg",
    },
    {
      id: "v6",
      title: "El-Gibbowr Will Not Leave You Stranded",
      speaker: "Prophet Isaiah Macwealth & Testifier",
      duration: "Shorts",
      youtubeId: "9Y5AMyT7PVs",
      batch: "Batch 1",
      category: "Divine Intervention",
      summary:
        "God the Mighty Warrior moved swiftly to rescue and uphold His child at a critical juncture of helplessness.",
      thumbnail: "https://img.youtube.com/vi/9Y5AMyT7PVs/hqdefault.jpg",
    },
    {
      id: "v7",
      title: "Double Testimony of Restoration in One Day",
      speaker: "Prophet Isaiah Macwealth & Testifier",
      duration: "Shorts",
      youtubeId: "QR-lwhwHiRk",
      batch: "Batch 1",
      category: "Restoration",
      summary:
        "Two extraordinary breakthroughs and restoration testimonies materialized within 24 hours.",
      thumbnail: "https://img.youtube.com/vi/QR-lwhwHiRk/hqdefault.jpg",
    },
    {
      id: "v8",
      title: "God Answered All Her Prayers After Engaging the Altar",
      speaker: "Prophet Isaiah Macwealth & Testifier",
      duration: "Shorts",
      youtubeId: "dzrCFDnGovs",
      batch: "Batch 1",
      category: "Answered Prayers",
      summary:
        "Every single prayer point presented before the altar received a comprehensive supernatural answer.",
      thumbnail: "https://img.youtube.com/vi/dzrCFDnGovs/hqdefault.jpg",
    },
    {
      id: "v9",
      title: "3 Years Delay Broken in the Season of Fruitfulness",
      speaker: "Prophet Isaiah Macwealth & Testifier",
      duration: "Shorts",
      youtubeId: "8YYV6Y902E0",
      batch: "Batch 1",
      category: "Fruitfulness",
      summary:
        "Three solid years of delay and barren waiting shattered as the prophetic season of fruitfulness was declared.",
      thumbnail: "https://img.youtube.com/vi/8YYV6Y902E0/hqdefault.jpg",
    },
    {
      id: "v10",
      title: "God Preserved This Baby's Life",
      speaker: "Prophet Isaiah Macwealth & Testifier",
      duration: "Shorts",
      youtubeId: "joN_4Bw3Kvw",
      batch: "Batch 1",
      category: "Miracle Baby",
      summary:
        "Supernatural intervention and prophetic preservation that snatched a newborn from mortal danger.",
      thumbnail: "https://img.youtube.com/vi/joN_4Bw3Kvw/hqdefault.jpg",
    },
    {
      id: "v11",
      title: "Cancer Diagnosis Reversed by the Mercy of God",
      speaker: "Prophet Isaiah Macwealth & Testifier",
      duration: "Shorts",
      youtubeId: "pqfG_ufdag4",
      batch: "Batch 1",
      category: "Cancer Reversal",
      summary:
        "Confirmed clinical cancer diagnosis overturned and cleared through the healing mercy of God.",
      thumbnail: "https://img.youtube.com/vi/pqfG_ufdag4/hqdefault.jpg",
    },

    // Batch 2 (3 Videos)
    {
      id: "v12",
      title: "Terminal Illness Reversed by the Mercy of God",
      speaker: "Prophet Isaiah Macwealth & Testifier",
      duration: "Shorts",
      youtubeId: "pUdVv3mEr6M",
      batch: "Batch 2",
      category: "Terminal Illness Reversal",
      summary:
        "A medically declared terminal condition completely reversed through divine intervention and prayer.",
      thumbnail: "https://img.youtube.com/vi/pUdVv3mEr6M/hqdefault.jpg",
    },
    {
      id: "v13",
      title: "16 Years of Mental Illness Healed",
      speaker: "Prophet Isaiah Macwealth & Testifier",
      duration: "Shorts",
      youtubeId: "scfiNseQLdo",
      batch: "Batch 2",
      category: "Mental Deliverance",
      summary:
        "Sixteen years of psychiatric oppression and mental disorder miraculously cured in God's presence.",
      thumbnail: "https://img.youtube.com/vi/scfiNseQLdo/hqdefault.jpg",
    },
    {
      id: "v14",
      title: "Doctors Checked Again And The Stones Were GONE",
      speaker: "Prophet Isaiah Macwealth & Testifier",
      duration: "Shorts",
      youtubeId: "iYme2HFtvcs",
      batch: "Batch 2",
      category: "Medical Miracle",
      summary:
        "Repeat hospital diagnostic scans revealed internal stones vanished without medical surgery.",
      thumbnail: "https://img.youtube.com/vi/iYme2HFtvcs/hqdefault.jpg",
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
