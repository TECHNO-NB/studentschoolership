"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import poster from "@/../public/poster.jpeg"; // Ensure this matches your file name

import {
  Calendar,
  Globe,
  GraduationCap,
  Phone,
  Languages
} from "lucide-react";
import { useRouter } from "next/navigation";

// --- Translation Data ---
const content = {
  en: {
    badge: "Nationwide Scholarship Exam 2026",
    title: "All Province Level \nScholarship Exam - 2026",
    subtitle: "National Level Scholarship Exam for \nGrade 5 Students",
    info: {
      date: "Exam Date: 25 January 2026",
      location: "Applicable in all provinces of Nepal",
      support: "Scholarship and Continuing Education Support"
    },
    buttons: {
      register: "Register Now",
      learn: "Learn More"
    },
    details: {
      title: "Exam Information",
      organizer: { title: "Organizer", text: "Guru Parashuram Peetham Trust Nepal (NGO)" },
      support: { title: "Supporting Org", text: "World Hindu Vision" },
      objective: { title: "Objective", text: "Building Capable Citizens through Education" }
    },
    cta: {
      title: "Take the First Step Towards a Bright Future",
      button: "Apply Now"
    },
    footer: "© 2026 Guru Parashuram Peetham Trust Nepal"
  },
  np: {
    badge: "राष्ट्रव्यापी छात्रवृत्ति परीक्षा २०२६",
    title: "सबै प्रदेशस्तरीय \nछात्रवृत्ति परीक्षा – २०२६",
    subtitle: "कक्षा ५ का विद्यार्थीहरूको लागि \nराष्ट्रिय स्तरको छात्रवृत्ति परीक्षा",
    info: {
      date: "परीक्षा मिति: २५ जनवरी २०२६",
      location: "नेपालका सबै प्रदेशहरूमा लागू",
      support: "छात्रवृत्ति तथा निरन्तर शिक्षा सहयोग"
    },
    buttons: {
      register: "अहिले दर्ता गर्नुहोस्",
      learn: "थप जान्नुहोस्"
    },
    details: {
      title: "परीक्षा सम्बन्धी जानकारी",
      organizer: { title: "आयोजक संस्था", text: "गुरु परशुराम पीठम् ट्रस्ट नेपाल (NGO)" },
      support: { title: "सहयोगी संस्था", text: "वर्ल्ड हिन्दु भिजन" },
      objective: { title: "उद्देश्य", text: "शिक्षामार्फत सक्षम नागरिक निर्माण" }
    },
    cta: {
      title: "उज्जवल भविष्यतर्फ पहिलो कदम चाल्नुहोस्",
      button: "आवेदन दिनुहोस्"
    },
    footer: "© २०२६ गुरु परशुराम पीठम् ट्रस्ट नेपाल"
  }
};

export default function Page() {
  const router = useRouter();
  
  // State for Language Toggle (Default: Nepali 'np')
  const [lang, setLang] = useState<"en" | "np">("np");
  const t = content[lang];

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "np" : "en"));
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-900 via-blue-800 to-blue-950 text-white relative">
      
      {/* --- LANGUAGE SWITCH BUTTON (Top Right) --- */}
      <div className="absolute top-4 right-4 z-50">
        <Button 
          onClick={toggleLanguage} 
          variant="outline" 
          size="sm"
          className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-blue-900 transition-all gap-2"
        >
          <Languages className="w-4 h-4" />
          {lang === "en" ? "नेपाली" : "English"}
        </Button>
      </div>

      {/* HERO */}
      <section className="container mx-auto px-4 py-12 pt-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* TEXT */}
          <div>
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
              {t.badge}
            </Badge>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 whitespace-pre-line">
              {t.title}
            </h1>

            <p className="text-lg text-blue-100 mb-6 whitespace-pre-line">
              {t.subtitle}
            </p>

            <div className="space-y-3 mb-6">
              <InfoRow
                icon={<Calendar />}
                text={t.info.date}
              />
              <InfoRow
                icon={<Globe />}
                text={t.info.location}
              />
              <InfoRow
                icon={<GraduationCap />}
                text={t.info.support}
              />
            </div>

            <div className="flex gap-4">
              <Button onClick={() => router.push("/register")} size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
                {t.buttons.register}
              </Button>
              <Button onClick={() => router.push("/info")} size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-black">
                {t.buttons.learn}
              </Button>
            </div>
          </div>

          {/* POSTER */}
          <div className="relative">
            <Card className="overflow-hidden bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-0 flex justify-center">
                <Image
                  src={poster}
                  alt="Scholarship Poster"
                  priority
                  className="
                    w-auto
                    max-h-105
                    md:max-h-130
                    object-contain
                  "
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="bg-white text-black py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            {t.details.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <DetailCard
              title={t.details.organizer.title}
              text={t.details.organizer.text}
            />
            <DetailCard
              title={t.details.support.title}
              text={t.details.support.text}
            />
            <DetailCard
              title={t.details.objective.title}
              text={t.details.objective.text}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-linear-to-r from-yellow-400 to-orange-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t.cta.title}
          </h3>

          <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
            <p className="flex items-center gap-2 font-medium">
              <Globe className="w-5 h-5" />
              www.gpptnepal.org
            </p>
            <p className="flex items-center gap-2 font-medium">
              <Phone className="w-5 h-5" />
              18105000380 {lang === 'np' ? "(टोल फ्री)" : "(Toll Free)"}
            </p>
          </div>

          <Button onClick={() => router.push("/register")} size="lg" className="mt-6 bg-black text-white hover:bg-gray-800">
            {t.cta.button}
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-blue-200">
        {t.footer}
      </footer>
    </main>
  );
}

/* ---------------- Components ---------------- */

function InfoRow({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-yellow-500 text-black p-2 rounded-md shrink-0">
        {icon}
      </div>
      <span className="font-medium">{text}</span>
    </div>
  );
}

function DetailCard({ title, text }: { title: string; text: string }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 text-center">
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        <p className="text-gray-600">{text}</p>
      </CardContent>
    </Card>
  );
}