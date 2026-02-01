export type VerificationType = "text" | "image" | "video";
export type Verdict = "Trusted" | "Suspicious" | "Misleading";

export interface VerificationResult {
    id: string;
    input_type: "text" | "image";
    extracted_text?: string; // Only if OCR was used
    google_presence: "واسع" | "محدود" | "غير موجود";
    fact_check_status: "غير مذكور" | "تم التحقق" | "مصنف كمضلل";
    verdict: Verdict;
    confidence: number;
    signals: string[];
    sources_found: string[];
    analysis_depth?: "سطحي" | "متوسط" | "متقدم";
    disclaimer: string;
    timestamp: string;
}

export async function verifyContent(content: string | File, type: VerificationType): Promise<VerificationResult> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // Mock Logic based on input
    let verdict: Verdict = "Trusted";
    let confidence = 85 + Math.floor(Math.random() * 10);
    let signals: string[] = [];
    let google_presence: "واسع" | "محدود" | "غير موجود" = "واسع";
    let fact_check_status: "غير مذكور" | "تم التحقق" | "مصنف كمضلل" = "غير مذكور";
    let sources_found: string[] = ["وكالة الأنباء السعودية (واس)", "صحيفة الشرق الأوسط"];
    let extracted_text: string | undefined = undefined;

    if (type === "text") {
        const text = content as string;
        if (text.includes("عاجل") || text.includes("صدمة")) {
            verdict = "Suspicious";
            confidence = 75;
            google_presence = "محدود";
            signals = ["لغة عاطفية حادة", "العنوان لا يظهر في المصادر الرسمية", "مصدر مجهول"];
            sources_found = ["منشورات فيسبوك غير موثقة"];
        } else if (text.includes("شائعة") || text.includes("كذب")) {
            verdict = "Misleading";
            confidence = 94;
            google_presence = "واسع"; // Widely discussed as fake
            fact_check_status = "مصنف كمضلل";
            signals = ["تناقض مع مصادر رسمية", "تم تصنيفه كمضلل بواسطة 'مسبار'", "تداول مكثف بوتيرة مشبوهة"];
            sources_found = ["مسبار للتحقق", "هيئة مكافحة الشائعات"];
        } else {
            // Trusted
            signals = ["تطابق مع وكالة الأنباء (واس)", "لغة موضوعية ورسمية", "انتشار متسق في المصادر الموثوقة"];
        }
    } else if (type === "image") {
        const rand = Math.random();
        extracted_text = "ملخص النص المستخرج من الصورة عبر تقنية OCR...";

        if (rand > 0.6) {
            verdict = "Misleading";
            confidence = 88;
            google_presence = "محدود";
            fact_check_status = "مصنف كمضلل";
            signals = ["تلاعب في البيانات الوصفية (EXIF)", "النص المستخرج غير موجود في المصادر الرسمية", "آثار تعديل رقمي (Photoshop)"];
            sources_found = ["حسابات وهمية على تويتر"];
        } else {
            signals = ["المصدر للصورة أصلي", "النص المستخرج يتطابق مع الخبر الرسمي", "لم يتم رصد تلاعب"];
        }
    }

    return {
        id: Math.random().toString(36).substr(2, 9),
        input_type: type === "image" ? "image" : "text",
        extracted_text,
        google_presence,
        fact_check_status,
        verdict,
        confidence,
        signals,
        sources_found,
        disclaimer: "هذا التقييم يعتمد على نتائج بحث مفتوح ولا يمثل حكمًا نهائيًا",
        timestamp: new Date().toISOString(),
    };
}
