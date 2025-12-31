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

type Lang = "en" | "np";


const TEXT = {
  en: {
    title: "🎓 Scholarship Application Form",
    subtitle: "(Grade 5 – Scholarship Examination 2026)",

    studentInfo: "1. Student Information",
    name: "Student’s Full Name",
    gender: "Gender",
    male: "Male",
    female: "Female",
    other: "Other",
    dob: "Date of Birth",
    age: "Age (Years)",
    school: "Name of School",
    schoolAddress: "School Address",

    address: "2. Address Details",
    province: "Province",
    district: "District",
    municipality: "Municipality / Rural Municipality",
    ward: "Ward No.",
    fullAddress: "Full Address",

    parent: "3. Parent / Guardian Information",
    father: "Father’s / Guardian’s Name",
    mother: "Mother’s Name",
    occupation: "Occupation",
    income: "Annual Family Income",
    income1: "Below NPR 1,00,000",
    income2: "NPR 1,00,000 – 2,00,000",
    income3: "Above NPR 2,00,000",
    contact: "Contact Mobile Number",
    whatsapp: "WhatsApp Number",
    same: "Same as mobile",
    different: "Different",

    scholarship: "4. Scholarship Details",
    scholarshipType: "Type of Scholarship",
    merit: "Merit-based",
    need: "Need-based",
    both: "Both",
    previous: "Have you received any scholarship before?",

    declaration: "5. Declaration",
    declarationText:
      "I hereby declare that the information provided above is true and correct to the best of my knowledge. I agree to follow all rules and regulations of the scholarship examination conducted by Guru Parasurama Peedam Trust Nepal (NGO).",
    agree: "I agree to the above declaration",

    signatures: "Signatures",
    studentSign: "Student’s Signature",
    parentSign: "Parent / Guardian’s Signature",
    date: "Date",

    office: "6. For Office Use Only",
    applicationNo: "Application No.",
    examCenter: "Exam Center",
    verifiedBy: "Verified By",
    stamp: "Signature & Stamp",

    submit: "Submit Application",

    contactTitle: "Official Contact & Support",
    website: "Website",
    toll: "Toll Free",
    whatsappSupport: "WhatsApp Support",
    organized: "Organized by",
    powered: "Powered by",

    toggle: "नेपाली",
  },

  np: {
    title: "🎓 छात्रवृत्ति आवेदन फारम",
    subtitle: "(कक्षा ५ – छात्रवृत्ति परीक्षा २०२६)",

    studentInfo: "१. विद्यार्थी विवरण",
    name: "विद्यार्थीको पूरा नाम",
    gender: "लिङ्ग",
    male: "पुरुष",
    female: "महिला",
    other: "अन्य",
    dob: "जन्म मिति",
    age: "उमेर (वर्ष)",
    school: "विद्यालयको नाम",
    schoolAddress: "विद्यालयको ठेगाना",

    address: "२. ठेगाना विवरण",
    province: "प्रदेश",
    district: "जिल्ला",
    municipality: "नगरपालिका / गाउँपालिका",
    ward: "वडा नं.",
    fullAddress: "पूरा ठेगाना",

    parent: "३. अभिभावक विवरण",
    father: "बुवा / अभिभावकको नाम",
    mother: "आमाको नाम",
    occupation: "पेशा",
    income: "वार्षिक आम्दानी",
    income1: "१,००,००० भन्दा कम",
    income2: "१,००,००० – २,००,०००",
    income3: "२,००,००० भन्दा माथि",
    contact: "सम्पर्क मोबाइल नम्बर",
    whatsapp: "व्हाट्सएप नम्बर",
    same: "मोबाइल नम्बर जस्तै",
    different: "फरक",

    scholarship: "४. छात्रवृत्ति विवरण",
    scholarshipType: "छात्रवृत्तिको प्रकार",
    merit: "योग्यता आधारित",
    need: "आवश्यकता आधारित",
    both: "दुवै",
    previous: "पहिले छात्रवृत्ति पाउनुभएको छ?",

    declaration: "५. घोषणा",
    declarationText:
      "माथि उल्लेखित सम्पूर्ण विवरण सत्य र सही भएको घोषणा गर्दछु। गुरु परशुराम पीठम् ट्रस्ट नेपाल (NGO) द्वारा सञ्चालन गरिने छात्रवृत्ति परीक्षाका सबै नियम तथा सर्तहरू पालना गर्न म सहमत छु।",
    agree: "माथिको घोषणामा सहमत छु",

    signatures: "हस्ताक्षर",
    studentSign: "विद्यार्थीको हस्ताक्षर",
    parentSign: "अभिभावकको हस्ताक्षर",
    date: "मिति",

    office: "६. कार्यालय प्रयोजनको लागि मात्र",
    applicationNo: "आवेदन नम्बर",
    examCenter: "परीक्षा केन्द्र",
    verifiedBy: "प्रमाणित गर्ने",
    stamp: "हस्ताक्षर तथा छाप",

    submit: "आवेदन पेश गर्नुहोस्",

    contactTitle: "आधिकारिक सम्पर्क",
    website: "वेबसाइट",
    toll: "निःशुल्क नम्बर",
    whatsappSupport: "व्हाट्सएप सहयोग",
    organized: "आयोजक",
    powered: "प्रवर्द्धक",

    toggle: "English",
  },
};

export default function RegisterPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = TEXT[lang];

  const [form, setForm] = useState<any>({
    name: "",
    gender: "",
    dob: "",
    age: "",
    school: "",
    schoolAddress: "",
    province: "",
    district: "",
    municipality: "",
    ward: "",
    fullAddress: "",
    father: "",
    mother: "",
    occupation: "",
    income: "",
    contact: "",
    whatsapp: "",
    scholarshipType: "",
    previous: "",
    agree: false,
    studentSign: "", // base64 string
    parentSign: "", // base64 string
    studentDate: "",
    parentDate: "",
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
      toast.error("Please agree to the declaration!");
      return;
    }

    if (!form.studentSign || !form.parentSign) {
      toast.error("Please upload both signatures!");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Form submitted successfully!");
        setForm({ ...form, name: "", gender: "", dob: "", studentSign: "", parentSign: "" }); // reset essential fields
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
        <Card>
          <CardHeader className="flex flex-row justify-between items-start gap-4">
            <div>
              <CardTitle className="text-2xl font-bold">{t.title}</CardTitle>
              <p className="text-sm text-gray-600">{t.subtitle}</p>
            </div>
            <Button
              variant="outline"
              onClick={() => setLang(lang === "en" ? "np" : "en")}
            >
              {t.toggle}
            </Button>
          </CardHeader>

          <CardContent className="space-y-10">
            <form onSubmit={handleSubmit}>
              {/* STUDENT INFO */}
              <Section title={t.studentInfo}>
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
                  label={t.school}
                  value={form.school}
                  onChange={(v) => handleChange("school", v)}
                />
                <InputField
                  label={t.schoolAddress}
                  value={form.schoolAddress}
                  onChange={(v) => handleChange("schoolAddress", v)}
                />
              </Section>

              {/* ADDRESS */}
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
                <InputField
                  label={t.ward}
                  value={form.ward}
                  onChange={(v) => handleChange("ward", v)}
                />
                <InputField
                  label={t.fullAddress}
                  value={form.fullAddress}
                  onChange={(v) => handleChange("fullAddress", v)}
                />
              </Section>

              {/* PARENT */}
              <Section title={t.parent}>
                <InputField
                  label={t.father}
                  value={form.father}
                  onChange={(v) => handleChange("father", v)}
                />
                <InputField
                  label={t.mother}
                  value={form.mother}
                  onChange={(v) => handleChange("mother", v)}
                />
                <InputField
                  label={t.occupation}
                  value={form.occupation}
                  onChange={(v) => handleChange("occupation", v)}
                />
                <RadioField
                  label={t.income}
                  options={[t.income1, t.income2, t.income3]}
                  value={form.income}
                  onChange={(v) => handleChange("income", v)}
                />
                <InputField
                  label={t.contact}
                  value={form.contact}
                  onChange={(v) => handleChange("contact", v)}
                />
                <InputField
                  label={t.whatsapp}
                  value={form.whatsapp}
                  onChange={(v) => handleChange("whatsapp", v)}
                />
              </Section>

              {/* SCHOLARSHIP */}
              <Section title={t.scholarship}>
                <RadioField
                  label={t.scholarshipType}
                  options={[t.merit, t.need, t.both]}
                  value={form.scholarshipType}
                  onChange={(v) => handleChange("scholarshipType", v)}
                />
                <RadioField
                  label={t.previous}
                  options={["Yes", "No"]}
                  value={form.previous}
                  onChange={(v) => handleChange("previous", v)}
                />
              </Section>

              {/* DECLARATION */}
              <Section title={t.declaration}>
                <div className="md:col-span-2 space-y-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {t.declarationText}
                  </p>
                  <label className="flex gap-2 text-sm">
                    <input
                      type="checkbox"
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
                className="w-full mt-6 bg-yellow-500 text-black hover:bg-yellow-400"
              >
                {t.submit}
              </Button>
            </form>
             {/* FOOTER */}
            <Separator />
            <div className="text-center text-sm text-gray-700 space-y-1">
              <p className="font-semibold">📞 {t.contactTitle}</p>
              <p>🌐 www.gpptnepal.org</p>
              <p>☎️ 18105000380</p>
              <p>📱 18105000380</p>
              <p>
                <strong>{t.organized}:</strong> Guru Parasurama Peedam Trust Nepal (INGO)
              </p>
              <p>
                <strong>{t.powered}:</strong> World Hindu Vision
              </p>
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
    <div className="space-y-2">
      <h3 className="font-semibold text-lg mt-4">{title}</h3>
      <Separator />
      <div className="grid md:grid-cols-2 gap-4">{children}</div>
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
    <div className="space-y-1">
      <Label>{label}</Label>
      <Input
        type={type}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
    <div className="space-y-2">
      <Label>{label}</Label>
      <RadioGroup className="flex flex-wrap gap-6" value={value} onValueChange={onChange}>
        {options.map((opt) => (
          <div key={opt} className="flex items-center gap-2">
            <RadioGroupItem value={opt} />
            <Label>{opt}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
