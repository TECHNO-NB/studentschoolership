"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns"; // Optional: npm install date-fns
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
import { Loader2, Eye, FileText, Phone } from "lucide-react";


export default function ApplicationsList() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState<any | null>(null);

  // 1. Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ensure this matches your Express server port (4000 based on your last code)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/applications`);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Failed to fetch applications:", error);
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
            <CardTitle className="text-2xl font-bold">
              Scholarship Applications
            </CardTitle>
            <p className="text-muted-foreground">
              Total Applications: {data.length}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Student Name</TableHead>
                  <TableHead>School</TableHead>
                  <TableHead>District</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((app) => (
                  <TableRow key={app._id}>
                    <TableCell className="font-medium">
                      {app.createdAt ? format(new Date(app.createdAt), "yyyy-MM-dd") : "N/A"}
                    </TableCell>
                    <TableCell>{app.name}</TableCell>
                    <TableCell>{app.school}</TableCell>
                    <TableCell>{app.district}</TableCell>
                    <TableCell>
                      <div className="flex flex-col text-xs">
                        <span>{app.contact}</span>
                        <span className="text-muted-foreground">{app.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={app.scholarshipType === "Need-based" ? "destructive" : "default"}>
                        {app.scholarshipType}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {/* VIEW DETAILS SHEET */}
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => setSelectedApp(app)}
                          >
                            <Eye className="mr-2 h-4 w-4" /> View
                          </Button>
                        </SheetTrigger>
                        <SheetContent className="w-100 sm:w-[6xl] px-4 overflow-y-auto">
                           {selectedApp && <ApplicationDetails app={selectedApp} />}
                        </SheetContent>
                      </Sheet>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// --- SUB-COMPONENT: DETAIL VIEW ---

function ApplicationDetails({ app }: { app: any }) {
  return (
    <ScrollArea className="h-full pr-4">
      <SheetHeader className="mb-6">
        <SheetTitle className="text-2xl flex items-center gap-2">
          <FileText className="h-6 w-6" /> {app.name}
        </SheetTitle>
        <SheetDescription>
          Submitted on {app.createdAt ? format(new Date(app.createdAt), "PPP") : "N/A"}
        </SheetDescription>
      </SheetHeader>

      <div className="space-y-6">
        {/* Personal Info */}
        <Section title="Student Information">
          <DetailRow label="Gender" value={app.gender} />
          <DetailRow label="Date of Birth" value={app.dob} />
          <DetailRow label="Age" value={`${app.age} Years`} />
          <DetailRow label="School" value={app.school} />
          <DetailRow label="School Address" value={app.schoolAddress} />
        </Section>

        {/* Address */}
        <Section title="Address">
          <DetailRow label="Province" value={app.province} />
          <DetailRow label="District" value={app.district} />
          <DetailRow label="Municipality" value={app.municipality} />
          <DetailRow label="Ward No" value={app.ward} />
          <DetailRow label="Full Address" value={app.fullAddress} />
        </Section>

        {/* Parent Info */}
        <Section title="Parent / Guardian">
          <DetailRow label="Father" value={app.father} />
          <DetailRow label="Mother" value={app.mother} />
          <DetailRow label="Occupation" value={app.occupation} />
          <DetailRow label="Family Income" value={app.income} />
          <DetailRow label="Contact" value={app.contact} />
          <DetailRow label="WhatsApp" value={app.whatsapp} />
        </Section>

        {/* Scholarship Info */}
        <Section title="Scholarship Details">
          <DetailRow label="Type" value={app.scholarshipType} />
          <DetailRow label="Previous Recipient" value={app.previous} />
        </Section>

        {/* Signatures */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-primary">Signatures</h3>
          <Separator />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="border p-2 rounded-lg text-center">
              <p className="text-xs text-muted-foreground mb-2">Student</p>
              {app.studentSign ? (
                <img src={app.studentSign} alt="Student Sign" className="h-16 mx-auto object-contain" />
              ) : <span className="text-red-500 text-xs">Missing</span>}
              <p className="text-xs mt-1">{app.studentDate}</p>
            </div>
            <div className="border p-2 rounded-lg text-center">
              <p className="text-xs text-muted-foreground mb-2">Parent</p>
              {app.parentSign ? (
                <img src={app.parentSign} alt="Parent Sign" className="h-16 mx-auto object-contain" />
              ) : <span className="text-red-500 text-xs">Missing</span>}
              <p className="text-xs mt-1">{app.parentDate}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Print Button */}
      <div className="mt-8 mb-4">
        <Button className="w-full" onClick={() => window.print()}>
            Print Application
        </Button>
      </div>
    </ScrollArea>
  );
}

// Helper Components for Cleaner Code
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-lg text-primary">{title}</h3>
      <Separator />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm">
        {children}
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string | number | undefined }) {
  return (
    <div className="flex flex-col">
      <span className="text-muted-foreground text-xs uppercase tracking-wide">{label}</span>
      <span className="font-medium">{value || "-"}</span>
    </div>
  );
}