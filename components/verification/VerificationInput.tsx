"use client";

import { useState } from "react";
import { Upload, FileText, Image as ImageIcon, Video, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { VerificationType } from "@/lib/services/verification-service";

interface VerificationInputProps {
    onVerify: (content: string | File, type: VerificationType) => void;
    isVerifying: boolean;
}

export function VerificationInput({ onVerify, isVerifying }: VerificationInputProps) {
    const [activeTab, setActiveTab] = useState<VerificationType>("text");
    const [textInput, setTextInput] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = () => {
        if (activeTab === "text" && textInput.trim()) {
            onVerify(textInput, "text");
        } else if (activeTab !== "text" && file) {
            onVerify(file, activeTab);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="flex border-b border-slate-100">
                <button
                    onClick={() => setActiveTab("text")}
                    className={cn("flex-1 py-4 text-sm font-medium flex items-center justify-center gap-2 transition-colors", activeTab === "text" ? "text-blue-600 bg-blue-50/50" : "text-slate-500 hover:bg-slate-50")}
                >
                    <FileText size={18} /> نص
                </button>
                <button
                    onClick={() => setActiveTab("image")}
                    className={cn("flex-1 py-4 text-sm font-medium flex items-center justify-center gap-2 transition-colors", activeTab === "image" ? "text-blue-600 bg-blue-50/50" : "text-slate-500 hover:bg-slate-50")}
                >
                    <ImageIcon size={18} /> صورة
                </button>
                <button
                    onClick={() => setActiveTab("video")}
                    className={cn("flex-1 py-4 text-sm font-medium flex items-center justify-center gap-2 transition-colors", activeTab === "video" ? "text-blue-600 bg-blue-50/50" : "text-slate-500 hover:bg-slate-50")}
                >
                    <Video size={18} /> فيديو
                </button>
            </div>

            <div className="p-8">
                {activeTab === "text" ? (
                    <textarea
                        className="w-full h-40 p-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none resize-none text-slate-700"
                        placeholder="لصق النص هنا للتحقق من مصداقيته..."
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                    />
                ) : (
                    <div className="border-2 border-dashed border-slate-300 rounded-lg h-40 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer relative">
                        <input
                            type="file"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            accept={activeTab === "image" ? "image/*" : "video/*"}
                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                        />
                        <Upload size={32} className="mb-2 opacity-50" />
                        <p className="font-medium">{file ? file.name : "اضغط لرفع ملف أو اسحبه هنا"}</p>
                        <p className="text-xs mt-1 text-slate-400">{activeTab === "image" ? "JPG, PNG" : "MP4, MOV"}</p>
                    </div>
                )}

                <button
                    onClick={handleSubmit}
                    disabled={isVerifying || (activeTab === "text" ? !textInput : !file)}
                    className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
                >
                    {isVerifying ? (
                        <>
                            <Loader2 className="animate-spin" size={20} /> جاري التحليل الذكي...
                        </>
                    ) : (
                        "تحقق الآن"
                    )}
                </button>
            </div>
        </div>
    );
}
