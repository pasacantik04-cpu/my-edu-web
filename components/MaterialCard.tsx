// components/MaterialCard.tsx
'use client';

import Link from 'next/link';

interface MaterialCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
}

export default function MaterialCard({ id, title, description, category, duration }: MaterialCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-6 flex flex-col justify-between group">
      <div>
        {/* Kategori & Durasi Belajar */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600">
            {category}
          </span>
          <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
            ⏱️ {duration}
          </span>
        </div>

        {/* Judul Materi */}
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors mb-2">
          {title}
        </h3>

        {/* Deskripsi Singkat */}
        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Tombol Aksi */}
      <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
        <span className="text-xs font-medium text-gray-400">Modul Belajar SMP</span>
        <Link
          href={`/materi/${id}`}
          className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
        >
          Mulai Belajar &rarr;
        </Link>
      </div>
    </div>
  );
}