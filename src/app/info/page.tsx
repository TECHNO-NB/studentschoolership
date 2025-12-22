"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Lang = "en" | "np";

export default function ScholarshipInfoPage() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-md">
          <CardHeader className="flex flex-row justify-between items-start gap-4">
            <CardTitle className="text-xl md:text-2xl font-bold leading-tight">
              {lang === "en"
                ? "INFORMATION ABOUT THE SCHOLARSHIP EXAM (Grade 5 – 2026)"
                : "छात्रवृत्ति परीक्षाको जानकारी (कक्षा ५ – २०२६)"}
            </CardTitle>

            <Button
              variant="outline"
              onClick={() => setLang(lang === "en" ? "np" : "en")}
            >
              {lang === "en" ? "नेपाली" : "English"}
            </Button>
          </CardHeader>

          <CardContent className="space-y-6 text-sm md:text-base">
            {/* 1. Exam Name */}
            <Section
              title={lang === "en" ? "1. Exam Name" : "१. परीक्षा नाम"}
            >
              {lang === "en"
                ? "All Province Wise Scholarship Examination – 2026"
                : "सबै प्रदेशस्तरीय छात्रवृत्ति परीक्षा – २०२६"}
            </Section>

            {/* 2. Purpose */}
            <Section
              title={
                lang === "en"
                  ? "2. Purpose of the Exam"
                  : "२. परीक्षाको उद्देश्य"
              }
            >
              {lang === "en" ? (
                <>
                  <p>
                    The scholarship examination is conducted to identify
                    talented and deserving Grade 5 students across Nepal and
                    provide them with financial and educational support.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Encourage quality education</li>
                    <li>Support economically weaker students</li>
                    <li>Promote equal educational opportunities nationwide</li>
                  </ul>
                </>
              ) : (
                <>
                  <p>
                    नेपालभरिका कक्षा ५ का प्रतिभाशाली तथा योग्य विद्यार्थीहरू
                    पहिचान गरी उनीहरूलाई आर्थिक तथा शैक्षिक सहयोग प्रदान गर्न
                    यो परीक्षा सञ्चालन गरिन्छ।
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>गुणस्तरीय शिक्षालाई प्रोत्साहन</li>
                    <li>आर्थिक रूपमा कमजोर विद्यार्थीलाई सहयोग</li>
                    <li>समान शैक्षिक अवसरको प्रवर्द्धन</li>
                  </ul>
                </>
              )}
            </Section>

            {/* 3. Eligibility */}
            <Section
              title={
                lang === "en"
                  ? "3. Eligibility Criteria"
                  : "३. योग्यता मापदण्ड"
              }
            >
              <ul className="list-disc pl-5 space-y-1">
                {lang === "en" ? (
                  <>
                    <li>Student must be studying in Grade 5</li>
                    <li>Student must be a citizen/resident of Nepal</li>
                    <li>Students from all provinces and districts are eligible</li>
                    <li>Both merit-based and need-based students can apply</li>
                  </>
                ) : (
                  <>
                    <li>विद्यार्थी हाल कक्षा ५ मा अध्ययनरत हुनुपर्छ</li>
                    <li>नेपाली नागरिक वा नेपालमा बसोबास गर्ने हुनुपर्छ</li>
                    <li>सबै प्रदेश र जिल्लाका विद्यार्थी योग्य छन्</li>
                    <li>
                      योग्यता तथा आवश्यकता आधारित विद्यार्थीले आवेदन दिन सक्छन्
                    </li>
                  </>
                )}
              </ul>
            </Section>

            {/* 4. Exam Date */}
            <Section
              title={
                lang === "en" ? "4. Exam Date" : "४. परीक्षा मिति"
              }
            >
              📅 {lang === "en" ? "25 January 2026 (Sunday)" : "२५ जनवरी २०२६ (आइतबार)"}
            </Section>

            {/* 5. Exam Level */}
            <Section
              title={
                lang === "en"
                  ? "5. Exam Level & Coverage"
                  : "५. परीक्षा स्तर तथा क्षेत्र"
              }
            >
              <ul className="list-disc pl-5 space-y-1">
                {lang === "en" ? (
                  <>
                    <li>Nationwide examination</li>
                    <li>Conducted in all provinces of Nepal</li>
                    <li>Exam centers will be informed after registration</li>
                  </>
                ) : (
                  <>
                    <li>राष्ट्रिय स्तरको परीक्षा</li>
                    <li>नेपालका सबै प्रदेशमा सञ्चालन</li>
                    <li>परीक्षा केन्द्र दर्तापछि जानकारी गराइनेछ</li>
                  </>
                )}
              </ul>
            </Section>

            {/* 6. Exam Pattern */}
            <Section
              title={
                lang === "en"
                  ? "6. Exam Pattern"
                  : "६. परीक्षा ढाँचा"
              }
            >
              <ul className="list-disc pl-5 space-y-1">
                {lang === "en" ? (
                  <>
                    <li>Objective type (MCQ)</li>
                    <li>Based on Grade 5 curriculum</li>
                    <li>Subjects: English, Mathematics, Science, GK / Mental Ability</li>
                  </>
                ) : (
                  <>
                    <li>वस्तुगत (बहुविकल्पीय प्रश्न)</li>
                    <li>कक्षा ५ को पाठ्यक्रममा आधारित</li>
                    <li>
                      विषयहरू: अंग्रेजी, गणित, विज्ञान, सामान्य ज्ञान / मानसिक क्षमता
                    </li>
                  </>
                )}
              </ul>
            </Section>

            {/* 7. Benefits */}
            <Section
              title={
                lang === "en"
                  ? "7. Scholarship Benefits"
                  : "७. छात्रवृत्ति लाभ"
              }
            >
              <ul className="list-disc pl-5 space-y-1">
                {lang === "en" ? (
                  <>
                    <li>Educational scholarships</li>
                    <li>School fee support</li>
                    <li>Study materials</li>
                    <li>Other child education assistance</li>
                  </>
                ) : (
                  <>
                    <li>शैक्षिक छात्रवृत्ति</li>
                    <li>विद्यालय शुल्क सहयोग</li>
                    <li>अध्ययन सामग्री</li>
                    <li>अन्य शैक्षिक सहायता</li>
                  </>
                )}
              </ul>
            </Section>

            {/* 8–11 */}
            <Section title={lang === "en" ? "8–11. Authority & Contact" : "८–११. संस्था तथा सम्पर्क"}>
              <p className="font-medium">
                {lang === "en"
                  ? "Organized by: Guru Parasurama Peedam Trust Nepal (NGO)"
                  : "आयोजक: गुरु परशुराम पीठम ट्रस्ट नेपाल (NGO)"}
              </p>
              <p className="font-medium">
                {lang === "en"
                  ? "Powered by: World Hindu Vision"
                  : "सहयोगी: वर्ल्ड हिन्दु भिजन"}
              </p>

              <Separator className="my-3" />

              <p>🌐 Website: www.gpptnepal.org</p>
              <p>☎️ Toll Free / WhatsApp: 18105000380</p>
            </Section>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <h2 className="font-semibold text-base md:text-lg">{title}</h2>
      <div className="bg-gray-50 border rounded-md p-4 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
