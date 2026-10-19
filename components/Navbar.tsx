"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Materi Pelajaran", href: "/materi" },
    { name: "Kuis Interaktif", href: "/kuis/quizizz" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-purple-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-purple-200">
              E
            </div>
            <div>
              <span className="font-extrabold text-gray-900 text-lg leading-none block">
                EduBelajar
              </span>
              <span className="text-[10px] text-purple-600 font-semibold tracking-wide block">
                Platform Seru Anak SMP
              </span>
            </div>
          </Link>

          {/* Navigasi Utama */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition ${
                    isActive
                      ? "text-purple-600 font-semibold"
                      : "text-gray-600 hover:text-purple-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Tombol Akses CMS Guru */}
          <div className="flex items-center gap-3">
            <Link
              href="/admin/penilaian"
              className="bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold text-xs px-4 py-2 rounded-xl border border-purple-200 transition flex items-center gap-1.5"
            >
              <span>👩‍🏫</span> Kanal Guru (CMS)
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}