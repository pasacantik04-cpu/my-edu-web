import Link from "next/link";
import { initialMateriList } from "@/data/materiData";

export default function MateriPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-purple-600 hover:underline font-medium text-sm">
            ← Kembali ke Beranda
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">Modul Materi Pelajaran</h1>
          <p className="text-gray-600 mt-1">Pilih materi pelajaran SMP dan tingkatkan pemahamanmu.</p>
        </div>

        <div className="grid gap-6">
          {initialMateriList.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                  {item.subject}
                </span>
                <span className="text-sm text-gray-500">⏱️ {item.duration}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h2>
              <p className="text-
              
              gray-600 text-sm mb-4">{item.summary}</p>
              <Link
                href={`/materi/${item.id}`}
                className="inline-block bg-purple-600 text-white font-medium px-4 py-2 rounded-xl text-sm hover:bg-purple-700 transition"
              >
                Mulai Belajar →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}