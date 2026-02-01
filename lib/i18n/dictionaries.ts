export type Language = "ar" | "en";

export type Dictionary = {
    // Navigation
    home: string;
    map: string;
    stats: string;
    verification: string;
    news: string;

    // Header & Footer
    brandName: string;
    brandSlogan: string;
    quickLinks: string;
    support: string;
    rightsReserved: string;
    developedForHackathon: string;
    securityBadge: string;
    aboutUs: string;
    privacyPolicy: string;
    termsAndConditions: string;
    contactUs: string;

    // Map Page
    mapTitle: string;
    mapSubtitle: string;
    mediaEntity: string;
    newspaper: string;
    coveredRegion: string;
    selectRegion: string;

    // Home Page
    heroTitlePrefix: string;
    heroTitleSuffix: string;
    heroSubtitle: string;
    exploreMap: string;
    verifyContent: string;
    featuresTitle: string;
    featuresSubtitle: string;
    featureMapTitle: string;
    featureMapDesc: string;
    featureVerifyTitle: string;
    featureVerifyDesc: string;
    featureStatsTitle: string;
    featureStatsDesc: string;
    statRegion: string;
    statEntity: string;
    statAccuracy: string;
    statMonitoring: string;

    // Stats Page
    statsTitle: string;
    statsSubtitle: string;
    kpiLicensed: string;
    kpiRegions: string;
    kpiActive: string;
    kpiFounders: string;
    chartGrowth: string;
    chartGrowthDesc: string;
    chartType: string;
    chartStatus: string;
    chartGeo: string;
    topFounders: string;
    cumulative: string;
    active: string;
    stopped: string;
    dailyNewspaper: string;
    magazine: string;
    founderRole: string; // "Founder & Editor"

    // Verification Page
    verifyTitle: string;
    verifySubtitle: string;
    systemOnline: string;
    history: string;
    analyzing: string;
    processing: string;
    resultReport: string;
    privacy: string;
    privacyDesc: string;
    sources: string;
    sourcesDesc: string;
    highAccuracy: string;
    highAccuracyDesc: string;
    resultTrusted: string;
    resultSuspicious: string;
    resultMisleading: string;
    dragDrop: string; // For input component if needed, though input component might be separate
    pasteUrl: string; // For input

    // News Page
    newsTitle: string;
    newsSubtitle: string;
    smartBrief: string;
    aiPowered: string;
    newNews: string;
    avgAccuracy: string;
    all: string;
    gov: string;
    tech: string;
    economy: string;
    culture: string;
    urgent: string;
    readMore: string;
    aiAnalysis: string;

    // Common Actions
    save: string;
    cancel: string;
    add: string;
    search: string;
    filter: string;

    // Admin Sidebar
    dashboard: string;
    mediaEntities: string;
    founders: string;
    verificationLog: string;
    settings: string;
    adminPanel: string;
    internalDemo: string;
};

export const dictionaries: Record<Language, Dictionary> = {
    ar: {
        home: "الرئيسية",
        map: "خريطة الإعلام",
        stats: "الإحصائيات",
        verification: "التحقق الذكي",
        news: "موجز الأخبار",
        brandName: "دليل",
        brandSlogan: "المنصة الوطنية الموحدة لرصد وتحليل ومتابعة المشهد الإعلامي السعودي باستخدام تقنيات الذكاء الاصطناعي، لتمكين صناع القرار من رؤية شاملة ودقيقة.",
        quickLinks: "روابط سريعة",
        support: "الدعم والمساعدة",
        rightsReserved: "© 2026 دليل للإعلام الذكي. جميع الحقوق محفوظة.",
        developedForHackathon: "تم التطوير لأغراض الهاكاثون",
        securityBadge: "حماية 24/7",
        aboutUs: "عن دليل",
        privacyPolicy: "سياسة الخصوصية",
        termsAndConditions: "الشروط والأحكام",
        contactUs: "تواصل معنا",

        mapTitle: "خريطة الإعلام السعودي",
        mapSubtitle: "نظام استكشاف وتحليل المشهد الإعلامي وتوزيع الكيانات الصحفية",
        mediaEntity: "جهة إعلامية",
        newspaper: "صحيفة يومية",
        coveredRegion: "منطقة مغطاة",
        selectRegion: "اختر منطقة لعرض التفاصيل",

        heroTitlePrefix: "طبقة ذكاء فوق",
        heroTitleSuffix: "المشهد الإعلامي",
        heroSubtitle: "منصة \"دليل\" توحد البيانات الإعلامية، وتستخدم الذكاء الاصطناعي للتحقق من المحتوى، لتمكين الصحفيين وصناع القرار من الوصول للحقيقة.",
        exploreMap: "استكشف الخريطة",
        verifyContent: "تحقق من المحتوى",
        featuresTitle: "مميزات المنصة",
        featuresSubtitle: "نقدم أدوات متقدمة لفهم وتحليل المشهد الإعلامي السعودي بدقة وموثوقية.",
        featureMapTitle: "خريطة إعلامية شاملة",
        featureMapDesc: "قاعدة بيانات جغرافية تفاعلية لجميع الجهات الإعلامية المرخصة، تتيح لك استكشاف توزيع الصحف والمجلات حسب المنطقة التاريخية.",
        featureVerifyTitle: "تحقق بالذكاء الاصطناعي",
        featureVerifyDesc: "محرك تحقق متقدم يستخدم خوارزميات احتمالية لكشف التضليل في النصوص والصور، مع تقديم تحليل عميق ومصادر موثوقة.",
        featureStatsTitle: "تحليلات وإحصائيات",
        featureStatsDesc: "لوحات معلومات بيانية ترصد نمو الإعلام، وتوزيع المؤسسين، وكثافة التغطية الجغرافية لدعم اتخاذ القرارات.",
        statRegion: "منطقة مغطاة",
        statEntity: "جهة إعلامية",
        statAccuracy: "دقة التحليل",
        statMonitoring: "رصد مستمر",

        statsTitle: "مركز البيانات والتحليل",
        statsSubtitle: "لوحة متابعة حية ترصد نمو المشهد الإعلامي، التوزيع الجغرافي، ومؤشرات الأداء.",
        kpiLicensed: "إجمالي الجهات المرخصة",
        kpiRegions: "المناطق المُغطاة",
        kpiActive: "نسبة الكيانات النشطة",
        kpiFounders: "الشخصيات المؤثرة",
        chartGrowth: "النمو التاريخي للمؤسسات",
        chartGrowthDesc: "تطور عدد وسائل الإعلام السعودية عبر العقود",
        chartType: "توزيع أنواع الوسائل",
        chartStatus: "حالة النشاط",
        chartGeo: "الكثافة الجغرافية",
        topFounders: "رواد الإعلام السعودي",
        cumulative: "تراكمي سنوي",
        active: "نشط",
        stopped: "متوقف",
        dailyNewspaper: "صحف يومية",
        magazine: "مجلات دورية",
        founderRole: "مؤسس / رئيس تحرير",

        verifyTitle: "وحدة التحقق الرقمي",
        verifySubtitle: "Digital Media Forensics Unit",
        systemOnline: "النظام متصل",
        history: "سجل العمليات",
        analyzing: "جاري تحليل المحتوى...",
        processing: "جاري المعالجة",
        resultReport: "تقرير الحالة",
        privacy: "خصوصية تامة",
        privacyDesc: "لا يتم تخزين البيانات المدخلة بعد انتهاء الجلسة.",
        sources: "مصادر متعددة",
        sourcesDesc: "الربط مع أكثر من 50 مصدر إخباري وقاعدة بيانات.",
        highAccuracy: "دقة عالية",
        highAccuracyDesc: "نموذج ذكاء اصطناعي مدرب على المحتوى المحلي.",
        resultTrusted: "موثوق",
        resultSuspicious: "مشبوه",
        resultMisleading: "مضلل",
        dragDrop: "اسحب الملف هنا أو انقر للرفع",
        pasteUrl: "الصق النص أو الرابط هنا...",

        newsTitle: "موجز الأخبار",
        newsSubtitle: "الذكي",
        smartBrief: "موجز ذكي",
        aiPowered: "مدعوم بالذكاء الاصطناعي",
        newNews: "خبر جديد",
        avgAccuracy: "متوسط الدقة",
        all: "الكل",
        gov: "حكومي",
        tech: "تقنية",
        economy: "اقتصاد",
        culture: "ثقافة",
        urgent: "عاجل",
        readMore: "قراءة الكامل",
        aiAnalysis: "تحليل الذكاء الاصطناعي",

        save: "حفظ",
        cancel: "إلغاء",
        add: "إضافة",
        search: "بحث",
        filter: "تصفية",

        dashboard: "لوحة المعلومات",
        mediaEntities: "الجهات الإعلامية",
        founders: "الشخصيات والمؤسسون",
        verificationLog: "سجل التحقق",
        settings: "الإعدادات",
        adminPanel: "دليل Admin",
        internalDemo: "نسخة تجريبية داخلية",
    },
    en: {
        home: "Home",
        map: "Media Map",
        stats: "Statistics",
        verification: "Smart Verification",
        news: "News Feed",
        brandName: "Daleel",
        brandSlogan: "The unified national platform for monitoring, analyzing, and tracking the Saudi media landscape using AI technologies, empowering decision-makers with a comprehensive and accurate vision.",
        quickLinks: "Quick Links",
        support: "Support & Help",
        rightsReserved: "© 2026 Daleel Smart Media. All rights reserved.",
        developedForHackathon: "Developed for Hackathon purposes",
        securityBadge: "24/7 Security",
        aboutUs: "About Daleel",
        privacyPolicy: "Privacy Policy",
        termsAndConditions: "Terms & Conditions",
        contactUs: "Contact Us",

        mapTitle: "Saudi Media Map",
        mapSubtitle: "System for exploring and analyzing the media landscape and distribution of press entities",
        mediaEntity: "Media Entity",
        newspaper: "Daily Newspaper",
        coveredRegion: "Covered Region",
        selectRegion: "Select a region to view details",

        heroTitlePrefix: "Intelligence Layer Over",
        heroTitleSuffix: "The Media Landscape",
        heroSubtitle: "Daleel platform unifies media data and uses artificial intelligence to verify content, empowering journalists and decision-makers to access the truth.",
        exploreMap: "Explore Map",
        verifyContent: "Verify Content",
        featuresTitle: "Platform Features",
        featuresSubtitle: "We provide advanced tools to understand and analyze the Saudi media landscape with accuracy and reliability.",
        featureMapTitle: "Comprehensive Media Map",
        featureMapDesc: "An interactive geographic database of all licensed media entities, allowing you to explore the distribution of newspapers and magazines by historical region.",
        featureVerifyTitle: "AI Verification",
        featureVerifyDesc: "Advanced verification engine using probabilistic algorithms to detect misinformation in text and images, providing deep analysis and reliable sources.",
        featureStatsTitle: "Analytics & Statistics",
        featureStatsDesc: "Dashboards tracking media growth, founder distribution, and geographic coverage density to support decision-making.",
        statRegion: "Covered Regions",
        statEntity: "Media Entities",
        statAccuracy: "Accuracy",
        statMonitoring: "Continuous Monitoring",

        statsTitle: "Data & Analytics Center",
        statsSubtitle: "Live dashboard tracking media landscape growth, geographic distribution, and performance indicators.",
        kpiLicensed: "Total Licensed Entities",
        kpiRegions: "Covered Regions",
        kpiActive: "Active Entities Ratio",
        kpiFounders: "Influential Figures",
        chartGrowth: "Historical Media Growth",
        chartGrowthDesc: "Evolution of Saudi media outlets over decades",
        chartType: "Media Type Distribution",
        chartStatus: "Activity Status",
        chartGeo: "Geographic Density",
        topFounders: "Saudi Media Pioneers",
        cumulative: "Annual Cumulative",
        active: "Active",
        stopped: "Stopped",
        dailyNewspaper: "Daily Newspapers",
        magazine: "Periodicals",
        founderRole: "Founder / Editor-in-Chief",

        verifyTitle: "Digital Verification Unit",
        verifySubtitle: "Digital Media Forensics Unit",
        systemOnline: "SYSTEM ONLINE",
        history: "Operation Log",
        analyzing: "Analyzing Content...",
        processing: "Processing",
        resultReport: "Status Report",
        privacy: "Complete Privacy",
        privacyDesc: "Input data is not stored after the session ends.",
        sources: "Multiple Sources",
        sourcesDesc: "Connected to over 50 news sources and databases.",
        highAccuracy: "High Accuracy",
        highAccuracyDesc: "AI model trained on local content.",
        resultTrusted: "Trusted",
        resultSuspicious: "Suspicious",
        resultMisleading: "Misleading",
        dragDrop: "Drag file here or click to upload",
        pasteUrl: "Paste text or URL here...",

        newsTitle: "News Feed",
        newsSubtitle: "Smart",
        smartBrief: "Smart Brief",
        aiPowered: "AI Powered",
        newNews: "New Item",
        avgAccuracy: "Avg Precision",
        all: "All",
        gov: "Gov",
        tech: "Tech",
        economy: "Economy",
        culture: "Culture",
        urgent: "Urgent",
        readMore: "Read Full",
        aiAnalysis: "AI Analysis",

        save: "Save",
        cancel: "Cancel",
        add: "Add",
        search: "Search",
        filter: "Filter",

        dashboard: "Dashboard",
        mediaEntities: "Media Entities",
        founders: "Founders",
        verificationLog: "Verification Log",
        settings: "Settings",
        adminPanel: "Daleel Admin",
        internalDemo: "Internal Demo",
    },
};
