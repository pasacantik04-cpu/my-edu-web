"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface JawabanSiswa {
  id: number;
  created_at: string;
  nama_siswa: string;
  kelas: string;
  tanggal_submit: string;
  status: string;
  nilai_akhir: number | null;
  jawaban_isian: { [key: string]: string };
  jawaban_essay: { [key: string]: string };
}

export default function AdminPenilaianPage() {
  // Password rahasia guru (bisa diganti sesuai keinginan)
  const ADMIN_PASSWORD = "guru123password"; 

  // State untuk proteksi login
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

  // State data dasbor
  const [daftarJawaban, setDaftarJawaban] = useState<JawabanSiswa[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSiswa, setSelectedSiswa] = useState<JawabanSiswa | null>(null);
  const [inputNilai, setInputNilai] = useState<number | "">("");
  const [isSaving, setIsSaving] = useState(false);

  // Cek status login saat pertama kali dibuka
  useEffect(() => {
    const savedAuth = localStorage.getItem("admin_authenticated");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Ambil data dari Supabase
  const fetchJawaban = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("jawaban_siswa")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Gagal mengambil data:", error.message);
    } else if (data) {
      setDaftarJawaban(data as JawabanSiswa[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchJawaban();
    }
  }, [isAuthenticated]);

  // Handle submit password guru
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setErrorPassword(false);
      localStorage.setItem("admin_authenticated", "true");
    } else {
      setErrorPassword(true);
    }
  };

  // Handle logout guru
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("admin_authenticated");
    setInputPassword("");
  };

  // Buka modal detail untuk memeriksa & menilai
  const handleOpenDetail = (siswa: JawabanSiswa) => {
    setSelectedSiswa(siswa);
    setInputNilai(siswa.nilai_akhir !== null ? siswa.nilai_akhir : "");
  };

  // Simpan nilai ke Supabase
  const handleSaveNilai = async () => {
    if (!selectedSiswa) return;
    if (inputNilai === "" || isNaN(Number(inputNilai))) {
      alert("Masukkan nilai angka yang valid!");
      return;
    }

    setIsSaving(true);
    try {
      const { error } = await supabase
        .from("jawaban_siswa")
        .update({
          nilai_akhir: Number(inputNilai),
          status: "Sudah Dinilai",
        })
        .eq("id", selectedSiswa.id);

      if (error) throw error;

      alert("Nilai berhasil disimpan!");
      setSelectedSiswa(null);
      fetchJawaban(); // Refresh data
    } catch (err: any) {
      console.error("Gagal menyimpan nilai:", err.message);
      alert("Gagal menyimpan nilai: " + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  // TAMPILAN JIKA BELUM LOGIN (PROTEKSI PASSWORD)
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md w-full space-y-6">
          <div className="text-center space-y-2">
            <div className="text-4xl">🔒</div>
            <h1 className="text-2xl font-bold text-gray-900">Akses Kanal Guru</h1>
            <p className="text-xs text-gray-500">
              Silakan masukkan Kata Sandi Khusus Pengajar untuk membuka Dasbor Penilaian.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Kata Sandi Guru
              </label>
              <input
                type="password"
                required
                placeholder="Masukkan kata sandi..."
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                className={`w-full px-4 py-2.5 bg-gray-50 border ${
                  errorPassword ? "border-red-500" : "border-gray-200"
                } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              {errorPassword && (
                <p className="text-xs text-red-500 mt-1">
                  Kata sandi salah! Silakan coba lagi.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 rounded-xl text-sm transition shadow-sm"
            >
              Masuk Dasbor Guru
            </button>
          </form>
        </div>
      </main>
    );
  }

  // TAMPILAN SETELAH SUCCESS LOGIN
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Dasbor */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              📊 Dasbor Penilaian Guru (CMS)
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Periksa dan berikan nilai jawaban ujian siswa secara langsung.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={fetchJawaban}
              className="px-4 py-2 bg-purple-100 text-purple-700 font-medium text-sm rounded-xl hover:bg-purple-200 transition"
            >
              🔄 Refresh Data
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-50 text-red-600 font-medium text-sm rounded-xl hover:bg-red-100 transition"
            >
              🚪 Keluar
            </button>
          </div>
        </div>

        {/* Tabel Daftar Jawaban Siswa */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="p-10 text-center text-gray-500">
              Memuat data jawaban siswa dari database...
            </div>
          ) : daftarJawaban.length === 0 ? (
            <div className="p-10 text-center text-gray-500">
              Belum ada data jawaban siswa yang masuk.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4">Nama Siswa</th>
                    <th className="px-6 py-4">Kelas</th>
                    <th className="px-6 py-4">Waktu Submit</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Nilai Akhir</th>
                    <th className="px-6 py-4 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {daftarJawaban.map((siswa) => (
                    <tr key={siswa.id} className="hover:bg-purple-50/50 transition">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {siswa.nama_siswa}
                      </td>
                      <td className="px-6 py-4">{siswa.kelas}</td>
                      <td className="px-6 py-4">
                        {new Date(siswa.tanggal_submit).toLocaleString("id-ID")}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            siswa.status === "Sudah Dinilai"
                              ? "bg-green-100 text-green-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {siswa.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold text-gray-900">
                        {siswa.nilai_akhir !== null ? siswa.nilai_akhir : "-"}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => handleOpenDetail(siswa)}
                          className="px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-medium hover:bg-purple-700 transition"
                        >
                          Periksa & Nilai
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

      {/* MODAL DETAIL JAWABAN & INPUT NILAI */}
      {selectedSiswa && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-xl">
            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Lembar Jawaban: {selectedSiswa.nama_siswa}
                </h2>
                <p className="text-xs text-gray-500">
                  Kelas: {selectedSiswa.kelas} | Waktu: {new Date(selectedSiswa.tanggal_submit).toLocaleString("id-ID")}
                </p>
              </div>
              <button
                onClick={() => setSelectedSiswa(null)}
                className="text-gray-400 hover:text-gray-600 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            {/* Jawaban Isian Singkat */}
            <div className="space-y-3">
              <h3 className="font-bold text-purple-900 bg-purple-50 p-2 rounded-lg text-sm">
                Bagian II — Isian Singkat
              </h3>
              {Object.entries(selectedSiswa.jawaban_isian || {}).map(([key, val]) => (
                <div key={key} className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm">
                  <p className="text-xs text-gray-500 font-semibold mb-1">Soal #{key}:</p>
                  <p className="text-gray-800 font-medium">{val || "(Kosong)"}</p>
                </div>
              ))}
            </div>

            {/* Jawaban Essay */}
            <div className="space-y-3">
              <h3 className="font-bold text-purple-900 bg-purple-50 p-2 rounded-lg text-sm">
                Bagian III — Uraian / Essay
              </h3>
              {Object.entries(selectedSiswa.jawaban_essay || {}).map(([key, val]) => (
                <div key={key} className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm">
                  <p className="text-xs text-gray-500 font-semibold mb-1">Soal #{key}:</p>
                  <p className="text-gray-800 font-medium whitespace-pre-wrap">{val || "(Kosong)"}</p>
                </div>
              ))}
            </div>

            {/* Form Penilaian */}
            <div className="border-t pt-4 space-y-3 bg-purple-50/50 p-4 rounded-xl border border-purple-100">
              <label className="block text-sm font-bold text-gray-800">
                Input Nilai Akhir (0 - 100):
              </label>
              <div className="flex gap-3">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="Masukkan nilai"
                  value={inputNilai}
                  onChange={(e) => setInputNilai(e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                />
                <button
                  onClick={handleSaveNilai}
                  disabled={isSaving}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-xl text-sm transition shadow-sm disabled:opacity-50 whitespace-nowrap"
                >
                  {isSaving ? "Menyimpan..." : "Simpan Nilai 💾"}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}