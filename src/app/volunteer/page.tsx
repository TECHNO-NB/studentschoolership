"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import poster from "@/../public/poster2.jpeg"; // Ensure this matches your file name

import {
  Users,
  Globe,
  BookOpen,
  Phone,
  HandHeart,
  Megaphone,
  Languages
} from "lucide-react";
import { useRouter } from "next/navigation";

// --- 1. Translation Data (Dictionary) ---
const content = {
  en: {
    badge: "Volunteers Needed in Nepal!",
    title: "GURU PARASURAMA PEEDAM",
    subtitle: "Join us in making a difference!",
    sponsor: "Sponsored by World Hindu Vision",
    points: {
      p1: "Coordination Officers wanted in all provinces",
      p2: "Child Educational Program",
      p3: "Volunteering Opportunities Nationwide"
    },
    buttons: {
      apply: "Apply Now",
      learn: "Learn More"
    },
    details: {
      title: "Program Details",
      organizer: {
        title: "Organizer",
        text: "Guru Parasurama Peedam (Sponsored by World Hindu Vision)"
      },
      roles: {
        title: "Roles Available",
        text: "Coordination Officers in All Provinces"
      },
      mission: {
        title: "Our Mission",
        text: "Child Educational Program & Community Service"
      }
    },
    cta: {
      title: "Ready to make an impact?",
      apply: "Apply Now"
    },
    footer: "© 2025 Guru Parasurama Peedam. All rights reserved."
  },
  np: {
    badge: "नेपालमा स्वयंसेवकहरू आवश्यक !",
    title: "गुरु परशुराम पीठम्",
    subtitle: "परिवर्तनको लागि हामीसँग जोडिनुहोस्!",
    sponsor: "प्रायोजक: वर्ल्ड हिन्दु भिजन",
    points: {
      p1: "सबै प्रदेशहरूमा समन्वय अधिकृतहरू आवश्यक",
      p2: "बाल शिक्षा कार्यक्रम",
      p3: "राष्ट्रव्यापी स्वयंसेवाका अवसरहरू"
    },
    buttons: {
      apply: "अहिले आवेदन दिनुहोस्",
      learn: "थप जान्नुहोस्"
    },
    details: {
      title: "कार्यक्रमको विवरण",
      organizer: {
        title: "आयोजक संस्था",
        text: "गुरु परशुराम पीठम् (प्रायोजक: वर्ल्ड हिन्दु भिजन)"
      },
      roles: {
        title: "आवश्यक भूमिकाहरू",
        text: "सबै प्रदेशमा समन्वय अधिकृतहरू"
      },
      mission: {
        title: "हाम्रो उद्देश्य",
        text: "बाल शिक्षा कार्यक्रम र समाज सेवा"
      }
    },
    cta: {
      title: "के तपाईं समाज सेवामा योगदान गर्न तयार हुनुहुन्छ?",
      apply: "आवेदन दिनुहोस्"
    },
    footer: "© २०२५ गुरु परशुराम पीठम्। सर्वाधिकार सुरक्षित।"
  }
};

export default function Page() {
  const router = useRouter();
  
  // --- 2. State for Language Toggle ---
  // Default is 'np' (Nepali). Change to 'en' if you want English default.
  const [lang, setLang] = useState<"en" | "np">("np");

  const t = content[lang]; // helper to get current language strings

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
          {/* Show the name of the language you will switch TO */}
          {lang === "en" ? "नेपाली" : "English"}
        </Button>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="container mx-auto px-4 py-12 pt-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Side: Text */}
          <div>
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400 text-base">
              {t.badge}
            </Badge>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 uppercase">
              {/* Conditional rendering for better line breaks in Nepali vs English */}
              {lang === "np" ? (
                <>
                  गुरु परशुराम <br /> पीठम्
                </>
              ) : (
                "GURU PARASURAMA PEEDAM"
              )}
            </h1>

            <p className="text-lg text-blue-100 mb-6">
              {t.subtitle} <br/>
              <span className="opacity-80">{t.sponsor}</span>
            </p>

            <div className="space-y-4 mb-8">
              <InfoRow
                icon={<Globe />}
                text={t.points.p1}
              />
              <InfoRow
                icon={<BookOpen />}
                text={t.points.p2}
              />
              <InfoRow
                icon={<HandHeart />}
                text={t.points.p3}
              />
            </div>

            <div className="flex gap-4">
              <Button onClick={() => router.push("/volunteer-register")} size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold">
                {t.buttons.apply}
              </Button>
              <Button onClick={() => router.push("/volunteer-info")} size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-black">
                {t.buttons.learn}
              </Button>
            </div>
          </div>

          {/* Right Side: Poster Image */}
          <div className="relative">
            <Card className="overflow-hidden bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-0 flex justify-center">
                <Image
                  src={poster}
                  alt="Volunteer Recruitment Poster"
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

      {/* --- DETAILS SECTION --- */}
      <section className="bg-white text-black py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            {t.details.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <DetailCard
              title={t.details.organizer.title}
              text={t.details.organizer.text}
              icon={<Users className="w-8 h-8 text-blue-900 mb-2 mx-auto" />}
            />
            <DetailCard
              title={t.details.roles.title}
              text={t.details.roles.text}
              icon={<Megaphone className="w-8 h-8 text-blue-900 mb-2 mx-auto" />}
            />
            <DetailCard
              title={t.details.mission.title}
              text={t.details.mission.text}
              icon={<BookOpen className="w-8 h-8 text-blue-900 mb-2 mx-auto" />}
            />
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-12 bg-linear-to-r from-yellow-400 to-orange-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t.cta.title}
          </h3>

          <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
            <p className="flex items-center gap-2 font-medium text-lg">
              <Globe className="w-5 h-5" />
              www.gpptnepal.org
            </p>
            <p className="flex items-center gap-2 font-medium text-lg">
              <Phone className="w-5 h-5" />
              18105000380 {lang === 'np' ? "(टोल फ्री)" : "(Toll Free)"}
            </p>
          </div>

          <Button onClick={() => router.push("/volunteer-register")} size="lg" className="mt-8 bg-black text-white hover:bg-gray-800 px-8 text-lg">
            {t.cta.apply}
          </Button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-6 text-center text-sm text-blue-200">
        {t.footer}
      </footer>
    </main>
  );
}

/* ---------------- Helper Components ---------------- */

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
      <span className="font-medium text-lg">{text}</span>
    </div>
  );
}

function DetailCard({ title, text, icon }: { title: string; text: string; icon?: React.ReactNode }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6 text-center flex flex-col items-center h-full">
        {icon}
        <h4 className="font-bold text-xl mb-2">{title}</h4>
        <p className="text-gray-700 text-lg">{text}</p>
      </CardContent>
    </Card>
  );
}