export type MediaType = "Newspaper" | "Magazine";
export type MediaStatus = "Active" | "Stopped";

export interface Founder {
    id: string;
    name: string;
    role: "Founder" | "Co-Founder" | "Editor-in-Chief";
    nationality?: string;
    bio?: string;
}

export interface EstablishmentDate {
    hijri: number;
    gregorian: number;
    display: string; // e.g. "1380 هـ (1960 م)"
}

export interface MediaEntity {
    id: string;
    name: string;
    type: MediaType;
    region: string;
    city: string;
    status: MediaStatus;
    licensed: boolean;

    establishment: EstablishmentDate;

    founderIds: string[];
    website?: string;
    logo?: string;
    description?: string;
}

export interface Region {
    id: string;
    name: string;
    arabicName: string;
    coordinates: [number, number];
}

export const SAUDI_REGIONS: Region[] = [
    { id: "riyadh", name: "Riyadh", arabicName: "الرياض", coordinates: [24.7136, 46.6753] },
    { id: "makkah", name: "Makkah", arabicName: "مكة المكرمة", coordinates: [21.3891, 39.8579] },
    { id: "madinah", name: "Madinah", arabicName: "المدينة المنورة", coordinates: [24.5247, 39.5692] },
    { id: "eastern", name: "Eastern Province", arabicName: "الشرقية", coordinates: [22.3000, 50.0000] },
    { id: "qassim", name: "Al-Qassim", arabicName: "القصيم", coordinates: [26.3233, 43.9750] },
    { id: "asir", name: "Asir", arabicName: "عسير", coordinates: [18.2167, 42.5000] },
    { id: "tabuk", name: "Tabuk", arabicName: "تبوك", coordinates: [28.3833, 36.5833] },
    { id: "hail", name: "Hail", arabicName: "حائل", coordinates: [27.5167, 41.7000] },
    { id: "northern", name: "Northern Borders", arabicName: "الحدود الشمالية", coordinates: [30.0000, 41.0000] },
    { id: "jazan", name: "Jazan", arabicName: "جازان", coordinates: [16.8833, 42.5500] },
    { id: "najran", name: "Najran", arabicName: "نجران", coordinates: [17.4833, 44.1167] },
    { id: "bahah", name: "Al-Bahah", arabicName: "الباحة", coordinates: [20.0129, 41.4677] },
    { id: "jouf", name: "Al-Jouf", arabicName: "الجوف", coordinates: [29.5000, 39.5000] },
];

// Mock Founders
export const MOCK_FOUNDERS: Founder[] = [
    { id: "f1", name: "حمد الجاسر", role: "Founder", nationality: "Saudi", bio: "علامة الجزيرة العربية ورائد الصحافة في المنطقة الوسطى." },
    { id: "f2", name: "أحمد عبده يماني", role: "Founder", nationality: "Saudi", bio: "من رواد الصحافة في المنطقة الغربية." },
    { id: "f3", name: "عثمان حافظ", role: "Co-Founder", nationality: "Saudi", bio: "أسس مع شقيقه جريدة المدينة." },
    { id: "f4", name: "علي حافظ", role: "Co-Founder", nationality: "Saudi" },
    { id: "f5", name: "عبدالله بن خميس", role: "Founder", nationality: "Saudi", bio: "أديب ومؤرخ، مؤسس صحيفة الجزيرة." },
    { id: "f6", name: "تركي بن عبدالله السديري", role: "Editor-in-Chief", bio: "لقب بملك الصحافة، قاد جريدة الرياض لعقود." },
    { id: "f7", name: "خالد المالك", role: "Editor-in-Chief", bio: "رئيس تحرير الجزيرة وعميد الصحفيين." },
    { id: "f8", name: "محمد صلاح الدين", role: "Founder", nationality: "Saudi" },
    { id: "f9", name: "أحمد السباعي", role: "Founder", nationality: "Saudi", bio: "رائد القصة الحديثة في الحجاز." },
    { id: "f10", name: "عبدالقدوس الأنصاري", role: "Founder", nationality: "Saudi", bio: "مؤسس مجلة المنهل." },
    { id: "f11", name: "هشام حافظ", role: "Co-Founder", nationality: "Saudi" },
    { id: "f12", name: "محمد علي حافظ", role: "Co-Founder", nationality: "Saudi" },
    { id: "f13", name: "فؤاد عزب", role: "Founder", nationality: "Saudi" },
    { id: "f14", name: "سليمان العيسى", role: "Founder", nationality: "Saudi" },
    { id: "f15", name: "عبدالله بن علي الصانع", role: "Founder", nationality: "Saudi" },
    { id: "f16", name: "عبدالكريم الجهيمان", role: "Founder", nationality: "Saudi", bio: "أديب وصحفي مخضرم." },
    { id: "f17", name: "هاشم بن سعيد النعمي", role: "Founder", nationality: "Saudi" },
    { id: "f18", name: "محمد فهد اليعقوب", role: "Founder", nationality: "Saudi" },
    { id: "f19", name: "خليل الزياني", role: "Founder", nationality: "Saudi" },
    { id: "f20", name: "عبدالله عبيان", role: "Editor-in-Chief", nationality: "Saudi" }
];

export const MOCK_MEDIA_ENTITIES: MediaEntity[] = [
    // REGION: RIYADH
    {
        id: "r1", name: "صحيفة الرياض", type: "Newspaper", region: "riyadh", city: "الرياض",
        status: "Active", licensed: true,
        establishment: { hijri: 1385, gregorian: 1965, display: "1385 هـ (1965 م)" },
        founderIds: ["f1", "f6"],
        website: "https://alriyadh.com",
        logo: "/logos/riyadh.png",
        description: "واحدة من أبرز الصحف اليومية السعودية، تصدر عن مؤسسة اليمامة الصحفية."
    },
    {
        id: "r2", name: "صحيفة الجزيرة", type: "Newspaper", region: "riyadh", city: "الرياض",
        status: "Active", licensed: true,
        establishment: { hijri: 1380, gregorian: 1960, display: "1380 هـ (1960 م)" },
        founderIds: ["f5", "f7"],
        website: "https://www.al-jazirah.com",
        logo: "/logos/jazirah.png",
        description: "أول صحيفة يومية تصدر في الرياض، متميزة بتغطيتها المحلية."
    },
    {
        id: "r3", name: "الشرق الأوسط", type: "Newspaper", region: "riyadh", city: "الرياض",
        status: "Active", licensed: true,
        establishment: { hijri: 1398, gregorian: 1978, display: "1398 هـ (1978 م)" },
        founderIds: ["f11", "f12"],
        description: "صحيفة العرب الدولية، خضراء الصفحات، ذات تأثير واسع."
    },
    {
        id: "r4", name: "مجلة اليمامة", type: "Magazine", region: "riyadh", city: "الرياض",
        status: "Active", licensed: true,
        establishment: { hijri: 1372, gregorian: 1952, display: "1372 هـ (1952 م)" },
        founderIds: ["f1"],
        description: "مجلة أسبوعية ثقافية جامعة، تعتبر مدرسة صحفية."
    },
    {
        id: "r5", name: "صحيفة الاقتصادية", type: "Newspaper", region: "riyadh", city: "الرياض",
        status: "Active", licensed: true,
        establishment: { hijri: 1413, gregorian: 1992, display: "1413 هـ (1992 م)" },
        founderIds: [],
        description: "صحيفة يومية متخصصة في الأخبار الاقتصادية والمالية."
    },
    {
        id: "r6", name: "مجلة الدعوة", type: "Magazine", region: "riyadh", city: "الرياض",
        status: "Active", licensed: true,
        establishment: { hijri: 1385, gregorian: 1965, display: "1385 هـ (1965 م)" },
        founderIds: [],
        description: "مجلة إسلامية جامعة."
    },

    // REGION: MAKKAH
    {
        id: "m1", name: "صحيفة عكاظ", type: "Newspaper", region: "makkah", city: "جدة",
        status: "Active", licensed: true,
        establishment: { hijri: 1379, gregorian: 1960, display: "1379 هـ (1960 م)" },
        founderIds: ["f2"],
        website: "https://okaz.com.sa",
        logo: "/logos/okaz.png",
        description: "صحيفة يومية كبرى، تتميز بجرأتها وتغطيتها لغرب المملكة."
    },
    {
        id: "m2", name: "صحيفة البلاد", type: "Newspaper", region: "makkah", city: "جدة",
        status: "Active", licensed: true,
        establishment: { hijri: 1353, gregorian: 1934, display: "1353 هـ (1934 م)" },
        founderIds: ["f8", "f9"],
        description: "تعتبر امتداداً لجريدة 'صوت الحجاز'، أعرق الصحف السعودية."
    },
    {
        id: "m3", name: "مجلة المنهل", type: "Magazine", region: "makkah", city: "جدة",
        status: "Stopped", licensed: true,
        establishment: { hijri: 1355, gregorian: 1937, display: "1355 هـ (1937 م)" },
        founderIds: ["f10"],
        description: "مجلة فكرية ثقافية رائدة، ظلت تصدر لعقود طويلة."
    },
    {
        id: "m4", name: "صحيفة الندوة", type: "Newspaper", region: "makkah", city: "مكة المكرمة",
        status: "Stopped", licensed: true,
        establishment: { hijri: 1377, gregorian: 1958, display: "1377 هـ (1958 م)" },
        founderIds: ["f13"],
        description: "كانت الصوت الإعلامي الأول من مكة المكرمة."
    },
    {
        id: "m5", name: "مكة", type: "Newspaper", region: "makkah", city: "مكة المكرمة",
        status: "Active", licensed: true,
        establishment: { hijri: 1435, gregorian: 2014, display: "1435 هـ (2014 م)" },
        founderIds: [],
        description: "صحيفة حديثة انطلقت من قلب العالم الإسلامي برؤية متجددة."
    },

    // REGION: MADINAH
    {
        id: "md1", name: "صحيفة المدينة", type: "Newspaper", region: "madinah", city: "جدة", // HQ moved to Jeddah later
        status: "Active", licensed: true,
        establishment: { hijri: 1356, gregorian: 1937, display: "1356 هـ (1937 م)" },
        founderIds: ["f3", "f4"],
        website: "https://al-madina.com",
        logo: "/logos/madina.png",
        description: "أول صحيفة سعودية تصدر بشكل يومي، انتقلت لاحقاً إلى جدة."
    },

    // REGION: EASTERN
    {
        id: "e1", name: "صحيفة اليوم", type: "Newspaper", region: "eastern", city: "الدمام",
        status: "Active", licensed: true,
        establishment: { hijri: 1385, gregorian: 1965, display: "1385 هـ (1965 م)" },
        founderIds: ["f15"],
        website: "https://alyaum.com",
        description: "الصحيفة الأولى في المنطقة الشرقية."
    },
    {
        id: "e2", name: "أخبار الخليج", type: "Magazine", region: "eastern", city: "الخبر",
        status: "Stopped", licensed: false,
        establishment: { hijri: 1375, gregorian: 1955, display: "1375 هـ (1955 م)" },
        founderIds: ["f16"],
        description: "مجلة أسبوعية قديمة كانت تصدر في الخبر."
    },
    {
        id: "e3", name: "مجلة القافلة", type: "Magazine", region: "eastern", city: "الظهران",
        status: "Active", licensed: true,
        establishment: { hijri: 1373, gregorian: 1953, display: "1373 هـ (1953 م)" },
        founderIds: [],
        description: "مجلة ثقافية راقية تصدر عن أرامكو السعودية."
    },

    // REGION: ASIR
    {
        id: "a1", name: "صحيفة الوطن", type: "Newspaper", region: "asir", city: "أبها",
        status: "Active", licensed: true,
        establishment: { hijri: 1421, gregorian: 2000, display: "1421 هـ (2000 م)" },
        founderIds: [],
        website: "https://alwatan.com.sa",
        description: "انطلقت برؤية 'الوطن بعيون الجميع'، وتميزت بطرح قضايا جريئة."
    },
    {
        id: "a2", name: "مجلة الجنوب", type: "Magazine", region: "asir", city: "أبها",
        status: "Stopped", licensed: true,
        establishment: { hijri: 1400, gregorian: 1980, display: "1400 هـ (1980 م)" },
        founderIds: ["f17"]
    },

    // REGION: QASSIM
    {
        id: "q1", name: "صحيفة القصيم (توقفت)", type: "Newspaper", region: "qassim", city: "بريدة",
        status: "Stopped", licensed: true,
        establishment: { hijri: 1379, gregorian: 1959, display: "1379 هـ (1959 م)" },
        founderIds: ["f15"],
        description: "محاولة صحفية مبكرة في المنطقة الوسطى."
    },

    // REGION: HAIL
    {
        id: "h1", name: " مجلة حائل", type: "Magazine", region: "hail", city: "حائل",
        status: "Active", licensed: true,
        establishment: { hijri: 1408, gregorian: 1988, display: "1408 هـ (1988 م)" },
        founderIds: ["f18"],
        description: "مجلة دورية تعنى بشؤون منطقة حائل الأدبية."
    },

    // REGION: JAZAN
    {
        id: "j1", name: "جازان اليوم", type: "Newspaper", region: "jazan", city: "جازان",
        status: "Active", licensed: true,
        establishment: { hijri: 1430, gregorian: 2009, display: "1430 هـ (2009 م)" }, // Electronic turned licensed
        founderIds: [],
    },

    // REGION: JOUF
    {
        id: "jo1", name: "مجلة الجوف", type: "Magazine", region: "jouf", city: "سكاكا",
        status: "Active", licensed: true,
        establishment: { hijri: 1420, gregorian: 1999, display: "1420 هـ (1999 م)" },
        founderIds: []
    }
];
