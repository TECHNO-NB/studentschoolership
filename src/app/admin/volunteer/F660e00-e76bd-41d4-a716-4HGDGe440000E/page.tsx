"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns"; 
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Loader2, Eye, User, Briefcase, MapPin } from "lucide-react";

export default function VolunteerList() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVolunteer, setSelectedVolunteer] = useState<any | null>(null);

  // 1. Fetch Volunteer Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/volunteers`);
        const json = await res.json();
        // Handle response structure (api might return { success: true, data: [] })
        setData(json.data || json); 
      } catch (error) {
        console.error("Failed to fetch volunteers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <User className="h-6 w-6 text-blue-600" />
              Volunteer Registrations
            </CardTitle>
            <p className="text-muted-foreground">
              Total Volunteers: {data.length}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Education</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((vol) => (
                  <TableRow key={vol._id}>
                    <TableCell className="font-medium text-xs text-muted-foreground">
                      {vol.createdAt ? format(new Date(vol.createdAt), "yyyy-MM-dd") : "N/A"}
                    </TableCell>
                    <TableCell className="font-semibold">{vol.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {vol.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                       <div className="flex items-center gap-1 text-sm">
                         <MapPin className="w-3 h-3 text-muted-foreground"/> {vol.district}
                       </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col text-xs">
                        <span>{vol.contact}</span>
                        <span className="text-muted-foreground">{vol.email}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{vol.qualification}</TableCell>
                    <TableCell className="text-right">
                      {/* VIEW DETAILS SHEET */}
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => setSelectedVolunteer(vol)}
                          >
                            <Eye className="mr-2 h-4 w-4" /> View
                          </Button>
                        </SheetTrigger>
                        <SheetContent className="w-100 sm:w-[600px] px-4 overflow-y-auto">
                           {selectedVolunteer && <VolunteerDetails vol={selectedVolunteer} />}
                        </SheetContent>
                      </Sheet>
                    </TableCell>
                  </TableRow>
                ))}
                {data.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center">
                      No volunteers found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// --- SUB-COMPONENT: DETAIL VIEW ---

function VolunteerDetails({ vol }: { vol: any }) {
  return (
    <ScrollArea className="h-full pr-4">
      <SheetHeader className="mb-6 border-b pb-4">
        <SheetTitle className="text-2xl flex items-center gap-2">
          <User className="h-6 w-6 text-blue-600" /> {vol.name}
        </SheetTitle>
        <SheetDescription>
          Registered on {vol.createdAt ? format(new Date(vol.createdAt), "PPP p") : "N/A"}
        </SheetDescription>
      </SheetHeader>

      <div className="space-y-6 pb-10">
        
        {/* 1. Personal Info */}
        <Section title="Personal Information">
          <DetailRow label="Gender" value={vol.gender} />
          <DetailRow label="Date of Birth" value={vol.dob} />
          <DetailRow label="Age" value={`${vol.age} Years`} />
          <DetailRow label="Email" value={vol.email} />
          <DetailRow label="Mobile" value={vol.contact} />
          <DetailRow label="WhatsApp" value={vol.whatsapp || "-"} />
        </Section>

        {/* 2. Address */}
        <Section title="Address Details">
          <DetailRow label="Province" value={vol.province} />
          <DetailRow label="District" value={vol.district} />
          <DetailRow label="Municipality" value={vol.municipality} />
          <DetailRow label="Ward No" value={vol.ward} />
          <DetailRow label="Full Address / Tole" value={vol.fullAddress} />
        </Section>

        {/* 3. Professional Info */}
        <Section title="Education & Profession">
          <DetailRow label="Qualification" value={vol.qualification} />
          <DetailRow label="Current Profession" value={vol.profession} />
        </Section>

        {/* 4. Volunteering Info */}
        <Section title="Volunteering Preferences">
          <div className="col-span-1 sm:col-span-2 bg-blue-50 p-3 rounded-md border border-blue-100">
             <DetailRow label="Preferred Role" value={vol.role} />
          </div>
          <DetailRow label="Availability" value={vol.availability} />
          <DetailRow label="Prior Experience" value={vol.experience} />
        </Section>

        {/* 5. Signature */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-primary flex items-center gap-2">
            Signature
          </h3>
          <Separator />
          <div className="mt-4 border-2 border-dashed border-gray-200 p-4 rounded-lg bg-gray-50 flex flex-col items-center justify-center">
            {vol.applicantSign ? (
              <img 
                src={vol.applicantSign} 
                alt="Applicant Signature" 
                className="h-24 object-contain" 
              />
            ) : (
              <span className="text-red-500 text-sm">Signature Missing</span>
            )}
            <p className="text-xs text-muted-foreground mt-2">
              Signed Date: {vol.date}
            </p>
          </div>
        </div>

      </div>
      
      {/* Print Button */}
      <div className="mt-4 mb-8">
        <Button className="w-full" variant="secondary" onClick={() => window.print()}>
            Print Volunteer Profile
        </Button>
      </div>
    </ScrollArea>
  );
}

// --- HELPER COMPONENTS ---

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-lg text-primary flex items-center gap-2">
         {title}
      </h3>
      <Separator />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm">
        {children}
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string | number | undefined }) {
  return (
    <div className="flex flex-col">
      <span className="text-muted-foreground text-xs uppercase tracking-wide font-medium mb-1">
        {label}
      </span>
      <span className="font-medium text-gray-900 break-words">
        {value || "-"}
      </span>
    </div>
  );
}