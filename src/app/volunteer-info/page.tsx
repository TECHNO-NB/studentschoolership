"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Lang = "en" | "np";

export default function VolunteerInfoPage() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-md">
          <CardHeader className="flex flex-row justify-between items-start gap-4">
            <CardTitle className="text-xl md:text-2xl font-bold leading-tight">
              {lang === "en"
                ? "INFORMATION ABOUT VOLUNTEER PROGRAM (2025-26)"
                : "स्वयंसेवक कार्यक्रमको जानकारी (२०२५-२६)"}
            </CardTitle>

            <Button
              variant="outline"
              onClick={() => setLang(lang === "en" ? "np" : "en")}
            >
              {lang === "en" ? "नेपाली" : "English"}
            </Button>
          </CardHeader>

          <CardContent className="space-y-6 text-sm md:text-base">
            {/* 1. Program Name */}
            <Section
              title={lang === "en" ? "1. Program Name" : "१. कार्यक्रमको नाम"}
            >
              {lang === "en"
                ? "National Volunteer Mobilization Program – Guru Parasurama Peedam"
                : "राष्ट्रिय स्वयंसेवक परिचालन कार्यक्रम – गुरु परशुराम पीठम्"}
            </Section>

            {/* 2. Purpose */}
            <Section
              title={
                lang === "en"
                  ? "2. Objective of the Program"
                  : "२. कार्यक्रमको उद्देश्य"
              }
            >
              {lang === "en" ? (
                <>
                  <p>
                    This program aims to mobilize dedicated individuals across Nepal 
                    to support child education, cultural preservation, and social welfare.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Support the Child Educational Program</li>
                    <li>Community service and social welfare</li>
                    <li>Preservation of culture and heritage</li>
                    <li>Disaster relief and humanitarian aid</li>
                  </ul>
                </>
              ) : (
                <>
                  <p>
                    यो कार्यक्रमको उद्देश्य नेपालभरका समर्पित व्यक्तिहरूलाई बाल शिक्षा, 
                    संस्कृति संरक्षण र समाज सेवामा परिचालन गर्नु हो।
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>बाल शिक्षा कार्यक्रममा सहयोग</li>
                    <li>समाज सेवा र लोक कल्याण</li>
                    <li>संस्कृति र सम्पदाको संरक्षण</li>
                    <li>दैवी प्रकोप तथा मानवीय सहायता</li>
                  </ul>
                </>
              )}
            </Section>

            {/* 3. Roles */}
            <Section
              title={
                lang === "en"
                  ? "3. Available Roles"
                  : "३. उपलब्ध भूमिकाहरू"
              }
            >
              <ul className="list-disc pl-5 space-y-1">
                {lang === "en" ? (
                  <>
                    <li><strong>Coordination Officers:</strong> Required in all 7 Provinces & Districts.</li>
                    <li><strong>Educational Volunteers:</strong> To teach or mentor Grade 5 students.</li>
                    <li><strong>IT & Media Support:</strong> For digital promotions and data management.</li>
                    <li><strong>General Volunteers:</strong> For event management and fieldwork.</li>
                  </>
                ) : (
                  <>
                    <li><strong>समन्वय अधिकृत (Coordination Officers):</strong> सबै ७ प्रदेश र जिल्लाहरूमा आवश्यक।</li>
                    <li><strong>शैक्षिक स्वयंसेवक:</strong> कक्षा ५ का विद्यार्थीहरूलाई पढाउन वा मार्गदर्शन गर्न।</li>
                    <li><strong>IT र मिडिया सहयोग:</strong> डिजिटल प्रचार र डाटा व्यवस्थापनका लागि।</li>
                    <li><strong>साधारण स्वयंसेवक:</strong> कार्यक्रम व्यवस्थापन र क्षेत्रगत कार्यका लागि।</li>
                  </>
                )}
              </ul>
            </Section>

            {/* 4. Eligibility */}
            <Section
              title={
                lang === "en" ? "4. Eligibility Criteria" : "४. योग्यता मापदण्ड"
              }
            >
              <ul className="list-disc pl-5 space-y-1">
                {lang === "en" ? (
                  <>
                    <li>Must be a Nepali Citizen</li>
                    <li>Minimum Age: 18 Years</li>
                    <li>Students, Professionals, and Retired individuals can apply</li>
                    <li>Must have a passion for social service</li>
                  </>
                ) : (
                  <>
                    <li>नेपाली नागरिक हुनुपर्छ</li>
                    <li>न्यूनतम उमेर: १८ वर्ष</li>
                    <li>विद्यार्थी, पेशाकर्मी तथा सेवानिवृत्त व्यक्तिहरूले आवेदन दिन सक्नेछन्</li>
                    <li>समाज सेवामा रुचि र उत्साह हुनुपर्छ</li>
                  </>
                )}
              </ul>
            </Section>

            {/* 5. Benefits */}
            <Section
              title={
                lang === "en"
                  ? "5. Benefits for Volunteers"
                  : "५. स्वयंसेवकका फाइदाहरू"
              }
            >
              <ul className="list-disc pl-5 space-y-1">
                {lang === "en" ? (
                  <>
                    <li>Official Volunteer ID Card</li>
                    <li>Certificate of Appreciation upon completion</li>
                    <li>Networking opportunities with national leaders</li>
                    <li>Personal and professional skill development</li>
                  </>
                ) : (
                  <>
                    <li>आधिकारिक स्वयंसेवक परिचय पत्र (ID Card)</li>
                    <li>कार्य सम्पन्न भएपछि प्रशंसा पत्र (Certificate)</li>
                    <li>राष्ट्रिय व्यक्तित्वहरूसँग सञ्जाल विस्तारको अवसर</li>
                    <li>व्यक्तिगत तथा व्यावसायिक सीप विकास</li>
                  </>
                )}
              </ul>
            </Section>

            {/* 6. Commitment */}
            <Section
              title={
                lang === "en"
                  ? "6. Time Commitment"
                  : "६. समय प्रतिबद्धता"
              }
            >
               {lang === "en" ? (
                  <p>
                    Flexible timing. Volunteers can choose to contribute on a 
                    <strong> Part-time</strong>, <strong>Full-time</strong>, or 
                    <strong> Weekend-only</strong> basis depending on their availability.
                  </p>
                ) : (
                  <p>
                    लचिलो समय। स्वयंसेवकहरूले आफ्नो अनुकूलता अनुसार 
                    <strong> आंशिक (Part-time)</strong>, <strong> पूरा समय (Full-time)</strong>, 
                    वा <strong> बिदाको दिन (Weekend)</strong> मात्र पनि योगदान गर्न सक्नेछन्।
                  </p>
                )}
            </Section>

            {/* 7. Authority */}
            <Section title={lang === "en" ? "7. Authority & Contact" : "७. संस्था तथा सम्पर्क"}>
              <p className="font-medium">
                {lang === "en"
                  ? "Organized by: Guru Parasurama Peedam Trust Nepal (INGO)"
                  : "आयोजक: गुरु परशुराम पीठम ट्रस्ट नेपाल (INGO)"}
              </p>
              <p className="font-medium">
                {lang === "en"
                  ? "Powered by: World Hindu Vision"
                  : "सहयोगी: वर्ल्ड हिन्दु भिजन"}
              </p>

              <Separator className="my-3" />

              <p>🌐 Website: www.gpptnepal.org</p>
              <p>☎️ Toll Free / WhatsApp: 18105000380</p>
              <p>📍 {lang === "en" ? "Head Office: Kathmandu, Nepal" : "मुख्य कार्यालय: काठमाडौँ, नेपाल"}</p>
            </Section>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

// Reusable Section Component (Same as Scholarship Page)
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