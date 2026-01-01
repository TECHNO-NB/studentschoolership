"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Languages } from "lucide-react";

type Lang = "en" | "np";

const TEXT = {
  en: {
    title: "🤝 Volunteer Application Form",
    subtitle: "Join the mission of Guru Parasurama Peedam",

    personalInfo: "1. Personal Information",
    name: "Full Name",
    gender: "Gender",
    male: "Male",
    female: "Female",
    other: "Other",
    dob: "Date of Birth",
    age: "Age",
    email: "Email Address",
    contact: "Mobile Number (WhatsApp)",
    whatsapp: "WhatsApp Number",

    address: "2. Address Details",
    province: "Province",
    district: "District",
    municipality: "Municipality / Rural Municipality",
    ward: "Ward No.",
    fullAddress: "Tole / Street Name",

    education: "3. Education & Profession",
    qualification: "Highest Educational Qualification",
    slc: "SEE / SLC",
    plus2: "+2 / Intermediate",
    bachelor: "Bachelor's",
    master: "Master's & Above",
    profession: "Current Profession / Occupation",
    student: "Student",
    employed: "Employed",
    business: "Business",
    otherProf: "Other",

    interest: "4. Volunteering Preferences",
    role: "Preferred Role",
    coord: "Coordination Officer",
    edu: "Child Education Program",
    social: "Social Service / General",
    media: "IT & Media Support",
    availability: "Availability",
    weekends: "Weekends Only",
    partTime: "Part Time",
    fullTime: "Full Time",
    experience: "Do you have previous volunteering experience?",

    declaration: "5. Declaration",
    declarationText:
      "I hereby declare that the information provided is true. I am voluntarily joining Guru Parasurama Peedam Trust Nepal to serve the community and agree to abide by the organization's code of conduct.",
    agree: "I agree to the above declaration",

    signatures: "Signature",
    applicantSign: "Applicant’s Signature",
    date: "Date",

    submit: "Submit Application",

    contactTitle: "Official Contact & Support",
    organized: "Organized by",
    powered: "Powered by",
    toggle: "नेपाली",
  },

  np: {
    title: "🤝 स्वयंसेवक आवेदन फारम",
    subtitle: "गुरु परशुराम पीठम् को अभियानमा जोडिनुहोस्",

    personalInfo: "१. व्यक्तिगत विवरण",
    name: "पूरा नाम",
    gender: "लिङ्ग",
    male: "पुरुष",
    female: "महिला",
    other: "अन्य",
    dob: "जन्म मिति",
    age: "उमेर",
    email: "ईमेल ठेगाना",
    contact: "मोबाइल नम्बर (व्हाट्सएप)",
    whatsapp: "व्हाट्सएप नम्बर",

    address: "२. ठेगाना विवरण",
    province: "प्रदेश",
    district: "जिल्ला",
    municipality: "नगरपालिका / गाउँपालिका",
    ward: "वडा नं.",
    fullAddress: "टोल / मार्ग",

    education: "३. शिक्षा र पेशा",
    qualification: "शैक्षिक योग्यता",
    slc: "SEE / SLC",
    plus2: "+2 / प्रमाणपत्र तह",
    bachelor: "स्नातक (Bachelor's)",
    master: "स्नातकोत्तर (Master's) र माथि",
    profession: "हालको पेशा",
    student: "विद्यार्थी",
    employed: "जागिर",
    business: "व्यापार / व्यवसाय",
    otherProf: "अन्य",

    interest: "४. स्वयंसेवा प्राथमिकता",
    role: "रोजेको भूमिका",
    coord: "समन्वय अधिकृत",
    edu: "बाल शिक्षा कार्यक्रम",
    social: "समाज सेवा / साधारण",
    media: "IT र मिडिया सहयोग",
    availability: "समय उपलब्धता",
    weekends: "बिदाको दिन मात्र",
    partTime: "आंशिक समय (Part Time)",
    fullTime: "पूरा समय (Full Time)",
    experience: "के तपाईंसँग पहिले स्वयंसेवा गरेको अनुभव छ?",

    declaration: "५. घोषणा",
    declarationText:
      "म घोषणा गर्दछु कि माथि उल्लेखित विवरण सत्य छन्। म स्वेच्छाले समाज सेवा गर्न गुरु परशुराम पीठम् ट्रस्ट नेपालमा आबद्ध हुँदैछु र संस्थाको नियम पालना गर्न सहमत छु।",
    agree: "माथिको घोषणामा सहमत छु",

    signatures: "हस्ताक्षर",
    applicantSign: "निवेदकको हस्ताक्षर",
    date: "मिति",

    submit: "आवेदन पेश गर्नुहोस्",

    contactTitle: "आधिकारिक सम्पर्क",
    organized: "आयोजक",
    powered: "प्रवर्द्धक",
    toggle: "English",
  },
};

export default function VolunteerRegisterPage() {
  const [lang, setLang] = useState<Lang>("np"); // Default to Nepali
  const t = TEXT[lang];

  const [form, setForm] = useState<any>({
    name: "",
    gender: "",
    dob: "",
    age: "",
    email: "",
    contact: "",
    whatsapp: "",
    province: "",
    district: "",
    municipality: "",
    ward: "",
    fullAddress: "",
    qualification: "",
    profession: "",
    role: "",
    availability: "",
    experience: "",
    agree: false,
    applicantSign: "", // base64 string
    date: "",
  });

  const handleChange = (key: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [key]: value }));
  };

  /* ---------- Image Upload Handler ---------- */
  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      handleChange(key, reader.result); // Base64 string
    };
    reader.readAsDataURL(file);
  };

  /* ---------- Submit Form ---------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.agree) {
      toast.error(lang === 'en' ? "Please agree to the declaration!" : "कृपया घोषणामा सहमति जनाउनुहोस्!");
      return;
    }

    try {
      // Replace with your actual Volunteer API endpoint
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/volunteer-register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(lang === 'en' ? "Application submitted successfully!" : "आवेदन सफलतापूर्वक पेश गरियो!");
        // Reset form
        setForm({ ...form, name: "", contact: "", applicantSign: "" }); 
      } else {
        toast.error(data.error || "Failed to submit form");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <Toaster position="top-right" />
      <div className="container mx-auto max-w-4xl px-4">
        <Card className="shadow-xl">
          <CardHeader className="flex flex-row justify-between items-start gap-4 border-b pb-6 bg-white rounded-t-xl">
            <div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-blue-900">{t.title}</CardTitle>
              <p className="text-sm md:text-base text-gray-600 mt-2">{t.subtitle}</p>
            </div>
            <Button
              variant="outline"
              onClick={() => setLang(lang === "en" ? "np" : "en")}
              className="flex items-center gap-2 border-blue-200 hover:bg-blue-50 hover:text-blue-900"
            >
              <Languages className="w-4 h-4" />
              {t.toggle}
            </Button>
          </CardHeader>

          <CardContent className="space-y-10 pt-8">
            <form onSubmit={handleSubmit}>
              {/* 1. PERSONAL INFO */}
              <Section title={t.personalInfo}>
                <InputField
                  label={t.name}
                  value={form.name}
                  onChange={(v) => handleChange("name", v)}
                />
                <RadioField
                  label={t.gender}
                  options={[t.male, t.female, t.other]}
                  value={form.gender}
                  onChange={(v) => handleChange("gender", v)}
                />
                <InputField
                  label={t.dob}
                  type="date"
                  value={form.dob}
                  onChange={(v) => handleChange("dob", v)}
                />
                <InputField
                  label={t.age}
                  type="number"
                  value={form.age}
                  onChange={(v) => handleChange("age", v)}
                />
                <InputField
                  label={t.contact}
                  type="tel"
                  value={form.contact}
                  onChange={(v) => handleChange("contact", v)}
                />
                 <InputField
                  label={t.email}
                  type="email"
                  value={form.email}
                  onChange={(v) => handleChange("email", v)}
                />
              </Section>

              {/* 2. ADDRESS */}
              <Section title={t.address}>
                <InputField
                  label={t.province}
                  value={form.province}
                  onChange={(v) => handleChange("province", v)}
                />
                <InputField
                  label={t.district}
                  value={form.district}
                  onChange={(v) => handleChange("district", v)}
                />
                <InputField
                  label={t.municipality}
                  value={form.municipality}
                  onChange={(v) => handleChange("municipality", v)}
                />
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label={t.ward}
                    type="number"
                    value={form.ward}
                    onChange={(v) => handleChange("ward", v)}
                  />
                  <InputField
                    label={t.fullAddress}
                    value={form.fullAddress}
                    onChange={(v) => handleChange("fullAddress", v)}
                  />
                </div>
              </Section>

              {/* 3. EDUCATION & PROFESSION */}
              <Section title={t.education}>
                 <RadioField
                  label={t.qualification}
                  options={[t.slc, t.plus2, t.bachelor, t.master]}
                  value={form.qualification}
                  onChange={(v) => handleChange("qualification", v)}
                />
                <RadioField
                  label={t.profession}
                  options={[t.student, t.employed, t.business, t.otherProf]}
                  value={form.profession}
                  onChange={(v) => handleChange("profession", v)}
                />
              </Section>

              {/* 4. VOLUNTEERING INTEREST */}
              <Section title={t.interest}>
                <RadioField
                  label={t.role}
                  options={[t.coord, t.edu, t.social, t.media]}
                  value={form.role}
                  onChange={(v) => handleChange("role", v)}
                />
                <RadioField
                  label={t.availability}
                  options={[t.weekends, t.partTime, t.fullTime]}
                  value={form.availability}
                  onChange={(v) => handleChange("availability", v)}
                />
                <RadioField
                  label={t.experience}
                  options={[lang === 'en' ? "Yes" : "छ", lang === 'en' ? "No" : "छैन"]}
                  value={form.experience}
                  onChange={(v) => handleChange("experience", v)}
                />
              </Section>

              {/* 5. DECLARATION */}
              <Section title={t.declaration}>
                <div className="md:col-span-2 space-y-4 bg-yellow-50 p-4 rounded-md border border-yellow-200">
                  <p className="text-sm text-gray-800 leading-relaxed italic">
                    {t.declarationText}
                  </p>
                  <label className="flex gap-3 items-center text-sm font-medium cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600"
                      checked={form.agree}
                      onChange={(e) => handleChange("agree", e.target.checked)}
                      required
                    />
                    {t.agree}
                  </label>
                </div>
              </Section>

           

              <Button
                type="submit"
                size="lg"
                className="w-full mt-8 bg-blue-900 text-white hover:bg-blue-800 text-lg py-6"
              >
                {t.submit}
              </Button>
            </form>
            
            {/* FOOTER */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="text-center text-sm text-gray-600 space-y-2">
                <p className="font-bold text-blue-900 uppercase tracking-wide">{t.contactTitle}</p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                  <span className="flex items-center gap-1">🌐 www.gpptnepal.org</span>
                  <span className="flex items-center gap-1">☎️ 18105000380 (Toll Free)</span>
                </div>
                <div className="text-xs text-gray-500 mt-4">
                  <p><strong>{t.organized}:</strong> Guru Parasurama Peedam Trust Nepal (NGO)</p>
                  <p><strong>{t.powered}:</strong> World Hindu Vision</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

/* ------------------ Components ------------------ */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
         <h3 className="font-bold text-lg text-gray-800">{title}</h3>
      </div>
      <Separator className="bg-gray-200" />
      <div className="grid md:grid-cols-2 gap-6 pt-2">{children}</div>
    </div>
  );
}

function InputField({
  label,
  type = "text",
  value,
  onChange,
  disabled = false,
}: {
  label: string;
  type?: string;
  value: any;
  onChange: (val: any) => void;
  disabled?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-gray-700 font-medium">{label}</Label>
      <Input
        type={type}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="focus-visible:ring-blue-500"
      />
    </div>
  );
}

function RadioField({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="space-y-3 md:col-span-2">
      <Label className="text-gray-700 font-medium">{label}</Label>
      <RadioGroup className="flex flex-wrap gap-4 md:gap-6" value={value} onValueChange={onChange}>
        {options.map((opt) => (
          <div key={opt} className="flex items-center gap-2 border rounded-md px-3 py-2 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
            <RadioGroupItem value={opt} id={opt} />
            <Label htmlFor={opt} className="cursor-pointer">{opt}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}