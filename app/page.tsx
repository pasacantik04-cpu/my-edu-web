import Link from "next/link";
import { initialMateriList } from "@/data/materiData";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-block bg-purple-500/30 text-purple-100 text-xs font-semibold px-3 py-1 rounded-full border border-purple-300/30">
            🚀 PLATFORM BELAJAR SERU ABAD INI
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Belajar Jadi Lebih Asyik & Menantang!
          </h1>
          <p className="text-purple-100 text-sm sm:text-base max-w-2xl mx-auto">
            Temukan materi pelajaran SMP pilihan, asah kemampuanmu lewat kuis interaktif ber-efek suara ala game, dan raih prestasi gemilang!
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/kuis/quizizz"
              className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-6 py-3 rounded-xl text-sm transition shadow-md flex items-center gap-2"
            >
              🎮 Mulai Kuis Interaktif
            </Link>
            <Link
              href="/materi"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-6 py-3 rounded-xl text-sm transition"
            >
              📚 Lihat Semua Materi
            </Link>
          </div>
        </div>
      </section>

      {/* Modul Belajar Terbaru Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Modul Belajar Terbaru</h2>
            <p className="text-gray-600 text-sm mt-1">Pilih materi yang ingin kamu pelajari hari ini</p>
          </div>
          <Link href="/materi" className="text-purple-600 hover:underline text-sm font-semibold">
            Lihat Semua →
          </Link>
        </div>

        {/* Grid Kartu Materi (Sinkron dari data/materiData.ts) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialMateriList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                    {item.subject}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    ⏱️ {item.duration}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs line-clamp-3">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 border-t flex justify-between items-center">
                <span className="text-xs text-gray-400 font-medium">Modul Belajar SMP</span>
                <Link
                  href={`/materi/${item.id}`}
                  className="text-purple-600 hover:text-purple-700 text-sm font-semibold flex items-center gap-1"
                >
                  Mulai Belajar →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}