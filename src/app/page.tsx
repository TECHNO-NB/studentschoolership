"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import poster from "@/../public/poster.jpeg"

import {
  Calendar,
  Globe,
  GraduationCap,
  Phone,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router=useRouter();
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
      {/* HERO */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* TEXT */}
          <div>
            <Badge className="mb-4 bg-yellow-500 text-black">
              Nationwide Scholarship Exam 2026
            </Badge>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              सबै प्रदेशस्तरीय <br />
              छात्रवृत्ति परीक्षा – २०२६
            </h1>

            <p className="text-lg text-blue-100 mb-6">
              कक्षा ५ का विद्यार्थीहरूको लागि  
              राष्ट्रिय स्तरको छात्रवृत्ति परीक्षा
            </p>

            <div className="space-y-3 mb-6">
              <InfoRow
                icon={<Calendar />}
                text="परीक्षा मिति: २५ जनवरी २०२६"
              />
              <InfoRow
                icon={<Globe />}
                text="नेपालका सबै प्रदेशहरूमा लागू"
              />
              <InfoRow
                icon={<GraduationCap />}
                text="छात्रवृत्ति तथा निरन्तर शिक्षा सहयोग"
              />
            </div>

            <div className="flex gap-4">
              <Button onClick={()=> router.push("/register")} size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
                Register Now
              </Button>
              <Button onClick={()=> router.push("/info")} size="lg" variant="outline" className="border-white text-black">
                Learn More
              </Button>
            </div>
          </div>

          {/* POSTER */}
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
            परीक्षा सम्बन्धी जानकारी
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <DetailCard
              title="आयोजक संस्था"
              text="गुरु परशुराम पीठम् ट्रस्ट नेपाल (NGO)"
            />
            <DetailCard
              title="सहयोगी संस्था"
              text="वर्ल्ड हिन्दु भिजन"
            />
            <DetailCard
              title="उद्देश्य"
              text="शिक्षामार्फत सक्षम नागरिक निर्माण"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-linear-to-r from-yellow-400 to-orange-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            उज्जवल भविष्यतर्फ पहिलो कदम चाल्नुहोस्
          </h3>

          <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
            <p className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              www.gpptnepal.org
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              18105000380 (Toll Free)
            </p>
          </div>

          <Button onClick={()=> router.push("/register")}  size="lg" className="mt-6 bg-black text-white hover:bg-gray-800">
            Apply Now
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-blue-200">
        © 2026 Guru Parashuram Peetham Trust Nepal
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
      <div className="bg-yellow-500 text-black p-2 rounded-md">
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );
}

function DetailCard({ title, text }: { title: string; text: string }) {
  return (
    <Card>
      <CardContent className="p-6 text-center">
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        <p className="text-gray-600">{text}</p>
      </CardContent>
    </Card>
  );
}
