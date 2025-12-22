"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo1 from "@/../public/logo1.jpeg";
import logo2 from "@/../public/logo2.jpeg";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    cn(
      "text-sm font-medium transition-colors",
      pathname === path
        ? "text-yellow-400"
        : "text-white hover:text-yellow-300"
    );

  return (
    <header className="sticky top-0 z-50 bg-blue-950 border-b border-blue-900">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LEFT LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo1}
            alt="GPPT Nepal Logo"
            width={42}
            height={42}
            className="rounded-md object-contain"
            priority
          />
        </Link>

        {/* CENTER TITLE */}
        <div className="hidden md:flex flex-col items-center text-center">
          <span className="text-lg font-bold text-yellow-400 leading-none">
            GPPT Nepal
          </span>
          <span className="text-xs text-blue-200">
            Scholarship Examination 2026
          </span>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          
          <nav className="hidden sm:flex items-center gap-5">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
          </nav>

          <Link href="/register">
            <Button
              size="sm"
              className="bg-yellow-500 text-black hover:bg-yellow-400 shadow-sm"
            >
              Register
            </Button>
          </Link>

          {/* RIGHT LOGO */}
          <Image
            src={logo2}
            alt="Partner Logo"
            width={42}
            height={42}
            className="rounded-md object-contain hidden sm:block"
          />
        </div>
      </div>
    </header>
  );
}
