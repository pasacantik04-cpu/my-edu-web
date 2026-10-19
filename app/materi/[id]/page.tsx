import Link from "next/link";
import { initialMateriList } from "@/data/materiData";
import { notFound } from "next/navigation";

export default async function DetailMateriPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const materi = initialMateriList.find((m) => m.id === id);

  if (!materi) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <Link href="/materi" className="text-purple-600 hover:underline font-medium text-sm">
          ← Kembali ke Daftar Materi
        </Link>
        
        <div className="mt-4 flex items-center space-x-3">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
            {materi.subject}
          </span>
          <span className="text-sm text-gray-500">⏱️ {materi.duration}</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-6">{materi.title}</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed border-t pt-6">
          {materi.content.map((sec, idx) => (
            <div key={idx} className="space-y-2">
              <h2 className="text-lg font-bold text-purple-900 bg-purple-50 p-3 rounded-xl">
                {sec.sectionTitle}
              </h2>
              <ul className="space-y-2 pl-2">
                {sec.body.map((paragraph, pIdx) => (
                  <li key={pIdx} className="text-sm sm:text-base text-gray-600">
                    {paragraph}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t flex justify-between items-center">
  <Link href="/materi" className="text-gray-600 hover:text-purple-600 text-sm font-medium">
    ← Modul Lainnya
  </Link>
  
  <Link href="/ujian-tertulis" className="bg-purple-600 text-white font-medium px-6 py-2.5 rounded-xl text-sm hover:bg-purple-700 transition">
    Kerjakan Soal Ujian Tertulis ✍️
  </Link>
</div>

      </div>
    </main>
  );
}