"use client";

import { useState } from "react";
import Link from "next/link";

// Data Soal Kuis Interaktif
const dataKuis = [
  {
    id: 1,
    pertanyaan: "Fungsi utama dari sebuah Poster adalah...",
    pilihan: [
      "Menyampaikan informasi visual di tempat umum dengan gambar dan teks menarik",
      "Menyampaikan kabar berita harian kepada masyarakat",
      "Menjelaskan rumus matematika secara mendetail",
      "Menceritakan kisah dongeng sebelum tidur"
    ],
    jawabanBenar: 0,
    pembahasan: "Poster dirancang menarik secara visual dengan memadukan gambar dan teks untuk menyampaikan informasi di tempat umum."
  },
  {
    id: 2,
    pertanyaan: "Slogan biasanya ditandai dengan kata-kata yang...",
    pilihan: [
      "Panjang dan rumit",
      "Singkat, padat, menarik, dan mudah diingat",
      "Sangat formal dan puitis",
      "Menggunakan bahasa asing yang sulit"
    ],
    jawabanBenar: 1,
    pembahasan: "Ciri utama slogan adalah ringkas, padat, menarik, serta memiliki tujuan untuk menyampaikan prinsip atau motivasi."
  },
  {
    id: 3,
    pertanyaan: "Unsur utama yang wajib ada dalam sebuah Iklan Komersial adalah...",
    pilihan: [
      "Kritik sosial",
      "Informasi produk/jasa dan ajakan membeli",
      "Kisah sejarah masa lalu",
      "Puisi dan pantun"
    ],
    jawabanBenar: 1,
    pembahasan: "Iklan komersial bertujuan untuk mempromosikan produk atau jasa agar konsumen tertarik untuk membeli/menggunakannya."
  },
  {
    id: 4,
    pertanyaan: "Manakah di bawah ini yang merupakan contoh kalimat Slogan Pendidikan?",
    pilihan: [
      "Beli 1 Gratis 1 Hanya Hari Ini!",
      "Tiada Hari Tanpa Prestasi!",
      "Buanglah Sampah Pada Tempatnya!",
      "Diskon Besar 50% untuk Sepatu!"
    ],
    jawabanBenar: 1,
    pembahasan: "'Tiada Hari Tanpa Prestasi' adalah kalimat slogan yang membakar semangat belajar siswa."
  }
];

export default function KuisInteraktifPage() {
  const [namaSiswa, setNamaSiswa] = useState("");
  const [kelasSiswa, setKelasSiswa] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  const [indeksSoal, setIndeksSoal] = useState(0);
  const [jawabanDipilih, setJawabanDipilih] = useState<number | null>(null);
  const [skor, setSkor] = useState(0);
  const [sudahJawab, setSudahJawab] = useState(false);
  const [kuisSelesai, setKuisSelesai] = useState(false);

  const soalSaatIni = dataKuis[indeksSoal];

  const mainkanSuara = (isTrue: boolean) => {
    try {
      const audioPath = isTrue ? "/sounds/correct.mpeg" : "/sounds/incorrect.mpeg";
      const audio = new Audio(audioPath);
      audio.volume = 0.5;
      audio.play().catch((err) => {
        console.log("Audio diblokir browser sebelum interaksi:", err);
      });
    } catch (e) {
      console.error("Gagal memutar audio:", e);
    }
  };

  const handleStartKuis = (e: React.FormEvent) => {
    e.preventDefault();
    if (namaSiswa.trim() === "") {
      alert("Silakan masukkan nama kamu terlebih dahulu!");
      return;
    }
    setIsStarted(true);
  };

  const handlePilihJawaban = (indexPilihan: number) => {
    if (sudahJawab) return;

    setJawabanDipilih(indexPilihan);
    setSudahJawab(true);

    const apakahBenar = indexPilihan === soalSaatIni.jawabanBenar;
    mainkanSuara(apakahBenar);

    if (apakahBenar) {
      setSkor((prev) => prev + 25);
    }
  };

  const handleNextSoal = () => {
    if (indeksSoal + 1 < dataKuis.length) {
      setIndeksSoal((prev) => prev + 1);
      setJawabanDipilih(null);
      setSudahJawab(false);
    } else {
      setKuisSelesai(true);
    }
  };

  const handleResetKuis = () => {
    setIndeksSoal(0);
    setJawabanDipilih(null);
    setSkor(0);
    setSudahJawab(false);
    setKuisSelesai(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        
        <div className="mb-6">
          <Link href="/" className="text-purple-600 hover:underline font-medium text-sm">
            ← Kembali ke Beranda
          </Link>
        </div>

        {!isStarted ? (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 space-y-6">
            <div className="text-center space-y-2">
              <div className="text-5xl">🎮</div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Kuis Interaktif Bahasa Indonesia
              </h1>
              <p className="text-sm text-gray-600">
                Uji pemahamanmu tentang Iklan, Slogan, dan Poster secara seru!
              </p>
            </div>

            <form onSubmit={handleStartKuis} className="space-y-4 max-w-md mx-auto pt-2">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Nama Lengkap Siswa <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama lengkapmu..."
                  value={namaSiswa}
                  onChange={(e) => setNamaSiswa(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Kelas (Opsional)
                </label>
                <input
                  type="text"
                  placeholder="Contoh: VIII-A"
                  value={kelasSiswa}
                  onChange={(e) => setKelasSiswa(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl text-sm transition shadow-sm"
              >
                Mulai Kuis 🚀
              </button>
            </form>
          </div>
        ) : kuisSelesai ? (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 text-center space-y-6">
            <div className="text-6xl">🏆</div>
            <div className="space-y-1">
              <h1 className="text-3xl font-bold text-gray-900">Kuis Selesai!</h1>
              <p className="text-gray-600 text-sm">
                Selamat <span className="font-bold text-purple-700">{namaSiswa}</span> {kelasSiswa ? `(${kelasSiswa})` : ""}!
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 max-w-xs mx-auto">
              <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider">Skor Akhir Kamu</span>
              <div className="text-5xl font-extrabold text-purple-900 mt-2">{skor} / 100</div>
            </div>

            <p className="text-sm text-gray-500">
              {skor >= 75
                ? `Hebat sekali ${namaSiswa}! Kamu sudah sangat memahami materi ini. 🎉`
                : `Bagus ${namaSiswa}! Terus tingkatkan dan pelajari kembali materinya ya. 💪`}
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={handleResetKuis}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2.5 rounded-xl text-sm transition shadow-sm"
              >
                🔄 Coba Lagi
              </button>
              <Link
                href="/materi/iklan-slogan-poster"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-6 py-2.5 rounded-xl text-sm transition"
              >
                📖 Baca Materi
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-gray-500">
                <span>
                  Siswa: <span className="text-purple-700">{namaSiswa}</span> | SOAL {indeksSoal + 1} DARI {dataKuis.length}
                </span>
                <span className="text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full">
                  Skor: {skor}
                </span>
              </div>
              
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-purple-600 h-full transition-all duration-300"
                  style={{ width: `${((indeksSoal + 1) / dataKuis.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              {soalSaatIni.pertanyaan}
            </h2>

            <div className="space-y-3">
              {soalSaatIni.pilihan.map((opsi, index) => {
                let statusClass = "bg-gray-50 border-gray-200 hover:border-purple-300 text-gray-700";

                if (sudahJawab) {
                  if (index === soalSaatIni.jawabanBenar) {
                    statusClass = "bg-green-50 border-green-500 text-green-900 font-semibold";
                  } else if (index === jawabanDipilih) {
                    statusClass = "bg-red-50 border-red-500 text-red-900 font-semibold";
                  } else {
                    statusClass = "bg-gray-50 border-gray-100 text-gray-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handlePilihJawaban(index)}
                    disabled={sudahJawab}
                    className={`w-full text-left p-4 rounded-xl border text-sm transition-all duration-200 ${statusClass}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white border border-gray-200 text-xs font-bold shrink-0">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{opsi}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {sudahJawab && (
              <div
                className={`p-4 rounded-xl text-xs space-y-1 ${
                  jawabanDipilih === soalSaatIni.jawabanBenar
                    ? "bg-green-50 border border-green-200 text-green-900"
                    : "bg-red-50 border border-red-200 text-red-900"
                }`}
              >
                <div className="font-bold">
                  {jawabanDipilih === soalSaatIni.jawabanBenar ? "✅ Jawaban Kamu Benar!" : "❌ Jawaban Kamu Kurang Tepat"}
                </div>
                <p>{soalSaatIni.pembahasan}</p>
              </div>
            )}

            {sudahJawab && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNextSoal}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2.5 rounded-xl text-sm transition shadow-sm"
                >
                  {indeksSoal + 1 === dataKuis.length ? "Lihat Hasil Akhir 🏆" : "Soal Berikutnya ➔"}
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    </main>
  );
}