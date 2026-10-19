import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduBelajar - Platform Seru Anak SMP",
  description: "Platform media pembelajaran interaktif untuk siswa SMP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased text-gray-900 bg-gray-50 flex flex-col min-h-screen">
        {/* Navigasi Utama dengan Tombol CMS Guru */}
        <Navbar />

        {/* Halaman Utama */}
        <div className="flex-1">{children}</div>

        {/* Footer Aplikasi */}
        <Footer />
      </body>
    </html>
  );
}