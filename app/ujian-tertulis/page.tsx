"use client";

import { useState } from "react";
import { bankSoalUjian } from "@/data/soalData";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function UjianTertulisPage() {
  // State identitas siswa
  const [namaSiswa, setNamaSiswa] = useState("");
  const [kelasSiswa, setKelasSiswa] = useState("");

  // State jawaban siswa
  const [jawabanIsian, setJawabanIsian] = useState<{ [key: number]: string }>({});
  const [jawabanEssay, setJawabanEssay] = useState<{ [key: number]: string }>({});
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleIsianChange = (id: number, value: string) => {
    setJawabanIsian((prev) => ({ ...prev, [id]: value }));
  };

  const handleEssayChange = (id: number, value: string) => {
    setJawabanEssay((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Menyiapkan payload untuk dimasukkan ke Supabase
      const payloadUjian = {
        nama_siswa: namaSiswa || "Siswa Tanpa Nama",
        kelas: kelasSiswa || "7A",
        tanggal_submit: new Date().toISOString(),
        status: "Belum Dinilai",
        nilai_akhir: null,
        jawaban_isian: jawabanIsian,
        jawaban_essay: jawabanEssay,
      };

      // Simpan ke tabel jawaban_siswa di Supabase
      const { error } = await supabase
        .from("jawaban_siswa")
        .insert([payloadUjian]);

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      console.error("Gagal mengirim jawaban ke Supabase:", err.message);
      alert("Terjadi kesalahan saat mengirim jawaban: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
        
        {/* Navigasi & Header */}
        <div className="mb-6 border-b pb-4">
          <Link href="/materi/iklan-slogan-poster" className="text-purple-600 hover:underline font-medium text-sm">
            ← Kembali ke Materi
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
            Ujian Tertulis: Iklan, Slogan, dan Poster
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Kerjakan soal Isian Singkat dan Uraian (Essay) di bawah ini dengan teliti.
          </p>
        </div>

        {/* Notifikasi Berhasil Submit */}
        {isSubmitted && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl">
            <h3 className="font-bold text-base">🎉 Jawaban Berhasil Dikirim!</h3>
            <p className="text-sm mt-1">
              Jawaban Anda telah tersimpan di sistem guru. Guru akan memeriksa dan memberikan nilai secara manual.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* BAGIAN I: IDENTITAS SISWA */}
          <section className="space-y-4 bg-purple-50 p-4 rounded-xl border border-purple-100">
            <h2 className="text-lg font-bold text-purple-900">Bagian I — Identitas Siswa</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama lengkap"
                  value={namaSiswa}
                  onChange={(e) => setNamaSiswa(e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Kelas</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: 7A"
                  value={kelasSiswa}
                  onChange={(e) => setKelasSiswa(e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </section>

          {/* BAGIAN II: ISIAN SINGKAT */}
          <section className="space-y-6">
            <div className="bg-purple-50 p-3 rounded-xl">
              <h2 className="text-lg font-bold text-purple-900">Bagian II — Isian Singkat (5 Soal)</h2>
              <p className="text-xs text-purple-700">Isilah titik-titik di bawah ini dengan jawaban yang singkat dan tepat.</p>
            </div>

            {bankSoalUjian.isianSingkat.map((item, index) => (
              <div key={item.id} className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3">
                <label className="block text-sm sm:text-base font-medium text-gray-800">
                  {index + 1}. {item.question}
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ketik jawaban singkat di sini..."
                  value={jawabanIsian[item.id] || ""}
                  onChange={(e) => handleIsianChange(item.id, e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            ))}
          </section>

          {/* BAGIAN III: URAIAN / ESSAY */}
          <section className="space-y-6">
            <div className="bg-purple-50 p-3 rounded-xl">
              <h2 className="text-lg font-bold text-purple-900">Bagian III — Uraian / Essay (5 Soal)</h2>
              <p className="text-xs text-purple-700">Jawablah pertanyaan uraian berikut dengan penjelasan yang lengkap dan jelas.</p>
            </div>

            {bankSoalUjian.essay.map((item, index) => (
              <div key={item.id} className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3">
                <label className="block text-sm sm:text-base font-medium text-gray-800">
                  {index + 1}. {item.question}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Ketik jawaban uraian Anda secara lengkap di sini..."
                  value={jawabanEssay[item.id] || ""}
                  onChange={(e) => handleEssayChange(item.id, e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            ))}
          </section>

          {/* Tombol Aksi */}
          <div className="pt-4 border-t flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-xl text-sm transition shadow-sm disabled:opacity-50"
            >
              {isSubmitting ? "Mengirim Jawaban..." : "Kirim Jawaban Ujian 🚀"}
            </button>
          </div>

        </form>
      </div>
    </main>
  );
}